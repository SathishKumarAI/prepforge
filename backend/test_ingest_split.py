"""Guards the section splitter against the shapes public GitHub question banks ship in.

Run: ./.venv/bin/python test_ingest_split.py   (Windows: ./.venv/Scripts/python.exe)
Each failure here is a card the user would have had to read past in a quiz.
"""
from pathlib import Path

from ingest import _deterministic_card, _frontmatter_title, _is_boilerplate, _links, _split_sections

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


def test_deep_links_keep_reading_and_drop_credits():
    body = (
        "See [Designing Data-Intensive Applications](https://dataintensive.net/) and the "
        "[LRU Cache problem](https://leetcode.com/problems/lru-cache/).\n"
        "Follow [@someone](https://github.com/someone) · "
        "![badge](https://img.shields.io/badge/x-y.svg)\n"
    )
    urls = [l["url"] for l in _links(body)]
    assert "https://dataintensive.net/" in urls
    assert "https://leetcode.com/problems/lru-cache/" in urls
    assert not any("github.com/someone" in u for u in urls), "author credit kept"
    assert not any("shields.io" in u for u in urls), "badge image kept"
    # a real repo link (owner + repo) is reading material, unlike a bare profile
    assert _links("[repo](https://github.com/o/r)")[0]["url"] == "https://github.com/o/r"


def test_generic_link_text_gets_a_title_from_the_url():
    # question banks write "[Answer](url)" constantly — a reading list of twenty
    # entries all called "Answer" is no reading list at all
    got = _links("[Answer](https://aws.amazon.com/what-is/overfitting/)")[0]["title"]
    assert got == "overfitting · aws.amazon.com", got
    assert _links("[here](https://example.com/)")[0]["title"] == "example.com"
    # a descriptive title is left alone
    assert _links("[Attention Is All You Need](https://arxiv.org/abs/1706.03762)")[0]["title"] == "Attention Is All You Need"


GLOSSARY = """# Glossary

## A

**Attention** — the mechanism that lets a token read every other token in the sequence,
which is what made transformers parallelizable in the first place.

## QA:

Quality assurance sits between staging and release; the gate is the regression suite,
not a person clicking through the app one screen at a time.
"""


def test_letter_headings_do_not_become_cards():
    headings = [h for h, _ in _split_sections(GLOSSARY)]
    assert "A" not in headings, "a glossary letter became 'Explain: A'"
    # two alphanumerics is enough to name something — short real headings survive
    assert "QA:" in headings, headings


def test_repo_boilerplate_files_are_not_study_material():
    for junk in ["repo/LICENSE.md", "repo/CONTRIBUTING.md", "repo/CODE_OF_CONDUCT.md",
                 "repo/.github/ISSUE_TEMPLATE/bug_report.md"]:
        assert _is_boilerplate(Path(junk)), junk
    for real in ["repo/README.md", "repo/02-llm-fundamentals/questions.md",
                 "repo/security-of-llms.md"]:
        assert not _is_boilerplate(Path(real)), real


SCRAPED_BLOG = """# SQL vs Pandas

## # Introduction

Three ways to answer the same analytics question, timed against each other on one dataset.

## # Multi-Step Aggregation

```
import pandas as pd
# max step per user per feature
max_step = df.groupby(["feature_id", "user_id"])["step_reached"].max()
# join to features, fill users who never started with 0
```

The agent got the grouping right but hallucinated a column on the second pass, which is
the failure mode schema grounding exists to prevent.

## More On This Topic

- Ten other articles you did not ask for, one line each, enough to clear the length floor.
"""


def test_a_comment_inside_a_fence_is_not_a_heading():
    headings = [h for h, _ in _split_sections(SCRAPED_BLOG)]
    assert "max step per user per feature" not in headings, headings
    assert "join to features, fill users who never started with 0" not in headings, headings
    # ...and the snippet stays inside the section it belongs to
    body = dict(_split_sections(SCRAPED_BLOG))["Multi-Step Aggregation"]
    assert "max_step = df.groupby" in body and "schema grounding" in body


def test_an_anchor_hash_and_a_blog_footer_do_not_become_cards():
    headings = [h for h, _ in _split_sections(SCRAPED_BLOG)]
    assert headings == ["Introduction", "Multi-Step Aggregation"], headings


if __name__ == "__main__":
    for name, fn in sorted(globals().items()):
        if name.startswith("test_"):
            fn()
            print(f"ok  {name}")
    print("all passed")
