---
qid: ing_5e34369746__star__local
question: 'Explain: Cache as Primary Storage — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 364
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:36:20-05:00'
sources: []
---

**Situation:**  
At my previous startup we built a recommendation engine that served personalized content to over 2 M daily users. The model inference latency was ~150 ms per request, causing our API throttling and a 12% drop in user engagement during peak hours.

**Task:**  
I needed to reduce the average inference time below 80 ms without adding costly GPU clusters, while keeping the model versioning pipeline intact for nightly retraining.

**Action:**  
I introduced a two‑layer cache: an in‑memory Redis store as primary storage for precomputed feature vectors and a read‑through cache that materialized the entire inference result set. The first layer used LRU eviction keyed by user ID + content bucket, with 512 MB of RAM. For cold starts I implemented a background worker that pre‑warmes the cache during low traffic windows using the nightly model artifacts. To avoid stale data, I added a time‑to‑live (TTL) of 30 minutes and an event‑driven invalidation hook that purged affected keys when new training data arrived. I also instrumented Prometheus metrics to track hit/miss ratios and latency per endpoint.

**Result:**  
Cache hit rate climbed from 12% to 78%, slashing inference latency to 65 ms on average. This translated into a 7% lift in daily active users and a 4% increase in revenue per session. I learned that treating the cache as primary storage, not just a speed‑up layer, can dramatically improve system scalability when paired with smart eviction and invalidation strategies.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
