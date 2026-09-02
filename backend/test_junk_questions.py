"""Guards for "is this a question at all".

The failure this prevents is not a crash. 133 cards in the bank began
mid-sentence — a splitter cut a question in half and wrote the tail as its own
card — and every one of them HAD an answer, so nothing anywhere flagged them.
They read as ordinary cards until you look at the first three words.

The opposite failure is worse and quieter: a rule that is slightly too keen
deletes real questions, and a deleted card leaves nothing behind to notice. Both
false positives below were found by printing the whole list and reading it, and
both are pinned here.

Run: ./.venv/Scripts/python.exe test_junk_questions.py
"""
from __future__ import annotations

import ingest


def test_a_tail_of_a_split_sentence_is_not_a_question():
    for text in (
        "and how can it be improved?",
        "for better performance?",
        "to import the tables one by one?",
        "of which rows and columns contain a zero?",
        "increase its availability?",
        "second function's anticipated value be?",
        # split inside the word "supervised", which is what a character-count
        # splitter does to a heading
        "pervised machine learning?",
    ):
        assert ingest.usable_question(text) is None, text


def test_a_real_question_that_was_never_capitalised_survives():
    # 163 of these. Lowercase alone must never be the signal — it would delete a
    # sixth of the vault.
    for text in (
        "what is windowing in spark streaming?",
        "when should we use sort by and order by?",
        "are your thoughts on the best data visualization tools?",
        "is there any use of running spark program on single machine?",
    ):
        assert ingest.usable_question(text) == text, text


def test_a_question_that_opens_with_a_product_name_survives():
    # The false positive that tightened the rule: a first token carrying an
    # inner capital, a digit, a dot or a slash is an identifier, not a
    # mid-sentence continuation.
    for text in (
        "vLLM, SGLang, TensorRT-LLM, TGI, llama.cpp/Ollama - how do you choose a serving stack?",
        "k-NN and k-means share a letter and nothing else — how do they differ?",
        "iPhone battery telemetry: how would you model it?",
    ):
        assert ingest.usable_question(text) == text, text


def test_an_outline_number_comes_off_the_front():
    cases = {
        "10).What are the Control Flow activities in the Azure Data Factory?":
            "What are the Control Flow activities in the Azure Data Factory?",
        "15). Difference between Service Principal and SAS tokens ?":
            "Difference between Service Principal and SAS tokens ?",
        "2.6 What do you think is the biggest risk?":
            "What do you think is the biggest risk?",
        "1.1 What is FGCC?": "What is FGCC?",
    }
    for raw, want in cases.items():
        assert ingest.usable_question(raw) == want, raw


def test_a_bare_number_is_part_of_the_sentence():
    # The other false positive. "5 Whys" is a technique; stripping the 5 leaves
    # "Whys analysis?", which is not a thing.
    for text in ("5 Whys analysis?", "3 sigma rule — when does it fail?"):
        assert ingest.usable_question(text) == text, text


def test_the_ingest_headings_this_bank_is_mostly_made_of_survive():
    for text in ("Explain: Model Taxonomy", "Explain: ActiveMQ — the docs", "Explain: LLM Internals"):
        assert ingest.usable_question(text) == text, text


def test_nothing_at_all_is_not_a_question():
    for text in ("", "   ", "12)", "3.4"):
        assert ingest.usable_question(text) is None, repr(text)


def test_the_api_and_the_ingest_use_the_same_rule():
    # Two call sites, one definition. A second copy is how they drift, and the
    # drift would show up as cards the ingest refuses but the bank still serves.
    import main as api

    qs = [
        {"id": "a", "question": "and how can it be improved?", "answer": "x"},
        {"id": "b", "question": "10).What are integration runtimes?", "answer": "x"},
        {"id": "c", "question": "what is windowing in spark streaming?", "answer": "x"},
    ]
    kept = api._real_questions(qs)
    assert [q["id"] for q in kept] == ["b", "c"]
    assert kept[0]["question"] == "What are integration runtimes?"


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
