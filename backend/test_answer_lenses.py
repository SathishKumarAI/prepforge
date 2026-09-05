"""Guards the batch runner against burning its queue when the provider blinks.

On 2026-09-05 LM Studio stopped answering for a few seconds. The probe cached
the miss for 10 s, every `local_only` call raised instantly, and four workers
marked 49,066 pairs FAILED in about two minutes — the whole ELI5 and
first-principles backlog, skipped without touching the GPU. A provider that is
down is a reason to wait, not a verdict on the question.

Run: ./.venv/Scripts/python.exe test_answer_lenses.py
"""
import httpx

import answer_lenses as a
import generate as g


def _q():
    return {"id": "zzz", "question": "q?", "topic": "AI"}


def test_a_provider_that_is_down_is_waited_for_not_failed():
    calls, naps = [], []
    outcomes = [RuntimeError("LM Studio is not answering"), RuntimeError("still not"), {"answer": "a b c"}]

    def fake_local_only(question, topic, qid, lens):
        calls.append(qid)
        out = outcomes.pop(0)
        if isinstance(out, Exception):
            raise out
        return out

    saved = g.local_only
    g.local_only = fake_local_only
    try:
        qid, lens, words, _ = a.generate_one(_q(), "star", sleep=naps.append)
    finally:
        g.local_only = saved
    assert (qid, lens, words) == ("zzz", "star", 3)
    assert len(calls) == 3, calls
    assert naps == [5, 10], naps  # backs off, does not spin


def test_a_transport_error_is_waited_for_too():
    """A 400 from a server mid-reload is the same event as no server."""
    outcomes = [httpx.HTTPStatusError("400", request=None, response=httpx.Response(400)), {"answer": "x"}]
    saved = g.local_only
    g.local_only = lambda *_: (lambda o: (_ for _ in ()).throw(o) if isinstance(o, Exception) else o)(outcomes.pop(0))
    naps = []
    try:
        out = a.generate_one(_q(), "eli5", sleep=naps.append)
    finally:
        g.local_only = saved
    assert out[2] == 1 and naps == [5]


def test_a_provider_that_never_comes_back_does_fail_eventually():
    saved = g.local_only

    def always_down(*_):
        raise RuntimeError("down")

    g.local_only = always_down
    naps = []
    try:
        try:
            a.generate_one(_q(), "star", sleep=naps.append)
            assert False, "should have raised"
        except RuntimeError:
            pass
    finally:
        g.local_only = saved
    assert len(naps) == a.RETRIES, naps
    assert max(naps) == a.MAX_NAP


def test_the_probe_cache_is_cleared_before_a_retry():
    """The 10 s TTL on `local_model()` is what turned one blink into 49,066
    failures: every retry inside the window read the cached None."""
    saved = g.local_only
    seen = []

    def down_then_up(*_):
        seen.append(g._probe)
        if len(seen) == 1:
            raise RuntimeError("down")
        return {"answer": "ok"}

    g.local_only = down_then_up
    g._probe = (999.0, None)
    try:
        a.generate_one(_q(), "star", sleep=lambda _: None)
    finally:
        g.local_only = saved
        g._probe = (0.0, None)
    assert seen[1] == (0.0, None), seen


if __name__ == "__main__":
    for fn in [
        test_a_provider_that_is_down_is_waited_for_not_failed,
        test_a_transport_error_is_waited_for_too,
        test_a_provider_that_never_comes_back_does_fail_eventually,
        test_the_probe_cache_is_cleared_before_a_retry,
    ]:
        fn()
        print(f"ok  {fn.__name__}")
    print("all passed")
