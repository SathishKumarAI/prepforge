---
qid: ing_16b6096fe2__star__local
question: 'Explain: Summary — Caching Strategies Summary | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 357
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:14:13-05:00'
sources: []
---

**Situation** – While leading the deployment of a real‑time recommendation engine for an e‑commerce platform, we noticed that model inference latency spiked to 350 ms during peak traffic, pushing our SLA of 200 ms and hurting conversion rates by ~1.8%.  
**Task** – Reduce end‑to‑end latency below SLA while keeping the cache warm with fresh feature vectors for each user session.  
**Action** – I architected a two‑tier caching strategy:  
1) An in‑memory LRU cache (Redis Cluster, 32 GB RAM) keyed by `user_id|item_id` to store pre‑computed embedding dot products. We set a TTL of 30 s and used Redis’ `MEMORY USAGE` policy to evict least frequently used items during traffic spikes.  
2) A CDN‑backed object cache for static feature blobs (S3 + CloudFront), reducing cold‑start loads by 70%. I added an async refresh pipeline that invalidated keys on model retraining, ensuring freshness without blocking inference. We also instrumented Prometheus alerts to trigger cache warm‑ups when request latency exceeded 180 ms.  
**Result** – Latency dropped from 350 ms to 140 ms (40% improvement), SLA compliance rose to 99.9%, and conversion increased by 2.3%. I learned that combining fine‑grained LRU caching with CDN‑based static asset delivery can dramatically improve ML inference performance in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
