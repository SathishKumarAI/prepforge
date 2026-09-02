"""Write answers, with the local model, for the questions that have none.

99 of the 18,284 questions in the bank arrived from a vault with a question and
no answer. `has_answer` is false for every one of them, so Study skips them and
the Answer tab is blank: they are cards you cannot learn from.

LM Studio is already wired into this app for the prose lenses. The same provider
can fill these, for free, in a batch — and the file it writes is the same
Markdown the interactive path writes, so nothing new has to learn to read it.

    ./.venv/Scripts/python.exe answer_missing.py --limit 10      # try ten
    ./.venv/Scripts/python.exe answer_missing.py                 # the rest
    ./.venv/Scripts/python.exe answer_missing.py --topic DSA --dry-run

**There is no billed path here.** `generate.local_only` raises rather than
falling back to Claude, which `generate()` would do: right for one hover, wrong
for a run of hundreds where one flaky moment would quietly start spending money.

Resumable by construction: every answer is cached under `<qid>__local.md` and a
question that already has one is skipped, so re-running after a Ctrl-C costs
nothing for the work already done.
"""
from __future__ import annotations

import argparse
import sys
import time

import generate
import main as api


def unanswered(topic: str | None = None) -> list[dict]:
    """Questions the bank has no answer for, oldest id first for a stable run."""
    qs = api._assemble_questions()
    out = [q for q in qs if not (q.get("answer") or "").strip()]
    if topic:
        out = [q for q in out if (q.get("topic") or "").lower() == topic.lower()]
    return sorted(out, key=lambda q: q.get("id", ""))


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--limit", type=int, default=0, help="stop after N generations (0 = all)")
    ap.add_argument("--topic", help="only this topic")
    ap.add_argument("--mode", default="deep", help="which lens's system prompt to write with")
    ap.add_argument("--dry-run", action="store_true", help="list what would be generated, generate nothing")
    args = ap.parse_args()

    todo = unanswered(args.topic)
    pending = [q for q in todo if not generate.local_answer_path(q["id"], args.mode).exists()]
    done_already = len(todo) - len(pending)
    if args.limit:
        pending = pending[: args.limit]

    print(f"{len(todo)} questions have no answer · {done_already} already generated · {len(pending)} to do")
    if args.dry_run:
        for q in pending[:20]:
            print(f"  {q['id']}  {q['topic']:<18} {q['question'][:70]}")
        if len(pending) > 20:
            print(f"  … and {len(pending) - 20} more")
        return 0
    if not pending:
        return 0

    model = generate.local_model()
    if not model:
        print(
            f"LM Studio is not answering at {generate.LOCAL_URL}. Start its server and load a chat model.",
            file=sys.stderr,
        )
        return 1
    print(f"generating with {model}\n")

    written = failed = 0
    started = time.time()
    for i, q in enumerate(pending, 1):
        label = f"[{i}/{len(pending)}] {q['id']}"
        try:
            t0 = time.time()
            out = generate.local_only(q["question"], q.get("topic", ""), q["id"], args.mode)
            words = len(out["answer"].split())
            print(f"{label}  {words:>4} words  {time.time() - t0:5.1f}s  {q['question'][:52]}")
            written += 1
        except KeyboardInterrupt:
            print("\nstopped — every answer written so far is on disk, re-run to continue")
            break
        except Exception as exc:  # one bad question must not end the run
            print(f"{label}  FAILED  {exc}", file=sys.stderr)
            failed += 1

    mins = (time.time() - started) / 60
    print(f"\n{written} written, {failed} failed, {mins:.1f} min")
    print("next: eval_answers.py — nothing here has been read by a human yet")
    return 0 if not failed else 1


if __name__ == "__main__":
    raise SystemExit(main())
