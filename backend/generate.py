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
import os

log = logging.getLogger("generate")

MODEL = "claude-opus-4-8"
# USD per input / output token (Opus 4.8: $5 / $25 per 1M).
PRICE_IN = 5.0 / 1_000_000
PRICE_OUT = 25.0 / 1_000_000
# Web search server tool bills ~$10 per 1,000 searches.
PRICE_SEARCH = 10.0 / 1_000

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


def generate(question: str, topic: str = "AI") -> dict:
    """Generate a grounded answer. Returns answer + sources + usage/cost metadata."""
    key = os.getenv("ANTHROPIC_API_KEY", "").strip()
    if not key:
        return {"error": "no_api_key", "message": "Set ANTHROPIC_API_KEY in backend/.env to enable generation."}

    import anthropic  # imported lazily so the app runs without the dep when unused

    client = anthropic.Anthropic(api_key=key)
    messages = [{"role": "user", "content": f"Topic: {topic}. Question: {question}"}]
    tools = [{"type": "web_search_20260209", "name": "web_search", "max_uses": 4}]

    in_tok = out_tok = 0
    result = {"answer": "", "sources": [], "searches": 0}
    try:
        for _ in range(4):  # resume across pause_turn (server tool loop)
            resp = client.messages.create(
                model=MODEL,
                max_tokens=1500,
                system=SYSTEM,
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
        log.warning("generation failed: %s", exc)
        return {"error": "generation_failed", "message": str(exc)}

    cost = in_tok * PRICE_IN + out_tok * PRICE_OUT + result["searches"] * PRICE_SEARCH
    return {
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
