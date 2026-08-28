"""Guards the section splitter against the shapes public GitHub question banks ship in.

Run: ./.venv/bin/python test_ingest_split.py   (Windows: ./.venv/Scripts/python.exe)
Each failure here is a card the user would have had to read past in a quiz.
"""
from ingest import _deterministic_card, _frontmatter_title, _split_sections

DETAILS_BANK = """# LLM Fundamentals

## Table of Contents
- [one](#one)
- [two](#two)

### 1. Why did transformers replace RNNs?

<details><summary><b>Answer</b></summary>

Two reasons: parallelism and gradient paths. RNNs process tokens sequentially, so training
cannot parallelize across the sequence dimension and long-range signal decays.

</details>

### Turn state machine

```mermaid
flowchart LR
    A["Listening"] --> B["Committed"]
```
"""


def test_details_wrapper_never_reaches_the_card():
    sections = dict(_split_sections(DETAILS_BANK))
    body = sections["Why did transformers replace RNNs?"]
    assert "<details>" not in body and "<summary>" not in body, body[:80]
    assert body.startswith("Two reasons"), body[:80]  # the "Answer" label is gone too


def test_heading_numbering_is_stripped_and_question_kept_as_is():
    headings = [h for h, _ in _split_sections(DETAILS_BANK)]
    assert "Why did transformers replace RNNs?" in headings, headings
    card = _deterministic_card("f.md", "AI", "Why did transformers replace RNNs?", "body " * 20)
    assert card["question"] == "Why did transformers replace RNNs?"  # no "Explain:" on a question


def test_navigation_and_fence_only_sections_are_dropped():
    headings = [h for h, _ in _split_sections(DETAILS_BANK)]
    assert "Table of Contents" not in headings, "nav section became a card"
    assert "Turn state machine" not in headings, "mermaid-only section became a card"


def test_short_heading_borrows_its_document_title():
    card = _deterministic_card("c.md", "AI", "Problem statement", "x " * 40, "Enterprise Rag Assistant")
    assert card["question"] == "Explain: Problem statement — Enterprise Rag Assistant"
    # a heading that already names the doc does not repeat it
    same = _deterministic_card("c.md", "AI", "Enterprise Rag Assistant tradeoffs", "x " * 40, "Enterprise Rag Assistant")
    assert same["question"] == "Explain: Enterprise Rag Assistant tradeoffs"


def test_readme_is_titled_by_its_folder():
    assert _frontmatter_title("# Hi\n\nbody", "11-ai-system-design/README.md") == "Ai System Design"
    assert _frontmatter_title("# Hi\n\nbody", "03-attention-mechanisms.md") == "Attention Mechanisms"


if __name__ == "__main__":
    for name, fn in sorted(globals().items()):
        if name.startswith("test_"):
            fn()
            print(f"ok  {name}")
    print("all passed")
