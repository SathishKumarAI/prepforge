"""Read every locally-generated answer and decide which ones are not fit to ship.

A 20B model writing unattended produces some answers that are good, some that
are fine, and a few that are confidently wrong-shaped: a reasoning block that
leaked, a sentence repeated eight times, a refusal, an answer cut off mid-word
because the context ran out. None of those announce themselves — the file is
written, the app serves it, and the first person to find out is the learner.

So nothing generated is trusted until it has been through here.

    ./.venv/Scripts/python.exe eval_answers.py                # the checks
    ./.venv/Scripts/python.exe eval_answers.py --judge        # + the model grades itself
    ./.venv/Scripts/python.exe eval_answers.py --delete-failures

The checks are deterministic and free: they run over the text, not through a
model, so they are the same every time and they cannot themselves hallucinate.
`--judge` adds a second opinion from the same local model — useful, slower, and
never the only gate, because a model marking its own homework is evidence, not
proof.

Exit code is 1 when anything fails, so this is usable as a gate.
"""
from __future__ import annotations

import argparse
import json
import re
import sys
from pathlib import Path

import generate

REPORT_MD = generate.ANSWERS_DIR / "_eval.md"
REPORT_JSON = generate.ANSWERS_DIR / "_eval.json"

# Bands, in words. The prompts ask for 120-220; these are the outer walls, not
# the target — a 90-word answer to a yes/no question is fine, a 500-word one has
# stopped being an answer and started being an essay.
MIN_WORDS = 40
MAX_WORDS = 420

REFUSALS = (
    "i'm sorry",
    "i am sorry",
    "i cannot",
    "i can't help",
    "as an ai",
    "as a language model",
    "i don't have enough information",
)
# Reasoning models emit these; `generate._strip_reasoning` removes them, so one
# surviving here means the stripper met a shape it does not know.
REASONING = re.compile(r"</?(think|thinking|reasoning|analysis)>", re.I)
SENTENCE = re.compile(r"[^.!?]+[.!?]")


def words(text: str) -> int:
    return len(text.split())


def _body(answer: str) -> str:
    """The answer without the machine-written note, which every check but
    `note_missing` should ignore — it is ours, not the model's."""
    marker = generate.MACHINE_NOTE.split("{model}")[0]
    idx = answer.find(marker)
    return answer[:idx].strip() if idx != -1 else answer.strip()


def _looping(body: str, times: int = 3) -> bool:
    """The same sentence, three times or more. A small model that loses the plot
    repeats itself rather than stopping, and the result reads as filler until you
    notice it is the SAME filler."""
    seen: dict[str, int] = {}
    for s in SENTENCE.findall(body):
        key = " ".join(s.lower().split())
        if len(key) < 25:
            continue  # "Yes." repeated is not the failure this looks for
        seen[key] = seen.get(key, 0) + 1
        if seen[key] >= times:
            return True
    return False


def _restates(question: str, body: str) -> bool:
    """An answer that is the question again, and nothing else.

    Every DISTINCT sentence has to be a restatement, not just the first one. The
    first-sentence version of this check was wrong on the answers it was written
    to protect: "Is Python case-sensitive?" → "Yes — Python identifiers are
    case-sensitive." then four sentences of real detail is exactly the shape the
    system prompt asks for ("lead with the crisp answer, then the nuance"), and
    it was the only failure in a run of 97. Leading with the answer is not
    restating the question; leading with it and stopping is.

    Compared on word sets, because "What is X?" → "X is what happens when…" is a
    real answer and "X is X" is not.
    """
    q = {w for w in re.findall(r"[a-z]{4,}", question.lower())}
    if len(q) < 3:
        return False
    seen = {" ".join(s.lower().split()) for s in SENTENCE.findall(body)} or {body.lower()}
    for sentence in seen:
        a = {w for w in re.findall(r"[a-z]{4,}", sentence)}
        if not a or len(q & a) / len(q) <= 0.85:
            return False  # one sentence that says something else is enough
    return True


def _truncated(body: str) -> bool:
    """Cut off mid-thought. Also catches an unclosed code fence, which renders
    the rest of the page as code."""
    if body.count("```") % 2:
        return True
    return not body.rstrip().endswith((".", "!", "?", ":", "`", ")", '"', "”", "_", "*"))


def check(question: str, answer: str) -> list[str]:
    """Every reason this answer is not fit to ship. Empty list = it passes."""
    body = _body(answer)
    fails = []
    if generate.MACHINE_NOTE.split("{model}")[0] not in answer:
        # Without it a machine answer is indistinguishable from a curated one.
        fails.append("note_missing")
    if words(body) < MIN_WORDS:
        fails.append(f"too_short({words(body)}w)")
    if words(body) > MAX_WORDS:
        fails.append(f"too_long({words(body)}w)")
    if REASONING.search(body):
        fails.append("reasoning_leak")
    low = body.lower()
    if any(low.startswith(r) or f"\n{r}" in low[:400] for r in REFUSALS):
        fails.append("refusal")
    if _looping(body):
        fails.append("looping")
    if _restates(question, body):
        fails.append("restates_question")
    if _truncated(body):
        fails.append("truncated")
    return fails


# ---- the optional second opinion ------------------------------------------

JUDGE_SYSTEM = (
    "You grade one interview answer. Reply with ONLY a JSON object, no prose:\n"
    '{"answers_question": 1-5, "specific": 1-5, "no_filler": 1-5, "why": "one short sentence"}\n'
    "answers_question: does it actually answer what was asked?\n"
    "specific: real tools, numbers, trade-offs — not generalities.\n"
    "no_filler: no padding, no restating the question, no hedging with nothing after.\n"
    "Be strict. A 3 is 'acceptable'. Reserve 5 for an answer you would be glad to get in an interview."
)


def judge(question: str, answer: str, model: str) -> dict | None:
    """The local model's own score. Returns None if it does not answer in JSON —
    an unparsable judgement is not a low score, it is no judgement."""
    prompt = f"QUESTION:\n{question}\n\nANSWER:\n{_body(answer)}"
    try:
        out = generate._local_generate(JUDGE_SYSTEM, prompt, model)
        raw = out["answer"]
        start, end = raw.find("{"), raw.rfind("}")
        if start == -1 or end == -1:
            return None
        got = json.loads(raw[start : end + 1])
        scores = [got.get(k) for k in ("answers_question", "specific", "no_filler")]
        if not all(isinstance(s, (int, float)) for s in scores):
            return None
        return {
            "answers_question": scores[0],
            "specific": scores[1],
            "no_filler": scores[2],
            "mean": round(sum(scores) / 3, 2),
            "why": str(got.get("why", ""))[:160],
        }
    except Exception:
        return None


# ---- the run ---------------------------------------------------------------


def collect(mode: str) -> list[tuple[dict, Path]]:
    """Every question that has a locally-generated answer on disk for this mode."""
    import main as api

    out = []
    for q in api._assemble_questions():
        path = generate.local_answer_path(q.get("id", ""), mode)
        if path.exists():
            out.append((q, path))
    return out


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--mode", default="deep")
    ap.add_argument("--judge", action="store_true", help="also ask the local model to grade each answer")
    ap.add_argument("--judge-floor", type=float, default=3.0, help="mean below this counts as a failure")
    ap.add_argument("--delete-failures", action="store_true", help="remove failing files so they regenerate")
    args = ap.parse_args()

    pairs = collect(args.mode)
    if not pairs:
        print("nothing generated yet — run answer_missing.py first")
        return 0

    model = generate.local_model() if args.judge else None
    if args.judge and not model:
        print("--judge needs LM Studio running", file=sys.stderr)
        return 1

    rows = []
    for q, path in pairs:
        read = generate._read_answer(path.stem)
        answer = (read or {}).get("answer", "")
        fails = check(q["question"], answer)
        row = {
            "id": q["id"],
            "topic": q.get("topic", ""),
            "question": q["question"],
            "file": path.name,
            "words": words(_body(answer)),
            "fails": fails,
        }
        if model:
            verdict = judge(q["question"], answer, model)
            row["judge"] = verdict
            if verdict and verdict["mean"] < args.judge_floor:
                row["fails"] = fails + [f"judge({verdict['mean']})"]
            elif verdict is None:
                row["fails"] = fails + ["judge_unparsable"]
        rows.append(row)
        mark = "FAIL" if row["fails"] else "ok  "
        print(f"{mark} {row['id']}  {row['words']:>4}w  {','.join(row['fails']) or 'clean'}")

    failing = [r for r in rows if r["fails"]]
    reasons: dict[str, int] = {}
    for r in failing:
        for f in r["fails"]:
            reasons[re.sub(r"\(.*\)", "", f)] = reasons.get(re.sub(r"\(.*\)", "", f), 0) + 1

    REPORT_JSON.write_text(json.dumps(rows, indent=2, ensure_ascii=False), encoding="utf-8")
    md = ["# Local answer evaluation", "", f"{len(rows)} answers · **{len(failing)} failing**", ""]
    if reasons:
        md += ["| Reason | Count |", "|---|---|"] + [f"| `{k}` | {v} |" for k, v in sorted(reasons.items())] + [""]
    if failing:
        md += ["| Question | Words | Why |", "|---|---|---|"]
        md += [f"| {r['question'][:70]} | {r['words']} | {', '.join(r['fails'])} |" for r in failing]
    REPORT_MD.write_text("\n".join(md) + "\n", encoding="utf-8")

    print(f"\n{len(rows)} answers · {len(failing)} failing · report: {REPORT_MD.name}, {REPORT_JSON.name}")
    for k, v in sorted(reasons.items(), key=lambda kv: -kv[1]):
        print(f"  {v:>3}  {k}")

    if args.delete_failures:
        for r in failing:
            (generate.ANSWERS_DIR / r["file"]).unlink(missing_ok=True)
        print(f"deleted {len(failing)} files — re-run answer_missing.py to regenerate them")

    return 1 if failing else 0


if __name__ == "__main__":
    raise SystemExit(main())
