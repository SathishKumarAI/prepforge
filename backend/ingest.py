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


def _frontmatter_title(md: str, fallback: str) -> str:
    """Pull `title:` from YAML frontmatter (as written by capture/upload), else
    derive a readable name from the filename."""
    m = re.match(r"^---\s*\n(.*?)\n---\s*\n", md, re.DOTALL)
    if m:
        t = re.search(r'^title:\s*"?(.+?)"?\s*$', m.group(1), re.MULTILINE)
        if t:
            return t.group(1).strip().strip('"')
    stem = Path(fallback).stem.replace("-", " ").replace("_", " ").strip()
    return stem.title() or fallback


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


def _ollama_card(client: httpx.Client, model: str, source: str, topic: str, heading: str, body: str) -> dict | None:
    """Convert a section into a Q&A card via a local Ollama model. None on failure."""
    prompt = (
        "You convert study notes into a single interview flashcard. "
        "Return ONLY minified JSON with keys: question (string), answer (string, markdown, 60-160 words), "
        'quiz (object with "choices": 4 strings and "correctIndex": int 0-3). '
        f"Topic: {topic}. Section heading: {heading}.\n\nNotes:\n{body[:2000]}"
    )
    try:
        resp = client.post(
            "http://localhost:11434/api/generate",
            json={"model": model, "prompt": prompt, "stream": False, "format": "json"},
            timeout=120.0,
        )
        resp.raise_for_status()
        data = json.loads(resp.json().get("response", "").strip())
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
        log.warning("ollama card failed (%s): %s", heading, exc)
        return None


def _first_sentence(text: str, cap: int = 160) -> str:
    """A short, quiz-friendly gloss: first sentence of an answer, stripped of markdown."""
    plain = re.sub(r"[#*`>_~\[\]()]", "", text).replace("\n", " ").strip()
    m = re.search(r"(.+?[.!?])(\s|$)", plain)
    s = (m.group(1) if m else plain).strip()
    return (s[: cap - 1] + "…") if len(s) > cap else s


# ---- lightweight TF-IDF over the card set, for *near-miss* distractors ----
_QTOKEN = re.compile(r"[a-z0-9][a-z0-9+#.-]{1,}")
_QSTOP = {
    "the", "and", "for", "with", "what", "which", "when", "does", "your", "have", "this", "that",
    "how", "why", "are", "is", "an", "of", "to", "in", "on", "explain", "describe", "between",
    "difference", "you", "would", "should", "about", "can", "using", "use", "from", "or", "it", "a",
}


def _card_tokens(card: dict) -> list[str]:
    text = (card.get("question", "") + " " + _first_sentence(card.get("answer", ""), 200)).lower()
    toks = [t for t in _QTOKEN.findall(text) if t not in _QSTOP and len(t) > 2]
    for tag in card.get("tags", []) or []:
        t = str(tag).lower()
        if len(t) > 2:
            toks += [t, t, t]  # tags carry strong topical signal
    return toks


def _build_vectors(cards: list[dict]) -> tuple[dict, dict]:
    """TF-IDF sparse vectors + norms keyed by card id (pure Python, no deps)."""
    import math
    from collections import Counter

    docs = [(c["id"], _card_tokens(c)) for c in cards]
    n = len(docs)
    df: Counter = Counter()
    for _, toks in docs:
        for term in set(toks):
            df[term] += 1
    idf = {term: math.log(n / (1 + freq)) + 1.0 for term, freq in df.items()}
    vec: dict[str, dict[str, float]] = {}
    norm: dict[str, float] = {}
    for cid, toks in docs:
        if not toks:
            vec[cid], norm[cid] = {}, 1e-9
            continue
        tf = Counter(toks)
        v = {term: (freq / len(toks)) * idf.get(term, 0.0) for term, freq in tf.items()}
        vec[cid] = v
        norm[cid] = math.sqrt(sum(w * w for w in v.values())) or 1e-9
    return vec, norm


def _similarity(a: str, b: str, vec: dict, norm: dict) -> float:
    va, vb = vec.get(a, {}), vec.get(b, {})
    small, big = (va, vb) if len(va) <= len(vb) else (vb, va)
    dot = sum(w * big.get(term, 0.0) for term, w in small.items())
    return dot / (norm.get(a, 1e-9) * norm.get(b, 1e-9))


def _cloze(card: dict, h: int) -> tuple[str, str] | None:
    """Turn the gloss into a fill-in-the-blank: (prompt_with_blank, answer_term).
    Blanks the most salient token (longest content word, tags preferred)."""
    gloss = _first_sentence(card.get("answer", ""))
    words = re.findall(r"[A-Za-z][A-Za-z0-9+#.-]{2,}", gloss)
    tagset = {str(t).lower() for t in card.get("tags", []) or []}
    cands = [w for w in words if w.lower() not in _QSTOP and len(w) > 3]
    if not cands:
        return None
    # prefer a word that is also a tag (topical), else the longest word — stable pick
    tagged = [w for w in cands if w.lower() in tagset]
    pool = tagged or cands
    term = sorted(pool, key=lambda w: (-len(w), w))[h % len(pool)] if pool else None
    if not term:
        return None
    prompt = re.sub(r"\b" + re.escape(term) + r"\b", "_____", gloss, count=1)
    if "_____" not in prompt:
        return None
    return prompt, term


def _synthesize_quiz(card: dict, others: list[dict], vec: dict, norm: dict) -> dict | None:
    """Zero-token MCQ for a card that has none. Deterministic (seeded by card id),
    no model. Distractors are the *most similar* other cards (TF-IDF near-miss), so
    the wrong answers are plausible rather than random. Two kinds, chosen by hash:

    - definition-match: "which one-line description matches this?" (distractors = glosses)
    - cloze: fill in the blanked key term (distractors = other cards' salient terms)
    """
    h = int(hashlib.sha1(card["id"].encode()).hexdigest(), 16)
    correct_index = h % 4
    cid = card["id"]
    # rank other cards by similarity to this one → near-miss distractors first
    ranked = sorted(
        (o for o in others if o["id"] != cid),
        key=lambda o: (-_similarity(cid, o["id"], vec, norm), o["id"]),
    )
    if len(ranked) < 3:
        return None

    # kind: every 3rd card (by hash) becomes a cloze, the rest definition-match
    if h % 3 == 0:
        cz = _cloze(card, h)
        if cz:
            prompt, term = cz
            wrongs: list[str] = []
            for o in ranked:
                for t in (o.get("tags", []) or []):
                    ts = str(t)
                    if ts.lower() != term.lower() and ts not in wrongs and len(ts) > 3:
                        wrongs.append(ts)
                        break
                if len(wrongs) == 3:
                    break
            if len(wrongs) == 3:
                choices = wrongs[:]
                choices.insert(correct_index, term)
                return {"choices": choices, "correctIndex": correct_index, "kind": "cloze", "prompt": prompt}

    # definition-match (default)
    correct = _first_sentence(card.get("answer", ""))
    if len(correct) < 20:
        return None
    distractors: list[str] = []
    for o in ranked:
        g = _first_sentence(o.get("answer", ""))
        if len(g) >= 20 and g != correct and g not in distractors:
            distractors.append(g)
        if len(distractors) == 3:
            break
    if len(distractors) < 3:
        return None
    choices = distractors[:]
    choices.insert(correct_index, correct)
    return {"choices": choices, "correctIndex": correct_index, "kind": "mcq"}


def _add_synthetic_quizzes(cards: list[dict]) -> int:
    """Give every quiz-less card a deterministic near-miss MCQ. Returns count added."""
    vec, norm = _build_vectors(cards)
    added = 0
    for c in cards:
        if not c.get("quiz"):
            quiz = _synthesize_quiz(c, cards, vec, norm)
            if quiz:
                c["quiz"] = quiz
                added += 1
    return added


def ingest(mode: str = "deterministic") -> dict:
    """Turn library markdown into Q&A cards.

    mode: "deterministic" (offline heading-split, no model), "ollama" (local model
    at localhost:11434), or "claude" (Anthropic API, needs ANTHROPIC_API_KEY).
    Any model failure falls back to the deterministic card so nothing is lost.
    """
    LIBRARY.mkdir(parents=True, exist_ok=True)
    files = sorted(LIBRARY.rglob("*.md"))
    key = os.getenv("ANTHROPIC_API_KEY", "").strip()
    ollama_model = os.getenv("OLLAMA_MODEL", "llama3.1").strip()

    use_claude = mode == "claude" and bool(key)
    use_ollama = mode == "ollama"
    client = httpx.Client() if (use_claude or use_ollama) else None

    cards: list[dict] = []
    model_cards = 0
    titles: dict[str, str] = {}  # source_file → readable title (for the source picker)
    try:
        for f in files:
            source = str(f.relative_to(LIBRARY))
            topic = _infer_topic(f.relative_to(LIBRARY))
            md = f.read_text(encoding="utf-8", errors="ignore")
            titles[source] = _frontmatter_title(md, source)
            for heading, body in _split_sections(md):
                card = None
                if use_claude:
                    card = _llm_card(client, key, source, topic, heading, body)
                elif use_ollama:
                    card = _ollama_card(client, ollama_model, source, topic, heading, body)
                if card is None:
                    card = _deterministic_card(source, topic, heading, body)
                else:
                    model_cards += 1
                cards.append(card)
    finally:
        if client:
            client.close()

    seen, deduped = set(), []
    for c in cards:
        if c["id"] not in seen:
            seen.add(c["id"])
            deduped.append(c)

    # attach a source entry (title + path) so ingested docs — a pasted YouTube
    # video, an uploaded PDF — show up in the Quiz source picker and card rail,
    # not just as an opaque source_file string.
    for c in deduped:
        sf = c.get("source_file")
        if sf and not c.get("sources"):
            c["sources"] = [{"title": titles.get(sf, sf), "path": sf, "kind": "library"}]

    # make quiz-less cards (deterministic split, or any model miss) quizzable offline
    synth = _add_synthetic_quizzes(deduped)

    OUT.write_text(json.dumps({"questions": deduped}, indent=2, ensure_ascii=False), encoding="utf-8")
    effective = "claude" if use_claude else ("ollama" if use_ollama else "deterministic")
    log.info(
        "ingest: %d files → %d cards (mode=%s, model_cards=%d, synth_quizzes=%d)",
        len(files), len(deduped), effective, model_cards, synth,
    )
    return {"files": len(files), "cards": len(deduped), "mode": effective, "model_cards": model_cards, "synth_quizzes": synth}
