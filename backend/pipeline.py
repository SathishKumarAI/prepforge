"""Personal-scale knowledge pipeline — ZERO tokens, tiny compute.

Builds a "related questions" memory index so recalling one question surfaces the
others connected to it (the mind-map / memory goal). Uses pure-Python TF-IDF +
an inverted index — no LLM, no API, no heavy deps. Incremental and cheap.

Design notes (see docs/SCALING.md): generation is the expensive thing and stays
Claude-Code-authored in the .md cache; retrieval/dedup are done here for free.
"""
from __future__ import annotations

import json
import logging
import math
import re
from collections import Counter, defaultdict
from pathlib import Path

log = logging.getLogger("pipeline")

BASE = Path(__file__).parent
CONTENT = BASE / "content"
RELATED_OUT = CONTENT / "related.json"

_TOKEN = re.compile(r"[a-z0-9][a-z0-9+#.-]{1,}")
_STOP = {
    "the", "and", "for", "with", "what", "which", "when", "does", "your", "have", "this", "that",
    "how", "why", "are", "is", "a", "an", "of", "to", "in", "on", "explain", "describe", "between",
    "difference", "you", "would", "should", "about", "can", "using", "use", "from", "or", "it",
}


def _read(path: Path) -> list[dict]:
    if not path.exists():
        return []
    data = json.loads(path.read_text(encoding="utf-8"))
    return data.get("questions", data if isinstance(data, list) else [])


def _all_questions() -> list[dict]:
    out = []
    for name in ("questions.json", "generated.json", "vault_questions.json"):
        out += _read(CONTENT / name)
    return out


# Tags that describe a document's *shape*, not its subject. Weighting these like
# topical tags married "AI vs ML vs deep learning" to "Database Fundamentals" —
# both tagged #fundamentals, nothing else in common.
_WEAK_TAGS = {
    "fundamentals", "basics", "basic", "overview", "introduction", "intro", "concepts",
    "concept", "questions", "question", "interview", "interviews", "guide", "guides",
    "summary", "notes", "note", "cheatsheet", "reference", "advanced", "general", "topics",
}


def _tokens(q: dict) -> list[str]:
    text = (q.get("question", "") + " ").lower()
    toks = [t for t in _TOKEN.findall(text) if t not in _STOP and len(t) > 2]
    # tags carry strong topical signal — weight them by repeating, unless the tag is
    # structural, in which case it counts once like any other word
    for tag in q.get("tags", []) or []:
        t = str(tag).lower()
        if len(t) > 2:
            toks += [t] if t in _WEAK_TAGS else [t, t, t]
    return toks


ANSWERS = CONTENT / "answers"
_FM = re.compile(r"^---\s*\n(.*?)\n---\s*\n", re.DOTALL)
MAX_READING = 5
BORROW_SCORE = 0.30  # relatedness a neighbour needs before its links are offered


def _authored_reading() -> dict[str, list[dict]]:
    """Citations the pre-authored answers carry in their YAML frontmatter.

    The curated bank has no source document to open — these citations are the only
    real reading it ships with, and they are what a curated card should point at.
    """
    import yaml

    out: dict[str, list[dict]] = {}
    if not ANSWERS.exists():
        return out
    for f in sorted(ANSWERS.glob("*.md")):
        qid = f.stem.split("__")[0]  # q042__star.md and q042.md are the same question
        m = _FM.match(f.read_text(encoding="utf-8", errors="ignore"))
        if not m:
            continue
        try:
            meta = yaml.safe_load(m.group(1)) or {}
        except yaml.YAMLError:
            continue
        for s in meta.get("sources") or []:
            url = (s or {}).get("url")
            if not url:
                continue
            seen = out.setdefault(qid, [])
            if not any(e["url"] == url for e in seen):
                seen.append({"title": (s.get("title") or url)[:90], "url": url})
    return out


def build_reading(questions: list[dict], related: dict[str, list[dict]]) -> dict[str, list[dict]]:
    """Reading links for *every* question, not just the ones that shipped with links.

    Three tiers, best first: the question's own links, the citations its authored
    answer carries, then — for the many cards that have neither — links borrowed from
    its nearest neighbours in the related index, labelled with where they came from so
    the borrowing is visible rather than implied.
    """
    authored = _authored_reading()
    by_id = {q.get("id"): q for q in questions if q.get("id")}
    own: dict[str, list[dict]] = {}
    for qid, q in by_id.items():
        links = [dict(l) for l in (q.get("links") or [])][:MAX_READING]
        for extra in authored.get(qid, []):
            if len(links) < MAX_READING and not any(l["url"] == extra["url"] for l in links):
                links.append(dict(extra))
        if links:
            own[qid] = links

    reading = dict(own)
    borrowed = 0
    for qid in by_id:
        if qid in reading:
            continue
        picked: list[dict] = []
        for rel in related.get(qid, []):
            # A loose neighbour is worse than no suggestion: at the 0.12 relatedness
            # floor, "AI vs ML vs deep learning" was being offered ACID transactions.
            if rel.get("score", 0) < BORROW_SCORE:
                continue
            src = by_id.get(rel["id"])
            for link in own.get(rel["id"], []):
                if len(picked) >= 3:
                    break
                if not any(p["url"] == link["url"] for p in picked):
                    picked.append({**link, "via": (src or {}).get("question", "")[:70]})
            if len(picked) >= 3:
                break
        if picked:
            reading[qid] = picked
            borrowed += 1
    log.info("reading index: %d own, %d borrowed from related", len(own), borrowed)
    return reading


def build_related(k: int = 6, min_score: float = 0.12) -> dict:
    """Compute top-k related questions per question via TF-IDF cosine. Writes related.json."""
    qs = _all_questions()
    # keep first occurrence per id (curated wins over vault dups)
    seen, docs = set(), []
    for q in qs:
        qid = q.get("id")
        if qid and qid not in seen:
            seen.add(qid)
            docs.append((qid, _tokens(q)))
    n = len(docs)
    if n < 2:
        RELATED_OUT.write_text(json.dumps({"related": {}}, indent=2), encoding="utf-8")
        return {"questions": n, "with_related": 0}

    # document frequency → idf
    df: Counter = Counter()
    for _, toks in docs:
        for term in set(toks):
            df[term] += 1
    idf = {term: math.log(n / (1 + freq)) + 1.0 for term, freq in df.items()}

    # tf-idf vectors (sparse) + norms + inverted index
    vec: dict[str, dict[str, float]] = {}
    norm: dict[str, float] = {}
    inv: dict[str, list[str]] = defaultdict(list)
    for qid, toks in docs:
        tf = Counter(toks)
        v = {term: (freq / len(toks)) * idf.get(term, 0.0) for term, freq in tf.items()}
        vec[qid] = v
        norm[qid] = math.sqrt(sum(w * w for w in v.values())) or 1e-9
        for term in v:
            inv[term].append(qid)

    # for each doc, accumulate cosine only against candidates sharing a term (inverted index)
    related: dict[str, list[dict]] = {}
    with_related = 0
    for qid, _ in docs:
        scores: dict[str, float] = defaultdict(float)
        v = vec[qid]
        for term, w in v.items():
            postings = inv[term]
            if len(postings) > 400:  # skip ultra-common terms — cheap + avoids noise hubs
                continue
            for other in postings:
                if other != qid:
                    scores[other] += w * vec[other].get(term, 0.0)
        ranked = sorted(
            ((o, s / (norm[qid] * norm[o])) for o, s in scores.items()),
            key=lambda x: x[1],
            reverse=True,
        )
        top = [{"id": o, "score": round(sc, 3)} for o, sc in ranked[:k] if sc >= min_score]
        if top:
            related[qid] = top
            with_related += 1

    reading = build_reading(qs, related)

    CONTENT.mkdir(parents=True, exist_ok=True)
    RELATED_OUT.write_text(
        json.dumps({"related": related, "reading": reading}, indent=2, ensure_ascii=False),
        encoding="utf-8",
    )
    log.info("related index: %d questions, %d with related links", n, with_related)
    return {"questions": n, "with_related": with_related, "with_reading": len(reading)}


def _load_index() -> dict:
    if not RELATED_OUT.exists():
        return {}
    try:
        return json.loads(RELATED_OUT.read_text(encoding="utf-8"))
    except Exception:
        return {}


def load_related() -> dict:
    return _load_index().get("related", {})


def load_reading() -> dict:
    return _load_index().get("reading", {})
