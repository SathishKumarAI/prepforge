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
