"""YouTube Data API v3 scraper. No-op if YOUTUBE_API_KEY missing."""
from __future__ import annotations

import logging
import os

import httpx

log = logging.getLogger("scrapers.youtube")

_SEARCH = "https://www.googleapis.com/youtube/v3/search"


def scrape(sources: list[dict], max_per_source: int = 6) -> list[dict]:
    key = os.getenv("YOUTUBE_API_KEY", "").strip()
    if not key:
        log.info("youtube skipped: no YOUTUBE_API_KEY")
        return []
    out: list[dict] = []
    with httpx.Client(timeout=15.0) as client:
        for src in sources:
            params = {
                "key": key,
                "part": "snippet",
                "type": "video",
                "maxResults": max_per_source,
                "order": "relevance",
            }
            if src.get("channel_id"):
                params["channelId"] = src["channel_id"]
                params["q"] = src.get("search", "interview")
            else:
                params["q"] = src.get("search", "machine learning interview")
            try:
                resp = client.get(_SEARCH, params=params)
                resp.raise_for_status()
                for item in resp.json().get("items", []):
                    vid = item["id"].get("videoId")
                    sn = item["snippet"]
                    if not vid:
                        continue
                    out.append(
                        {
                            "id": f"yt:{vid}",
                            "kind": "video",
                            "source": src.get("name", "YouTube"),
                            "topic": src.get("topic", "AI"),
                            "title": sn.get("title", "Untitled"),
                            "url": f"https://www.youtube.com/watch?v={vid}",
                            "summary": (sn.get("description") or "")[:400],
                            "published": sn.get("publishedAt"),
                            "thumbnail": sn.get("thumbnails", {}).get("medium", {}).get("url"),
                        }
                    )
                log.info("youtube ok: %s", src.get("name"))
            except Exception as exc:  # non-fatal
                log.warning("youtube failed: %s (%s)", src.get("name"), exc)
    return out
