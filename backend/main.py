"""PrepForge backend — FastAPI. Serves the Q&A bank and the aggregated resource feed."""
from __future__ import annotations

import json
import logging
from pathlib import Path

import yaml
from fastapi import FastAPI, File, Form, UploadFile
from fastapi.middleware.cors import CORSMiddleware

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


def _load_questions() -> list[dict]:
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


def _load_resources() -> list[dict]:
    f = DATA / "resources.json"
    if not f.exists():
        return []
    return json.loads(f.read_text(encoding="utf-8")).get("resources", [])


@app.get("/health")
def health():
    return {"status": "ok", "questions": len(_load_questions()), "resources": len(_load_resources())}


@app.get("/questions")
def questions():
    qs = _load_questions()
    topics = sorted({q["topic"] for q in qs})
    return {"questions": qs, "topics": topics, "count": len(qs)}


@app.get("/questions/{qid}")
def question(qid: str):
    for q in _load_questions():
        if q.get("id") == qid:
            return q
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
