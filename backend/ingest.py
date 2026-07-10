"""Turn user-supplied Markdown (notes, book chapters) into pipeline cards.

Drop `.md` files into backend/content/library/ (optionally in topic-named subfolders),
then POST /ingest. Each heading section becomes a read+recall card that flows through
the same spaced-repetition pipeline as the curated bank.

If ANTHROPIC_API_KEY is set, sections are additionally rewritten into a crisp
interview question + answer + 4-option quiz by Claude. Otherwise a deterministic
heading-split is used (no external calls, always works offline).
"""
from __future__ import annotations

import hashlib
import json
import logging
import os
import re
from pathlib import Path

import httpx

log = logging.getLogger("ingest")

BASE = Path(__file__).parent
LIBRARY = BASE / "content" / "library"
OUT = BASE / "content" / "generated.json"

TOPICS = ["AI", "Machine Learning", "Data Science", "Data Analytics"]
_HEADING = re.compile(r"^(#{1,3})\s+(.*)$", re.MULTILINE)


def _infer_topic(path: Path, default: str = "Machine Learning") -> str:
    parts = [p.replace("-", " ").replace("_", " ").lower() for p in path.parts]
    hay = " ".join(parts)
    for t in TOPICS:
        if t.lower() in hay:
            return t
    if "analytic" in hay:
        return "Data Analytics"
    if "science" in hay:
        return "Data Science"
    if any(k in hay for k in ("ai", "llm", "neural", "deep")):
        return "AI"
    return default


def _split_sections(md: str) -> list[tuple[str, str]]:
    """Return (heading, body) pairs split on markdown headings."""
    matches = list(_HEADING.finditer(md))
    sections: list[tuple[str, str]] = []
    for i, m in enumerate(matches):
        heading = m.group(2).strip()
        start = m.end()
        end = matches[i + 1].start() if i + 1 < len(matches) else len(md)
        body = md[start:end].strip()
        if heading and len(body) > 40:
            sections.append((heading, body))
    return sections


def _tags(heading: str) -> list[str]:
    words = re.findall(r"[a-zA-Z][a-zA-Z0-9-]{2,}", heading.lower())
    stop = {"the", "and", "for", "with", "how", "what", "why", "does", "are", "into"}
    return [w for w in words if w not in stop][:4] or ["notes"]


def _card_id(source: str, heading: str) -> str:
    h = hashlib.sha1(f"{source}:{heading}".encode()).hexdigest()[:10]
    return f"ing_{h}"


def _deterministic_card(source: str, topic: str, heading: str, body: str) -> dict:
    q = heading if heading.endswith("?") else f"Explain: {heading}"
    return {
        "id": _card_id(source, heading),
        "topic": topic,
        "difficulty": "medium",
        "tags": _tags(heading),
        "question": q,
        "answer": body[:1600],
        "source_file": source,
        # no quiz for deterministic cards; Quiz mode simply skips them
    }


def _llm_card(client: httpx.Client, key: str, source: str, topic: str, heading: str, body: str) -> dict | None:
    """Ask Claude to convert a section into a clean Q&A + quiz. Returns None on failure."""
    prompt = (
        "You convert study notes into a single interview flashcard. "
        "Return ONLY minified JSON with keys: question (string), answer (string, markdown, 60-160 words), "
        'quiz (object with "choices": 4 strings and "correctIndex": int 0-3). '
        f"Topic: {topic}. Section heading: {heading}.\n\nNotes:\n{body[:2000]}"
    )
    try:
        resp = client.post(
            "https://api.anthropic.com/v1/messages",
            headers={
                "x-api-key": key,
                "anthropic-version": "2023-06-01",
                "content-type": "application/json",
            },
            json={
                "model": "claude-haiku-4-5-20251001",
                "max_tokens": 900,
                "messages": [{"role": "user", "content": prompt}],
            },
            timeout=40.0,
        )
        resp.raise_for_status()
        text = resp.json()["content"][0]["text"].strip()
        text = re.sub(r"^```(?:json)?|```$", "", text.strip()).strip()
        data = json.loads(text)
        return {
            "id": _card_id(source, heading),
            "topic": topic,
            "difficulty": "medium",
            "tags": _tags(heading),
            "question": data["question"],
            "answer": data["answer"],
            "quiz": data.get("quiz"),
            "source_file": source,
        }
    except Exception as exc:
        log.warning("llm card failed (%s): %s", heading, exc)
        return None


def ingest() -> dict:
    LIBRARY.mkdir(parents=True, exist_ok=True)
    files = sorted(LIBRARY.rglob("*.md"))
    key = os.getenv("ANTHROPIC_API_KEY", "").strip()
    cards: list[dict] = []

    client = httpx.Client() if key else None
    try:
        for f in files:
            source = str(f.relative_to(LIBRARY))
            topic = _infer_topic(f.relative_to(LIBRARY))
            md = f.read_text(encoding="utf-8", errors="ignore")
            for heading, body in _split_sections(md):
                card = None
                if client and key:
                    card = _llm_card(client, key, source, topic, heading, body)
                if card is None:
                    card = _deterministic_card(source, topic, heading, body)
                cards.append(card)
    finally:
        if client:
            client.close()

    # dedupe by id
    seen, deduped = set(), []
    for c in cards:
        if c["id"] not in seen:
            seen.add(c["id"])
            deduped.append(c)

    OUT.write_text(json.dumps({"questions": deduped}, indent=2, ensure_ascii=False), encoding="utf-8")
    log.info("ingest: %d files → %d cards (llm=%s)", len(files), len(deduped), bool(key))
    return {"files": len(files), "cards": len(deduped), "llm": bool(key)}
