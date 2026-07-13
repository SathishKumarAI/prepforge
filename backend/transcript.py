"""Fetch a YouTube video's transcript and shape it into ingestable markdown.

Zero-token: uses the captions YouTube already has (youtube-transcript-api) — no
model, no download of the video. The resulting markdown is chunked into `##`
sections so the ingest heading-splitter turns each chunk into a card, and each
card then gets a deterministic MCQ (see ingest._synthesize_quiz). Net effect:
paste a video URL → quizzable questions from that video's content, offline.
"""
from __future__ import annotations

import logging
import re

log = logging.getLogger("transcript")

# watch?v=ID · youtu.be/ID · shorts/ID · embed/ID
_ID_PATTERNS = [
    r"(?:v=|/shorts/|/embed/|youtu\.be/)([A-Za-z0-9_-]{11})",
]


def video_id(url: str) -> str | None:
    for pat in _ID_PATTERNS:
        m = re.search(pat, url or "")
        if m:
            return m.group(1)
    return None


def _sentence_case_heading(text: str) -> str:
    """A short, human heading from the first words of a chunk."""
    words = re.sub(r"\s+", " ", text).strip().split(" ")
    head = " ".join(words[:7]).rstrip(",.;:—-")
    return head[:70] or "Segment"


def _chunk(text: str, target_words: int = 160) -> list[str]:
    """Group the transcript into readable, quiz-sized chunks (~target_words each),
    breaking on sentence boundaries where possible."""
    text = re.sub(r"\s+", " ", text).strip()
    # split into sentences; captions often lack punctuation, so fall back to words
    sentences = re.split(r"(?<=[.!?])\s+", text)
    if len(sentences) <= 1:
        sentences = text.split(" ")  # no punctuation → word-level fallback
    chunks: list[str] = []
    buf: list[str] = []
    count = 0
    for s in sentences:
        buf.append(s)
        count += len(s.split(" "))
        if count >= target_words:
            chunks.append(" ".join(buf).strip())
            buf, count = [], 0
    if buf:
        tail = " ".join(buf).strip()
        # merge a tiny trailing chunk into the previous one
        if chunks and len(tail.split(" ")) < 40:
            chunks[-1] += " " + tail
        elif tail:
            chunks.append(tail)
    return chunks


def fetch(url: str, languages: tuple[str, ...] = ("en", "en-US", "en-GB")) -> dict:
    """Return {video_id, text, chunks} for a video, or {error, message}."""
    vid = video_id(url)
    if not vid:
        return {"error": "bad_url", "message": "Not a recognizable YouTube video URL."}
    try:
        from youtube_transcript_api import YouTubeTranscriptApi

        api = YouTubeTranscriptApi()
        # prefer requested languages; fall back to whatever single transcript exists
        try:
            fetched = api.fetch(vid, languages=list(languages))
        except Exception:
            fetched = api.fetch(vid)  # any available language
        pieces = [snip.text for snip in fetched if getattr(snip, "text", "").strip()]
        text = " ".join(pieces).strip()
        if not text:
            return {"error": "empty", "message": "Transcript was empty."}
        return {"video_id": vid, "text": text, "chunks": _chunk(text)}
    except Exception as exc:
        name = type(exc).__name__
        if "Disabled" in name:
            msg = "This video has captions/transcripts disabled."
        elif "NoTranscript" in name or "NotFound" in name:
            msg = "No transcript is available for this video."
        elif "Unavailable" in name:
            msg = "That video is unavailable (private/removed/region-locked)."
        else:
            msg = f"Couldn't fetch transcript ({name})."
        log.warning("transcript fetch failed for %s: %s", vid, exc)
        return {"error": "no_transcript", "message": msg}


def to_markdown(title: str, url: str, chunks: list[str]) -> str:
    """Chunked transcript → markdown with `##` sections (one card per section)."""
    lines = [f"# {title}", "", f"[Watch on YouTube]({url})", ""]
    for i, ch in enumerate(chunks, 1):
        lines.append(f"## {_sentence_case_heading(ch)}")
        lines.append("")
        lines.append(ch)
        lines.append("")
    return "\n".join(lines).strip()
