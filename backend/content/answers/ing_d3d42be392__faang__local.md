---
qid: ing_d3d42be392__faang__local
question: 'Explain: High availability — Recommendation engine & system use cases with
  graph databases'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 481
total_tokens: 718
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:52:58-05:00'
sources: []
---

**Clarify**  
You want a high‑availability recommendation service that can handle millions of users and items, provide real‑time suggestions, and survive node failures or network partitions. We’ll assume we need low latency (<50 ms), horizontal scalability, strong consistency for user interactions, and support for graph queries (e.g., similarity, multi‑hop).

**Approach**  
1. Pick a distributed graph store that offers ACID guarantees and tunable replication (Neo4j Aura, Amazon Neptune, JanusGraph on DynamoDB).  
2. Deploy the cluster in multiple AZs; use leader–follower replicas for write throughput and read scaling.  
3. Use a publish/subscribe layer (Kafka) to stream user events into an offline batch pipeline that updates embeddings or graph weights.  
4. Expose a REST/GraphQL endpoint behind a load balancer with health checks.

**Depth**  
- **Replication**: 3‑node quorum for writes ensures durability; read replicas reduce latency.  
- **Sharding**: Partition by user ID to keep connected subgraphs local, minimizing cross‑shard traversals.  
- **Cache**: In‑memory LRU (Redis) for hot recommendations; fallback to graph query when cache miss occurs.  
- Complexity: Write path O(log N) in the underlying B‑tree + traversal cost proportional to hop depth; read path dominated by cache hit (~O(1)).  
- Trade‑off: Strong consistency vs. eventual consistency—choose quorum reads for critical recommendation freshness.

**Edge Cases**  
- Network partition → fallback to stale replicas or local cache.  
- Hotspot nodes (popular items) → increase shard count or replicate that vertex across shards.  
- Schema evolution (new relationship types) → use dynamic property graph model.

**Optimize & Communicate**  
To improve uptime, implement auto‑scaling based on latency metrics and run chaos‑engineering tests to validate failover paths. I’d explain this plan in a diagram: cluster topology, data flow from Kafka → batch job → graph store → cache → API, highlighting the HA mechanisms at each hop. This shows clear structure, technical depth, and practical trade‑offs—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
