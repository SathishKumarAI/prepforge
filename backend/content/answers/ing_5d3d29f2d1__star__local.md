---
qid: ing_5d3d29f2d1__star__local
question: 'Explain: Dedupe in Memory — Idempotency | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 335
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:34:37-05:00'
sources: []
---

**Situation** – At a fintech startup, we were processing real‑time transaction streams for fraud detection. Every second we received thousands of identical webhook events from payment gateways; duplicates caused false positives and inflated our alert volume by ~35%.

**Task** – I needed to build an in‑memory deduplication layer that guaranteed idempotent handling of each event while keeping latency below 10 ms, so the downstream ML model could run on clean data.

**Action** – I chose a Bloom filter for fast membership checks and a time‑skewed LRU cache for expiration. Each incoming payload was hashed to a 64‑bit key; the Bloom filter answered “probably seen” in microseconds. If negative, we processed the event, then inserted its key into a Redis‐backed sorted set with a TTL of 5 minutes (the window during which duplicates could arrive). For keys that survived the Bloom filter’s false positives, the cache ensured only the first instance triggered ML inference. I also instrumented Prometheus metrics to track deduplication rate and adjusted filter size/false‑positive rate until we hit <0.1% overhead.

**Result** – Duplicate processing dropped from 35 % to 2 %, alert noise fell by 90 %, and overall latency stayed under 8 ms. I learned that combining probabilistic data structures with short‑lived caches can deliver near‑perfect idempotency in high‑throughput systems without sacrificing performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
