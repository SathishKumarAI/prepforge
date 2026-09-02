"""Guards for how the bank travels, as opposed to what is in it.

Two things that cost nothing to add and everything to lose silently: the JSON is
compressed on the wire, and an unchanged bank is answered with a 304 instead of
another copy. Neither is visible in any response body, so nothing else in the
app fails if a refactor drops them — hence this file.

Run: ./.venv/Scripts/python.exe test_api_transport.py
"""
from __future__ import annotations

from fastapi.testclient import TestClient

import main

client = TestClient(main.app)


def test_the_bank_is_gzipped_on_the_wire():
    """33.1 MB of near-identical JSON keys is the best case deflate has."""
    res = client.get("/questions/index", headers={"accept-encoding": "gzip"})
    assert res.status_code == 200, res.status_code
    assert res.headers.get("content-encoding") == "gzip", dict(res.headers)


def test_gzip_actually_shrinks_it_by_more_than_half():
    """A ratio, not a byte count: the assertion has to survive the bank growing."""
    plain = client.get("/questions/index", headers={"accept-encoding": "identity"})
    packed = client.get("/questions/index", headers={"accept-encoding": "gzip"})
    on_wire = int(packed.headers["content-length"])
    assert on_wire * 2 < len(plain.content), (on_wire, len(plain.content))


def test_a_client_that_already_has_the_bank_gets_304_and_no_body():
    first = client.get("/questions/index")
    etag = first.headers.get("etag")
    assert etag, dict(first.headers)
    again = client.get("/questions/index", headers={"if-none-match": etag})
    assert again.status_code == 304, again.status_code
    assert not again.content, again.content[:200]


def test_the_full_bank_carries_the_same_etag_machinery():
    res = client.get("/questions", headers={"if-none-match": main._bank_etag()})
    assert res.status_code == 304, res.status_code


def test_the_etag_tracks_the_source_files_not_a_clock():
    """Two reads with nothing touched must agree, or every load is a full one."""
    assert main._bank_etag() == main._bank_etag()


def test_a_changed_bank_invalidates_the_etag():
    """The 304 is only safe if ingesting new cards changes this. Forge a stamp
    rather than touching a real 36 MB file, which would be a slow side effect."""
    before = main._bank_etag()
    real = main._bank_stamp
    try:
        main._bank_stamp = lambda: tuple(t + 1 for t in real())
        assert main._bank_etag() != before
    finally:
        main._bank_stamp = real
    assert main._bank_etag() == before


def test_cache_control_says_revalidate_not_trust_me():
    """max-age would serve cards deleted by the last ingest. no-cache keeps the
    body in the browser's cache but asks before using it."""
    res = client.get("/questions/index")
    assert res.headers.get("cache-control") == "no-cache", dict(res.headers)


if __name__ == "__main__":
    passed = 0
    tests = [v for k, v in sorted(vars().copy().items()) if k.startswith("test_")]
    for fn in tests:
        try:
            fn()
            print(f"ok   {fn.__name__}")
            passed += 1
        except AssertionError as exc:
            print(f"FAIL {fn.__name__}: {exc}")
    print(f"\n{passed}/{len(tests)} pass")
    raise SystemExit(0 if passed == len(tests) else 1)
