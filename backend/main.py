"""PrepForge backend — FastAPI. Serves the Q&A bank and the aggregated resource feed."""
from __future__ import annotations

import hashlib
import json
import logging
from pathlib import Path

import yaml
from fastapi import FastAPI, File, Form, Request, Response, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from fastapi.middleware.gzip import GZipMiddleware

try:
    from dotenv import load_dotenv  # optional
    load_dotenv()
except Exception:
    pass

import capture as capture_mod
import generate as generate_mod
import ingest as ingest_mod
import pipeline as pipeline_mod
import sources as sources_mod
import vault as vault_mod
from scrapers import html as html_scraper
from scrapers import rss as rss_scraper
from scrapers import youtube as yt_scraper

logging.basicConfig(level=logging.INFO, format="%(levelname)s %(name)s: %(message)s")
log = logging.getLogger("prepforge")

BASE = Path(__file__).parent
CONTENT = BASE / "content"
# Where generated answers are cached. Named here because the bank's version
# depends on it: see `_bank_stamp` and `_fill_missing_answers`.
ANSWERS_DIR = generate_mod.ANSWERS_DIR
DATA = BASE / "data"
CONFIG = BASE / "config" / "sources.yaml"
DATA.mkdir(exist_ok=True)

app = FastAPI(title="PrepForge API", version="1.0")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)
# Everything this API returns is JSON, and JSON of this shape — the same twenty
# keys repeated 18,000 times — is the best case there is for deflate. Measured on
# the real bank: /questions 33.1 MB -> 7.76 MB, /questions/index 3.07 MB ->
# 508 kB. Added AFTER CORS so it sits outside it and compresses the final body.
# minimum_size skips the many sub-kB replies, where the header costs more than
# the saving.
app.add_middleware(GZipMiddleware, minimum_size=1024)


def _read_bank(path: Path) -> list[dict]:
    if not path.exists():
        return []
    data = json.loads(path.read_text(encoding="utf-8"))
    return data.get("questions", data if isinstance(data, list) else [])


def _origin(q: dict, kind: str) -> dict:
    """Where this question came from, for every question — the curated bank, a cloned
    repo, an uploaded doc, or the vault. Shown on the card so provenance is never a guess."""
    if kind == "curated":
        return {"kind": "curated", "label": "PrepForge bank"}
    if kind == "vault":
        return {"kind": "vault", "label": "Obsidian vault"}
    src = (q.get("source_file") or "").replace("\\", "/")
    collection = src.split("/")[0] if "/" in src else ""
    return {"kind": "library", "label": collection or "Captured pages"}


_BANK_FILES = ("questions.json", "generated.json", "vault_questions.json", "related.json")

# Assembled bank, keyed by the mtimes of the files it was built from.
_bank_cache: tuple[tuple[float, ...], list[dict]] | None = None


def _bank_stamp() -> tuple[float, ...]:
    out = []
    for name in _BANK_FILES:
        p = CONTENT / name
        out.append(p.stat().st_mtime if p.exists() else 0.0)
    # The answers directory too, because a question with no answer of its own is
    # answered from a file in there (see `_fill_missing_answers`). Writing one
    # changes the bank, so it has to change the bank's version — the directory's
    # own mtime moves when a file is added or removed, which is exactly the event
    # that matters.
    #
    # The cost, measured: writing ANY answer — including a lens nobody asked this
    # for — bumps the ETag, so the next request re-assembles the bank (0.59s for
    # 18,284 questions) and every client revalidates its index. That is one slow
    # request per generation, and generation happens on a hover a few times a
    # session. A narrower marker would be more precise and one more mechanism to
    # keep true; revisit if generation ever becomes continuous.
    out.append(ANSWERS_DIR.stat().st_mtime if ANSWERS_DIR.exists() else 0.0)
    return tuple(out)


def _bank_etag() -> str:
    """A version for the bank, derived from the same mtimes the caches key on.

    So `POST /ingest` and `POST /pipeline/build` bump it by doing their job, and
    nothing has to remember to invalidate anything.
    """
    return '"' + hashlib.sha1(repr(_bank_stamp()).encode()).hexdigest()[:16] + '"'


def _not_modified(request: Request | None, response: Response | None) -> Response | None:
    """Stamp the reply with the bank's ETag; return a 304 if the client has it.

    `no-cache` is not "do not cache" — it is "cache it, but ask me first". The
    browser keeps the body and revalidates, so an unchanged bank costs one
    conditional request and no payload at all instead of 7.76 MB. Which matters
    because the bank changes on ingest, not on a timer, so any max-age is either
    too short to help or long enough to serve stale cards.

    Both arguments are optional so the route functions stay directly callable
    from the test files, which have no Request to hand.
    """
    etag = _bank_etag()
    if request is not None and request.headers.get("if-none-match") == etag:
        return Response(status_code=304, headers={"ETag": etag, "Cache-Control": "no-cache"})
    if response is not None:
        response.headers["ETag"] = etag
        response.headers["Cache-Control"] = "no-cache"
    return None


def _load_questions() -> list[dict]:
    """The whole bank, assembled once and kept until a source file changes.

    Every route calls this, and it re-read and re-joined ~40 MB of JSON on each
    one. That was tolerable while the only caller that mattered fetched the bank
    once per page load; it is not tolerable now that a search runs on the server,
    where it costs 1.2s per keystroke.

    Keyed on mtimes rather than a TTL, so `POST /ingest` and `POST /pipeline/build`
    invalidate it by doing their job — nothing has to remember to clear it.
    """
    global _bank_cache
    stamp = _bank_stamp()
    if _bank_cache and _bank_cache[0] == stamp:
        return _bank_cache[1]
    qs = _assemble_questions()
    _bank_cache = (stamp, qs)
    return qs


def _assemble_questions() -> list[dict]:
    # curated bank + ingested markdown + source-tagged vault questions
    banks = (
        ("curated", _read_bank(CONTENT / "questions.json")),
        ("library", _read_bank(CONTENT / "generated.json")),
        ("vault", _read_bank(CONTENT / "vault_questions.json")),
    )
    qs: list[dict] = []
    for kind, bank in banks:
        for q in bank:
            q["origin"] = _origin(q, kind)
            qs.append(q)
    qs = _real_questions(qs)
    _fill_missing_answers(qs)
    # attach the zero-token related + reading indexes, if built
    related = pipeline_mod.load_related()
    reading = pipeline_mod.load_reading()
    for q in qs:
        qid = q.get("id", "")
        if related.get(qid):
            q["related"] = related[qid]
        if reading.get(qid):
            q["reading"] = reading[qid]
    return qs


def _real_questions(qs: list[dict]) -> list[dict]:
    """Drop the cards that are not questions, and tidy the ones carrying an
    outline number.

    133 cards in the bank began mid-sentence — "and how can it be improved?",
    "pervised machine learning?" — because a splitter cut a question in half and
    wrote the tail as its own card. Every one had an answer, so nothing flagged
    them; they read as ordinary cards until you look at the first three words.
    57 more carried the document's section number ("10).What are…").

    Filtered here rather than only in `ingest`, because the cards are already
    written: `generated.json` and `vault_questions.json` are derived files, and
    re-deriving them means re-running an ingest over the whole library. The rule
    itself lives in `ingest` — one definition, called from both ends.
    """
    out = []
    for q in qs:
        tidy = ingest_mod.usable_question(q.get("question", ""))
        if not tidy:
            continue
        if tidy != q.get("question"):
            q["question"] = tidy
        out.append(q)
    return out


def _fill_missing_answers(qs: list[dict]) -> None:
    """Answer, from a generated file, the questions that arrived without one.

    99 questions came out of a vault with a question and no answer. `has_answer`
    is false for them, so Study skips them and the Answer tab is blank — they are
    cards nobody can learn from. `answer_missing.py` writes an answer for each
    with the local model; this is the half that makes it visible.

    Only ever FILLS a gap: a question that has an answer keeps it, so nothing
    curated or ingested can be shadowed by a machine-written file. The answer
    text carries its own "written by … not reviewed" line, added at generation —
    see `generate.MACHINE_NOTE` — so a reader is never told a 20B model's answer
    is the bank's.
    """
    if not ANSWERS_DIR.exists():
        return
    for q in qs:
        if (q.get("answer") or "").strip():
            continue
        path = generate_mod.local_answer_path(q.get("id", ""))
        if not path.exists():
            continue
        got = generate_mod._read_answer(path.stem)
        if got and got.get("answer"):
            q["answer"] = got["answer"]
            q["answer_origin"] = "local-model"


def _load_resources() -> list[dict]:
    f = DATA / "resources.json"
    if not f.exists():
        return []
    return json.loads(f.read_text(encoding="utf-8")).get("resources", [])


@app.get("/health")
def health():
    return {"status": "ok", "questions": len(_load_questions()), "resources": len(_load_resources())}


@app.get("/questions")
def questions(request: Request = None, response: Response = None):
    stale = _not_modified(request, response)
    if stale is not None:
        return stale
    qs = _load_questions()
    topics = sorted({q["topic"] for q in qs})
    return {"questions": qs, "topics": topics, "count": len(qs)}


INDEX_FIELDS = ("id", "question", "topic", "difficulty")


@app.get("/questions/index")
def questions_index(request: Request = None, response: Response = None):
    """Titles only — what a jump box needs, without the 15 MB.

    GET /questions carries every answer, source and related list: ~15 MB, and
    the palette needs four fields per row. Declared ABOVE /questions/{qid} on
    purpose — FastAPI matches in definition order, and below it "index" would be
    read as a question id.

    Two booleans ride along: whether the question has an answer and whether it
    has a multiple-choice payload. They are what Study's mode eligibility turns
    on, and they are the whole reason it can plan a session from this projection
    instead of the bank — the presence of a 900-word answer, not the answer.
    Measured: +11,668 B gzipped on 18,284 rows, against the 38 MB they replace.
    """
    stale = _not_modified(request, response)
    if stale is not None:
        return stale
    qs = _load_questions()
    rows = [
        {
            **{k: q.get(k, "") for k in INDEX_FIELDS},
            "has_answer": bool(q.get("answer")),
            "has_quiz": bool(q.get("quiz")),
        }
        for q in qs
    ]
    return {"questions": rows, "count": len(rows)}


def _with_related(q: dict, by_id: dict[str, dict]) -> dict:
    """A question whose `related` entries carry enough to render a link.

    The pipeline writes `related` as `[{id, score}]` — ids alone, which was fine
    while the client held the whole bank and could look each one up. It no longer
    does. Each entry is ADDED to, never replaced, so a call site that still
    resolves by id keeps working, and an id that no longer exists is dropped
    rather than rendered as a blank row.
    """
    rel = q.get("related")
    if not rel:
        return q
    return {
        **q,
        "related": [
            {**r, **{k: by_id[r["id"]].get(k, "") for k in INDEX_FIELDS}}
            for r in rel
            if r.get("id") in by_id
        ],
    }


@app.get("/questions/batch")
def questions_batch(ids: str = "", expand: str = ""):
    """The handful of whole questions a study session is actually about.

    Declared ABOVE /questions/{qid} for the third time and the same reason —
    FastAPI matches in definition order, so below it "batch" is a question id.

    Returned in the order they were ASKED for, not bank order. Study interleaves
    its queue across topics so two consecutive cards are rarely alike, and a
    route that quietly re-sorted would undo that with no visible symptom beyond
    a session that feels repetitive.

    Unknown ids are skipped rather than erroring: a bank rebuilt between planning
    a session and starting it should cost you the card, not the session.
    """
    wanted = [i for i in ids.split(",") if i]
    if not wanted:
        return {"questions": []}
    by_id = {q.get("id"): q for q in _load_questions()}
    found = [by_id[i] for i in wanted if i in by_id]
    # `expand=related` is opt-in, not the default, because the two callers want
    # different things. Saved renders a Related section under every card and
    # needs it; Study fetches up to 40 cards it will show one at a time and does
    # not, and expanding there would add ~6 objects per card to a payload whose
    # whole point is that it is small.
    if "related" in {p.strip() for p in expand.split(",")}:
        found = [_with_related(q, by_id) for q in found]
    return {"questions": found, "count": len(found), "missing": len(wanted) - len(found)}


_search_cache: tuple[tuple[float, ...], list[tuple[dict, str, str]]] | None = None


def _searchable() -> list[tuple[dict, str, str]]:
    """Every question with its title and full text pre-lowercased.

    Lowercasing the answers per request is ~40 MB of string work, which measured
    at 1.1s a call — most of the endpoint's latency, and all of it repeated. Built
    once alongside the bank and invalidated by the same mtime stamp.
    """
    global _search_cache
    stamp = _bank_stamp()
    if _search_cache and _search_cache[0] == stamp:
        return _search_cache[1]
    rows = []
    for q in _load_questions():
        title = (q.get("question") or "").lower()
        hay = " ".join(
            (title, (q.get("answer") or "").lower(), " ".join(q.get("tags") or []).lower(), (q.get("topic") or "").lower())
        )
        rows.append((q, title, hay))
    _search_cache = (stamp, rows)
    return rows


def _snippet(answer: str, terms: list[str], width: int = 160) -> str:
    """The line the match was found on, not the first line of the answer.

    A result list that shows every card's opening sentence cannot tell you WHY
    the card matched, which for a body search is the only thing you want to know.
    """
    body = " ".join((answer or "").split())
    low = body.lower()
    at = min((low.find(t) for t in terms if low.find(t) >= 0), default=-1)
    if at < 0:
        return body[:width]
    start = max(0, at - width // 3)
    return ("…" if start else "") + body[start : start + width] + ("…" if start + width < len(body) else "")


@app.get("/questions/browse")
def questions_browse(
    q: str = "",
    topic: str = "",
    difficulty: str = "",
    limit: int = 200,
    offset: int = 0,
):
    """One round trip for everything Library's questions view puts on screen.

    Declared ABOVE /questions/{qid} for the same reason /questions/index is —
    FastAPI matches in definition order, so below it "browse" is a question id.

    Library used to hold the whole 39.7 MB bank purely so a client-side Fuse
    index could search ANSWER text, which the /index projection does not carry.
    That is the one thing that kept the biggest page in the app on the biggest
    payload. Searching here instead means the client never needs the answers, so
    it returns the rows, the topic list and the "go deeper" links together rather
    than making the page assemble them from three calls.

    Scoring is deliberately not fuzzy. Fuse's edit-distance matching over 19,000
    answers is what made this expensive in the first place, and for a technical
    bank an exact term is what you actually type: "kafka" should not rank
    "krafta" at all.

    Paged on `offset`. The filter's whole result is ordered here and sliced, so a
    page is a window on ONE ranking rather than a fresh query per page — which is
    what stops rows appearing twice or going missing as you scroll.

    `topics` and `links` describe the whole match, not the page, so they ride
    along only on the FIRST page. Resending 200 links with page four is 40 kB of
    something the client already has and would only overwrite with itself.
    """
    terms = [t for t in q.lower().split() if t]
    rows: list[tuple[int, dict]] = []
    for item, title, hay in _searchable():
        if topic and item.get("topic") != topic:
            continue
        if difficulty and item.get("difficulty") != difficulty:
            continue
        if not terms:
            rows.append((0, item))
            continue
        # AND across terms: every word you typed has to appear somewhere.
        if not all(t in hay for t in terms):
            continue
        # A term in the title is worth more than the same term buried in a
        # 900-word answer, and the whole phrase in the title outranks both.
        score = sum(3 for t in terms if t in title) + len(terms)
        if q.lower().strip() in title:
            score += 5
        rows.append((score, item))

    total = len(rows)
    if terms:
        rows.sort(key=lambda pair: -pair[0])

    # limit=0 asks only "how many, and what topics are there" — the orient bar's
    # question. Skipping the rows AND the link aggregation makes that a ~1 kB
    # answer instead of a 60 kB one nobody reads.
    if limit <= 0:
        return {
            "questions": [],
            "total": total,
            "offset": 0,
            "has_more": False,
            "topics": sorted({i["topic"] for i in _load_questions() if i.get("topic")}),
            "links": [],
            "link_count": 0,
        }

    offset = max(0, offset)
    page = rows[offset : offset + limit]
    out = []
    for score, item in page:
        row = {k: item.get(k, "") for k in INDEX_FIELDS}
        # The list shows a provenance icon per row, which /questions/index does
        # not carry — the palette has no use for it and 19,000 copies of it is a
        # quarter of that payload. Here the page is capped at `limit` rows.
        row["origin"] = item.get("origin")
        # Same reasoning for tags: they are what the learning graph draws its
        # prerequisite edges from, and 19,000 copies of them is 1.2 MB on the
        # index — but a capped page of them is a few kB, so they ride here.
        row["tags"] = item.get("tags") or []
        if terms:
            row["snippet"] = _snippet(item.get("answer") or "", terms)
        out.append(row)

    page_only = {
        "questions": out,
        "total": total,
        "offset": offset,
        "has_more": offset + len(out) < total,
    }
    # Everything below describes the whole match rather than this slice of it, so
    # a later page does not carry it. Walking 19,000 questions' link arrays to
    # rebuild a list the client already holds is the expensive half of this
    # endpoint, and page four has no use for the answer.
    if offset > 0:
        return page_only

    # Every "go deeper" link the MATCHED questions cite, deduped and ranked by
    # how many of them cite it. Borrowed links (`via`) are already counted under
    # the question they came from, so counting them again would inflate.
    links: dict[str, dict] = {}
    for _, item in rows:
        cited = list(item.get("links") or []) + [
            l for l in (item.get("reading") or []) if not l.get("via")
        ]
        for link in cited:
            url = link.get("url")
            if not url:
                continue
            hit = links.get(url)
            if hit:
                hit["count"] += 1
            else:
                links[url] = {**link, "count": 1}
    ranked = sorted(links.values(), key=lambda l: (-l["count"], l.get("title") or ""))

    all_qs = _load_questions()
    return {
        **page_only,
        "topics": sorted({item["topic"] for item in all_qs if item.get("topic")}),
        "links": ranked[:200],
        "link_count": len(ranked),
    }


@app.get("/questions/{qid}")
def question(qid: str):
    """One question, with its related list expanded enough to render.

    `related` from the pipeline is `[{id, score}]` — ids alone, which used to be
    fine because the client held the whole bank and could look each one up. It
    no longer does, so each entry is ADDED to (never replaced), carrying the
    four index fields alongside the id and score. Call sites that still resolve
    by id keep working.
    """
    qs = _load_questions()
    for q in qs:
        if q.get("id") == qid:
            return _with_related(q, {x.get("id"): x for x in qs})
    return {"error": "not found"}


@app.get("/resources")
def resources():
    res = _load_resources()
    return {"resources": res, "count": len(res)}


from pydantic import BaseModel


class GenerateReq(BaseModel):
    question: str
    topic: str = "AI"
    persona: str = ""
    qid: str = ""
    mode: str = "deep"  # "deep" (grounded) or "star" (STAR interview answer)


@app.post("/generate/answer")
def generate_answer(req: GenerateReq):
    """Answer + metadata. Cache-first (reads content/answers/*.md), no API call on a hit."""
    return generate_mod.generate(req.question, req.topic, req.persona, req.qid, req.mode)


@app.get("/generate/providers")
def generate_providers():
    """Which lenses cost nothing right now. The UI generates those on hover and
    keeps the press-to-confirm gate on the ones that bill. Reflects whether
    LM Studio is running at the moment it is asked, not at startup."""
    return {"local_model": generate_mod.local_model(), "free_modes": generate_mod.free_modes()}


@app.get("/generate/cached/{qid}")
def generate_cached(qid: str):
    """Which lenses this question already has on disk. Those cost nothing to
    open no matter which provider is up, so the UI can stop marking them."""
    return {"qid": qid, "cached_modes": generate_mod.cached_modes(qid)}


class CaptureReq(BaseModel):
    url: str
    topic: str = "AI"
    title: str = ""
    selection: str = ""


@app.post("/resources/add")
def add_resource(req: CaptureReq):
    """Add one resource by URL (manual paste or browser extension). Scrapes title/summary."""
    return capture_mod.capture(req.url, req.topic, req.title, req.selection)


class ReadReq(BaseModel):
    url: str
    topic: str = "AI"
    title: str = ""


@app.post("/resources/read")
def read_resource(req: ReadReq):
    """Fetch a resource's readable content as markdown + save it to content/library."""
    return capture_mod.read(req.url, req.topic, req.title)


@app.post("/resources/upload")
async def upload_resource(file: UploadFile = File(...), topic: str = Form("AI")):
    """Upload a local PDF / .md / .txt → extract markdown → save to library + feed."""
    data = await file.read()
    return capture_mod.upload(file.filename or "file", data, topic)


@app.post("/reader/pdf-text")
async def reader_pdf_text(file: UploadFile = File(...)):
    """A PDF's text, extracted and returned — and NOT saved anywhere.

    The Reader hands a local PDF to the browser's own viewer, which is a plugin
    document: the app cannot see inside it, so selecting a passage there reaches
    nothing. Highlight-to-card, the contents list and search all stop at the
    iframe boundary.

    This is the same pypdf extraction the library upload already runs — the
    difference is the whole point: `POST /resources/upload` SAVES the file into
    the library, and the Reader's contract is that reading something does not
    add it to anything. So the bytes are read, turned into Markdown, returned,
    and forgotten.
    """
    data = await file.read()
    if not data:
        return {"error": "empty", "message": "That file had no bytes."}
    try:
        md = capture_mod._pdf_to_markdown(data)
    except Exception as exc:
        log.warning("pdf text extraction failed: %s", exc)
        return {"error": "unreadable", "message": "Could not read that PDF — it may be scanned images."}
    if not md.strip():
        # A scanned PDF is pages of pictures. Saying so beats an empty page that
        # looks like the feature is broken.
        return {
            "error": "no_text",
            "message": "No text layer in that PDF — it is probably scanned images. The original still reads in the viewer.",
        }
    return {"markdown": md, "chars": len(md)}


class FeedReq(BaseModel):
    url: str
    name: str = ""
    topic: str = "AI"


@app.post("/sources/feed")
def add_feed(req: FeedReq):
    """Append an RSS/Atom feed (e.g. a Substack: yourpub.substack.com/feed) to sources.yaml.

    Paywalled Substack posts only expose free/preview text in the feed; full paid content
    needs your logged-in session and isn't fetched here.
    """
    url = (req.url or "").strip()
    if not url.startswith(("http://", "https://")):
        return {"error": "bad_url", "message": "Provide a full http(s) feed URL."}
    # helpfully complete a bare Substack URL to its feed
    if "substack.com" in url and "/feed" not in url:
        url = url.rstrip("/") + "/feed"

    cfg = yaml.safe_load(CONFIG.read_text(encoding="utf-8")) if CONFIG.exists() else {}
    cfg = cfg or {}
    feeds = cfg.get("rss") or []
    if any((f or {}).get("url") == url for f in feeds):
        return {"ok": True, "message": "Feed already added.", "url": url}
    feeds.append({"name": req.name.strip() or url, "url": url, "topic": req.topic})
    cfg["rss"] = feeds
    CONFIG.write_text(yaml.safe_dump(cfg, sort_keys=False, allow_unicode=True), encoding="utf-8")
    return {"ok": True, "message": "Feed added — hit Refresh to pull posts.", "url": url, "count": len(feeds)}


@app.get("/library")
def library():
    """List the user's ingestable markdown files."""
    lib = CONTENT / "library"
    lib.mkdir(parents=True, exist_ok=True)
    files = [str(p.relative_to(lib)) for p in sorted(lib.rglob("*.md"))]
    generated = _read_bank(CONTENT / "generated.json")
    return {"files": files, "ingested_cards": len(generated)}


@app.get("/sources")
def list_sources():
    """The library as collections — each cloned repo plus captured pages, with counts."""
    return sources_mod.collections()


class GithubSourceReq(BaseModel):
    url: str


@app.post("/sources/github")
def add_github_source(req: GithubSourceReq):
    """Clone a public Markdown repo into the library and ingest it into cards.

    Zero-token: the deterministic tier does the parsing. An already-cloned repo is
    reported, not re-cloned, so this is safe to hit twice.
    """
    result = sources_mod.clone(req.url)
    if result.get("error"):
        return result
    ingested = ingest_mod.ingest("deterministic")
    try:
        pipeline_mod.build_related()
    except Exception as exc:
        log.warning("related build after repo ingest failed: %s", exc)
    # ingest rebuilds the whole library, so report *this repo's* share, not the total
    mine = next((c for c in sources_mod.collections()["collections"] if c["name"] == result["name"]), {})
    return {**result, "cards": mine.get("cards", 0), "library_cards": ingested.get("cards")}


@app.post("/ingest")
def run_ingest(mode: str = "deterministic"):
    """Parse library markdown into Q&A cards. mode: deterministic | ollama | claude."""
    return ingest_mod.ingest(mode)


@app.post("/pipeline/build")
def pipeline_build():
    """Build the zero-token related-questions memory index (TF-IDF, no LLM)."""
    return pipeline_mod.build_related()


class LibraryReadReq(BaseModel):
    path: str


@app.post("/library/read")
def library_read(req: LibraryReadReq):
    """Read one ingested library document (by library-relative path) as markdown."""
    return capture_mod.library_read(req.path)


class VideoQuizReq(BaseModel):
    url: str
    topic: str = "AI"


def _quiz_from_url(url: str, topic: str) -> dict:
    """Any URL (YouTube video → transcript, or article → readable text) → library
    markdown → ingest (zero-token MCQ synthesis) → related index. Returns the
    source path so the quiz can be scoped to just that resource. No API key."""
    saved = capture_mod.read(url, topic)
    if saved.get("error"):
        return saved
    result = ingest_mod.ingest("deterministic")
    try:
        pipeline_mod.build_related()
    except Exception as exc:
        log.warning("related build after resource ingest failed: %s", exc)
    return {
        "ok": True,
        "title": saved.get("title"),
        "source_path": (saved.get("saved") or "").replace("content/library/", ""),
        "cards": result.get("cards"),
        "synth_quizzes": result.get("synth_quizzes"),
    }


@app.post("/quiz/from_video")
def quiz_from_video(req: VideoQuizReq):
    """YouTube URL → quizzable questions from that video (see _quiz_from_url)."""
    return _quiz_from_url(req.url, req.topic)


@app.post("/quiz/from_resource")
def quiz_from_resource(req: VideoQuizReq):
    """Any resource URL (article or video) → quizzable questions from it."""
    return _quiz_from_url(req.url, req.topic)


@app.post("/vault/ingest")
def vault_ingest():
    """Scan the Obsidian vault (config/vault.yaml) → deduped, source-tagged questions."""
    return vault_mod.ingest()


class VaultReadReq(BaseModel):
    path: str


@app.post("/vault/read")
def vault_read(req: VaultReadReq):
    """Read one vault source document (by vault-relative path) as markdown."""
    return vault_mod.read_source(req.path)


@app.post("/scrape/refresh")
def refresh():
    """Run all configured scrapers, merge, dedupe by id, persist to data/resources.json."""
    cfg = yaml.safe_load(CONFIG.read_text(encoding="utf-8")) if CONFIG.exists() else {}
    collected: list[dict] = []
    collected += rss_scraper.scrape(cfg.get("rss", []) or [])
    collected += yt_scraper.scrape(cfg.get("youtube", []) or [])
    collected += html_scraper.scrape(cfg.get("html", []) or [])

    seen, deduped = set(), []
    for r in collected:
        rid = r.get("id") or r.get("url")
        if rid and rid not in seen:
            seen.add(rid)
            deduped.append(r)

    (DATA / "resources.json").write_text(
        json.dumps({"resources": deduped}, indent=2, ensure_ascii=False), encoding="utf-8"
    )
    log.info("refresh done: %d resources", len(deduped))
    return {"ok": True, "count": len(deduped)}
