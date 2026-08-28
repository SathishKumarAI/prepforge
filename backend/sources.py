"""Library collections — what has been cloned into content/library/, and adding more.

Owns: cloning a public git repo of Markdown into the library, and summarising the
library as *collections* (one cloned repo, or the loose files captured from the web)
with their doc and card counts.

Does NOT own: turning Markdown into cards (ingest.py), fetching a single page
(capture.py), or the scraped resource feed (scrapers/).
"""
from __future__ import annotations

import json
import logging
import re
import shutil
import subprocess
from pathlib import Path
from urllib.parse import urlparse

log = logging.getLogger("sources")

BASE = Path(__file__).parent
LIBRARY = BASE / "content" / "library"
GENERATED = BASE / "content" / "generated.json"

# Cloning runs a subprocess against a URL, so the host is allow-listed and the
# destination name is sanitised — never interpolate a URL into a shell.
ALLOWED_HOSTS = {"github.com", "gitlab.com", "codeberg.org", "bitbucket.org"}
_SAFE_NAME = re.compile(r"[^A-Za-z0-9._-]")
CLONE_TIMEOUT = 300  # seconds; a shallow clone of a docs repo is seconds, not minutes


def parse_repo(url: str) -> tuple[str, str] | tuple[None, str]:
    """(directory_name, normalised_url) for a clonable repo, or (None, reason)."""
    url = (url or "").strip()
    if not url:
        return None, "Paste a repository URL."
    if url.startswith("git@"):
        return None, "Use the https:// URL — SSH remotes need your keys."
    if not url.startswith(("http://", "https://")):
        url = "https://" + url
    p = urlparse(url)
    if p.hostname not in ALLOWED_HOSTS:
        return None, f"Only {', '.join(sorted(ALLOWED_HOSTS))} repos can be cloned."
    parts = [seg for seg in p.path.split("/") if seg]
    if len(parts) < 2:
        return None, "That's not a repository URL — expected /owner/repo."
    name = _SAFE_NAME.sub("-", parts[1].removesuffix(".git"))
    if not name or name.startswith("."):
        return None, "Could not derive a folder name from that URL."
    return name, f"https://{p.hostname}/{parts[0]}/{parts[1].removesuffix('.git')}.git"


def clone(url: str) -> dict:
    """Shallow-clone a Markdown repo into the library. Idempotent: an existing
    checkout is left alone and reported, not re-cloned or overwritten."""
    name, target = parse_repo(url)
    if name is None:
        return {"error": "bad_url", "message": target}
    if shutil.which("git") is None:
        return {"error": "no_git", "message": "git is not on PATH — install it to clone repos."}

    LIBRARY.mkdir(parents=True, exist_ok=True)
    dest = LIBRARY / name
    if dest.exists():
        return {"ok": True, "name": name, "existing": True,
                "message": f"“{name}” is already in your library.",
                "docs": _count_docs(dest)}

    try:
        proc = subprocess.run(
            ["git", "clone", "--depth", "1", "--quiet", target, str(dest)],
            capture_output=True, text=True, timeout=CLONE_TIMEOUT,
        )
    except subprocess.TimeoutExpired:
        shutil.rmtree(dest, ignore_errors=True)
        return {"error": "timeout", "message": f"Clone took longer than {CLONE_TIMEOUT}s — is the repo huge?"}
    if proc.returncode != 0:
        shutil.rmtree(dest, ignore_errors=True)  # git leaves a partial dir behind on failure
        detail = (proc.stderr or "").strip().splitlines()
        return {"error": "clone_failed",
                "message": detail[-1] if detail else "Clone failed — check the URL is public."}

    docs = _count_docs(dest)
    if docs == 0:
        shutil.rmtree(dest, ignore_errors=True)
        return {"error": "no_markdown",
                "message": f"“{name}” has no .md files — nothing to study, so it was not kept."}
    log.info("cloned %s → %s (%d markdown files)", target, dest, docs)
    return {"ok": True, "name": name, "docs": docs, "url": target}


def _count_docs(path: Path) -> int:
    return sum(1 for _ in path.rglob("*.md"))


def _remote(path: Path) -> str:
    """The repo's https URL, read from .git/config — so the UI can link back to it."""
    cfg = path / ".git" / "config"
    if not cfg.exists():
        return ""
    m = re.search(r"^\s*url\s*=\s*(\S+)", cfg.read_text(encoding="utf-8", errors="ignore"), re.M)
    return m.group(1).removesuffix(".git") if m else ""


def _card_counts() -> dict[str, int]:
    """Cards per top-level library folder, from the last ingest."""
    if not GENERATED.exists():
        return {}
    try:
        cards = json.loads(GENERATED.read_text(encoding="utf-8")).get("questions", [])
    except json.JSONDecodeError:
        log.warning("generated.json is not readable JSON — reporting 0 cards")
        return {}
    counts: dict[str, int] = {}
    for c in cards:
        src = (c.get("source_file") or "").replace("\\", "/")
        key = src.split("/")[0] if "/" in src else ""
        counts[key] = counts.get(key, 0) + 1
    return counts


def collections() -> dict:
    """Every collection in the library: each cloned repo, plus the loose files
    captured from the web/uploads, with doc and card counts."""
    LIBRARY.mkdir(parents=True, exist_ok=True)
    counts = _card_counts()
    out: list[dict] = []

    for d in sorted(LIBRARY.iterdir(), key=lambda p: p.name.lower()):
        if not d.is_dir():
            continue
        docs = sorted(str(p.relative_to(LIBRARY)).replace("\\", "/") for p in d.rglob("*.md"))
        if not docs:
            continue
        out.append({
            "name": d.name,
            "kind": "repo" if (d / ".git").exists() else "folder",
            "url": _remote(d),
            "docs": len(docs),
            "cards": counts.get(d.name, 0),
            "files": docs,
        })

    loose = sorted(str(p.name) for p in LIBRARY.glob("*.md"))
    if loose:
        out.append({
            "name": "Captured pages",
            "kind": "captured",
            "url": "",
            "docs": len(loose),
            "cards": counts.get("", 0),
            "files": loose,
        })

    return {"collections": out, "docs": sum(c["docs"] for c in out), "cards": sum(c["cards"] for c in out)}
