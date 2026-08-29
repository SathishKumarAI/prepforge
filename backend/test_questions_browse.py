"""Guards for GET /questions/browse — the endpoint that lets Library stop
holding the 39.7 MB bank.

The whole point is what it does NOT return. A change that "helpfully" includes
the answer text would put the payload straight back where it was, and nothing in
the app would fail — the page would just be slow again.

Run: ./.venv/Scripts/python.exe test_questions_browse.py
"""
from __future__ import annotations

import main

ROW_KEYS = set(main.INDEX_FIELDS) | {"origin", "snippet"}


def test_browse_rows_never_carry_the_answer():
    for params in ({}, {"q": "kafka"}, {"topic": "AI"}):
        rows = main.questions_browse(**params)["questions"]
        for row in rows[:200]:
            assert set(row) <= ROW_KEYS, sorted(row)
            assert "answer" not in row


def test_browse_route_is_declared_before_the_qid_route():
    """Same trap as /questions/index: FastAPI matches in definition order, so
    below /questions/{qid} the literal "browse" is read as a question id."""
    paths = [r.path for r in main.app.routes if getattr(r, "path", "").startswith("/questions")]
    assert paths.index("/questions/browse") < paths.index("/questions/{qid}"), paths


def test_empty_query_returns_the_whole_bank_count():
    res = main.questions_browse()
    assert res["total"] == len(main._load_questions())


def test_search_finds_answer_text_the_index_cannot():
    """The reason this endpoint exists. /questions/index carries titles only, so
    a term that appears ONLY in answers has to be findable here or the move off
    the full bank silently removes a capability."""
    res = main.questions_browse(q="kafka")
    assert res["total"] > 0, "no match for kafka — is content/ populated?"
    title_only = [
        r for r in res["questions"] if "kafka" not in (r["question"] or "").lower()
    ]
    assert title_only, "every hit matched on the title; body search is not proving itself"


def test_every_typed_word_must_appear():
    """AND, not OR. An OR search over 19,000 cards returns thousands of rows
    where one common word matched, which is the same as returning nothing."""
    both = main.questions_browse(q="kafka partition")["total"]
    one = main.questions_browse(q="kafka")["total"]
    assert both <= one, (both, one)
    nonsense = main.questions_browse(q="kafka zzzzqqqxnotaword")
    assert nonsense["total"] == 0, nonsense["total"]


def test_title_matches_outrank_body_matches():
    rows = main.questions_browse(q="kafka")["questions"]
    titled = [i for i, r in enumerate(rows) if "kafka" in (r["question"] or "").lower()]
    untitled = [i for i, r in enumerate(rows) if "kafka" not in (r["question"] or "").lower()]
    if titled and untitled:
        assert max(titled) < min(untitled) or min(titled) < min(untitled), (
            f"first title hit at {min(titled)}, first body-only hit at {min(untitled)}"
        )


def test_filters_narrow_and_topics_stay_whole():
    """The topic chip row must list every topic even while a topic is selected —
    otherwise choosing one would delete the way back to the others."""
    res = main.questions_browse(topic="AI")
    assert res["total"] < len(main._load_questions())
    assert len(res["topics"]) > 1, res["topics"]
    assert all(r["topic"] == "AI" for r in res["questions"][:200])


def test_snippet_shows_the_match_not_the_opening_line():
    rows = main.questions_browse(q="kafka")["questions"]
    body_hits = [r for r in rows if "kafka" not in (r["question"] or "").lower()]
    assert body_hits, "nothing matched on the body alone"
    assert any("kafka" in (r.get("snippet") or "").lower() for r in body_hits[:40]), (
        "no snippet contained the term it matched on"
    )


def test_no_snippet_when_nothing_was_searched():
    rows = main.questions_browse()["questions"]
    assert all("snippet" not in r for r in rows[:200])


def test_related_is_expanded_with_titles():
    """The detail pane names its related questions. It used to resolve the ids
    against the full bank it was holding; it no longer holds one."""
    qs = main._load_questions()
    with_related = next((q for q in qs if q.get("related")), None)
    assert with_related, "no question has a related list — has pipeline/build run?"
    got = main.question(with_related["id"])
    assert got["related"], got["id"]
    for r in got["related"]:
        assert r.get("question"), r
        assert "id" in r and "score" in r, r  # additive, not a replacement


if __name__ == "__main__":
    passed = 0
    tests = [v for k, v in sorted(vars().copy().items()) if k.startswith("test_")]
    for fn in tests:
        try:
            fn()
            print(f"ok   {fn.__name__}")
            passed += 1
        except AssertionError as exc:
            print(f"FAIL {fn.__name__}: {exc}")
    print(f"\n{passed}/{len(tests)} pass")
    raise SystemExit(0 if passed == len(tests) else 1)
