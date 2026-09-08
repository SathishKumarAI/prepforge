"""Routes that WRITE or fetch: generate a lens, add / read / upload a resource,
extract a PDF for the Reader, feeds, the library and its sources, ingest and
the pipeline, quizzes from a URL, the vault, and the scrapers.

The bank routes are in `api_questions.py`; this file never assembles the bank.
"""
from __future__ import annotations

import json
import logging

import yaml
from fastapi import APIRouter, File, Form, UploadFile
from pydantic import BaseModel

import capture as capture_mod
import answer_stats as stats_mod
import generate as generate_mod
import ingest as ingest_mod
import pipeline as pipeline_mod
import sources as sources_mod
import vault as vault_mod
from bank import _read_bank
from paths import CONFIG, CONTENT, DATA
from scrapers import html as html_scraper
from scrapers import rss as rss_scraper
from scrapers import youtube as yt_scraper

log = logging.getLogger("prepforge")
router = APIRouter()


class GenerateReq(BaseModel):
    question: str
    topic: str = "AI"
    persona: str = ""
    qid: str = ""
    mode: str = "deep"  # "deep" (grounded) or "star" (STAR interview answer)
    provider: str = "auto"  # see generate.PROVIDERS
    force: bool = False  # regenerate even though an answer exists; the old one is kept


@router.post("/generate/answer")
def generate_answer(req: GenerateReq):
    """Answer + metadata + every earlier version. Disk-first (reads
    content/answers/*.md), no API call on a hit; `force` writes a NEW file and
    never overwrites — see generate.versions."""
    return generate_mod.generate(req.question, req.topic, req.persona, req.qid, req.mode, req.provider, req.force)


@router.get("/generate/providers")
def generate_providers():
    """Which lenses cost nothing right now. The UI generates those on hover and
    keeps the press-to-confirm gate on the ones that bill. Reflects whether
    LM Studio is running at the moment it is asked, not at startup."""
    return {"local_model": generate_mod.local_model(), "free_modes": generate_mod.free_modes()}


@router.get("/generate/stats")
def generate_stats():
    """Totals over every generated answer on disk — count by lens and by model,
    tokens, cost, an estimated GPU-hours figure with the rate it assumed. The
    first call after the folder changes answers `computing: true` and starts
    the 30 s scan; poll until it does not."""
    return stats_mod.answer_stats()


@router.get("/generate/cached/{qid}")
def generate_cached(qid: str):
    """Which lenses this question already has on disk. Those cost nothing to
    open no matter which provider is up, so the UI can stop marking them."""
    return {"qid": qid, "cached_modes": generate_mod.cached_modes(qid)}


class CaptureReq(BaseModel):
    url: str
    topic: str = "AI"
    title: str = ""
    selection: str = ""


@router.post("/resources/add")
def add_resource(req: CaptureReq):
    """Add one resource by URL (manual paste or browser extension). Scrapes title/summary."""
    return capture_mod.capture(req.url, req.topic, req.title, req.selection)


class ReadReq(BaseModel):
    url: str
    topic: str = "AI"
    title: str = ""


@router.post("/resources/read")
def read_resource(req: ReadReq):
    """Fetch a resource's readable content as markdown + save it to content/library."""
    return capture_mod.read(req.url, req.topic, req.title)


@router.post("/resources/upload")
async def upload_resource(file: UploadFile = File(...), topic: str = Form("AI")):
    """Upload a local PDF / .md / .txt → extract markdown → save to library + feed."""
    data = await file.read()
    return capture_mod.upload(file.filename or "file", data, topic)


@router.post("/reader/pdf-text")
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


@router.post("/sources/feed")
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


@router.get("/library")
def library():
    """List the user's ingestable markdown files."""
    lib = CONTENT / "library"
    lib.mkdir(parents=True, exist_ok=True)
    files = [str(p.relative_to(lib)) for p in sorted(lib.rglob("*.md"))]
    generated = _read_bank(CONTENT / "generated.json")
    return {"files": files, "ingested_cards": len(generated)}


@router.get("/sources")
def list_sources():
    """The library as collections — each cloned repo plus captured pages, with counts."""
    return sources_mod.collections()


class GithubSourceReq(BaseModel):
    url: str


@router.post("/sources/github")
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


@router.post("/ingest")
def run_ingest(mode: str = "deterministic"):
    """Parse library markdown into Q&A cards. mode: deterministic | ollama | claude."""
    return ingest_mod.ingest(mode)


@router.post("/pipeline/build")
def pipeline_build():
    """Build the zero-token related-questions memory index (TF-IDF, no LLM)."""
    return pipeline_mod.build_related()


class LibraryReadReq(BaseModel):
    path: str


@router.post("/library/read")
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


@router.post("/quiz/from_video")
def quiz_from_video(req: VideoQuizReq):
    """YouTube URL → quizzable questions from that video (see _quiz_from_url)."""
    return _quiz_from_url(req.url, req.topic)


@router.post("/quiz/from_resource")
def quiz_from_resource(req: VideoQuizReq):
    """Any resource URL (article or video) → quizzable questions from it."""
    return _quiz_from_url(req.url, req.topic)


@router.post("/vault/ingest")
def vault_ingest():
    """Scan the Obsidian vault (config/vault.yaml) → deduped, source-tagged questions."""
    return vault_mod.ingest()


class VaultReadReq(BaseModel):
    path: str


@router.post("/vault/read")
def vault_read(req: VaultReadReq):
    """Read one vault source document (by vault-relative path) as markdown."""
    return vault_mod.read_source(req.path)


@router.post("/scrape/refresh")
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
