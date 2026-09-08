"""Totals over every generated answer on disk: how many, by lens and by model,
tokens and cost, and an estimated GPU-hours figure with the rate it assumed.

Computed once per change to the folder (107,776 files is a 30 s scan) in a
thread, served from `_stats.json`. Owns nothing about writing answers.
"""
from __future__ import annotations

import json
import re
import threading
from pathlib import Path

from generate import ANSWERS_DIR, LOCAL_SUFFIX, MODES

STATS_PATH = ANSWERS_DIR / "_stats.json"
# The hours figure is an ESTIMATE from output tokens: single-stream decode
# measured at 61 tok/s on gpt-oss-20b / RTX 5070 Ti, four slots in parallel.
# The payload carries both numbers so the UI can say what it assumed.
ESTIMATE_TOKENS_PER_SECOND = 61
ESTIMATE_PARALLEL = 4
_FM_KEYS = re.compile(r"^(model|provider|input_tokens|output_tokens|cost_usd|generated_at): (.*)$", re.M)
_STAMP_RE = re.compile(r"__\d{8}T\d{6}$")
_LENS_SUFFIXES = {suffix.lstrip("_"): mode for mode, (_, suffix, _) in MODES.items() if suffix}
_stats_lock = threading.Lock()
_stats_thread: threading.Thread | None = None


def _answer_lens(stem: str) -> str:
    """`q001__star__local` → star; `q001` → deep. Stamp and __local stripped first."""
    base = _STAMP_RE.sub("", stem)
    if base.endswith(LOCAL_SUFFIX):
        base = base[: -len(LOCAL_SUFFIX)]
    tail = base.rsplit("__", 1)[-1] if "__" in base else ""
    return _LENS_SUFFIXES.get(tail, "deep")


def _dir_stamp(d: Path) -> list:
    files = [p for p in d.glob("*.md") if not p.name.startswith("_")]
    return [len(files), max((p.stat().st_mtime for p in files), default=0.0)]


def _compute_stats(d: Path) -> dict:
    """One pass over the folder: first 700 bytes of each file is the whole
    frontmatter, and a regex beats YAML by 10× at this count."""
    by_lens: dict[str, int] = {}
    by_model: dict[str, dict] = {}
    first = last = None
    n = in_tok = out_tok = local = 0
    cost = 0.0
    for p in d.glob("*.md"):
        if p.name.startswith("_"):
            continue
        with p.open("r", encoding="utf-8", errors="replace") as f:
            fm = dict(_FM_KEYS.findall(f.read(700)))
        n += 1
        by_lens[_answer_lens(p.stem)] = by_lens.get(_answer_lens(p.stem), 0) + 1
        model = (fm.get("model") or "(unknown)").strip().strip("'\"")
        m = by_model.setdefault(model, {"model": model, "provider": (fm.get("provider") or "").strip(), "answers": 0, "input_tokens": 0, "output_tokens": 0, "cost_usd": 0.0})
        m["answers"] += 1
        try:
            i, o, c = int(fm.get("input_tokens", 0) or 0), int(fm.get("output_tokens", 0) or 0), float(fm.get("cost_usd", 0) or 0)
        except ValueError:
            i = o = 0
            c = 0.0
        m["input_tokens"] += i
        m["output_tokens"] += o
        m["cost_usd"] += c
        in_tok += i
        out_tok += o
        cost += c
        if m["provider"] == "lmstudio":
            local += o
        when = (fm.get("generated_at") or "").strip().strip("'\"")
        if when:
            first = when if first is None or when < first else first
            last = when if last is None or when > last else last
    for m in by_model.values():
        m["cost_usd"] = round(m["cost_usd"], 4)
    return {
        "answers": n,
        "by_lens": by_lens,
        "by_model": sorted(by_model.values(), key=lambda m: -m["answers"]),
        "input_tokens": in_tok,
        "output_tokens": out_tok,
        "cost_usd": round(cost, 4),
        "local_answers": sum(m["answers"] for m in by_model.values() if m["provider"] == "lmstudio"),
        "local_hours_estimate": round(local / ESTIMATE_TOKENS_PER_SECOND / 3600 / ESTIMATE_PARALLEL, 1),
        "estimate_basis": {"tokens_per_second": ESTIMATE_TOKENS_PER_SECOND, "parallel": ESTIMATE_PARALLEL},
        "first_generated_at": first,
        "last_generated_at": last,
    }


def answer_stats() -> dict:
    """The totals, from `_stats.json` when it matches the folder; otherwise
    `{"computing": true}` and a thread that writes the file. The UI polls."""
    global _stats_thread
    stamp = _dir_stamp(ANSWERS_DIR)
    try:
        cached = json.loads(STATS_PATH.read_text(encoding="utf-8"))
        if cached.get("stamp") == stamp:
            return cached
    except (OSError, ValueError):
        pass
    with _stats_lock:
        if _stats_thread is None or not _stats_thread.is_alive():
            def run():
                out = _compute_stats(ANSWERS_DIR)
                out["stamp"] = _dir_stamp(ANSWERS_DIR)
                STATS_PATH.write_text(json.dumps(out), encoding="utf-8")
            _stats_thread = threading.Thread(target=run, daemon=True)
            _stats_thread.start()
    return {"computing": True, "answers": stamp[0]}
