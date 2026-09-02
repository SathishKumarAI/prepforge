"""Guards the duplicate-body filter — the rule that keeps site furniture out of the deck.

Run: ./.venv/bin/python test_ingest_duplicates.py   (Windows: ./.venv/Scripts/python.exe)
Each failure here is either a blurb the user would meet on 154 flashcards, or a real
section the filter ate.
"""
from ingest import MIN_DUPLICATE_PAGES, _body_key, _drop_repeated_bodies

FURNITURE = "NASA ADS · Google Scholar · Semantic Scholar · export BibTeX citation"
ARTICLE = "Gradient boosting fits each new tree to the residuals of the ensemble so far."


def _s(source, body, heading="H"):
    return (source, "AI", heading, body)


def test_a_body_on_three_pages_is_furniture():
    sections = [_s(f"p{i}.md", FURNITURE) for i in range(3)] + [_s("p0.md", ARTICLE)]
    kept, dropped = _drop_repeated_bodies(sections)
    assert dropped == 3, dropped
    assert [s[3] for s in kept] == [ARTICLE]


def test_a_body_on_two_pages_survives():
    # part 1 and part 2 of one article legitimately share a passage; two is not a pattern
    sections = [_s("part1.md", FURNITURE), _s("part2.md", FURNITURE)]
    kept, dropped = _drop_repeated_bodies(sections)
    assert dropped == 0 and len(kept) == 2


def test_repeats_inside_one_document_are_that_document_s_structure():
    # a template repeated down one page is structure, not site chrome — distinct FILES
    # is the signal, and counting occurrences would delete every worked-example series
    sections = [_s("one.md", FURNITURE, f"Step {i}") for i in range(5)]
    kept, dropped = _drop_repeated_bodies(sections)
    assert dropped == 0, "counted occurrences instead of distinct pages"
    assert len(kept) == 5


def test_indentation_and_case_do_not_hide_a_duplicate():
    variants = ["Subscribe to unlock full access.",
                "   subscribe to   unlock full access.  ",
                "SUBSCRIBE TO UNLOCK FULL ACCESS."]
    assert len({_body_key(v) for v in variants}) == 1
    kept, dropped = _drop_repeated_bodies([_s(f"p{i}.md", v) for i, v in enumerate(variants)])
    assert dropped == 3 and kept == []


def test_the_threshold_is_the_documented_one():
    # the measurement behind MIN_DUPLICATE_PAGES is in ingest.py; if this moves, that
    # comment is stale and the 736-card number no longer describes what ships
    assert MIN_DUPLICATE_PAGES == 3


def test_an_empty_corpus_does_not_explode():
    assert _drop_repeated_bodies([]) == ([], 0)


if __name__ == "__main__":
    for name, fn in sorted(globals().items()):
        if name.startswith("test_"):
            fn()
            print(f"ok  {name}")
    print("all passed")
