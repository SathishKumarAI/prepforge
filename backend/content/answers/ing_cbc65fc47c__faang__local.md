---
qid: ing_cbc65fc47c__faang__local
question: 'Explain: System Design Interview - Distributed Cache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 550
total_tokens: 781
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:33:03-05:00'
sources: []
---

**Clarify**

> “Distributed cache” – a shared in‑memory store (e.g., Redis, Memcached) that multiple services read/write concurrently to reduce DB load and latency.  
> Assumptions: *high read traffic*, *eventual consistency acceptable*, *data size < RAM per node*, *single‑region deployment*.

**Approach**

1. **Requirements & constraints** – capacity, latency (<5 ms), fault tolerance, cache‑miss handling.  
2. **Partitioning strategy** – consistent hashing to spread keys across nodes.  
3. **Replication** – 2–3 replicas per shard for durability and read scaling.  
4. **Cache invalidation** – TTL + write‑through / write‑back policies.  
5. **Client library** – automatic node discovery, retry logic.

**Depth**

- *Partitioning*: consistent hashing with virtual nodes → ~10% rebalancing on topology change.  
- *Replication*: master–slave per shard; reads served from any replica; writes go to master and asynchronously replicated (Raft‑like log).  
- *Consistency*: read‑your‑writes achieved by redirecting client after a write to the master’s local cache or using causal tags.  
- *Eviction*: LRU with size‑based thresholds; hot keys pinned via “hot‑spot” shards.  
- *Failure handling*: on node failure, clients retry with new hash slot; stale data detection via version vectors.  
- *Complexity*: O(1) average lookup; rebalancing O(k log n).  

**Edge Cases**

- *Hot key* → shard spillover; mitigate by split‑replica or dedicated hot cache.  
- *Network partition* → split‑brain; use consensus for master election.  
- *Cache stampede*: use locking (e.g., Redlock) to regenerate only one value.

**Optimize & Communicate**

1. **Performance tuning** – batch network ops, pipelining, pinning CPU cores.  
2. **Observability** – metrics: hit‑ratio, latency distribution, replica lag; alerts for high miss rates.  
3. **Scalability** – add nodes by rehashing virtual nodes; support multi‑region via cross‑region replication with conflict resolution.  

*Storytelling*: “I first mapped the traffic patterns, then chose consistent hashing to keep data local and minimize reshuffling. Replication gives us both durability and read scaling, while TTLs keep stale data out. We guard against hot spots by monitoring hit ratios and re‑sharding on demand.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
