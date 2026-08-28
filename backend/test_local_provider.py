"""Guards the LM Studio routing — the parts that would quietly cost money.

Three claims worth a test: a free lens really goes local and bills nothing, a
local answer never shadows the Claude cache for the same lens, and `deep` never
routes local no matter what is running (its value IS the citations).

Runs against a real stub HTTP server rather than a mock, because the thing being
tested is an HTTP shape — a mocked httpx would pass with the wrong JSON keys.

Run: ./.venv/Scripts/python.exe test_local_provider.py   (Linux: ./.venv/bin/python)
"""
import json
import threading
from http.server import BaseHTTPRequestHandler, HTTPServer

import generate as g

CALLS: list[dict] = []
ANSWER = "<think>weighing two openings</think>**Situation** — the pipeline was dropping rows."


class Stub(BaseHTTPRequestHandler):
    def log_message(self, *a):  # keep the test output clean
        pass

    def _send(self, payload):
        body = json.dumps(payload).encode()
        self.send_response(200)
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def do_GET(self):
        self._send({"data": [{"id": "stub-14b"}]})

    def do_POST(self):
        n = int(self.headers.get("Content-Length", 0))
        CALLS.append(json.loads(self.rfile.read(n)))
        self._send({
            "choices": [{"message": {"content": ANSWER}}],
            "usage": {"prompt_tokens": 120, "completion_tokens": 210},
        })


def start_stub():
    srv = HTTPServer(("127.0.0.1", 0), Stub)
    threading.Thread(target=srv.serve_forever, daemon=True).start()
    g.LOCAL_URL = f"http://127.0.0.1:{srv.server_port}/v1"
    g._probe = (0.0, None)  # drop the TTL cache so the new URL is probed
    return srv


def test_a_prose_lens_runs_local_and_costs_nothing():
    CALLS.clear()
    out = g.generate("Tell me about a hard bug", "AI", mode="star")
    assert out.get("error") is None, out
    assert out["meta"]["provider"] == "lmstudio", out["meta"]
    assert out["meta"]["cost_usd"] == 0.0
    assert out["meta"]["total_tokens"] == 330
    assert len(CALLS) == 1, f"expected one local call, got {len(CALLS)}"
    assert CALLS[0]["model"] == "stub-14b"


def test_the_reasoning_block_is_stripped():
    out = g.generate("Tell me about a hard bug", "AI", mode="star")
    assert "<think>" not in out["answer"]
    assert out["answer"].startswith("**Situation**"), out["answer"][:60]


def test_grounded_never_routes_local():
    CALLS.clear()
    out = g.generate("What shipped in PyTorch this year?", "AI", mode="deep")
    # No local call attempted; without creds it reports that, which is the proof
    # it went down the Claude path with the stub server up and reachable.
    assert not CALLS, "deep must not hit the local model — it needs web citations"
    assert out.get("error") in (None, "no_credentials", "generation_failed"), out


def test_local_answers_cache_under_their_own_suffix():
    qid = "test_local_provider_tmp"
    path = g._answer_path(qid + "__star" + g.LOCAL_SUFFIX)
    claude_path = g._answer_path(qid + "__star")
    try:
        CALLS.clear()
        g.generate("Tell me about a hard bug", "AI", qid=qid, mode="star")
        assert path.exists(), "local answer was not persisted"
        assert not claude_path.exists(), "local answer overwrote the Claude cache slot"
        hit = g.generate("Tell me about a hard bug", "AI", qid=qid, mode="star")
        assert hit["meta"]["cached"] is True
        assert len(CALLS) == 1, "cache hit still called the model"
    finally:
        path.unlink(missing_ok=True)


def test_cached_modes_reports_what_is_actually_on_disk():
    """A lens with a file costs nothing to open, whatever the provider is — and
    a qid is caller-supplied, so it must not be able to walk out of the folder."""
    both_shapes = g.ANSWERS_DIR / "zzztest__star.md"
    local_only = g.ANSWERS_DIR / "zzztest__eli5__local.md"
    try:
        assert g.cached_modes("zzztest") == []
        both_shapes.write_text("---\n---\nx", encoding="utf-8")
        local_only.write_text("---\n---\nx", encoding="utf-8")
        assert set(g.cached_modes("zzztest")) == {"star", "eli5"}, g.cached_modes("zzztest")
        assert g.cached_modes("") == []
        assert g.cached_modes("../../etc/passwd") == []
    finally:
        both_shapes.unlink(missing_ok=True)
        local_only.unlink(missing_ok=True)


def test_no_local_server_means_no_free_lenses():
    g.LOCAL_URL = "http://127.0.0.1:1/v1"  # nothing listens on port 1
    g._probe = (0.0, None)
    assert g.local_model() is None
    assert g.free_modes() == []


if __name__ == "__main__":
    start_stub()
    order = [
        test_a_prose_lens_runs_local_and_costs_nothing,
        test_the_reasoning_block_is_stripped,
        test_grounded_never_routes_local,
        test_local_answers_cache_under_their_own_suffix,
        test_cached_modes_reports_what_is_actually_on_disk,
        test_no_local_server_means_no_free_lenses,  # last: it points LOCAL_URL at a dead port
    ]
    for fn in order:
        fn()
        print(f"ok  {fn.__name__}")
    print("all passed")
