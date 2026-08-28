"""Guard for GET /questions/index: it must stay a projection.

The point of the endpoint is what it does NOT return — answers, sources, related
lists, the 15 MB. A change that "helpfully" adds a field would silently undo it,
and nothing else in the app would fail.

Run: ./.venv/Scripts/python.exe test_questions_index.py
"""
from __future__ import annotations

import main


def test_index_returns_four_fields_and_nothing_else():
    rows = main.questions_index()["questions"]
    assert rows, "no questions loaded — is content/ populated?"
    for row in rows[:200]:
        assert set(row) == set(main.INDEX_FIELDS), sorted(row)


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
