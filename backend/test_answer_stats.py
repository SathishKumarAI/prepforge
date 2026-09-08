"""Guards the totals the Settings panel shows for the generated answers.

107,776 files is a 30 s scan, so the totals are computed once per change to
the folder and served from `_stats.json`. What must stay true: every answer is
counted exactly once, under its lens and its model, tokens and cost add up,
and a file without frontmatter (an old hand-written one) still counts.

Run: ./.venv/Scripts/python.exe test_answer_stats.py
"""
import tempfile
from pathlib import Path

import answer_stats as g


def _write(d: Path, name: str, **fm):
    body = "---\n" + "".join(f"{k}: {v}\n" for k, v in fm.items()) + "---\n\nanswer\n"
    (d / name).write_text(body, encoding="utf-8")


def test_every_answer_is_counted_once_by_lens_and_model():
    with tempfile.TemporaryDirectory() as tmp:
        d = Path(tmp)
        _write(d, "q1__star__local.md", model="openai/gpt-oss-20b", provider="lmstudio", input_tokens=200, output_tokens=400, cost_usd=0.0, generated_at="'2026-09-05T01:00:00-05:00'")
        _write(d, "q1__eli5__local.md", model="openai/gpt-oss-20b", provider="lmstudio", input_tokens=100, output_tokens=300, cost_usd=0.0, generated_at="'2026-09-06T01:00:00-05:00'")
        _write(d, "q1.md", model="claude-opus-4-8", provider="anthropic", input_tokens=1000, output_tokens=500, cost_usd=0.0175, web_searches=2, generated_at="'2026-07-11T23:06:09-05:00'")
        (d / "q2.md").write_text("no frontmatter at all\n", encoding="utf-8")
        (d / "_eval.json").write_text("{}", encoding="utf-8")  # not an answer
        s = g._compute_stats(d)
    assert s["answers"] == 4, s
    assert s["by_lens"] == {"deep": 2, "star": 1, "eli5": 1}, s["by_lens"]
    models = {m["model"]: m for m in s["by_model"]}
    assert models["openai/gpt-oss-20b"]["answers"] == 2
    assert models["openai/gpt-oss-20b"]["output_tokens"] == 700
    assert models["claude-opus-4-8"]["cost_usd"] == 0.0175
    assert models["(unknown)"]["answers"] == 1
    assert s["input_tokens"] == 1300 and s["output_tokens"] == 1200
    assert s["cost_usd"] == 0.0175
    assert s["first_generated_at"].startswith("2026-07-11") and s["last_generated_at"].startswith("2026-09-06")
    assert s["local_answers"] == 2


def test_the_estimate_is_labelled_with_the_rate_it_assumes():
    """Hours are an estimate from tokens, not a measurement; the payload must
    carry the rate and parallelism it assumed so the UI can say so."""
    with tempfile.TemporaryDirectory() as tmp:
        d = Path(tmp)
        _write(d, "q1__star__local.md", model="m", provider="lmstudio", input_tokens=0, output_tokens=61 * 3600 * 4, cost_usd=0.0)
        s = g._compute_stats(d)
    assert s["local_hours_estimate"] == 1.0, s
    assert s["estimate_basis"] == {"tokens_per_second": 61, "parallel": 4}


if __name__ == "__main__":
    for fn in [test_every_answer_is_counted_once_by_lens_and_model, test_the_estimate_is_labelled_with_the_rate_it_assumes]:
        fn()
        print(f"ok  {fn.__name__}")
    print("all passed")
