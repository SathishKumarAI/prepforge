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
import math
import os
import re
from collections import Counter
from pathlib import Path

import httpx

log = logging.getLogger("ingest")

BASE = Path(__file__).parent
LIBRARY = BASE / "content" / "library"
OUT = BASE / "content" / "generated.json"

TOPICS = ["AI", "Machine Learning", "Data Science", "Data Analytics"]
_HEADING = re.compile(r"^(#{1,3})\s+(.*)$", re.MULTILINE)
_WORD = re.compile(r"[a-zA-Z][a-zA-Z0-9-]{2,}")
MAX_TAGS = 6

# One stop list for the whole module — keywords, quiz distractors and cloze blanks
# all need the same "this word is not a subject" judgement. Kept wide on purpose:
# question-bank prose is full of second-person instruction ("you would", "they say").
STOPWORDS = {
    "a", "an", "the", "and", "or", "but", "if", "then", "than", "that", "this", "these", "those",
    "for", "with", "without", "from", "into", "onto", "over", "under", "about", "across", "of",
    "to", "in", "on", "at", "by", "as", "is", "are", "was", "were", "be", "been", "being",
    "do", "does", "did", "done", "doing", "can", "could", "will", "would", "should", "shall",
    "may", "might", "must", "have", "has", "had", "you", "your", "yours", "they", "them", "their",
    "we", "our", "it", "its", "he", "she", "his", "her", "who", "whom", "whose",
    "what", "which", "when", "where", "why", "how", "here", "there", "some", "any", "all", "each",
    "both", "other", "others", "such", "only", "also", "more", "most", "much", "many", "very",
    "explain", "describe", "difference", "between", "using", "use", "used", "make", "makes",
    "need", "needs", "want", "get", "gets", "give", "given", "take", "like", "just", "one", "two",
    "notes", "note", "example", "examples", "way", "ways", "thing", "things", "good", "bad",
    "new", "old", "same", "different", "first", "second", "next", "last", "see", "know", "think",
    # difficulty labels: every DSA table repeats them, they say nothing about the subject
    "easy", "medium", "hard",
}

# Public question banks (the GitHub repos people clone into the library) hide answers
# behind `<details><summary>Answer</summary>…</details>` and number their headings.
# Left in, the wrapper becomes the first sentence of the card — which is also the quiz
# gloss — so every generated quiz would read "detailssummary Answer". Strip at the split,
# the one point every ingest mode goes through.
_HTML_WRAPPER = re.compile(r"</?(?:details|summary|b|i|em|strong|div|p|br|img|kbd)\b[^>]*>", re.I)
_ANSWER_LEAD = re.compile(r"^\s*(?:answer|solution)\s*:?\s*\n+", re.I)
_LEAD_NUM = re.compile(r"^\d+[.)]\s+")
_LEAD_NUM_DASH = re.compile(r"^\d+[-_. ]+")
_FENCE = re.compile(r"```.*?```", re.DOTALL)
# Navigation and legal sections — real headings, but nothing to recall.
_SKIP_HEADINGS = {
    "table of contents", "contents", "toc", "references", "further reading", "license",
    "contributing", "acknowledgements", "acknowledgments", "star history", "index",
}
# Whole files that ship with every repo and teach nothing. Cloning a repo used to
# put "Explain: Reporting a bug" in the quiz rotation.
_SKIP_FILES = {
    "license", "license_mit", "license_apache", "code_of_conduct", "contributing",
    "changelog", "security", "pull_request_template", "issue_template", "bug_report",
    "feature_request", "notice", "authors", "codeowners",
}
_SKIP_DIRS = {".github", ".git", "node_modules", ".venv"}


# Answers are shown in full on the card. 6000 chars covers ~99% of sections whole;
# anything longer is still readable end-to-end by opening its source document.
ANSWER_CHARS = 6000

# "Go deeper" links: the outbound URLs an author already curated in the section.
# Markdown links only — bare URLs in these repos are mostly badges and images.
_MD_LINK = re.compile(r"(?<!!)\[([^\]\n]{2,90})\]\((https?://[^\s)]+)\)")
_LINK_NOISE = ("shields.io", "badge", "githubusercontent.com", "/stargazers", "/fork",
               "twitter.com/intent", "buymeacoffee", "patreon.com")
MAX_LINKS = 8


_PROFILE_HOSTS = {"github.com", "www.github.com", "gitlab.com", "linkedin.com",
                  "www.linkedin.com", "x.com", "twitter.com", "www.twitter.com"}


def _is_profile_link(url: str) -> bool:
    """A bare profile/org page (github.com/someone) — an author credit, not reading."""
    from urllib.parse import urlparse

    p = urlparse(url)
    if p.hostname not in _PROFILE_HOSTS:
        return False
    return len([seg for seg in p.path.split("/") if seg]) <= 1


# Link text that names nothing: "[Answer](url)", "[here](url)". Common in question
# banks, and useless as a reading-list label — those get a title built from the URL.
_GENERIC_LINK_TEXT = {
    "answer", "answers", "solution", "solutions", "here", "link", "links", "this", "that",
    "read", "read more", "more", "source", "sources", "ref", "reference", "click", "click here",
    "doc", "docs", "documentation", "video", "watch", "see", "see here", "detail", "details",
}


def _title_from_url(url: str) -> str:
    """Readable label from a URL: its last path segment, else the host."""
    from urllib.parse import urlparse

    p = urlparse(url)
    host = (p.hostname or url).removeprefix("www.")
    segments = [s for s in p.path.split("/") if s]
    if segments:
        last = re.sub(r"\.(html?|md|pdf|php)$", "", segments[-1]).replace("-", " ").replace("_", " ").strip()
        if len(last) > 2 and not last.isdigit():
            return f"{last[:60]} · {host}"
    return host


def _links(body: str) -> list[dict]:
    """Outbound reading links from a section, deduped, in document order."""
    out: list[dict] = []
    seen: set[str] = set()
    for text, url in _MD_LINK.findall(body):
        url = url.rstrip(".,;")
        if url in seen or any(n in url.lower() for n in _LINK_NOISE):
            continue
        if _is_profile_link(url):  # "follow me on GitHub" is not study material
            continue
        seen.add(url)
        title = " ".join(text.split())
        if title.lower().strip(" :→-") in _GENERIC_LINK_TEXT or len(title) < 3:
            title = _title_from_url(url)
        out.append({"title": title[:90], "url": url})
        if len(out) == MAX_LINKS:
            break
    return out


def _is_boilerplate(rel: Path) -> bool:
    if any(part in _SKIP_DIRS for part in rel.parts):
        return True
    return rel.stem.lower().replace("-", "_") in _SKIP_FILES


def _frontmatter_title(md: str, fallback: str) -> str:
    """Pull `title:` from YAML frontmatter (as written by capture/upload), else
    derive a readable name from the filename."""
    m = re.match(r"^---\s*\n(.*?)\n---\s*\n", md, re.DOTALL)
    if m:
        t = re.search(r'^title:\s*"?(.+?)"?\s*$', m.group(1), re.MULTILINE)
        if t:
            return t.group(1).strip().strip('"')
    p = Path(fallback)
    # "docs/04-rag-and-retrieval/README.md" is titled by its folder, not "Readme".
    stem = p.parent.name if p.stem.lower() in {"readme", "index"} and p.parent.name else p.stem
    stem = _LEAD_NUM_DASH.sub("", stem).replace("-", " ").replace("_", " ").strip()
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
        heading = _LEAD_NUM.sub("", m.group(2).strip().strip("*_` ")).strip()
        start = m.end()
        end = matches[i + 1].start() if i + 1 < len(matches) else len(md)
        body = _ANSWER_LEAD.sub("", _HTML_WRAPPER.sub("", md[start:end]).strip()).strip()
        if heading.lower() in _SKIP_HEADINGS:
            continue
        # Measure the *prose*, not the fences — a section that is only a mermaid or
        # code block has nothing to recall, and made 436 unusable cards on first run.
        if heading and len(_FENCE.sub("", body).strip()) > 40:
            sections.append((heading, body))
    return sections


_URL = re.compile(r"https?://\S+|\b[\w-]+\.(?:com|org|net|io|dev|ai|co)\b")


def tag_text(body: str) -> str:
    """Body prose with URLs and code fences removed — a link's hostname is not a keyword."""
    return _URL.sub(" ", _FENCE.sub(" ", body))


def _tags(heading: str, body: str = "", idf: dict[str, float] | None = None) -> list[str]:
    """Keywords for a card: the heading's own words first (precise, human-chosen),
    then the body's most distinctive terms by TF-IDF. Heading-only tagging produced
    `#you`, `#would`, `#they` — words that say nothing about the subject."""
    tags = [w for w in _WORD.findall(heading.lower()) if w not in STOPWORDS and len(w) > 2][:3]
    if idf:
        counts = Counter(
            t.strip(".-#+") for t in _QTOKEN.findall(tag_text(body).lower())
            if t not in STOPWORDS and len(t) > 3 and not t.isdigit()
        )
        # A word used once is usually incidental ("homework", "surprisingly"). Require a
        # repeat, and only fall back to single mentions if the section is too short to repeat.
        repeated = {t: c for t, c in counts.items() if c > 1 and t not in STOPWORDS and len(t) > 3}
        pool = repeated or counts
        for term, _score in sorted(pool.items(), key=lambda kv: -(kv[1] * idf.get(kv[0], 1.0))):
            if term and term not in tags:
                tags.append(term)
            if len(tags) >= MAX_TAGS:
                break
    return tags[:MAX_TAGS] or ["notes"]


def _card_id(source: str, heading: str) -> str:
    h = hashlib.sha1(f"{source}:{heading}".encode()).hexdigest()[:10]
    return f"ing_{h}"


def _deterministic_card(
    source: str, topic: str, heading: str, body: str, doc_title: str = "",
    idf: dict[str, float] | None = None,
) -> dict:
    q = heading if heading.endswith("?") else f"Explain: {heading}"
    # "Problem statement" or "Iteration plan" means nothing on a flashcard, and nothing
    # in a quiz stem. Short headings borrow their document's title for context.
    if doc_title and len(heading) < 40 and doc_title.lower() not in heading.lower():
        q += f" — {doc_title}"
    card = {
        "id": _card_id(source, heading),
        "topic": topic,
        "difficulty": "medium",
        "tags": _tags(heading, body, idf),
        "question": q,
        "answer": body[:ANSWER_CHARS],
        "truncated": len(body) > ANSWER_CHARS,  # the card says "open the source" when true
        "source_file": source,
        # no quiz for deterministic cards; Quiz mode simply skips them
    }
    links = _links(body)
    if links:
        card["links"] = links
    return card


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


# ---- lightweight TF-IDF over the card set: near-miss distractors *and* keywords ----
_QTOKEN = re.compile(r"[a-z0-9][a-z0-9+#.-]{1,}")


def _card_tokens(card: dict) -> list[str]:
    text = (card.get("question", "") + " " + _first_sentence(card.get("answer", ""), 200)).lower()
    toks = [t for t in _QTOKEN.findall(text) if t not in STOPWORDS and len(t) > 2]
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
    cands = [w for w in words if w.lower() not in STOPWORDS and len(w) > 3]
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


def _subject(card: dict) -> str:
    """The thing a card is about — its heading, minus the 'Explain:' scaffolding."""
    q = (card.get("question", "") or "").strip()
    q = re.sub(r"^(explain|describe|what is|define)\b[:\s]*", "", q, flags=re.IGNORECASE)
    return q.rstrip("?").strip()


def _cloze_quiz(card: dict, ranked: list[dict], h: int, correct_index: int) -> dict | None:
    cz = _cloze(card, h)
    if not cz:
        return None
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
    if len(wrongs) < 3:
        return None
    choices = wrongs[:]
    choices.insert(correct_index, term)
    return {"choices": choices, "correctIndex": correct_index, "kind": "cloze", "prompt": prompt}


def _true_false_quiz(card: dict, ranked: list[dict], h: int) -> dict | None:
    """True/false by *construction*, so the label is always right with no model:
    pair the subject with its own gloss (true) or a dissimilar card's gloss (false)."""
    subject = _subject(card)
    own = _first_sentence(card.get("answer", ""))
    if len(subject) < 3 or len(own) < 20:
        return None
    if h % 2 == 0:  # TRUE statement
        return {"choices": ["True", "False"], "correctIndex": 0, "kind": "truefalse",
                "prompt": f"True or false — “{subject}” can be described as: {own}"}
    # FALSE statement: borrow a *least*-similar card's gloss (reliably a different concept)
    for o in reversed(ranked):
        g = _first_sentence(o.get("answer", ""))
        if len(g) >= 20 and g != own:
            return {"choices": ["True", "False"], "correctIndex": 1, "kind": "truefalse",
                    "prompt": f"True or false — “{subject}” can be described as: {g}"}
    return None


def _spot_wrong_quiz(card: dict, ranked: list[dict], h: int, wrong_index: int) -> dict | None:
    """"Which statement is wrong?" — 3 cards paired with their own gloss (true) plus
    one card paired with a mismatched gloss (false); the answer is the false one."""
    subjects = [(card, own) for own in [_first_sentence(card.get("answer", ""))] if len(own) >= 20]
    if not subjects:
        return None
    picks = [card]
    for o in ranked:
        if len(_first_sentence(o.get("answer", ""))) >= 20:
            picks.append(o)
        if len(picks) == 4:
            break
    if len(picks) < 4:
        return None
    stmts: list[str] = []
    for idx, c in enumerate(picks):
        subj = _subject(c)
        if not subj:
            return None
        if idx == wrong_index:
            # mismatch: pair this subject with a different pick's gloss → false
            donor = picks[(idx + 1) % len(picks)]
            gloss = _first_sentence(donor.get("answer", ""))
        else:
            gloss = _first_sentence(c.get("answer", ""))
        stmts.append(f"{subj}: {gloss}")
    if len(set(stmts)) < 4:
        return None
    return {"choices": stmts, "correctIndex": wrong_index, "kind": "spotwrong",
            "prompt": "Which statement is INCORRECT?"}


def _synthesize_quiz(card: dict, others: list[dict], vec: dict, norm: dict) -> dict | None:
    """Zero-token quiz for a card that has none. Deterministic (seeded by card id),
    no model. Distractors are the *most similar* other cards (TF-IDF near-miss).
    Four kinds, chosen by hash — all with labels correct by construction:

    - mcq: "which one-line description matches this?" (distractors = near-miss glosses)
    - cloze: fill in the blanked key term
    - truefalse: subject paired with its own gloss (true) or a dissimilar one (false)
    - spotwrong: four subject:gloss statements, one deliberately mismatched
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

    # kind rotation by hash; each falls through to mcq if it can't build cleanly
    kind = h % 5
    if kind == 0:
        q = _cloze_quiz(card, ranked, h, correct_index)
        if q:
            return q
    elif kind == 1:
        q = _true_false_quiz(card, ranked, h)
        if q:
            return q
    elif kind == 2 and len(ranked) >= 3:
        q = _spot_wrong_quiz(card, ranked, h, correct_index)
        if q:
            return q

    # definition-match (default / fallback)
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

    # Pass 1 — read every section. Keywords need to know what is *distinctive*, and
    # that is only knowable once the whole corpus has been seen.
    titles: dict[str, str] = {}  # source_file → readable title (for the source picker)
    sections: list[tuple[str, str, str, str]] = []  # (source, topic, heading, body)
    df: Counter = Counter()
    for f in files:
        if _is_boilerplate(f.relative_to(LIBRARY)):
            continue
        source = str(f.relative_to(LIBRARY))
        topic = _infer_topic(f.relative_to(LIBRARY))
        md = f.read_text(encoding="utf-8", errors="ignore")
        titles[source] = _frontmatter_title(md, source)
        for heading, body in _split_sections(md):
            sections.append((source, topic, heading, body))
            df.update({t for t in _QTOKEN.findall(tag_text(body).lower()) if t not in STOPWORDS and len(t) > 3})

    n_sections = max(len(sections), 1)
    idf = {term: math.log(n_sections / (1 + freq)) + 1.0 for term, freq in df.items()}

    # Pass 2 — build the cards.
    cards: list[dict] = []
    model_cards = 0
    try:
        for source, topic, heading, body in sections:
            card = None
            if use_claude:
                card = _llm_card(client, key, source, topic, heading, body)
            elif use_ollama:
                card = _ollama_card(client, ollama_model, source, topic, heading, body)
            if card is None:
                card = _deterministic_card(source, topic, heading, body, titles[source], idf)
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
