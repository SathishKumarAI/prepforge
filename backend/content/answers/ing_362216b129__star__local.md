---
qid: ing_362216b129__star__local
question: 'Explain: Creating Function-Calling Endpoints — Building Tool Agents'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 335
total_tokens: 572
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:16:33-05:00'
sources: []
---

**Situation** – In a fintech startup, our chatbot was getting slammed with user requests that required real‑time stock data and transaction execution. The existing REST API lagged behind the conversational flow, causing users to click “refresh” repeatedly.

**Task** – I needed to create function‑calling endpoints that let the LLM trigger specific tools (market query, trade placement) directly from the dialogue, with minimal latency and secure authentication.

**Action** – First, I designed a lightweight OpenAPI spec exposing two POST routes: `/tool/stock-query` and `/tool/place-order`. Each route accepted JSON payloads, validated them against Pydantic models, and returned structured responses. I wrapped the endpoints in FastAPI for async performance, added JWT middleware to authorize only privileged agents, and used Redis Pub/Sub to queue orders for the trading engine. On the LLM side, I integrated LangChain’s function‑calling schema so that when the model predicted “fetch price”, it automatically called `/tool/stock-query`. I also implemented a retry logic with exponential backoff to handle transient network glitches.

**Result** – The average turn‑around time dropped from 1.8 s to 350 ms, reducing user drop‑off by 27%. The system now supports 5× more concurrent conversations without additional infrastructure. I learned how tightly coupling function calls with LLM prompts can transform a reactive bot into an intelligent agent that feels instantaneous and trustworthy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
