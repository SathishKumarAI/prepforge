"""Guards for answers a local model wrote unattended.

Two things here fail silently and both matter more than they look:

- **The eval's checks.** They are the only thing standing between a looping,
  truncated or refused answer and a learner reading it as fact. A check that
  stops firing does not error — it just passes everything.
- **Filling a missing answer.** It must only ever fill a GAP. If it could
  overwrite, a 20B model's unreviewed prose would silently replace a curated
  answer, and nothing in the app would say so.

Run: ./.venv/Scripts/python.exe test_local_answers.py
"""
from __future__ import annotations

import eval_answers as ev
import generate
import main as api

NOTE = generate.MACHINE_NOTE.format(model="test-model")


def ship(body: str) -> str:
    """An answer as `local_only` writes one: body, blank line, the note."""
    return body.strip() + "\n\n" + NOTE


def test_a_good_answer_passes_every_check():
    body = (
        "A tablespace is a storage container and a schema is a namespace, so the two are "
        "independent: objects owned by one user can live in several tablespaces, and one "
        "tablespace can hold objects from many schemas. In production I have used that to put "
        "a hot index on faster storage without moving the rest of the schema, which is the "
        "usual reason anyone cares about the distinction at all."
    )
    assert ev.check("Can a tablespace hold objects from different schemas?", ship(body)) == []


def test_an_answer_with_no_note_is_a_failure():
    # Without the note it is indistinguishable from a curated answer, which is
    # the one property this whole path must never lose.
    body = "Yes. " + "A tablespace is a storage container and a schema is a namespace. " * 6
    fails = ev.check("Can a tablespace hold objects from different schemas?", body)
    assert "note_missing" in fails


def test_a_reasoning_block_that_leaked_is_caught():
    body = "<think>the user wants oracle trivia</think> " + "Yes, they are independent concepts. " * 8
    assert "reasoning_leak" in ev.check("Can a tablespace hold objects?", ship(body))


def test_a_refusal_is_not_an_answer():
    body = "I'm sorry, but I cannot answer that question without more context. " * 6
    assert "refusal" in ev.check("Can a tablespace hold objects?", ship(body))


def test_a_model_that_loses_the_plot_and_repeats_itself_is_caught():
    line = "A tablespace is a logical storage container in the database. "
    assert "looping" in ev.check("What is a tablespace?", ship(line * 9))


def test_an_answer_cut_off_mid_thought_is_caught():
    body = "A tablespace is a logical storage container and the schema is a namespace, so the two " * 3
    assert "truncated" in ev.check("What is a tablespace?", ship(body + "and then the"))


def test_an_unclosed_code_fence_is_truncation_too():
    # It renders the rest of the page as code, which is worse than a missing end.
    body = "Use this: \n```sql\nSELECT * FROM dual;\n" + "It returns one row of nothing much. " * 8
    assert "truncated" in ev.check("How do I test a connection?", ship(body))


def test_an_answer_that_only_restates_the_question_is_caught():
    q = "Is it possible to modify a datatype of a column when the column contains data?"
    body = "It is possible to modify a datatype of a column when the column contains data. " * 5
    assert "restates_question" in ev.check(q, ship(body))


def test_length_walls_are_walls_not_targets():
    q = "What is a cursor?"
    assert any(f.startswith("too_short") for f in ev.check(q, ship("A pointer to a result set.")))
    assert any(f.startswith("too_long") for f in ev.check(q, ship("word " * 500)))


def test_the_note_is_ignored_when_measuring_the_answer():
    # The note is ours. Counting it would let a 30-word answer clear the floor on
    # the strength of a line the model never wrote.
    body = "word " * 45
    assert ev.words(ev._body(ship(body))) == 45


def test_filling_only_ever_fills_a_gap():
    curated = {"id": "q001", "answer": "The curated answer, written by a human."}
    empty = {"id": "vq_nothing_here", "answer": ""}
    qs = [curated, empty]
    api._fill_missing_answers(qs)
    assert curated["answer"] == "The curated answer, written by a human."
    assert "answer_origin" not in curated
    # The empty one has no generated file in this test, so it stays empty rather
    # than inventing anything.
    assert empty["answer"] == ""


def test_a_filled_answer_says_where_it_came_from():
    qid = "vq_test_fill_marker"
    path = generate.local_answer_path(qid)
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(
        "---\nqid: " + path.stem + "\nquestion: t\ntopic: t\nmodel: test-model\n---\n\n" + ship("An answer."),
        encoding="utf-8",
    )
    try:
        q = {"id": qid, "answer": ""}
        api._fill_missing_answers([q])
        assert q["answer"].startswith("An answer.")
        assert q["answer_origin"] == "local-model"
        assert "Machine-generated" in q["answer"]
    finally:
        path.unlink(missing_ok=True)


def test_the_bank_version_moves_when_an_answer_is_written():
    # Otherwise a generated answer would sit on disk while every client kept
    # serving the index that says the question has none.
    assert api.ANSWERS_DIR.exists()
    before = api._bank_stamp()
    probe = api.ANSWERS_DIR / "_stamp_probe.md"
    probe.write_text("x", encoding="utf-8")
    try:
        assert api._bank_stamp() != before
    finally:
        probe.unlink(missing_ok=True)


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
