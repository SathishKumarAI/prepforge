"""Grounded, anti-slop answer generation with Perplexity-style metadata.

Every call returns the answer PLUS: the model used, tokens in/out, the dollar
cost of producing it, and the real web sources Claude consulted — so the learner
can see exactly what it cost and read further.

Uses the official Anthropic SDK with the web_search server tool for real
citations. A practitioner-persona system prompt + web grounding is what keeps
answers sounding like lived experience instead of AI slop.
"""
from __future__ import annotations

import logging
from pathlib import Path

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


def generate(question: str, topic: str = "AI", persona: str = "", qid: str = "", mode: str = "deep") -> dict:
    """Return a deep answer. mode="deep" → grounded/web-sourced; mode="star" → a
    STAR-method interview answer (no web search). Cache-first: a pre-authored .md
    is served with NO API call. Cache-misses (when creds exist) hit the live API
    and are then persisted so they're free next time.

    Credentials for the live path resolve automatically: ANTHROPIC_API_KEY →
    ANTHROPIC_AUTH_TOKEN → an `ant auth login` developer profile. A Claude Code
    consumer subscription can't call the Messages API from here.
    """
    mode = "star" if mode == "star" else "deep"
    cache_qid = qid if (not qid or mode == "deep") else f"{qid}__star"
    if cache_qid:
        cached = _read_answer(cache_qid)
        if cached:
            cached["meta"] = {**(cached.get("meta") or {}), "cached": True}
            return cached

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
    prompt = f"Topic: {topic}. Question: {question}"
    if persona.strip():
        prompt += f"\n\n(Tailor to the candidate: {persona.strip()})"
    messages = [{"role": "user", "content": prompt}]
    system = STAR_SYSTEM if mode == "star" else SYSTEM
    # STAR answers are about delivery, not facts — skip web search (cheaper, faster)
    tools = [] if mode == "star" else [{"type": "web_search_20260209", "name": "web_search", "max_uses": 4}]

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
