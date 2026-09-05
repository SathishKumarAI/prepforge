---
qid: ing_5a37566905__star__local
question: 'Explain: Time to Live (TTL) — 7 Cache Eviction Strategies You Should Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 336
total_tokens: 580
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:28:08-05:00'
sources: []
---

**Situation** – At my last job we built a recommendation engine that served millions of personalized product lists per day. The API response time had to stay under 120 ms, but the data set was too big for in‑memory storage on each request.

**Task** – I was tasked with designing a caching layer that kept hot recommendations fresh while ensuring stale entries were purged efficiently. We needed a strategy that balanced hit rate, memory usage, and consistency across distributed workers.

**Action** – I introduced Redis as our cache store and implemented seven eviction policies: LRU, LFU, TTL (time‑to‑live), FIFO, Random, Least Recently Written (LRW), and an application‑level “soft TTL” that refreshed entries on access. For each policy I wrote micro‑benchmarks to measure hit ratio, memory footprint, and latency under simulated traffic. We then created a hybrid approach: core items had a short 30 s TTL with LRU eviction; less critical data used LFU with a 5‑minute expiration. We also added a background job that revalidated stale keys via our recommendation model.

**Result** – The hit rate jumped from 58 % to 92 %, memory usage dropped by 35 %, and average API latency fell below 90 ms. I learned that combining TTL with adaptive eviction gives the best trade‑off between freshness and performance, and that real‑world traffic patterns often invalidate textbook “best” policies.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
