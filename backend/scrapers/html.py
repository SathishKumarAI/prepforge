"""Best-effort HTML scraper. Extracts title + lead paragraphs. May break per-site."""
from __future__ import annotations

import logging

import httpx
from bs4 import BeautifulSoup

log = logging.getLogger("scrapers.html")

_UA = "Mozilla/5.0 (compatible; PrepForgeBot/1.0; +local)"


def scrape(sources: list[dict]) -> list[dict]:
    out: list[dict] = []
    with httpx.Client(timeout=15.0, headers={"User-Agent": _UA}, follow_redirects=True) as client:
        for src in sources:
            url = src.get("url")
            if not url:
                continue
            try:
                resp = client.get(url)
                resp.raise_for_status()
                soup = BeautifulSoup(resp.text, "html.parser")
                for tag in soup(["script", "style", "nav", "footer", "header"]):
                    tag.decompose()
                title = (soup.title.string if soup.title else None) or src.get("name") or url
                paras = [p.get_text(" ", strip=True) for p in soup.find_all("p")]
                paras = [p for p in paras if len(p) > 40][:3]
                out.append(
                    {
                        "id": url,
                        "kind": "article",
                        "source": src.get("name", "Web"),
                        "topic": src.get("topic", "AI"),
                        "title": title.strip()[:200],
                        "url": url,
                        "summary": " ".join(paras)[:400],
                        "published": None,
                        "thumbnail": None,
                    }
                )
                log.info("html ok: %s", src.get("name"))
            except Exception as exc:  # non-fatal
                log.warning("html failed: %s (%s)", src.get("name"), exc)
    return out
