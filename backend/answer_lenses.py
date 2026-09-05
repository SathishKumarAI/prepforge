"""Pre-write the generated lenses with the local model, for a time budget.

Every question has a bank answer; only the 100 curated ones (q001-q100) have the
seven lenses (STAR, ELI5, first-principles, …) on disk. Opening a lens on any of
the other 17,827 means waiting for a model — so a study session keeps stopping
to generate. This writes those files ahead of time, for free, in the background,
so the session can be spent reading.

    ./.venv/Scripts/python.exe answer_lenses.py --hours 1               # the default plan, one hour
    ./.venv/Scripts/python.exe answer_lenses.py --hours 1 --dry-run     # what that hour would do
    ./.venv/Scripts/python.exe answer_lenses.py --lenses star --source vault --hours 0.5

The plan, because an hour covers a sliver of 17,827 × 6:
- **vault questions first** (1,412 — your own notes, the ones you actually meet
  in Study), then the library (16,415 "Explain: <heading>" cards). Curated ones
  are skipped: they have every lens already.
- **lens-major**: every question gets STAR before any gets ELI5, so the widest
  set of questions has at least one lens when the budget runs out.
- `--workers 4` matches LM Studio's default parallel slots. Measured on
  gpt-oss-20b: one request ≈ 6.7 s / 410 tokens; the log prints the real rate.

**There is no billed path here.** `generate.local_only` raises rather than
falling back to Claude. Resumable by construction: a question+lens with any
version on disk is skipped (`generate.versions`), so a re-run after Ctrl-C or
the budget costs nothing for work already done. The files are the same Markdown
the interactive path writes, and they carry the machine-written note.
"""
from __future__ import annotations

import argparse
import re
import sys
import time
from concurrent.futures import ThreadPoolExecutor, as_completed

import httpx

import generate
import main as api

DEFAULT_LENSES = "star,eli5,first_principles,thinking,faang,aws"
SOURCE_ORDER = ("vault", "library")
# A provider that is down is a reason to wait, not a verdict on the question.
# On 2026-09-05 LM Studio blinked for a few seconds; the probe cached the miss
# for 10 s, every call raised instantly, and four workers marked 49,066 pairs
# FAILED in two minutes without touching the GPU. Retries back off 5 s → 60 s
# and give up only after ~8 minutes of silence — a machine that went to sleep.
RETRIES = 10
MAX_NAP = 60


def generate_one(q: dict, lens: str, sleep=time.sleep) -> tuple[str, str, int, float]:
    """One answer, waiting out a provider that is not answering.

    Retried: the probe's "not answering" RuntimeError and any httpx error (a
    400 from a server mid-reload is the same event as no server). Not retried:
    an empty answer or a bad lens — those are about the pair, not the provider.
    The probe cache is cleared before each retry, or every retry inside the 10 s
    TTL would read the same cached None.
    """
    t0 = time.time()
    for attempt in range(RETRIES + 1):
        try:
            out = generate.local_only(q["question"], q.get("topic", ""), q["id"], lens)
            return q["id"], lens, len(out["answer"].split()), time.time() - t0
        except (RuntimeError, httpx.HTTPError):
            if attempt == RETRIES:
                raise
            generate._probe = (0.0, None)
            sleep(min(MAX_NAP, 5 * 2**attempt))
    raise AssertionError("unreachable")


def plan(lenses: list[str], sources: list[str], topic: str | None) -> list[tuple[dict, str]]:
    """(question, lens) pairs still to write, in the order they should be written."""
    qs = api._assemble_questions()
    if topic:
        qs = [q for q in qs if (q.get("topic") or "").lower() == topic.lower()]
    # `origin.kind` is where a question came from — see `main._origin`.
    by_source = {
        s: sorted((q for q in qs if (q.get("origin") or {}).get("kind") == s), key=lambda q: q.get("id", ""))
        for s in sources
    }
    # One directory listing, not one per pair: 17,827 × 6 walks of 800 files
    # took over two minutes just to print the plan. A file's "base" is its name
    # with the stamp and the __local suffix removed — the same shape
    # `generate._version_paths` matches, precomputed.
    covered = {re.sub(rf"(?:{generate.LOCAL_SUFFIX})?(?:__\d{{8}}T\d{{6}})?$", "", p.stem) for p in generate.ANSWERS_DIR.iterdir()}
    todo = []
    for lens in lenses:
        suffix = generate.MODES[lens][1]
        for s in sources:
            todo.extend((q, lens) for q in by_source[s] if generate._safe_qid(q["id"]) + suffix not in covered)
    return todo


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--hours", type=float, default=1.0, help="stop starting new work after this long (0 = no limit)")
    ap.add_argument("--lenses", default=DEFAULT_LENSES, help="comma-separated, in priority order")
    ap.add_argument("--source", choices=SOURCE_ORDER, help="only this source (default: vault, then library)")
    ap.add_argument("--topic", help="only this topic")
    ap.add_argument("--workers", type=int, default=4, help="concurrent requests; LM Studio serves 4 by default")
    ap.add_argument("--limit", type=int, default=0, help="stop after N answers (0 = budget only)")
    ap.add_argument("--dry-run", action="store_true", help="print the plan, generate nothing")
    args = ap.parse_args()

    lenses = [m.strip() for m in args.lenses.split(",") if m.strip()]
    bad = [m for m in lenses if m not in generate.MODES or generate.MODES[m][2]]
    if bad:
        print(f"not a local lens: {bad} (deep needs web search; see generate.MODES)", file=sys.stderr)
        return 2
    sources = [args.source] if args.source else list(SOURCE_ORDER)

    todo = plan(lenses, sources, args.topic)
    if args.limit:
        todo = todo[: args.limit]
    print(f"{len(todo)} answers to write · lenses {lenses} · sources {sources}")
    if args.dry_run:
        for q, lens in todo[:15]:
            print(f"  {lens:<17} {q['id']:<16} {(q.get("origin") or {}).get("kind"):<8} {q['question'][:60]}")
        if len(todo) > 15:
            print(f"  … and {len(todo) - 15} more")
        if args.hours:
            # 6.7 s each, measured, divided by the workers that actually overlap.
            est = int(args.hours * 3600 / 6.7 * min(args.workers, 4) * 0.8)
            print(f"~{est} of them fit in {args.hours:g} h at {args.workers} workers, if the model keeps its measured pace")
        return 0
    if not todo:
        return 0

    model = generate.local_model()
    if not model:
        print(f"LM Studio is not answering at {generate.LOCAL_URL}. Start its server and load a chat model.", file=sys.stderr)
        return 1
    print(f"generating with {model}, {args.workers} workers, budget {args.hours:g} h\n", flush=True)

    deadline = time.time() + args.hours * 3600 if args.hours else float("inf")
    written = failed = 0
    started = time.time()

    # Feed the pool a few at a time so the deadline stops NEW requests promptly:
    # a fully queued pool would run every remaining pair before noticing.
    it = iter(todo)
    pending = set()
    jobs: dict = {}  # future → (question, lens), so a failure names its pair
    try:
        with ThreadPoolExecutor(max_workers=args.workers) as pool:
            while True:
                while len(pending) < args.workers and time.time() < deadline:
                    nxt = next(it, None)
                    if nxt is None:
                        break
                    fut = pool.submit(generate_one, *nxt)
                    jobs[fut] = nxt
                    pending.add(fut)
                if not pending:
                    break
                done = next(as_completed(pending))
                pending.discard(done)
                q, lens = jobs.pop(done)
                try:
                    qid, lens, words, dt = done.result()
                    written += 1
                    rate = written / ((time.time() - started) / 60)
                    print(f"[{written}/{len(todo)}] {lens:<17} {qid:<16} {words:>4} words {dt:5.1f}s   {rate:4.0f}/min", flush=True)
                except Exception as exc:  # one bad question must not end the run
                    failed += 1
                    print(f"FAILED  {lens:<17} {q['id']:<16} {exc}", file=sys.stderr, flush=True)
    except KeyboardInterrupt:
        print("\nstopped — every answer written so far is on disk, re-run to continue", flush=True)

    mins = (time.time() - started) / 60
    print(f"\n{written} written, {failed} failed, {mins:.1f} min, {len(todo) - written - failed} left for next time")
    print("next: eval_answers.py — nothing here has been read by a human yet")
    return 0 if not failed else 1


if __name__ == "__main__":
    raise SystemExit(main())
