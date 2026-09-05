---
qid: ing_10ae1e3a46__star__local
question: 'Explain: Caching — Caching Inmemory Databases'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 308
total_tokens: 545
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:01:49-05:00'
sources: []
---

**Situation** – While working on a real‑time recommendation engine for an e‑commerce platform, the inference latency was creeping past 350 ms per request, pushing us over our SLA of 300 ms and hurting conversion rates.

**Task** – I had to reduce average response time to below 200 ms without compromising model accuracy or increasing infrastructure cost.

**Action** – I introduced an in‑memory caching layer using Redis as a key‑value store for the most frequently requested user embeddings. First, I profiled request patterns with Prometheus and identified that 70 % of traffic hit only 15 % of users. I serialized the embedding vectors (float32) into byte arrays and stored them in Redis with a TTL of 12 hours. On cache miss, the request fell back to a lightweight inference microservice that served the model from GPU memory. I also implemented a Least‑Recently‑Used eviction policy for stale keys and added a background prefetch job that warmed the cache during off‑peak hours.

**Result** – The average latency dropped from 350 ms to 180 ms, and throughput increased by 45 %. User engagement metrics improved by 12 % over the next month. I learned that judicious use of in‑memory caching can dramatically reduce inference time when combined with smart prefetching and eviction strategies.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
