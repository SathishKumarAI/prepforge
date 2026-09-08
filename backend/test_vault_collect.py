"""Guards which vault files become cards.

The include rule is broad on purpose — "questions" in a filename is enough —
and that is how a book of English-conversation questions ("What's the weather
like today?") became 124 Behavioral cards. The exclude list is the answer, and
this pins that it wins over both ways a file can get in.

Run: ./.venv/Scripts/python.exe test_vault_collect.py
"""
import tempfile
from pathlib import Path

import vault


def _tree(root: Path, *rel: str) -> None:
    for r in rel:
        p = root / r
        p.parent.mkdir(parents=True, exist_ok=True)
        p.write_text("Q: what?\nA: that.\n", encoding="utf-8")


def test_an_excluded_name_is_out_even_though_it_matches_a_keyword():
    with tempfile.TemporaryDirectory() as d:
        root = Path(d)
        _tree(root, "Communication/Daily Native English - 400 Daily Questions & Answers.md",
              "Communication/Behavioral interview questions.md")
        got = {p.name for p in vault._collect_files(root, ["Interview"], ["questions"], ["daily native english"])}
        assert got == {"Behavioral interview questions.md"}, got


def test_an_excluded_path_is_out_even_inside_an_included_folder():
    with tempfile.TemporaryDirectory() as d:
        root = Path(d)
        _tree(root, "Interview/Daily Native English.md", "Interview/System design.md")
        got = {p.name for p in vault._collect_files(root, ["Interview"], [], ["daily native english"])}
        assert got == {"System design.md"}, got


def test_no_excludes_changes_nothing():
    with tempfile.TemporaryDirectory() as d:
        root = Path(d)
        _tree(root, "Interview/a.md", "Notes/b questions.md", "Notes/c.md")
        got = {p.name for p in vault._collect_files(root, ["Interview"], ["questions"])}
        assert got == {"a.md", "b questions.md"}, got


if __name__ == "__main__":
    tests = [v for k, v in sorted(globals().items()) if k.startswith("test_")]
    for t in tests:
        t()
        print("ok ", t.__name__)
    print(f"{len(tests)}/{len(tests)} pass")
