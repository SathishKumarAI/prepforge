"""RSS/Atom scraper. Pulls recent entries from configured feeds."""
from __future__ import annotations

import logging
from datetime import datetime, timezone

import feedparser

log = logging.getLogger("scrapers.rss")


def _iso(entry) -> str | None:
    for key in ("published_parsed", "updated_parsed"):
        t = entry.get(key)
        if t:
            return datetime(*t[:6], tzinfo=timezone.utc).isoformat()
    return None


def scrape(sources: list[dict], limit_per_feed: int = 8) -> list[dict]:
    out: list[dict] = []
    for src in sources:
        url = src.get("url")
        if not url:
            continue
        try:
            feed = feedparser.parse(url)
            for entry in feed.entries[:limit_per_feed]:
                summary = (entry.get("summary") or "").strip()
                out.append(
                    {
                        "id": entry.get("id") or entry.get("link"),
                        "kind": "article",
                        "source": src.get("name", "RSS"),
                        "topic": src.get("topic", "AI"),
                        "title": (entry.get("title") or "Untitled").strip(),
                        "url": entry.get("link"),
                        "summary": summary[:400],
                        "published": _iso(entry),
                        "thumbnail": None,
                    }
                )
            log.info("rss ok: %s (%d entries)", src.get("name"), len(feed.entries[:limit_per_feed]))
        except Exception as exc:  # non-fatal per-source
            log.warning("rss failed: %s (%s)", src.get("name"), exc)
    return out
