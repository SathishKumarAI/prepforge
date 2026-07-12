"""Add a single resource by URL — manual paste or from the browser extension.

Scrapes a readable title + summary (YouTube via oEmbed, everything else via the
HTML scraper), then appends to data/resources.json (dedup by URL, newest first).
"""
from __future__ import annotations

import json
import logging
from pathlib import Path

import httpx

from scrapers import html as html_scraper

log = logging.getLogger("capture")

BASE = Path(__file__).parent
DATA = BASE / "data"
RES = DATA / "resources.json"

_YT = ("youtube.com/watch", "youtu.be/", "youtube.com/shorts")


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
