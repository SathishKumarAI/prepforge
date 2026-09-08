"""One answer from Claude, with the web_search server tool when asked.

Owns: the Claude model id, its prices, the pause_turn loop and pulling the
answer and citations out of a Messages response. Does NOT own routing (which
provider answers a lens) or the cache — generate.py does both.
"""
from __future__ import annotations

import logging

log = logging.getLogger("generate")

MODEL = "claude-opus-4-8"
# USD per input / output token (Opus 4.8: $5 / $25 per 1M).
PRICE_IN = 5.0 / 1_000_000
PRICE_OUT = 25.0 / 1_000_000
# Web search server tool bills ~$10 per 1,000 searches.
PRICE_SEARCH = 10.0 / 1_000


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


def _claude_generate(system: str, prompt: str, use_search: bool) -> dict:
    """One answer from Claude, with the web_search server tool when asked.
    Returns an `error` dict rather than raising, so the learner sees why."""
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
    messages = [{"role": "user", "content": prompt}]
    # by default only the grounded "deep" mode searches the web; the rest are
    # cheaper/faster — unless the learner asked for `claude_search` explicitly
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
    return {
        "answer": result["answer"],
        "sources": result["sources"],
        "meta": {
            "model": MODEL,
            "provider": "anthropic",
            "input_tokens": in_tok,
            "output_tokens": out_tok,
            "total_tokens": in_tok + out_tok,
            "web_searches": result["searches"],
            "cost_usd": round(cost, 5),
        },
    }
