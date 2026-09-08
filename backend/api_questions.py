"""Routes that read the bank: the whole thing, the index, a batch, a search, one
question. Every one goes through `bank._load_questions`, so they share one
assembled copy and one ETag.

Route ORDER matters: FastAPI matches in definition order, so /questions/index,
/questions/batch and /questions/browse are declared above /questions/{qid} or
"index" is read as a question id.
"""
from __future__ import annotations

from fastapi import APIRouter, Request, Response

import generate as generate_mod
from bank import (
    INDEX_FIELDS,
    _load_questions,
    _load_resources,
    _not_modified,
    _searchable,
    _snippet,
    _with_related,
)

router = APIRouter()


@router.get("/health")
def health():
    return {"status": "ok", "questions": len(_load_questions()), "resources": len(_load_resources())}


@router.get("/questions")
def questions(request: Request = None, response: Response = None):
    stale = _not_modified(request, response)
    if stale is not None:
        return stale
    qs = _load_questions()
    topics = sorted({q["topic"] for q in qs})
    return {"questions": qs, "topics": topics, "count": len(qs)}


@router.get("/questions/index")
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


@router.get("/questions/batch")
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


@router.get("/questions/browse")
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


@router.get("/questions/{qid}")
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
            out = _with_related(q, {x.get("id"): x for x in qs})
            # Which lenses are on disk rides along, so the detail pane can draw
            # its $ markers on the first frame. As a second request they landed
            # ~100 ms after the question and the markers flashed on every
            # question change — see docs/WORKLOG.md 2026-09-05.
            out["cached_modes"] = generate_mod.cached_modes(qid)
            return out
    return {"error": "not found"}


@router.get("/resources")
def resources():
    res = _load_resources()
    return {"resources": res, "count": len(res)}
