"""Pull the pages the question bank cites into content/library, so the reading
list works offline and can be ingested into cards like any other source.

The bank cites 1,842 distinct URLs across 7,398 citations. This walks them
most-cited first — the page 40 questions point at is worth more than the one a
single question mentions — and records the outcome of every URL in an index, so
a run is resumable, re-running costs nothing for what already landed, and a host
that blocks bots is a recorded fact rather than a silent gap.

    ./.venv/Scripts/python.exe fetch_reading.py --limit 50      # a bounded pass
    ./.venv/Scripts/python.exe fetch_reading.py --all           # everything left
    ./.venv/Scripts/python.exe fetch_reading.py --retry-failed  # only the errors
    ./.venv/Scripts/python.exe fetch_reading.py --dry-run       # what it would do

Owns: which URLs to fetch, in what order, how politely, and what happened.
Does NOT own: fetching or extraction (capture.read), or turning the saved files
into cards (ingest.py, run afterwards).
"""
from __future__ import annotations

import argparse
import ipaddress
import json
import os
import re
import socket
import subprocess
import sys
import tempfile
import time
from collections import Counter
from pathlib import Path
from urllib.parse import urlparse

import capture as capture_mod
import pipeline as pipeline_mod

BASE = Path(__file__).parent
CONTENT = BASE / "content"
INDEX = CONTENT / "reading_fetch.json"

# Enough that a host is not hit in a tight loop, small enough that a run of 50
# finishes while you watch it. Per host, not global — 50 URLs across 40 hosts
# should not take 100 seconds of sleeping.
HOST_DELAY = 2.0

# Hosts that answer a scraper with a wall, every time. Measured, not assumed:
# leetcode.com returned 403 on all 14 attempts in the first run, and it is the
# most-cited host in the bank by a factor of two — left in, it would spend most
# of every run failing. The link still works in a browser, which for a problem
# page is the whole content anyway.
BLOCKED_HOSTS = {
    "leetcode.com": "403s every scraper; the link IS the content for a problem page",
}


CHROME_CANDIDATES = (
    os.environ.get("CHROME", ""),
    rf"{os.environ.get('ProgramFiles', '')}\Google\Chrome\Application\chrome.exe",
    rf"{os.environ.get('ProgramFiles(x86)', '')}\Google\Chrome\Application\chrome.exe",
    rf"{os.environ.get('LOCALAPPDATA', '')}\Google\Chrome\Application\chrome.exe",
    "/usr/bin/google-chrome-stable",
    "/usr/bin/google-chrome",
    "/usr/bin/chromium",
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
)


def chrome_path() -> str | None:
    """The installed Chrome, or None. Not a dependency — a thing that is either
    already here or not, and the render pass simply does not run without it."""
    for candidate in CHROME_CANDIDATES:
        if candidate and Path(candidate).exists():
            return candidate
    return None


def render(url: str, timeout: float = 45.0) -> str:
    """The page as the browser sees it, after its JavaScript has run.

    143 cited pages extracted empty and a further 246 refused a plain client;
    a large share of both are documentation sites that build their body in the
    browser. `--dump-dom` is Chrome printing the DOM it ended up with, which is
    what a reader would have seen. Its own profile directory, so it never
    contends with a Chrome the user has open.
    """
    exe = chrome_path()
    if not exe:
        raise RuntimeError("no Chrome found; set CHROME=/path/to/chrome")
    with tempfile.TemporaryDirectory(prefix="prepforge-render-") as profile:
        out = subprocess.run(
            [
                exe,
                "--headless=new",
                "--disable-gpu",
                "--hide-scrollbars",
                "--virtual-time-budget=8000",
                f"--user-data-dir={profile}",
                "--dump-dom",
                url,
            ],
            capture_output=True,
            text=True,
            encoding="utf-8",
            errors="replace",
            timeout=timeout,
        )
    return out.stdout or ""


def _read_bank(path: Path) -> list[dict]:
    if not path.exists():
        return []
    data = json.loads(path.read_text(encoding="utf-8"))
    return data.get("questions", data if isinstance(data, list) else [])


def is_public_url(url: str) -> bool:
    """True only for http(s) on a host that resolves outside the machine.

    These URLs come from ingested third-party content, which makes them
    untrusted input: without this, a repo could put http://127.0.0.1:8787/... or
    a link-local address in a README and have this fetch it from inside the
    network. A host that does not resolve is treated as not public — it cannot
    be fetched anyway, and guessing is how a guard becomes a hole.
    """
    try:
        parts = urlparse(url)
    except ValueError:
        return False
    if parts.scheme not in ("http", "https") or not parts.hostname:
        return False
    host = parts.hostname.lower()
    if host in ("localhost",) or host.endswith((".local", ".internal", ".localhost")):
        return False
    try:
        infos = socket.getaddrinfo(host, None)
    except OSError:
        return False
    for info in infos:
        try:
            ip = ipaddress.ip_address(info[4][0])
        except ValueError:
            return False
        if not ip.is_global:
            return False
    return bool(infos)


def collect_urls() -> list[tuple[str, str, int]]:
    """Every cited URL as (url, topic, citations), most cited first.

    Two sources, both already built: a question's own `links`, and the reading
    index that borrows a close neighbour's citation. Ties break on the URL so
    two runs walk the list in the same order.
    """
    counts: Counter[str] = Counter()
    topics: dict[str, str] = {}

    def add(items, topic: str) -> None:
        for link in items or []:
            url = (link.get("url") or "").strip()
            if url.startswith(("http://", "https://")):
                counts[url] += 1
                topics.setdefault(url, topic or "AI")

    for q in _read_bank(CONTENT / "questions.json") + _read_bank(CONTENT / "generated.json"):
        add(q.get("links"), q.get("topic", "AI"))
    for items in pipeline_mod.load_reading().values():
        add(items, "AI")

    return sorted(((u, topics.get(u, "AI"), c) for u, c in counts.items()), key=lambda r: (-r[2], r[0]))


def load_index() -> dict[str, dict]:
    if not INDEX.exists():
        return {}
    return json.loads(INDEX.read_text(encoding="utf-8"))


def save_index(index: dict[str, dict]) -> None:
    CONTENT.mkdir(parents=True, exist_ok=True)
    INDEX.write_text(json.dumps(index, indent=1, sort_keys=True), encoding="utf-8")


def pending(index: dict[str, dict], retry_failed: bool) -> list[tuple[str, str, int]]:
    """What is left to do. An entry that succeeded is never fetched twice, and a
    host known to block scrapers never enters the queue — otherwise a run of 50
    would spend most of itself collecting 403s from the most-cited host."""
    out = []
    for url, topic, count in collect_urls():
        if (urlparse(url).hostname or "") in BLOCKED_HOSTS:
            continue
        seen = index.get(url)
        if seen and (seen.get("status") == "ok" or not retry_failed):
            continue
        out.append((url, topic, count))
    return out


# A browser renders an error page as happily as an article, and it comes back
# with a title and a body like anything else. Without this the first render pass
# "succeeded" on "Error 404", "Access Denied" and "Attention Required! |
# Cloudflare" — pages that would then have been ingested as flashcards.
WALL_TITLE = re.compile(
    r"\b(404|403|not found|access denied|forbidden|attention required|just a moment|"
    r"are you a robot|captcha|verify you are human|page not found|error)\b",
    re.I,
)
# Shorter than this and there is nothing to study even if the page is genuine.
MIN_RENDERED_CHARS = 800


def looks_like_a_wall(title: str, markdown: str) -> bool:
    return bool(WALL_TITLE.search(title or "")) or len(markdown or "") < MIN_RENDERED_CHARS


def failed_urls(index: dict[str, dict]) -> list[tuple[str, str, int]]:
    """What a render pass should try: pages that answered with nothing readable,
    or refused a plain client. Not `not_public` (refused on purpose) and not
    `blocked_host` (a wall a browser does not get through either)."""
    retryable = {"empty", "fetch_failed", "crashed", "failed"}
    by_url = {u: (t, c) for u, t, c in collect_urls()}
    return [
        (url, *by_url.get(url, ("AI", 0)))
        for url, row in index.items()
        if row.get("status") in retryable and url in by_url
    ]


def run_render(limit: int, host_delay: float) -> dict:
    """Second pass: re-fetch the failures through a real browser."""
    index = load_index()
    todo = failed_urls(index)
    if limit > 0:
        todo = todo[:limit]
    print(f"{len(todo)} failures to re-try through Chrome ({chrome_path() or 'NO CHROME FOUND'})")

    last_hit: dict[str, float] = {}
    stats: Counter[str] = Counter()

    for i, (url, topic, count) in enumerate(todo, 1):
        host = urlparse(url).hostname or "?"
        wait = host_delay - (time.monotonic() - last_hit.get(host, 0.0))
        if wait > 0:
            time.sleep(wait)
        last_hit[host] = time.monotonic()
        try:
            html = render(url)
            res = capture_mod.read_html(url, html, topic) if html else {"error": "empty"}
        except Exception as exc:
            res = {"error": "render_failed", "message": str(exc)}

        # The gate runs after the write rather than before it, because the write
        # is where the extraction happens. A wall that got saved is deleted
        # again — the library must not gain a card that says "Access Denied".
        if res.get("ok") and looks_like_a_wall(res.get("title", ""), res.get("markdown", "")):
            saved = res.get("saved", "")
            if saved:
                (BASE / saved).unlink(missing_ok=True)
            res = {"error": "wall", "message": f"rendered page was {res.get('title', '')!r}"}

        if res.get("ok"):
            index[url] = {
                "status": "ok",
                "via": "render",
                "file": res.get("saved", ""),
                "title": res.get("title", ""),
                "citations": count,
            }
            stats["ok"] += 1
            print(f"[{i}/{len(todo)}] ok   {res.get('title', '')[:60]}  <- {host}")
        else:
            # Keep the ORIGINAL status and record that rendering did not help,
            # so a third pass does not treat this as untried.
            index[url] = {**index.get(url, {}), "render": res.get("error", "failed")}
            stats[f"render:{res.get('error')}"] += 1
            print(f"[{i}/{len(todo)}] fail {res.get('error')}  <- {host}")
        save_index(index)

    print("\n" + "  ".join(f"{k}={v}" for k, v in stats.most_common()))
    return {"stats": dict(stats)}


def run(limit: int, sleep: float, host_delay: float, retry_failed: bool, dry_run: bool) -> dict:
    index = load_index()
    todo = pending(index, retry_failed)
    if limit > 0:
        todo = todo[:limit]

    print(f"{len(todo)} to fetch (index holds {len(index)} already)")
    if dry_run:
        for url, _, count in todo[:20]:
            print(f"  {count:4d}x  {url}")
        return {"planned": len(todo)}

    last_hit: dict[str, float] = {}
    stats: Counter[str] = Counter()

    for i, (url, topic, count) in enumerate(todo, 1):
        host = urlparse(url).hostname or "?"
        if host in BLOCKED_HOSTS:
            index[url] = {"status": "blocked_host", "message": BLOCKED_HOSTS[host], "citations": count}
            stats["blocked_host"] += 1
            continue
        if not is_public_url(url):
            index[url] = {"status": "not_public", "citations": count}
            stats["not_public"] += 1
            print(f"[{i}/{len(todo)}] skip (not public) {url}")
            continue

        wait = host_delay - (time.monotonic() - last_hit.get(host, 0.0))
        if wait > 0:
            time.sleep(wait)
        last_hit[host] = time.monotonic()

        try:
            res = capture_mod.read(url, topic)
        except Exception as exc:  # a bad page must not end the run
            res = {"error": "crashed", "message": str(exc)}

        if res.get("ok"):
            index[url] = {
                "status": "ok",
                "file": res.get("saved", ""),
                "title": res.get("title", ""),
                "citations": count,
            }
            stats["ok"] += 1
            print(f"[{i}/{len(todo)}] ok   {res.get('title', '')[:60]}  <- {host}")
        else:
            index[url] = {
                "status": res.get("error", "failed"),
                "message": (res.get("message") or "")[:200],
                "citations": count,
            }
            stats[res.get("error", "failed")] += 1
            print(f"[{i}/{len(todo)}] fail {res.get('error')}  <- {host}")

        # Written every time, not at the end: a run that is interrupted must not
        # lose the pages it already fetched.
        save_index(index)
        if sleep:
            time.sleep(sleep)

    print("\n" + "  ".join(f"{k}={v}" for k, v in stats.most_common()) or "nothing to do")
    remaining = len(pending(index, retry_failed=False))
    print(f"saved this run: {stats['ok']}   still pending: {remaining}")
    return {"stats": dict(stats), "remaining": remaining}


def main() -> None:
    # A Windows console is cp1252, and page titles are not. Printing "τ" killed
    # a full run at URL 137 of 1,445 — the fetches were safe (the index is
    # written after each one) but the run was over. Replace rather than raise:
    # a mangled character in a progress line must never end a job.
    for stream in (sys.stdout, sys.stderr):
        if hasattr(stream, "reconfigure"):
            stream.reconfigure(encoding="utf-8", errors="replace")

    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("--limit", type=int, default=50, help="how many URLs this run (0 = no cap)")
    ap.add_argument("--all", action="store_true", help="no cap — same as --limit 0")
    ap.add_argument("--sleep", type=float, default=0.5, help="pause after every fetch, seconds")
    ap.add_argument("--host-delay", type=float, default=HOST_DELAY, help="min seconds between hits on one host")
    ap.add_argument("--retry-failed", action="store_true", help="also retry URLs that failed before")
    ap.add_argument("--render", action="store_true", help="re-try the failures through headless Chrome")
    ap.add_argument("--dry-run", action="store_true", help="print the plan, fetch nothing")
    args = ap.parse_args()
    limit = 0 if args.all else args.limit
    if args.render:
        run_render(limit, args.host_delay)
    else:
        run(limit, args.sleep, args.host_delay, args.retry_failed, args.dry_run)


if __name__ == "__main__":
    main()
