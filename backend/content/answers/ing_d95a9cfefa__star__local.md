---
qid: ing_d95a9cfefa__star__local
question: 'Explain: Choosing a Strategy — Caching Strategies Summary | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 313
total_tokens: 552
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:43:25-05:00'
sources: []
---

**Situation** – At my previous startup we were running a real‑time recommendation engine that served millions of product suggestions per day. The latency budget was 50 ms, but our inference pipeline hit 120 ms on average because each request triggered a full model forward pass and data fetch from S3.

**Task** – I had to design a caching strategy that reduced the end‑to‑end latency while keeping cache consistency within 5 minutes of model updates.

**Action** – First, I profiled the pipeline and identified two hot spots: feature lookup (≈70 % of time) and model inference (≈30 %). For features I built an LRU in‑memory cache using Redis with a TTL of 4 h, keyed by user ID + feature set. For model outputs I added a “model version” tag and cached the top‑10 recommendations per user in Memcached, refreshing every 5 min via a background job that pulled new weights from S3. To avoid stale data, I implemented cache‑aside logic with ETag comparison so only changed rows triggered a refresh.

**Result** – Latency dropped to 35 ms on average, a 70 % improvement, and the system scaled to 5× traffic without additional infra cost. I learned that separating feature and inference caches, coupled with versioned keys, balances freshness against speed in ML‑heavy services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
