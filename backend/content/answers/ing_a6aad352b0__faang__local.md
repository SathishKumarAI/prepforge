---
qid: ing_a6aad352b0__faang__local
question: 'Explain: Cache Hit and Miss — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 449
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:12:31-05:00'
sources: []
---

**Clarify**  
You’re asking about *caching* in a system‑design context: what it means for an operation to “hit” or “miss” the cache, and why that matters for performance and scalability. I’ll assume we’re dealing with read‑heavy workloads (e.g., serving ML model predictions) where latency is critical.

**Approach**  
1. Define a cache as an in‑memory store of recently accessed data.  
2. Explain “cache hit” vs. “miss”.  
3. Discuss typical cache replacement policies and consistency concerns.  
4. Tie it back to ML inference pipelines (model parameters, feature stores).

**Depth**  
A *cache* holds key–value pairs for fast retrieval; a **hit** occurs when the key exists in the cache, returning data instantly; a **miss** forces a fetch from the backing store (disk, database, remote service). Common eviction strategies: LRU, LFU, MRU, or custom TTLs. Consistency models—write‑through vs. write‑back—determine how updates propagate. In ML inference, caching can hold pre‑computed embeddings or model weights; a hit eliminates GPU/CPU load and network hops, drastically reducing latency (often from 100 ms to <5 ms). Misses incur higher cost and must be handled gracefully.

**Edge Cases**  
*Stale data*: if the underlying dataset changes faster than cache refresh, predictions become inaccurate.  
*Cold start*: first request for a new key always misses; need pre‑warming or predictive caching.  
*Memory pressure*: over‑caching can thrash RAM, causing evictions that hurt throughput.

**Optimize & Communicate**  
Measure hit ratio (hits/total) and adjust TTLs or cache size to balance freshness vs. latency. Use probabilistic structures (Bloom filters) to avoid unnecessary miss lookups. When explaining, start with a simple “book‑case” analogy, then layer in the ML specifics—this keeps interviewers engaged while showcasing deep understanding.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
