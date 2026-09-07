---
qid: ing_96690e89b7__faang__local
question: 'Explain: Stage 5: Read Replicas (2M-10M users) — Scalability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 568
total_tokens: 814
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:33:45-05:00'
sources: []
---

**Clarify**

You’re asking how to scale a read‑heavy service that serves 2–10 million active users, using *read replicas* to offload traffic from the primary database.  
Key assumptions:  
1. Writes are still handled by a single master (or leader) node.  
2. Latency budget for reads is < 50 ms.  
3. The data model permits eventual consistency on replicas.

**Approach**

1. **Partition (shard) the primary** to keep each replica small.  
2. Deploy *read‑only* replicas per shard, geographically distributed.  
3. Route queries via a lightweight load balancer that prefers the nearest replica.  
4. Use read‑through caching (Redis/MemoryStore) for hot keys.  
5. Periodically verify consistency with a *replica lag monitor* and fall back to master if lag > X ms.

**Depth**

- **Sharding**: hash‐key partitioning + consistent hashing ensures even distribution; each replica handles ~1‑2 M users.  
- **Replication**: asynchronous replication (e.g., PostgreSQL logical decoding) keeps writes fast; replicas apply WAL streams.  
- **Load Balancing**: round‑robin or weighted by latency; use DNS SRV records for geo‑routing.  
- **Consistency Check**: maintain a *lag* metric per replica; if lag > 200 ms, redirect that shard’s reads to master.  
- **Complexity**: Read ops O(1) with cache + O(log N) lookup in hash map for partitioning; writes O(1)+replication overhead.

**Edge Cases**

- Sudden traffic spikes → replicas saturate → fallback to master causing write bottleneck.  
- Replica failure → queries may hit a lagging node unless health checks detect it.  
- Data schema changes that break replication scripts.

**Optimize & Communicate**

- **Auto‑scale**: spin up new replicas when read load > threshold; decommission when low.  
- **Cache invalidation**: publish/subscribe to notify cache on writes, keeping consistency tight.  
- **Monitoring**: dashboards for replica lag, query latency, and CPU/memory usage.  

Explain this plan in a concise diagram, then walk through a use‑case (e.g., user profile read) to show how the request travels from client → LB → nearest replica → cache hit or DB fetch, highlighting where each component contributes to scalability. This demonstrates structured thinking, depth of system design, and clear communication—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
