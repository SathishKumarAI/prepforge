---
qid: ing_bb9347f8f9__star__local
question: 'Explain: Infinite TTL — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 336
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:46:25-05:00'
sources: []
---

**Situation**  
At my last job I was building a recommendation engine that served personalized product suggestions in real‑time for an e‑commerce platform with ~30 M daily active users. The model inference latency had to stay below 50 ms, but the raw feature store (user clicks, purchase history) was too large to compute on every request.

**Task**  
I needed a way to keep the most frequently requested feature vectors in memory so that we could bypass expensive database lookups and still satisfy our SLA while ensuring data freshness for time‑sensitive signals like cart abandonment.

**Action**  
I implemented an infinite TTL cache using Redis with key eviction based on Least Recently Used (LRU). Feature vectors were serialized as Protocol Buffers, keyed by user_id. On a cache miss we fetched the vector from Cassandra, updated the cache, and returned it. To keep stale data minimal I added a background worker that refreshed entries every 15 minutes for users whose activity score exceeded a threshold. We also monitored hit rates via Prometheus and adjusted memory limits to maintain >95% hits.

**Result**  
Cache hit rate climbed from 12% to 92%, cutting inference latency from 120 ms to 35 ms, well under our target. The system handled 2× the traffic without additional hardware, and we reduced Cassandra read load by ~70%. I learned how to balance cache size, eviction policy, and refresh strategy to meet strict SLAs in a high‑scale ML pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
