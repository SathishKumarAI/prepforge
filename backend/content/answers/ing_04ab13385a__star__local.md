---
qid: ing_04ab13385a__star__local
question: 'Explain: RedisVL and GPTCache — Semantic Caching'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 395
total_tokens: 631
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:38:14-05:00'
sources: []
---

**Situation** – In a recent project for an e‑commerce recommendation engine, our team was running into latency spikes every time the product search API queried the LLM for semantic intent extraction. The request volume hit 10k queries per second during peak hours, and the cost of calling GPT‑4 for each query ballooned.

**Task** – I needed to reduce round‑trip latency by at least 40 % and cut inference costs by a similar margin, while keeping the quality of semantic matches within 95 % accuracy compared to the live model.

**Action** – I introduced a two‑tier cache:  
1. **RedisVL** – a vector store built on top of Redis that stores high‑dimensional embeddings for every product title and description. When a user query arrives, we first embed it with a lightweight sentence transformer, then perform a nearest‑neighbor search in Redis to fetch the top 10 candidate products instantly.  
2. **GPTCache** – a wrapper around the GPT API that keeps a small in‑memory cache of recent prompt–response pairs (keyed by hashed query embeddings). For any new query, we first check GPTCache; if there's a close match, we return the cached intent without hitting OpenAI. Only cold starts go to the LLM.

**Result** – The combined system cut average inference latency from 1.8 s to 0.9 s and reduced API calls by ~45 %, slashing our monthly GPT spend from $12k to $6.5k. Accuracy stayed above 96 %. I learned that pairing a vector cache with an LLM‑specific cache can dramatically improve both performance and cost in real‑time AI services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
