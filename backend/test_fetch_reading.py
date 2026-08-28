"""Guards for the reading fetcher — the two things that would be expensive to
get wrong: fetching an address that is not on the public internet, and losing
work already done.

No network: every test either checks a pure function or hands the fetcher a
fake. Run: ./.venv/Scripts/python.exe test_fetch_reading.py
"""
from __future__ import annotations

import fetch_reading as fr


def test_private_and_malformed_urls_are_not_fetchable():
    for url in [
        "http://localhost:8787/questions",
        "http://127.0.0.1/x",
        "http://[::1]/x",
        "http://192.168.1.10/admin",
        "http://10.0.0.5/",
        "http://169.254.169.254/latest/meta-data/",  # cloud metadata
        "file:///etc/passwd",
        "ftp://example.com/x",
        "not a url",
        "http://host.does.not.exist.invalid/x",
    ]:
        assert not fr.is_public_url(url), url


def test_a_normal_public_url_is_fetchable():
    # One real resolution, no request. If DNS is down this is the test that says so.
    assert fr.is_public_url("https://example.com/a/page")


def test_collect_urls_dedupes_and_ranks_by_citations(monkeypatch):
    monkeypatch(
        fr,
        "_read_bank",
        lambda path: [
            {"topic": "AI", "links": [{"url": "https://a.example/one"}, {"url": "https://b.example/two"}]},
            {"topic": "AI", "links": [{"url": "https://b.example/two"}, {"url": "mailto:nope"}]},
        ]
        if path.name == "questions.json"
        else [],
    )
    monkeypatch(fr.pipeline_mod, "load_reading", lambda: {"q1": [{"url": "https://b.example/two"}]})

    rows = fr.collect_urls()
    assert [(u, c) for u, _, c in rows] == [
        ("https://b.example/two", 3),
        ("https://a.example/one", 1),
    ], rows


def test_pending_skips_what_already_succeeded(monkeypatch):
    monkeypatch(
        fr,
        "collect_urls",
        lambda: [("https://a.example/done", "AI", 5), ("https://b.example/failed", "AI", 2)],
    )
    index = {
        "https://a.example/done": {"status": "ok"},
        "https://b.example/failed": {"status": "fetch_failed"},
    }
    assert fr.pending(index, retry_failed=False) == []
    assert [u for u, _, _ in fr.pending(index, retry_failed=True)] == ["https://b.example/failed"]


# --- a two-line stand-in for pytest's monkeypatch, so this file runs on its own ---
def _patcher(undo):
    def set_attr(obj, name, value):
        undo.append((obj, name, getattr(obj, name)))
        setattr(obj, name, value)

    return set_attr


if __name__ == "__main__":
    passed = 0
    for name, fn in sorted(vars().copy().items()):
        if not name.startswith("test_"):
            continue
        undo: list = []
        try:
            fn(_patcher(undo)) if fn.__code__.co_argcount else fn()
            print(f"ok   {name}")
            passed += 1
        except AssertionError as exc:
            print(f"FAIL {name}: {exc}")
        finally:
            for obj, attr, old in reversed(undo):
                setattr(obj, attr, old)
    print(f"\n{passed}/4 pass")
    raise SystemExit(0 if passed == 4 else 1)
