"""Decode literal `\\uXXXX` sequences left in a bank written before ingest read
captured titles as JSON (2026-09-08). Ids are untouched — they hash source and
heading, never the title — so every answer on disk still matches its question.

Run once per machine: ./.venv/Scripts/python.exe repair_titles.py
Idempotent: a second run finds nothing to change.
"""
import json
import re
import sys

from paths import CONTENT

ESC = re.compile(r"\\u([0-9a-fA-F]{4})")


def decode(s: str) -> str:
    out = ESC.sub(lambda m: chr(int(m.group(1), 16)), s)
    # An emoji escapes as a surrogate PAIR (🚀); joined here, or the
    # write fails with "surrogates not allowed". A lone half becomes U+FFFD.
    return out.encode("utf-16", "surrogatepass").decode("utf-16", "replace")


def repair(obj):
    """Return (repaired, count) for any JSON value."""
    if isinstance(obj, str):
        fixed = decode(obj)
        return fixed, int(fixed != obj)
    if isinstance(obj, list):
        out, n = [], 0
        for v in obj:
            v2, k = repair(v)
            out.append(v2)
            n += k
        return out, n
    if isinstance(obj, dict):
        out, n = {}, 0
        for key, v in obj.items():
            v2, k = repair(v)
            out[key] = v2
            n += k
        return out, n
    return obj, 0


def main() -> int:
    path = CONTENT / "generated.json"
    data = json.loads(path.read_text(encoding="utf-8"))
    fixed, n = repair(data)
    if n:
        # Never in place: a write that fails half way leaves a 0-byte bank and
        # an 8-minute ingest to get it back (it happened).
        tmp = path.with_suffix(".json.tmp")
        tmp.write_text(json.dumps(fixed, indent=2, ensure_ascii=False), encoding="utf-8")
        tmp.replace(path)
    print(f"{n} strings repaired in {path.name}")
    return 0


if __name__ == "__main__":
    # the smallest check that fails if the regex or the recursion breaks
    assert decode("a \\u2014 b") == "a \u2014 b"
    assert decode("go \\ud83d\\ude80 now") == "go \U0001f680 now"
    assert repair({"q": ["x \\u00b7 y", 1], "n": {"t": "ok"}}) == ({"q": ["x \u00b7 y", 1], "n": {"t": "ok"}}, 1)
    sys.exit(main())
