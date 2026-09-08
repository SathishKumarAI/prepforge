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

from hygiene import is_fragment, usable_question  # noqa: E402,F401 — one rule, re-exported for bank and tests
from ingest_words import STOPWORDS, _LEAD_NUM, _QTOKEN  # noqa: E402
from quiz_synth import _add_synthetic_quizzes  # noqa: E402

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

# Public question banks (the GitHub repos people clone into the library) hide answers
# behind `<details><summary>Answer</summary>…</details>` and number their headings.
# Left in, the wrapper becomes the first sentence of the card — which is also the quiz
# gloss — so every generated quiz would read "detailssummary Answer". Strip at the split,
# the one point every ingest mode goes through.
_HTML_WRAPPER = re.compile(r"</?(?:details|summary|b|i|em|strong|div|p|br|img|kbd)\b[^>]*>", re.I)
_ANSWER_LEAD = re.compile(r"^\s*(?:answer|solution)\s*:?\s*\n+", re.I)
_LEAD_NUM_DASH = re.compile(r"^\d+[-_. ]+")
_FENCE = re.compile(r"```.*?```", re.DOTALL)
# Navigation and legal sections — real headings, but nothing to recall.
_SKIP_HEADINGS = {
    "table of contents", "contents", "toc", "references", "further reading", "license",
    "contributing", "acknowledgements", "acknowledgments", "star history", "index",
    # blog footers: the same two sections at the bottom of every KDnuggets page
    "more on this topic", "top posts",
}
# Whole files that ship with every repo and teach nothing. Cloning a repo used to
# put "Explain: Reporting a bug" in the quiz rotation.
_SKIP_FILES = {
    "license", "license_mit", "license_apache", "code_of_conduct", "contributing",
    "changelog", "security", "pull_request_template", "issue_template", "bug_report",
    "feature_request", "notice", "authors", "codeowners",
}
_SKIP_DIRS = {".github", ".git", "node_modules", ".venv"}

# Glossary files index their entries under bare letter headings ("## W"), so the
# split produced 46 cards asking "Explain: W — Glossary" — 26 sections whose only
# shared subject is the alphabet. A heading needs two alphanumerics before it names
# anything: "AI", "ML" and "QA:" clear that bar, "W" and a stray "]" do not.
_NON_ALNUM = re.compile(r"[^0-9A-Za-z]")
MIN_HEADING_ALNUM = 2

# A body that appears verbatim on this many distinct pages is furniture, not material.
# Measured over the 10,763 web-derived cards of the 2026-08-29 ingest: at 3 pages it
# catches 736 cards and every top offender is unambiguous site chrome. Two would sweep
# in the legitimate case of one article split across a part 1 and a part 2.
MIN_DUPLICATE_PAGES = 3


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


def _body_key(body: str) -> str:
    """The comparison form of a section body: case- and whitespace-insensitive.
    Two pages of a site emit the same furniture with different indentation."""
    return " ".join(body.lower().split())


def _drop_repeated_bodies(
    sections: list[tuple[str, str, str, str]], min_pages: int = MIN_DUPLICATE_PAGES
) -> tuple[list[tuple[str, str, str, str]], int]:
    """Drop sections whose body is repeated verbatim across `min_pages` or more
    distinct source files. Returns (kept, dropped).

    `_is_boilerplate` judges a *file* by its name, which is all a cloned repo needs.
    The open web ships its boilerplate inside real articles instead: arXiv puts
    "NASA ADS · Google Scholar" on 154 fetched pages and its arXivLabs blurb on 154
    more, and a consultancy repeats its 15-word pitch on 11 pages. Nothing in the
    filename says so — the repetition is the only signal, and it needs no wordlist
    and generalises to any site.

    Distinct *files*, not occurrences: a template repeated three times inside one
    document is that document's structure, not site furniture.
    """
    pages: dict[str, set[str]] = {}
    for source, _topic, _heading, body in sections:
        pages.setdefault(_body_key(body), set()).add(source)
    kept = [s for s in sections if len(pages[_body_key(s[3])]) < min_pages]
    return kept, len(sections) - len(kept)


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
    # A `# comment` inside a fenced block is code, not a heading. Read over the
    # whole file, the regex split a scraped SQL article into "Explain: max step
    # per user per feature" -- nine-word cards whose body was the rest of the
    # snippet. Headings that start inside a fence are skipped, which is the one
    # rule both Python and shell comments need.
    fences = [(f.start(), f.end()) for f in _FENCE.finditer(md)]
    matches = [
        m for m in _HEADING.finditer(md)
        if not any(a <= m.start() < b for a, b in fences)
    ]
    sections: list[tuple[str, str]] = []
    for i, m in enumerate(matches):
        # `#` in the strip set: KDnuggets renders each heading's anchor as a
        # literal "#" inside the h2, so the text arrives as "# Introduction".
        heading = _LEAD_NUM.sub("", m.group(2).strip().strip("*_`# ")).strip()
        start = m.end()
        end = matches[i + 1].start() if i + 1 < len(matches) else len(md)
        body = _ANSWER_LEAD.sub("", _HTML_WRAPPER.sub("", md[start:end]).strip()).strip()
        if heading.lower() in _SKIP_HEADINGS:
            continue
        if len(_NON_ALNUM.sub("", heading)) < MIN_HEADING_ALNUM:
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
) -> dict | None:
    q = heading if heading.endswith("?") else f"Explain: {heading}"
    # "Problem statement" or "Iteration plan" means nothing on a flashcard, and nothing
    # in a quiz stem. Short headings borrow their document's title for context.
    if doc_title and len(heading) < 40 and doc_title.lower() not in heading.lower():
        q += f" — {doc_title}"
    # The same rule the API applies to the bank, applied where the card is made,
    # so a fragment or an outline number never becomes a card in the first place.
    tidy = usable_question(q)
    if not tidy:
        return None
    card = {
        "id": _card_id(source, heading),
        "topic": topic,
        "difficulty": "medium",
        "tags": _tags(heading, body, idf),
        "question": tidy,
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
    for f in files:
        if _is_boilerplate(f.relative_to(LIBRARY)):
            continue
        source = str(f.relative_to(LIBRARY))
        topic = _infer_topic(f.relative_to(LIBRARY))
        md = f.read_text(encoding="utf-8", errors="ignore")
        titles[source] = _frontmatter_title(md, source)
        for heading, body in _split_sections(md):
            sections.append((source, topic, heading, body))

    # Site furniture goes before the keyword pass, not after: a blurb on 154 pages is
    # 154 documents' worth of document frequency, which is exactly what makes its words
    # look common and drags the IDF of everything it sits beside.
    sections, dropped_repeats = _drop_repeated_bodies(sections)

    df: Counter = Counter()
    for _source, _topic, _heading, body in sections:
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
            # None means the heading did not survive `usable_question` — a
            # fragment, or nothing left once an outline number came off. A
            # section that cannot become a question is not a card.
            if card is not None:
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
        "ingest: %d files → %d cards (mode=%s, model_cards=%d, synth_quizzes=%d, repeated_bodies=%d)",
        len(files), len(deduped), effective, model_cards, synth, dropped_repeats,
    )
    return {
        "files": len(files), "cards": len(deduped), "mode": effective,
        "model_cards": model_cards, "synth_quizzes": synth,
        "dropped_repeated_bodies": dropped_repeats,
    }
