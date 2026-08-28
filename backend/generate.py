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

import logging
import os
import re
import time
from pathlib import Path

import httpx
import yaml

log = logging.getLogger("generate")

# Pre-authored deep answers persisted as readable Markdown (YAML frontmatter +
# answer body). Served with NO API call, and portable to Obsidian / any editor.
ANSWERS_DIR = Path(__file__).parent / "content" / "answers"

MODEL = "claude-opus-4-8"
# USD per input / output token (Opus 4.8: $5 / $25 per 1M).
PRICE_IN = 5.0 / 1_000_000
PRICE_OUT = 25.0 / 1_000_000
# Web search server tool bills ~$10 per 1,000 searches.
PRICE_SEARCH = 10.0 / 1_000

# LM Studio's OpenAI-compatible server. Nothing to install: it is the same
# httpx the scrapers already use, and the server is off by default, so a machine
# without LM Studio behaves exactly as before.
LOCAL_URL = os.getenv("LMSTUDIO_URL", "http://localhost:1234/v1").rstrip("/")
LOCAL_MODEL = os.getenv("LMSTUDIO_MODEL", "").strip()
LOCAL_TIMEOUT = float(os.getenv("LMSTUDIO_TIMEOUT", "180"))
# A local answer is cached under its own suffix so it cannot shadow the Claude
# one for the same lens. Delete the __local file to force a re-generation.
LOCAL_SUFFIX = "__local"
# LM Studio's model types that can take a chat completion. `embeddings` cannot,
# and it is listed alongside the rest — see `_chat_model_from_native`.
CHAT_TYPES = ("llm", "vlm")
_probe: tuple[float, str | None] = (0.0, None)

STAR_SYSTEM = (
    "You are coaching a candidate to answer this interview question OUT LOUD using the "
    "STAR method. Write a first-person spoken answer they could deliver, structured as:\n"
    "**Situation** — a realistic, concrete context (a project, a metric that was off, a deadline).\n"
    "**Task** — what they specifically needed to achieve.\n"
    "**Action** — the steps they took, showing the technical concept in the question applied in practice.\n"
    "**Result** — the measurable outcome (numbers where plausible) + what they learned.\n"
    "Rules: sound like a real engineer telling a story, not a textbook. Specific tools, metrics, "
    "trade-offs. 130-200 words. Use the four bold labels. No preamble, no web citations needed."
)

SYSTEM = (
    "You are a senior AI/ML engineer with 12 years shipping models in production, "
    "answering an interview question. Answer from lived experience, not textbook "
    "recitation:\n"
    "- Lead with the crisp answer, then the nuance.\n"
    "- Use concrete specifics: real tools/libraries, metrics, failure modes you've hit, "
    "trade-offs you've actually weighed. Say 'in production I've seen…' where it fits.\n"
    "- No hedging filler ('it depends' with nothing after), no bullet-point-everything, "
    "no generic preamble. Write like a sharp human talking to a peer.\n"
    "- 120-220 words. Markdown allowed. Ground factual/current claims in the web results."
)

ELI5_SYSTEM = (
    "Explain this to a smart beginner in plain language. One vivid, concrete analogy that "
    "actually maps to the mechanism. Define any unavoidable term once, simply. Stay accurate — "
    "simplified, not wrong. No jargon walls, no equations unless truly needed. 90-160 words, warm "
    "and clear, like a great teacher who respects the reader."
)

FP_SYSTEM = (
    "Answer from first principles like a brilliant researcher. Don't recite the definition — "
    "derive it: start from the fundamental problem it solves, show WHY it must work the way it "
    "does, connect it to a deeper principle (optimization, information, geometry, probability), and "
    "surface one non-obvious insight most people miss. Rigorous and precise, but readable. "
    "140-220 words. Markdown allowed."
)

AWS_SYSTEM = (
    "Coach this as an **Amazon / AWS interview** answer, the Amazon way.\n"
    "- Anchor to the 1-2 most relevant Leadership Principles (Customer Obsession, Ownership, "
    "Dive Deep, Bias for Action, Invent & Simplify, Deliver Results) and name them.\n"
    "- Behavioral → STAR with a **data-driven Result** (real metrics). Technical/system → clarify "
    "requirements, propose a design, name relevant AWS services, and reason about scalability, "
    "availability, cost, and trade-offs.\n"
    "- Show what a **bar-raiser** listens for: ownership, depth ('dive deep'), quantified impact, "
    "and learning from failure.\n"
    "First-person, concrete, 150-230 words. Markdown allowed."
)

THINKING_SYSTEM = (
    "Reveal the **thinking process** for answering this question — the metacognition, not just the "
    "answer. Write a numbered thought-process the candidate can internalize and reuse elsewhere:\n"
    "1. What to clarify first + assumptions to state.\n"
    "2. The mental model / framework to apply.\n"
    "3. How to reason step by step toward the answer.\n"
    "4. Common traps and wrong turns to avoid.\n"
    "5. How to sanity-check and communicate it out loud.\n"
    "150-220 words. Markdown allowed."
)

FAANG_SYSTEM = (
    "Coach this as a **FAANG interview** answer (Meta/Google/Amazon/Netflix/Apple), using the "
    "structured approach top companies reward:\n"
    "1. **Clarify** — restate the problem; ask the assumptions you'd confirm.\n"
    "2. **Approach** — outline the plan before diving in.\n"
    "3. **Depth** — the core answer with correct technical detail; for coding/system, note "
    "complexity and trade-offs.\n"
    "4. **Edge cases** — what breaks, what you'd test.\n"
    "5. **Optimize & communicate** — improvements + how you'd narrate your reasoning.\n"
    "Emphasize the SIGNAL interviewers score: structured problem-solving, communication, depth. "
    "160-240 words. Markdown allowed."
)

# mode → (system prompt, cache-file suffix, use web search)
MODES = {
    "deep": (SYSTEM, "", True),
    "star": (STAR_SYSTEM, "__star", False),
    "eli5": (ELI5_SYSTEM, "__eli5", False),
    "first_principles": (FP_SYSTEM, "__fp", False),
    "aws": (AWS_SYSTEM, "__aws", False),
    "thinking": (THINKING_SYSTEM, "__think", False),
    "faang": (FAANG_SYSTEM, "__faang", False),
}


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
    """
    global _probe
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
    _probe = (now, found)
    return found


def cached_modes(qid: str) -> list[str]:
    """Lenses already on disk for this question — free, whatever the provider is.

    `generate()` is cache-first: a mode whose .md exists costs nothing and calls
    nobody. The tab row could not know that, so it marked every billed-provider
    lens as billed, including ones it would have served from a file. Both file
    shapes count: `<qid><suffix>.md` (Claude) and `<qid><suffix>__local.md` (a
    local model), because either one short-circuits the same way.
    """
    if not qid:
        return []
    safe = _safe_qid(qid)
    out = []
    for mode, (_, suffix, _) in MODES.items():
        base = f"{safe}{suffix}"
        if (ANSWERS_DIR / f"{base}.md").exists() or (ANSWERS_DIR / f"{base}{LOCAL_SUFFIX}.md").exists():
            out.append(mode)
    return out


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


def _extract(resp) -> dict:
    """Pull answer text + sources out of a Messages response."""
    answer_parts: list[str] = []
    sources: list[dict] = []
    searches = 0
    seen = set()
    for block in resp.content:
        btype = getattr(block, "type", None)
        if btype == "text":
            answer_parts.append(block.text)
            # citations attached to the text block (preferred, precise)
            for cit in getattr(block, "citations", None) or []:
                url = getattr(cit, "url", None)
                if url and url not in seen:
                    seen.add(url)
                    sources.append({"title": getattr(cit, "title", url), "url": url})
        elif btype == "server_tool_use":
            searches += 1
        elif btype == "web_search_tool_result":
            content = getattr(block, "content", None)
            if isinstance(content, list):
                for r in content:
                    url = getattr(r, "url", None)
                    if url and url not in seen:
                        seen.add(url)
                        sources.append({"title": getattr(r, "title", url) or url, "url": url})
    return {"answer": "".join(answer_parts).strip(), "sources": sources, "searches": searches}


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
    fm = {
        "qid": qid,
        "question": question,
        "topic": topic,
        **out.get("meta", {}),
        "sources": out.get("sources", []),
    }
    md = "---\n" + yaml.safe_dump(fm, sort_keys=False, allow_unicode=True) + "---\n\n" + out["answer"].strip() + "\n"
    _answer_path(qid).write_text(md, encoding="utf-8")


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


def generate(question: str, topic: str = "AI", persona: str = "", qid: str = "", mode: str = "deep") -> dict:
    """Return a deep answer. mode="deep" → grounded/web-sourced; mode="star" → a
    STAR-method interview answer (no web search). Cache-first: a pre-authored .md
    is served with NO API call. Cache-misses (when creds exist) hit the live API
    and are then persisted so they're free next time.

    Provider: every lens except `deep` goes to LM Studio when it is running, for
    free; `deep` and any local failure go to Claude.

    Credentials for the live path resolve automatically: ANTHROPIC_API_KEY →
    ANTHROPIC_AUTH_TOKEN → an `ant auth login` developer profile. A Claude Code
    consumer subscription can't call the Messages API from here.
    """
    if mode not in MODES:
        mode = "deep"
    system, suffix, use_search = MODES[mode]

    # `deep` is the grounded lens; web search is the whole point of it, so it
    # never routes local. Everything else prefers the free provider.
    model = None if use_search else local_model()
    if model:
        local_qid = (qid + suffix + LOCAL_SUFFIX) if qid else ""
        hit = _cached(local_qid)
        if hit:
            return hit
        try:
            out = _local_generate(system, _prompt(question, topic, persona), model)
            if local_qid:
                _write_answer(local_qid, question, topic, out)
            return out
        except Exception as exc:
            # Not an error the learner should see: Claude answers it instead.
            log.warning("local generation failed (%s), falling back to Claude: %s", model, exc)

    cache_qid = (qid + suffix) if qid else ""
    hit = _cached(cache_qid)
    if hit:
        return hit

    import anthropic  # imported lazily so the app runs without the dep when unused

    try:
        # zero-arg → resolves ANTHROPIC_API_KEY / ANTHROPIC_AUTH_TOKEN / ant-auth profile.
        # Construction itself raises if no credential is available at all.
        client = anthropic.Anthropic()
    except Exception:
        return {
            "error": "no_credentials",
            "message": "No API credentials. Set ANTHROPIC_API_KEY in backend/.env, or run `ant auth login`.",
        }
    messages = [{"role": "user", "content": _prompt(question, topic, persona)}]
    # only the grounded "deep" mode searches the web; the rest are cheaper/faster
    tools = [{"type": "web_search_20260209", "name": "web_search", "max_uses": 4}] if use_search else []

    in_tok = out_tok = 0
    result = {"answer": "", "sources": [], "searches": 0}
    try:
        for _ in range(4):  # resume across pause_turn (server tool loop)
            resp = client.messages.create(
                model=MODEL,
                max_tokens=1500,
                system=system,
                tools=tools,
                messages=messages,
            )
            in_tok += resp.usage.input_tokens
            out_tok += resp.usage.output_tokens
            part = _extract(resp)
            result["answer"] += part["answer"]
            result["sources"].extend(s for s in part["sources"] if s not in result["sources"])
            result["searches"] += part["searches"]
            if resp.stop_reason == "pause_turn":
                messages.append({"role": "assistant", "content": resp.content})
                continue
            break
    except Exception as exc:
        s = str(exc).lower()
        if isinstance(exc, anthropic.AuthenticationError) or any(
            k in s for k in ("authentication", "api_key", "api key", "credential")
        ):
            return {
                "error": "no_credentials",
                "message": "No API credentials. Set ANTHROPIC_API_KEY in backend/.env, or run `ant auth login`.",
            }
        log.warning("generation failed: %s", exc)
        return {"error": "generation_failed", "message": str(exc)}

    cost = in_tok * PRICE_IN + out_tok * PRICE_OUT + result["searches"] * PRICE_SEARCH
    out = {
        "answer": result["answer"],
        "sources": result["sources"],
        "meta": {
            "model": MODEL,
            "input_tokens": in_tok,
            "output_tokens": out_tok,
            "total_tokens": in_tok + out_tok,
            "web_searches": result["searches"],
            "cost_usd": round(cost, 5),
        },
    }
    if cache_qid and out["answer"]:  # persist as Markdown so it's free next time
        _write_answer(cache_qid, question, topic, out)
    return out
