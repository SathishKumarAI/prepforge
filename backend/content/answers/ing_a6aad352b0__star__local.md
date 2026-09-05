---
qid: ing_a6aad352b0__star__local
question: 'Explain: Cache Hit and Miss — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 314
total_tokens: 555
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:06:28-05:00'
sources: []
---

**Situation** – In my last role, we built a recommendation engine that served personalized content to over 500 k concurrent users. During load testing the API latency spiked from 120 ms to 1.2 s when the cold‑start dataset was fetched from S3 for every request.

**Task** – I had to reduce average response time below 200 ms while keeping CPU usage under 70% on our 8‑core nodes, and ensure that cache invalidation kept recommendations fresh within 5 minutes.

**Action** – I introduced a two‑level cache: an in‑memory Redis layer for hot embeddings (≈10 % of the feature space) and a local LRU cache inside each worker process for per‑session data. I instrumented hit/miss counters with Prometheus, set a TTL of 300 s on Redis keys, and added a background job that preloads the top 1M users into Redis during off‑peak hours. I also switched from naïve string lookups to binary protocol (RESP3) to cut serialization overhead by 30%.

**Result** – Cache hit rate rose from 12% to 87%, cutting average latency to 95 ms and CPU usage to 45%. The system now scales linearly with traffic, and I learned how careful TTL tuning and tiered caching can dramatically improve ML inference pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
