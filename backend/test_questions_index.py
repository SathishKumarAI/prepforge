"""Guard for GET /questions/index: it must stay a projection.

The point of the endpoint is what it does NOT return — answers, sources, related
lists, the 15 MB. A change that "helpfully" adds a field would silently undo it,
and nothing else in the app would fail.

Run: ./.venv/Scripts/python.exe test_questions_index.py
"""
from __future__ import annotations

import main

# An allowlist, not a derived set: the point of this file is that adding a field
# here is a decision someone made on purpose, weighed against 18,284 copies of it.
ROW_KEYS = set(main.INDEX_FIELDS) | {"has_answer", "has_quiz"}


def test_index_returns_its_projection_and_nothing_else():
    rows = main.questions_index()["questions"]
    assert rows, "no questions loaded — is content/ populated?"
    for row in rows[:200]:
        assert set(row) == ROW_KEYS, sorted(row)


def test_the_flags_are_booleans_not_the_content_they_describe():
    """`has_answer: true` is 17 bytes; the answer it stands for averages 835."""
    for row in main.questions_index()["questions"][:200]:
        assert row["has_answer"] is True or row["has_answer"] is False, row["has_answer"]
        assert row["has_quiz"] is True or row["has_quiz"] is False, row["has_quiz"]


def test_batch_expands_related_only_when_asked():
    """The whole reason Saved could not use this route.

    Saved renders a Related section under every card, `related` from the
    pipeline is ids and scores alone, and the client no longer holds the bank to
    resolve them — so before `expand`, using batch here meant losing the
    section. Study asks for up to 40 cards it shows one at a time and needs none
    of it, which is why this is opt-in: expansion measured +48% on a batch of 8.
    """
    ids = [q["id"] for q in main._load_questions() if q.get("related")][:5]
    assert ids, "no question in the bank has a related list — is the pipeline built?"

    plain = main.questions_batch(ids=",".join(ids))["questions"]
    for q in plain:
        for entry in q.get("related") or []:
            assert set(entry) <= {"id", "score"}, f"batch expanded without being asked: {entry}"

    rich = main.questions_batch(ids=",".join(ids), expand="related")["questions"]
    expanded = [e for q in rich for e in (q.get("related") or [])]
    assert expanded, "asked for expansion and got none"
    for entry in expanded:
        assert entry["question"], entry
        assert "topic" in entry and "difficulty" in entry
        # ADDED to, never replaced: a call site that still resolves by id works.
        assert "id" in entry and "score" in entry


def test_expansion_does_not_disturb_the_order_asked_for():
    ids = [q["id"] for q in main._load_questions() if q.get("related")][:6]
    got = main.questions_batch(ids=",".join(ids), expand="related")["questions"]
    assert [q["id"] for q in got] == ids


def test_a_related_id_that_no_longer_exists_is_dropped_not_blank():
    # The junk-question filter removed 133 cards; anything still pointing at one
    # of them must vanish from the list rather than render as an empty row.
    qs = main._load_questions()
    by_id = {q["id"]: q for q in qs}
    victim = next(q for q in qs if q.get("related"))
    ghost = {**victim, "related": [{"id": "ing_definitely_not_here", "score": 1.0}]}
    assert main._with_related(ghost, by_id)["related"] == []


def test_batch_returns_whole_questions_in_the_order_asked_for():
    """Study interleaves its queue across topics; a route that re-sorted would
    undo that silently, and the only symptom is a session that feels repetitive."""
    ids = [q["id"] for q in main._load_questions()[:20]][::-1]
    got = main.questions_batch(ids=",".join(ids))["questions"]
    assert [q["id"] for q in got] == ids
    assert any(q.get("answer") for q in got), "batch is the route that DOES carry answers"


def test_batch_skips_ids_the_bank_no_longer_has():
    real = main._load_questions()[0]["id"]
    res = main.questions_batch(ids=f"{real},not-a-real-id")
    assert [q["id"] for q in res["questions"]] == [real]
    assert res["missing"] == 1


def test_batch_route_is_declared_before_the_qid_route():
    paths = [r.path for r in main.app.routes if getattr(r, "path", "").startswith("/questions")]
    assert paths.index("/questions/batch") < paths.index("/questions/{qid}"), paths


def test_index_covers_the_whole_bank():
    index = main.questions_index()
    assert index["count"] == len(main._load_questions())


def test_index_route_is_declared_before_the_qid_route():
    """FastAPI matches in definition order: below /questions/{qid}, the literal
    "index" would be read as a question id and this endpoint would be dead."""
    paths = [r.path for r in main.app.routes if getattr(r, "path", "").startswith("/questions")]
    assert paths.index("/questions/index") < paths.index("/questions/{qid}"), paths


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
