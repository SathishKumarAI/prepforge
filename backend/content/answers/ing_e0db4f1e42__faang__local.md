---
qid: ing_e0db4f1e42__faang__local
question: 'Explain: Caching — System Design: How to Scale a Database'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 470
total_tokens: 706
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:21:56-05:00'
sources: []
---

**Clarify**  
We need to design a scalable database system that can handle high read/write traffic and still keep latency low. Key assumptions:  
1. Workload is read‑heavy with occasional writes (e.g., social feed).  
2. Data consistency can be relaxed for reads (eventual).  
3. Budget allows horizontal scaling but not massive overprovisioning.

**Approach**  
1. **Partition (shard) data** across multiple nodes by key or range.  
2. **Cache frequently read items** in an in‑memory layer (e.g., Redis, Memcached).  
3. Use a **write‑through / write‑back policy** to keep cache and DB in sync.  
4. Implement **replication** for fault tolerance and read scaling.  
5. Deploy a **load balancer** that routes reads to cache first, falls back to DB if miss.

**Depth**  
- *Sharding*: consistent hashing reduces rebalancing cost.  
- *Caching*: TTL per key; eviction policy (LRU).  
- *Consistency*: write‑through ensures new writes hit cache and persist; eventual consistency for stale reads is acceptable.  
- *Replication*: master–slave or multi‑master with conflict resolution.  
Complexity: sharding O(1) lookup, cache hit O(1), DB fallback O(log n).  
Trade‑offs: higher cache cost vs lower DB load; staleness risk.

**Edge Cases**  
- Cache stampede on hot key misses → use “cache‑aside” with locking or a “request coalescing” pattern.  
- Shard failure → automatic failover to replica, with graceful degradation.  
- Data growth → dynamic re‑sharding and cache eviction tuning.

**Optimize & Communicate**  
To further scale:  
1. **Bloom filters** per shard to avoid unnecessary DB lookups for missing keys.  
2. **CQRS pattern**: separate read model (denormalized, cached) from write model (ACID).  
Explain that each layer adds latency but amortizes cost across millions of requests, keeping the system responsive and horizontally expandable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
