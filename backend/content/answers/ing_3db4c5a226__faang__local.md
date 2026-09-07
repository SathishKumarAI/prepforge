---
qid: ing_3db4c5a226__faang__local
question: 'Explain: Cache Consistency — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 509
total_tokens: 746
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:07:17-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise explanation of *caching* in the context of system design, focusing on *cache consistency*: ensuring that cached data remains accurate relative to its source. I’ll assume we’re talking about distributed caching (e.g., Redis or Memcached) used to accelerate read‑heavy workloads.

**Approach**  
1. Define what a cache is and why it’s used.  
2. Explain the consistency problem: stale reads when writes bypass the cache.  
3. Outline common strategies—write‑through, write‑back, invalidation, versioning, TTL—and their trade‑offs.  
4. Touch on how to choose a strategy based on use case.

**Depth**  
A cache is an in‑memory key–value store that serves repeated read requests faster than hitting the primary database. Cache consistency means every read from the cache reflects the latest write performed on the source of truth.  

- **Write‑through** writes propagate immediately to both DB and cache; reads are always fresh but slower on writes (O(2)).  
- **Write‑back** updates only the cache, flushing later; faster writes but risk of data loss if a node crashes.  
- **Invalidation** is the most common: upon write, the corresponding key in all caches is deleted (or marked stale). Subsequent reads fetch fresh data and repopulate the cache.  
- **Versioning/Timestamp** tags each value; clients compare versions to detect staleness.  

Choosing depends on read/write ratio and tolerance for staleness. For high‑read, low‑write systems, invalidation with short TTLs balances freshness and performance.

**Edge Cases**  
- Concurrent writes: ensure atomic invalidation or use optimistic concurrency control.  
- Cache partitioning: a write in one shard must invalidate across shards if data is replicated.  
- Network partitions: stale reads can persist until reconnection; consider quorum reads for critical data.

**Optimize & Communicate**  
Explain that adding an event‑driven pub/sub channel (e.g., Kafka) to broadcast invalidation events scales well: each cache node subscribes and updates locally, avoiding a single point of failure. Conclude by summarizing the trade‑off: stronger consistency (write‑through) vs. lower latency (invalidation + TTL), and how you’d justify the chosen strategy in a real product scenario.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
