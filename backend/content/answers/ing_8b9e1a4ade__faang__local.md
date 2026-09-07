---
qid: ing_8b9e1a4ade__faang__local
question: 'Explain: Failure Handling — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 509
total_tokens: 745
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:09:01-05:00'
sources: []
---

## Clarify  
You’re asking for a **system‑design** explanation of *caching* as a failure‑handling strategy in ML pipelines.  
- Are we talking about caching model outputs, feature vectors, or pre‑computed embeddings?  
- What failure modes are you concerned with (latency spikes, data loss, node crashes)?  
- Do you need an in‑memory cache, disk‑based, or distributed system?

## Approach  
1. **Define the use‑case** (e.g., a recommendation engine that needs fast feature lookups).  
2. **Identify failure scenarios** where caching helps (slow DB, network partition, hot key spikes).  
3. **Choose a cache architecture**: local in‑process vs distributed (Redis, Memcached, etc.).  
4. **Integrate with ML workflow**: cache feature extraction results or model inference outputs.  
5. **Implement eviction & consistency policies** to keep stale data from corrupting predictions.

## Depth  
- **Cache Layer**: In‑memory key‑value store; low‑latency reads (~µs).  
- **Consistency**: Write‑through vs read‑through; use version tags or timestamps for staleness detection.  
- **Eviction**: LRU, LFU, or time‑based TTL to bound memory usage.  
- **Failure Handling**: On cache miss, fall back to recompute and write back; on node failure, replicate data across shards (e.g., Redis Cluster).  
- **Complexity**: O(1) average lookup; space overhead proportional to cached items.

## Edge Cases  
- **Cache stampede** when many threads hit a missing key → use *cache‑aside* with distributed locks.  
- **Stale model updates**: invalidate cache entries after a new model version is deployed.  
- **Memory exhaustion**: monitor and trigger eviction or scale horizontally.

## Optimize & Communicate  
- **Measure hit rate**; aim for >95% to justify the cost.  
- **Use metrics (latency, error rates) in A/B tests** before rolling out.  
- **Explain trade‑offs**: higher memory → lower latency vs. risk of serving stale predictions.  

By framing caching as a *resilience layer* that absorbs backend hiccups and reduces recomputation, you provide both performance gains and graceful failure handling for ML systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
