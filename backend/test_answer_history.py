"""Guards the answer history — every generated answer stays on disk, forever.

A regenerate must never overwrite: the old answer and the new one are both
readable afterwards, newest first, each stamped with when and by which model it
was written. And an explicit provider is a promise — `local` never quietly bills
Claude when LM Studio is down.

Pure filesystem, no server: the routing itself is covered by test_local_provider.

Run: ./.venv/Scripts/python.exe test_answer_history.py   (Linux: ./.venv/bin/python)
"""
import time

import generate as g

QID = "zzzhistory"


def _cleanup():
    for p in g.ANSWERS_DIR.glob(f"{QID}*.md"):
        p.unlink()


def _out(text: str, model: str = "stub") -> dict:
    return {"answer": text, "sources": [], "meta": {"model": model, "cost_usd": 0.0}}


def test_a_regenerate_keeps_the_old_answer_and_adds_the_new_one():
    _cleanup()
    try:
        g._write_answer(QID + "__star", "q?", "AI", _out("first"))
        time.sleep(1.1)  # stamps are second-granular; two in one second would share a name
        g._write_answer(g.version_qid(QID + "__star"), "q?", "AI", _out("second", model="other"))
        vs = g.versions(QID, "star")
        assert [v["answer"] for v in vs] == ["second", "first"], [v["answer"] for v in vs]
        assert vs[0]["meta"]["model"] == "other"
        assert all(v["meta"].get("generated_at") for v in vs), "every version carries its timestamp"
        assert all(v["meta"].get("file") for v in vs), "every version names its file"
    finally:
        _cleanup()


def test_the_legacy_local_file_is_a_version_too():
    """`<qid>__star__local.md` predates the history — it must still show up."""
    _cleanup()
    try:
        g._write_answer(QID + "__star" + g.LOCAL_SUFFIX, "q?", "AI", _out("local"))
        g._write_answer(QID + "__star", "q?", "AI", _out("claude"))
        assert {v["answer"] for v in g.versions(QID, "star")} == {"local", "claude"}
    finally:
        _cleanup()


def test_a_lens_only_sees_its_own_files():
    """`deep` has no suffix, so its pattern must not swallow `__star`; and one qid
    must not swallow another that merely starts with it."""
    _cleanup()
    try:
        g._write_answer(QID, "q?", "AI", _out("deep"))
        g._write_answer(QID + "__star", "q?", "AI", _out("star"))
        g._write_answer(QID + "1", "q?", "AI", _out("other question"))
        assert [v["answer"] for v in g.versions(QID, "deep")] == ["deep"]
        assert [v["answer"] for v in g.versions(QID, "star")] == ["star"]
        assert set(g.cached_modes(QID)) == {"deep", "star"}
    finally:
        _cleanup()


def test_generate_serves_the_newest_version_and_lists_the_rest():
    _cleanup()
    try:
        g._write_answer(QID + "__star", "q?", "AI", _out("old"))
        time.sleep(1.1)
        g._write_answer(g.version_qid(QID + "__star"), "q?", "AI", _out("new"))
        hit = g.generate("q?", "AI", qid=QID, mode="star")
        assert hit["answer"] == "new"
        assert hit["meta"]["cached"] is True
        assert len(hit["versions"]) == 2
    finally:
        _cleanup()


def test_an_explicit_local_provider_never_falls_back_to_claude():
    saved = g.LOCAL_URL
    g.LOCAL_URL = "http://127.0.0.1:9"  # nothing listens on the discard port
    g._probe = (0.0, None)
    try:
        out = g.generate("q?", "AI", qid=QID, mode="star", provider="local", force=True)
        assert out.get("error") == "no_local_model", out
        assert not list(g.ANSWERS_DIR.glob(f"{QID}*.md")), "an error must not be persisted"
    finally:
        g.LOCAL_URL = saved
        g._probe = (0.0, None)


if __name__ == "__main__":
    for fn in [
        test_a_regenerate_keeps_the_old_answer_and_adds_the_new_one,
        test_the_legacy_local_file_is_a_version_too,
        test_a_lens_only_sees_its_own_files,
        test_generate_serves_the_newest_version_and_lists_the_rest,
        test_an_explicit_local_provider_never_falls_back_to_claude,
    ]:
        fn()
        print(f"ok  {fn.__name__}")
    print("all passed")
