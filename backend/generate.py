"""Grounded, anti-slop answer generation with Perplexity-style metadata.

Every call returns the answer PLUS: the model used, tokens in/out, the dollar
cost of producing it, and the real web sources consulted — so the learner can
see exactly what it cost and read further.

Two providers, chosen per lens, not per user:

- **A local model via LM Studio** for the seven prose lenses (STAR, ELI5, …).
  They are pure writing against a system prompt; a 14-20B model does that well
  and it costs nothing, so the UI generates them on hover.
- **Claude with the web_search server tool** for `deep` (Grounded), whose whole
  value is real citations. No local model can produce those, so this one bills
  and waits for a deliberate press.

Falls back to Claude for any lens if LM Studio is not running.
"""
from __future__ import annotations

import datetime as dt
import json
import logging
import os
import re
import time
from pathlib import Path

import httpx
import yaml

log = logging.getLogger("generate")

from claude_client import _claude_generate  # noqa: E402
from lens_prompts import MODES  # noqa: E402,F401 — the table every caller reads through this module

# Pre-authored deep answers persisted as readable Markdown (YAML frontmatter +
# answer body). Served with NO API call, and portable to Obsidian / any editor.
ANSWERS_DIR = Path(__file__).parent / "content" / "answers"


# LM Studio's OpenAI-compatible server. Nothing to install: it is the same
# httpx the scrapers already use, and the server is off by default, so a machine
# without LM Studio behaves exactly as before.
LOCAL_URL = os.getenv("LMSTUDIO_URL", "http://localhost:1234/v1").rstrip("/")
LOCAL_MODEL = os.getenv("LMSTUDIO_MODEL", "").strip()
LOCAL_TIMEOUT = float(os.getenv("LMSTUDIO_TIMEOUT", "180"))
# A local answer written by the auto route or a batch script keeps its own
# suffix, so the batch scripts can resume on it. It is one version among the
# others — see `versions`; the regenerate row is how you ask for a new one.
LOCAL_SUFFIX = "__local"
# A regenerate never overwrites. The new answer gets its own file, stamped with
# the second it was written: `q001__star__20260904T143012.md`. The unstamped
# file (and the `__local` one) is simply the oldest version. Nothing is deleted.
VERSION_STAMP = "%Y%m%dT%H%M%S"
# Who writes the answer. `auto` is the per-lens default described above; the
# other three are the learner's explicit choice from the regenerate row.
PROVIDERS = ("auto", "local", "claude", "claude_search")
# LM Studio's model types that can take a chat completion. `embeddings` cannot,
# and it is listed alongside the rest — see `_chat_model_from_native`.
CHAT_TYPES = ("llm", "vlm")
_probe: tuple[float, str | None] = (0.0, None)
# The last model a probe actually SAW, when, and at which URL. A probe that
# fails within PROBE_GRACE_S of that is a saturated GPU answering slowly, not an
# absent server — so the hit is kept instead of caching the miss (COD-152).
# Keyed on the URL: pointing at a different server forgets it.
_seen: tuple[float, str | None, str] = (0.0, None, "")
PROBE_GRACE_S = 60


def _chat_model_from_native() -> str | None:
    """Ask LM Studio's own `/api/v0/models`, which `/v1/models` cannot answer.

    The OpenAI-compatible listing is a flat list of ids: no model type, no load
    state. Both matter here. Downloaded-but-unloaded models are listed too, so
    picking blind can post a chat completion to an *embedding* model, or JIT-load
    a cold one — on this machine that meant a 9B at ~2.4 tok/s timing out into
    the Claude path while a 20B sat loaded in VRAM answering the same lens in 4s.

    Prefers a loaded chat model; falls back to any chat model when none is loaded
    (LM Studio will load it). Returns None on a server that has no v0 endpoint.
    """
    native = LOCAL_URL.rsplit("/v1", 1)[0] + "/api/v0"  # derived per call: tests rebind LOCAL_URL
    data = httpx.get(f"{native}/models", timeout=1.5).json().get("data") or []
    chat = [m for m in data if m.get("id") and m.get("type") in CHAT_TYPES]
    loaded = [m for m in chat if m.get("state") == "loaded"]
    picked = loaded or chat
    return picked[0]["id"] if picked else None


def local_model() -> str | None:
    """The model id LM Studio is serving, or None if it is not running.

    Probed, not configured. The loaded model is changed from LM Studio's own UI,
    and a stale id in `.env` fails the request with a 404 that reads exactly like
    the server being down. `LMSTUDIO_MODEL` overrides when several are loaded.
    The 10s TTL is what lets you start LM Studio mid-session without restarting
    the backend — long enough that a tab row's worth of hovers costs one probe.

    A miss is NOT cached if the same URL answered within the last minute: under
    a loaded GPU one `/models` call can outlast the 1.5 s timeout, and caching
    that told every caller for 10 s that LM Studio was off — the tab row marked
    six free lenses as billed. Measured from the 49,342-pair burn (COD-149).
    """
    global _probe, _seen
    now = time.monotonic()
    if now - _probe[0] < 10:
        return _probe[1]
    found: str | None = None
    try:
        if LOCAL_MODEL:
            found = LOCAL_MODEL
        else:
            try:
                found = _chat_model_from_native()
            except Exception:
                # Not LM Studio, or an older build: any OpenAI-compatible server
                # (llama.cpp, vLLM, Ollama) still works off the /v1 listing.
                found = None
            if not found:
                data = httpx.get(f"{LOCAL_URL}/models", timeout=1.5).json().get("data") or []
                ids = [m.get("id") for m in data if m.get("id")]
                found = ids[0] if ids else None
    except Exception:
        found = None
    if found:
        _seen = (now, found, LOCAL_URL)
    elif _seen[1] and _seen[2] == LOCAL_URL and now - _seen[0] < PROBE_GRACE_S:
        found = _seen[1]
    _probe = (now, found)
    return found


def cached_modes(qid: str) -> list[str]:
    """Lenses already on disk for this question — free, whatever the provider is.

    `generate()` is disk-first: a mode with any version on disk costs nothing
    and calls nobody. The tab row could not know that, so it marked every
    billed-provider lens as billed, including ones it would have served from a
    file. Every file shape counts — see `_version_paths`.
    """
    return [mode for mode in MODES if _version_paths(qid, mode)]


def free_modes() -> list[str]:
    """Lenses that cost nothing right now — every non-search lens, if LM Studio
    is up. The UI generates these on hover and gates the rest behind a press."""
    return [] if not local_model() else [m for m, (_, _, search) in MODES.items() if not search]


def _strip_reasoning(text: str) -> str:
    """Drop a reasoning model's thought block. Qwen3, gpt-oss and friends emit
    `<think>…</think>` inline in the content; rendering it would bury the answer
    under the working-out."""
    return re.sub(r"<(think|thinking|reasoning)>.*?</\1>", "", text, flags=re.S | re.I).strip()


def _local_generate(system: str, prompt: str, model: str) -> dict:
    """One chat completion against LM Studio. Raises on any transport/HTTP error
    so the caller can fall back to Claude."""
    resp = httpx.post(
        f"{LOCAL_URL}/chat/completions",
        json={
            "model": model,
            "messages": [
                {"role": "system", "content": system},
                {"role": "user", "content": prompt},
            ],
            "max_tokens": 1500,
            "temperature": 0.7,
        },
        timeout=LOCAL_TIMEOUT,
    )
    resp.raise_for_status()
    data = resp.json()
    answer = _strip_reasoning(data["choices"][0]["message"].get("content") or "")
    if not answer:
        raise ValueError("local model returned an empty answer")
    usage = data.get("usage") or {}
    in_tok = usage.get("prompt_tokens", 0)
    out_tok = usage.get("completion_tokens", 0)
    return {
        "answer": answer,
        "sources": [],  # no web search locally — see the module docstring
        "meta": {
            "model": model,
            "provider": "lmstudio",
            "input_tokens": in_tok,
            "output_tokens": out_tok,
            "total_tokens": in_tok + out_tok,
            "web_searches": 0,
            "cost_usd": 0.0,
        },
    }


def _safe_qid(qid: str) -> str:
    # filename-safe; prevents path traversal from a caller-supplied id
    return "".join(c for c in qid if c.isalnum() or c in "-_") or "unknown"


def _answer_path(qid: str) -> Path:
    return ANSWERS_DIR / f"{_safe_qid(qid)}.md"


def _read_answer(qid: str) -> dict | None:
    """Read a persisted answer .md back into the response shape."""
    path = _answer_path(qid)
    if not path.exists():
        return None
    try:
        text = path.read_text(encoding="utf-8")
        if not text.startswith("---"):
            return {"answer": text.strip(), "sources": [], "meta": {}}
        _, fm, body = text.split("---", 2)
        meta = yaml.safe_load(fm) or {}
        sources = meta.pop("sources", []) or []
        return {"answer": body.strip(), "sources": sources, "meta": meta}
    except Exception as exc:
        log.warning("read answer %s failed: %s", qid, exc)
        return None


def _write_answer(qid: str, question: str, topic: str, out: dict) -> None:
    """Persist an answer as Markdown with YAML frontmatter."""
    ANSWERS_DIR.mkdir(parents=True, exist_ok=True)
    out.setdefault("meta", {}).setdefault("generated_at", _now())
    fm = {
        "qid": qid,
        "question": question,
        "topic": topic,
        **out["meta"],
        "sources": out.get("sources", []),
    }
    md = "---\n" + yaml.safe_dump(fm, sort_keys=False, allow_unicode=True) + "---\n\n" + out["answer"].strip() + "\n"
    _answer_path(qid).write_text(md, encoding="utf-8")


def _now() -> str:
    return dt.datetime.now().astimezone().isoformat(timespec="seconds")


# ---- totals over every answer on disk ---------------------------------------
# Served to Settings and to a lens's ⓘ. 107,776 files is a ~30 s scan, so it
# runs once per change to the folder, in a thread, and the result lives in
# `_stats.json` beside the answers (gitignored: derived, regenerated).


def version_qid(cache_qid: str) -> str:
    """The file id for a NEW version of `cache_qid`: the same id, stamped."""
    return f"{cache_qid}__{dt.datetime.now().strftime(VERSION_STAMP)}"


def _version_paths(qid: str, mode: str) -> list[Path]:
    """Every file that is an answer to this question in this lens: the unstamped
    original, the `__local` one, and any stamped regenerate. Anchored at both
    ends so `deep` (no suffix) cannot swallow `q001__star.md`, and `q001` cannot
    swallow `q0011.md`."""
    if not qid or mode not in MODES or not ANSWERS_DIR.exists():
        return []
    base = re.escape(_safe_qid(qid) + MODES[mode][1])
    pat = re.compile(rf"^{base}(?:{LOCAL_SUFFIX})?(?:__\d{{8}}T\d{{6}})?\.md$")
    return [p for p in ANSWERS_DIR.iterdir() if pat.match(p.name)]


def versions(qid: str, mode: str = "deep") -> list[dict]:
    """Every answer on disk for this question+lens, newest first — the history the
    regenerate row shows. Each carries `generated_at` (the file's mtime when the
    frontmatter predates the field) and `file`, so the learner can find it in
    `content/answers/` with any editor."""
    out = []
    for p in _version_paths(qid, mode):
        got = _read_answer(p.stem)
        if not got or not got.get("answer"):
            continue
        meta = got["meta"]
        stamp = meta.get("generated_at")
        if isinstance(stamp, dt.datetime):  # YAML parsed an unquoted timestamp
            stamp = stamp.isoformat(timespec="seconds")
        if not stamp:
            stamp = dt.datetime.fromtimestamp(p.stat().st_mtime).astimezone().isoformat(timespec="seconds")
        meta["generated_at"] = stamp
        meta["file"] = p.name
        out.append(got)
    out.sort(key=lambda a: a["meta"]["generated_at"], reverse=True)
    return out


# A machine-written answer must never read like a curated one. This rides on the
# answer body rather than in a schema field, so it survives every path that
# renders Markdown — the detail pane, a study card, an export, a grep.
MACHINE_NOTE = "_Written by {model} running locally. Machine-generated, not reviewed._"
# The blank line that separates the note from the answer above it. A named
# constant, because an inline escape is the kind of thing an editing pass eats.
MACHINE_SEPARATOR = "\n\n"


def local_only(question: str, topic: str, qid: str, mode: str = "deep", persona: str = "") -> dict:
    """Generate with the local model or raise — never falls back to a billed one.

    `generate()` falls back to Claude when LM Studio fails, which is right for a
    single hover and wrong for a batch of hundreds: one flaky moment mid-run
    would quietly start billing. Batch callers use this, which has no billed path
    at all.

    Cache-first on the same `__local` file the interactive path writes, so a run
    is resumable and a second run over the same ids costs nothing.
    """
    if mode not in MODES:
        raise ValueError(f"unknown mode {mode!r}")
    system, suffix, _ = MODES[mode]
    model = local_model()
    if not model:
        raise RuntimeError(
            f"LM Studio is not answering at {LOCAL_URL}. Start its server (Developer → Start Server) "
            "and load a chat model."
        )
    cache_qid = (qid + suffix + LOCAL_SUFFIX) if qid else ""
    hit = _cached(cache_qid)
    if hit:
        return hit
    out = _local_generate(system, _prompt(question, topic, persona), model)
    out["answer"] = out["answer"].rstrip() + MACHINE_SEPARATOR + MACHINE_NOTE.format(model=model)
    if cache_qid:
        _write_answer(cache_qid, question, topic, out)
    return out


def local_answer_path(qid: str, mode: str = "deep") -> Path:
    """Where `local_only` caches this question+mode. The API reads it to answer a
    question the bank has no answer for."""
    suffix = MODES[mode][1] if mode in MODES else ""
    return ANSWERS_DIR / f"{_safe_qid(qid)}{suffix}{LOCAL_SUFFIX}.md"


def _cached(cache_qid: str) -> dict | None:
    if not cache_qid:
        return None
    hit = _read_answer(cache_qid)
    if hit:
        hit["meta"] = {**(hit.get("meta") or {}), "cached": True}
    return hit


def _prompt(question: str, topic: str, persona: str) -> str:
    prompt = f"Topic: {topic}. Question: {question}"
    if persona.strip():
        prompt += f"\n\n(Tailor to the candidate: {persona.strip()})"
    return prompt


def generate(
    question: str,
    topic: str = "AI",
    persona: str = "",
    qid: str = "",
    mode: str = "deep",
    provider: str = "auto",
    force: bool = False,
) -> dict:
    """Return a deep answer. mode="deep" → grounded/web-sourced; mode="star" → a
    STAR-method interview answer (no web search). Disk-first: the newest answer
    on disk for this question+lens is served with NO API call, and every answer
    ever written rides along in `versions`, newest first.

    `force` regenerates even though an answer exists — and writes the new one to
    its own stamped file, so the old one stays readable (see `versions`).

    Provider `auto`: every lens except `deep` goes to LM Studio when it is
    running, for free; `deep` and any local failure go to Claude. `local`,
    `claude` and `claude_search` are the learner's explicit choice: `local`
    never falls back to a billed model, and `claude_search` is the only way to
    get web citations on a lens other than `deep`.

    Credentials for the live path resolve automatically: ANTHROPIC_API_KEY →
    ANTHROPIC_AUTH_TOKEN → an `ant auth login` developer profile. A Claude Code
    consumer subscription can't call the Messages API from here.
    """
    if mode not in MODES:
        mode = "deep"
    if provider not in PROVIDERS:
        provider = "auto"
    system, suffix, use_search = MODES[mode]
    cache_qid = (qid + suffix) if qid else ""

    if cache_qid and not force:
        vs = versions(qid, mode)
        if vs:
            hit = dict(vs[0])
            hit["meta"] = {**hit["meta"], "cached": True}
            hit["versions"] = vs
            return hit

    # `deep` is the grounded lens; web search is the whole point of it, so it
    # never routes local on its own. Everything else prefers the free provider.
    if provider == "auto":
        use_local = not use_search
    else:
        use_local = provider == "local"
        use_search = provider == "claude_search"
    model = local_model() if use_local else None
    if use_local and not model and provider == "local":
        return {
            "error": "no_local_model",
            "message": f"LM Studio is not answering at {LOCAL_URL}. Start its server and load a chat model.",
        }

    prompt = _prompt(question, topic, persona)
    out = None
    file_qid = version_qid(cache_qid) if (cache_qid and force) else cache_qid
    if model:
        try:
            out = _local_generate(system, prompt, model)
            # The unstamped local file keeps its own suffix: `local_only` and the
            # batch scripts resume on it. A stamped regenerate needs no suffix —
            # the provider is in its frontmatter.
            if file_qid and not force:
                file_qid += LOCAL_SUFFIX
        except Exception as exc:
            if provider == "local":
                return {"error": "generation_failed", "message": str(exc)}
            # Not an error the learner should see: Claude answers it instead.
            log.warning("local generation failed (%s), falling back to Claude: %s", model, exc)
    if out is None:
        out = _claude_generate(system, prompt, use_search)
        if out.get("error"):
            return out
    if file_qid and out["answer"]:  # persist as Markdown so it's free next time
        _write_answer(file_qid, question, topic, out)
    if qid:
        out["versions"] = versions(qid, mode)
    return out


