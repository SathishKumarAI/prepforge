"""PrepForge backend — FastAPI. Serves the Q&A bank and the aggregated resource feed."""
from __future__ import annotations

import json
import logging
from pathlib import Path

import yaml
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

try:
    from dotenv import load_dotenv  # optional
    load_dotenv()
except Exception:
    pass

import generate as generate_mod
import ingest as ingest_mod
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


def _load_questions() -> list[dict]:
    # curated bank + anything ingested from the user's own markdown/book
    curated = _read_bank(CONTENT / "questions.json")
    generated = _read_bank(CONTENT / "generated.json")
    return curated + generated


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


@app.post("/generate/answer")
def generate_answer(req: GenerateReq):
    """Grounded, anti-slop answer + Perplexity-style token/cost/source metadata."""
    return generate_mod.generate(req.question, req.topic)


@app.get("/library")
def library():
    """List the user's ingestable markdown files."""
    lib = CONTENT / "library"
    lib.mkdir(parents=True, exist_ok=True)
    files = [str(p.relative_to(lib)) for p in sorted(lib.rglob("*.md"))]
    generated = _read_bank(CONTENT / "generated.json")
    return {"files": files, "ingested_cards": len(generated)}


@app.post("/ingest")
def run_ingest():
    """Parse backend/content/library/*.md into pipeline cards (optionally via Claude)."""
    return ingest_mod.ingest()


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
