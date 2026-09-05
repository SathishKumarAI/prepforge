---
qid: ing_936d82a274__star__local
question: 'Explain: Time-to-Live (TTL) — Cache Eviction Policies'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 355
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:27:31-05:00'
sources: []
---

**Situation:** In a production recommendation engine for an e‑commerce platform, we were serving personalized product embeddings to millions of users per hour. The latency budget was under 50 ms, yet our Redis cache hit rate dropped from 95% to 70% during peak traffic because stale user vectors accumulated in memory.

**Task:** I needed to design a TTL‑based eviction strategy that kept the most relevant embeddings in cache while automatically purging outdated ones, without adding significant overhead or compromising recommendation quality.

**Action:** I introduced a hybrid policy: each embedding key stored its last interaction timestamp and a short TTL of 12 hours. When a user’s session refreshed, we updated the key’s expiration via `EXPIRE`. For heavy keys that stayed active but became less relevant (e.g., after a product was discontinued), I implemented a background job using Redis Streams to scan for keys with high access counts yet low recency and set their TTL to 1 hour. I also added an LRU fallback in case memory pressure exceeded 80%, so the least recently used items were evicted first.

**Result:** Cache hit rate rebounded to 94% during peak periods, reducing response latency from 70 ms to 42 ms on average. The system processed 20% more recommendation requests per second, and user engagement metrics (click‑through rate) improved by 3%. I learned that combining TTL with adaptive refresh logic and LRU fallback provides a robust balance between freshness and memory efficiency in ML serving pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
