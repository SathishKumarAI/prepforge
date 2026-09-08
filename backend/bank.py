"""The question bank: how it is assembled from its four files, how it is
versioned, and the pre-lowercased search rows built beside it.

Owns: `_load_questions` and everything it calls, the mtime stamp and the ETag
derived from it, `_not_modified` (the 304 dance), `_with_related`, and the
search cache. Does NOT own any route — `api_questions.py` does — so a test can
call these with no app.
"""
from __future__ import annotations

import hashlib
import json
from pathlib import Path

from fastapi import Request, Response

import generate as generate_mod
import ingest as ingest_mod
import pipeline as pipeline_mod
from paths import ANSWERS_DIR, CONTENT, DATA


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


INDEX_FIELDS = ("id", "question", "topic", "difficulty")


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
