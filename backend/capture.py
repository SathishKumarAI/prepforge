"""Add a single resource by URL — manual paste or from the browser extension.

Scrapes a readable title + summary (YouTube via oEmbed, everything else via the
HTML scraper), then appends to data/resources.json (dedup by URL, newest first).
"""
from __future__ import annotations

import json
import logging
import re
from pathlib import Path

import httpx
from bs4 import BeautifulSoup

import transcript as transcript_mod
from scrapers import html as html_scraper

log = logging.getLogger("capture")

BASE = Path(__file__).parent
DATA = BASE / "data"
RES = DATA / "resources.json"
LIBRARY = BASE / "content" / "library"

_YT = ("youtube.com/watch", "youtu.be/", "youtube.com/shorts")
_UA = "Mozilla/5.0 (compatible; PrepForgeBot/1.0; +local)"


def _load() -> list[dict]:
    if not RES.exists():
        return []
    return json.loads(RES.read_text(encoding="utf-8")).get("resources", [])


def _save(resources: list[dict]) -> None:
    DATA.mkdir(exist_ok=True)
    RES.write_text(json.dumps({"resources": resources}, indent=2, ensure_ascii=False), encoding="utf-8")


def _youtube(url: str, topic: str) -> dict:
    title, summary, thumb = url, "", None
    try:
        r = httpx.get("https://www.youtube.com/oembed", params={"url": url, "format": "json"}, timeout=10)
        if r.status_code == 200:
            d = r.json()
            title = d.get("title", url)
            summary = f"YouTube · {d.get('author_name', '')}".strip(" ·")
            thumb = d.get("thumbnail_url")
    except Exception as exc:
        log.warning("oembed failed: %s", exc)
    return {
        "id": url, "kind": "video", "source": "YouTube", "topic": topic,
        "title": title, "url": url, "summary": summary, "published": None, "thumbnail": thumb,
    }


def _slug(text: str) -> str:
    s = re.sub(r"[^a-zA-Z0-9]+", "-", (text or "article").lower()).strip("-")
    return (s[:60] or "article")


def _html_to_markdown(soup: BeautifulSoup) -> str:
    """Best-effort readable-content extraction → markdown."""
    for tag in soup(["script", "style", "nav", "footer", "header", "aside", "form", "noscript"]):
        tag.decompose()
    root = soup.find("article") or soup.find("main") or soup.body or soup
    lines: list[str] = []
    for el in root.find_all(["h1", "h2", "h3", "h4", "p", "li", "pre", "blockquote"]):
        text = el.get_text(" ", strip=True)
        if not text or len(text) < 2:
            continue
        name = el.name
        if name in ("h1", "h2"):
            lines.append(f"\n## {text}\n")
        elif name in ("h3", "h4"):
            lines.append(f"\n### {text}\n")
        elif name == "li":
            lines.append(f"- {text}")
        elif name == "pre":
            lines.append(f"\n```\n{text}\n```\n")
        elif name == "blockquote":
            lines.append(f"> {text}")
        else:
            lines.append(text)
    md = "\n".join(lines).strip()
    md = re.sub(r"\n{3,}", "\n\n", md)
    return md[:20000]  # cap: keep files sane


def read(url: str, topic: str = "AI", title: str = "") -> dict:
    """Fetch a resource, extract readable markdown, save to library, return content."""
    url = (url or "").strip()
    if not url.startswith(("http://", "https://")):
        return {"error": "bad_url", "message": "Provide a full http(s) URL."}

    if any(k in url for k in _YT):
        yt = _youtube(url, topic)
        title = title or yt["title"]
        # try to pull the actual transcript so the video becomes real, quizzable
        # content — not just a title + link. Falls back to the oembed stub.
        tr = transcript_mod.fetch(url)
        if "error" not in tr:
            md = transcript_mod.to_markdown(title, url, tr["chunks"])
            log.info("youtube transcript: %d chunks for %s", len(tr["chunks"]), url)
        else:
            md = f"# {title}\n\n{yt['summary']}\n\n_{tr['message']}_\n\n[Watch on YouTube]({url})\n"
            log.info("youtube transcript unavailable (%s): %s", tr.get("error"), url)
    else:
        try:
            with httpx.Client(timeout=15.0, headers={"User-Agent": _UA}, follow_redirects=True) as c:
                resp = c.get(url)
                resp.raise_for_status()
            soup = BeautifulSoup(resp.text, "html.parser")
            page_title = (soup.title.string if soup.title else None) or title or url
            title = title or page_title.strip()
            body = _html_to_markdown(soup)
            if not body:
                return {"error": "empty", "message": "Couldn't extract readable content (JS-only or blocked page)."}
            md = f"# {title}\n\n{body}\n"
        except Exception as exc:
            log.warning("read failed: %s", exc)
            return {"error": "fetch_failed", "message": str(exc)}

    # persist to library as markdown (for ingestion + graph + future use)
    LIBRARY.mkdir(parents=True, exist_ok=True)
    fname = f"{_slug(title)}.md"
    doc = f"---\ntitle: {json.dumps(title)}\nurl: {url}\ntopic: {topic}\nsource: web-capture\n---\n\n{md}"
    (LIBRARY / fname).write_text(doc, encoding="utf-8")
    log.info("read+saved: %s", fname)
    return {"ok": True, "title": title, "markdown": md, "saved": f"content/library/{fname}"}


def _pdf_to_markdown(data: bytes) -> str:
    from io import BytesIO

    from pypdf import PdfReader

    reader = PdfReader(BytesIO(data))
    parts: list[str] = []
    for i, page in enumerate(reader.pages, 1):
        try:
            text = (page.extract_text() or "").strip()
        except Exception:
            text = ""
        if text:
            parts.append(f"\n## Page {i}\n\n{text}")
    md = "\n".join(parts).strip()
    return re.sub(r"\n{3,}", "\n\n", md)[:60000]


def upload(filename: str, data: bytes, topic: str = "AI") -> dict:
    """Ingest a local file (PDF / .md / .txt) → markdown → save to library + feed."""
    name = (filename or "file").strip()
    ext = name.rsplit(".", 1)[-1].lower() if "." in name else ""
    title = name.rsplit(".", 1)[0] if "." in name else name

    if ext == "pdf":
        try:
            body = _pdf_to_markdown(data)
        except Exception as exc:
            log.warning("pdf parse failed: %s", exc)
            return {"error": "pdf_failed", "message": f"Couldn't read PDF: {exc}"}
        if not body:
            return {"error": "empty", "message": "No extractable text (scanned/image PDF?)."}
        kind = "article"
    elif ext in ("md", "markdown", "txt"):
        body = data.decode("utf-8", errors="ignore").strip()
        if not body:
            return {"error": "empty", "message": "File is empty."}
        kind = "article"
    else:
        return {"error": "bad_type", "message": "Only PDF, .md, or .txt files are supported."}

    md = body if ext in ("md", "markdown") else f"# {title}\n\n{body}\n"

    LIBRARY.mkdir(parents=True, exist_ok=True)
    fname = f"{_slug(title)}.md"
    doc = f"---\ntitle: {json.dumps(title)}\nsource: upload:{ext or 'file'}\ntopic: {topic}\n---\n\n{md}"
    (LIBRARY / fname).write_text(doc, encoding="utf-8")

    # register in the resource feed so it shows alongside web resources
    item = {
        "id": f"upload:{fname}", "kind": kind, "source": "Upload", "topic": topic,
        "title": title, "url": "", "summary": body[:300], "published": None, "thumbnail": None,
    }
    resources = [r for r in _load() if r.get("id") != item["id"]]
    resources.insert(0, item)
    _save(resources)
    log.info("uploaded: %s (%s)", fname, ext)
    return {"ok": True, "title": title, "markdown": md, "saved": f"content/library/{fname}"}


def library_read(rel_path: str) -> dict:
    """Read one ingested library markdown file (by library-relative path), confined
    to content/library. Used by the source viewer for ingested docs/videos."""
    try:
        target = (LIBRARY / rel_path).resolve()
    except Exception:
        return {"error": "bad_path"}
    root = LIBRARY.resolve()
    if not str(target).startswith(str(root)) or not target.is_file():
        return {"error": "forbidden", "message": "Path outside the library."}
    md = target.read_text(encoding="utf-8", errors="ignore")
    # strip YAML frontmatter for display
    md = re.sub(r"^---\s*\n.*?\n---\s*\n", "", md, count=1, flags=re.DOTALL).strip()
    title_m = re.search(r"^#\s+(.+)$", md, re.MULTILINE)
    return {"ok": True, "title": (title_m.group(1).strip() if title_m else target.stem), "markdown": md[:60000], "path": rel_path}


def capture(url: str, topic: str = "AI", title: str = "", selection: str = "") -> dict:
    url = (url or "").strip()
    if not url.startswith(("http://", "https://")):
        return {"error": "bad_url", "message": "Provide a full http(s) URL."}

    if any(k in url for k in _YT):
        item = _youtube(url, topic)
    else:
        scraped = html_scraper.scrape([{"name": "Saved", "url": url, "topic": topic}])
        if scraped:
            item = scraped[0]
        else:
            item = {"id": url, "kind": "article", "source": "Saved", "topic": topic,
                    "title": title or url, "url": url, "summary": "", "published": None, "thumbnail": None}
    # caller-supplied overrides win
    if title:
        item["title"] = title
    if selection:
        item["summary"] = (selection[:400] or item.get("summary", ""))

    resources = _load()
    resources = [r for r in resources if r.get("id") != item["id"] and r.get("url") != url]  # dedupe
    resources.insert(0, item)  # newest first
    _save(resources)
    log.info("captured: %s", item["title"])
    return {"ok": True, "resource": item, "count": len(resources)}
