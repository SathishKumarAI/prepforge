---
qid: ing_436aa13c3d__faang__local
question: 'Explain: Caching Tier — Scalability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 432
total_tokens: 666
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:20:56-05:00'
sources: []
---

**Clarify**  
We’re asked how a *caching tier* can improve scalability in a large‑scale ML serving system.  
Assumptions:  
- The model inference service is stateless and horizontally scalable.  
- Latency constraints are tight (e.g., <10 ms for real‑time recommendations).  
- Data freshness is acceptable at a 1–5 s staleness window.

**Approach**  
1. Identify hot features/embeddings that dominate query time.  
2. Introduce an in‑memory cache (Redis, Memcached) or GPU‑resident cache to store pre‑computed embeddings or partial inference results.  
3. Design a write‑through or read‑ahead policy: update the cache when training data changes; evict LRU items.

**Depth**  
- **Cache key design**: user_id + feature_hash → embedding vector.  
- **Consistency**: use versioned keys or TTLs to avoid stale predictions.  
- **Load balancing**: hash‑sharded cache nodes with consistent hashing so that any inference node can hit the right shard.  
- **Complexity**: O(1) average lookup, O(N) for eviction; overall throughput scales linearly with cache cluster size.

**Edge Cases**  
- Cold start: first request misses → compute on‑the‑fly and populate cache.  
- Cache miss storms: throttle or prepopulate during peak windows.  
- Memory pressure: monitor memory usage and trigger graceful eviction before OOM.

**Optimize & Communicate**  
- Benchmark hit‑rate; aim for >95 % to justify cache cost.  
- Add metrics (hit/miss ratio, latency distribution) in Prometheus; alert on degradation.  
- Explain trade‑offs: higher cache size → more memory cost but lower latency; stricter consistency → additional invalidation logic.  

This design gives linear scalability of inference latency while keeping the model layer stateless and easy to roll out updates.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
