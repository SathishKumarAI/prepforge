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


def test_a_rendered_error_page_is_not_content():
    """A browser renders a 403 as happily as an article. Without this gate the
    first render pass saved "Access Denied" and "Attention Required |
    Cloudflare" as study material."""
    body = "word " * 400  # long enough that only the title decides
    assert fr.looks_like_a_wall("Error 404 | Page not found", body)
    assert fr.looks_like_a_wall("Attention Required! | Cloudflare", body)
    assert fr.looks_like_a_wall("Access Denied", body)
    assert fr.looks_like_a_wall("Just a moment...", body)
    # Genuine pages, one of which merely has too little on it to study
    assert not fr.looks_like_a_wall("Consistent Hashing Explained", body)
    assert fr.looks_like_a_wall("Consistent Hashing Explained", "too short")


def test_render_saves_through_the_same_shape_as_a_plain_fetch():
    import capture

    html = "<html><head><title>Vector Clocks</title></head><body><article><p>"
    html += "A vector clock is a data structure. " * 40
    html += "</p></article></body></html>"
    res = capture.read_html("https://example.com/vector-clocks", html, "AI")
    saved = capture.BASE / res["saved"]
    try:
        assert res.get("ok"), res
        text = saved.read_text(encoding="utf-8")
        assert "source: web-render" in text, "a rendered capture must be distinguishable"
        assert "url: https://example.com/vector-clocks" in text
        assert "vector clock" in text.lower()
    finally:
        saved.unlink(missing_ok=True)


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
    total = len([k for k in vars().copy() if k.startswith("test_")])
    print(f"\n{passed}/{total} pass")
    raise SystemExit(0 if passed == total else 1)
