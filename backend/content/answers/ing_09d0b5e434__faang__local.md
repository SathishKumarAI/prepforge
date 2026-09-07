---
qid: ing_09d0b5e434__faang__local
question: 'Explain: Example: — System Design: How to Scale a Database'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 467
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:07:22-05:00'
sources: []
---

**Clarify**  
We need to design a database system that can grow from a few hundred users to millions without sacrificing latency or consistency. Assume the workload is read‑heavy (10× reads) and writes are idempotent updates. We’ll ask about data model, traffic patterns, SLA requirements, and whether we can relax strong consistency.

**Approach**  
1. **Model & Partitioning** – Use a NoSQL key–value store with consistent hashing; shard by user ID to distribute load.  
2. **Replication** – Deploy an asynchronous multi‑region replica set (e.g., Cassandra or DynamoDB) for high availability and low read latency.  
3. **Caching** – Add a distributed cache (Redis Cluster) in front of the DB for hot keys, TTL‑based eviction, and rate limiting.  
4. **Backups & Disaster Recovery** – Incremental snapshots to cold storage; cross‑region failover with automatic promotion.  
5. **Observability** – Metrics (latency, QPS), alerts on replica lag, and automated scaling policies.

**Depth**  
- *Complexity*: Read latency O(1) thanks to cache; write latency O(log N) for hash routing + replication delay (~50–100 ms).  
- *Trade‑offs*: Strong consistency vs. availability—use eventual consistency with read‑repair on conflict.  
- *Scalability*: Adding a shard is just rebalancing the hash ring; caching layer scales horizontally.

**Edge Cases**  
- *Hotspot keys* → introduce consistent hashing with virtual nodes and cache warming.  
- *Network partitions* → fallback to stale replicas, then reconcile via anti‑entropy sweeps.  
- *Burst traffic* → auto‑scale cache shards and spin up read replicas on demand.

**Optimize & Communicate**  
Explain that the design keeps writes fast by batching replication, while reads are served from cache to meet 99.9 % SLA. Highlight monitoring dashboards to prove performance gains. Conclude with next steps: prototype a single shard, benchmark read/write latency, and iterate on partitioning strategy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
