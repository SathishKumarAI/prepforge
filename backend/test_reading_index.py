"""Guards the "more to read" index — the part that can quietly mislead.

A borrowed link must never look like something this question's own source cited,
and a loose neighbour must not get to suggest anything at all.

Run: ./.venv/bin/python test_reading_index.py   (Windows: ./.venv/Scripts/python.exe)
"""
from pipeline import BORROW_SCORE, MAX_READING, build_reading

QUESTIONS = [
    {"id": "a", "question": "What is RAG?", "links": [{"title": "RAG paper", "url": "https://arxiv.org/abs/2005.11401"}]},
    {"id": "b", "question": "How does retrieval work?"},          # close to a
    {"id": "c", "question": "Something unrelated"},                # far from everything
    {"id": "d", "question": "Dup link holder", "links": [{"title": "RAG paper (again)", "url": "https://arxiv.org/abs/2005.11401"}]},
]
RELATED = {
    "b": [{"id": "a", "score": 0.55}, {"id": "d", "score": 0.51}],
    "c": [{"id": "a", "score": BORROW_SCORE - 0.05}],  # just under the bar
}


def test_own_links_are_kept_as_is():
    reading = build_reading(QUESTIONS, RELATED)
    assert reading["a"] == QUESTIONS[0]["links"]
    assert "via" not in reading["a"][0], "a question's own link must not be labelled as borrowed"


def test_borrowed_links_are_labelled_with_their_source():
    reading = build_reading(QUESTIONS, RELATED)
    assert "b" in reading, "b has a close neighbour with links and should get reading"
    assert reading["b"][0]["url"] == "https://arxiv.org/abs/2005.11401"
    assert reading["b"][0]["via"] == "What is RAG?"


def test_borrowing_dedupes_by_url():
    reading = build_reading(QUESTIONS, RELATED)
    urls = [l["url"] for l in reading["b"]]
    assert len(urls) == len(set(urls)), f"same URL offered twice: {urls}"


def test_a_loose_neighbour_suggests_nothing():
    reading = build_reading(QUESTIONS, RELATED)
    assert "c" not in reading, "below-threshold neighbour leaked a suggestion"


def test_authored_citations_ride_along_with_own_links():
    # q042 ships an XGBoost citation in content/answers/q042.md; the __star/__eli5
    # variants of the same question must not create a separate entry.
    reading = build_reading([{"id": "q042", "question": "gradient boosting vs bagging"}], {})
    assert "q042" in reading, "authored frontmatter citation was not picked up"
    assert any("arxiv.org" in l["url"] for l in reading["q042"])
    assert len(reading["q042"]) <= MAX_READING


if __name__ == "__main__":
    for name, fn in sorted(globals().items()):
        if name.startswith("test_"):
            fn()
            print(f"ok  {name}")
    print("all passed")
