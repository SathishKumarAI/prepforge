---
qid: ing_b79c885934__faang__local
question: 'Explain: NoSQL Databases — Scalability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 453
total_tokens: 688
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:50:01-05:00'
sources: []
---

**Clarify**  
You’re asking how NoSQL stores scale in a system‑design interview—i.e., what trade‑offs they make (CAP, consistency) and how that impacts horizontal scaling strategies. I’ll assume we need to support high write throughput for a social feed or IoT telemetry.

**Approach**  
1. Identify CAP dimensions for the chosen NoSQL type (e.g., DynamoDB: CP with tunable consistency).  
2. Explain sharding (horizontal partitioning) and replication patterns.  
3. Discuss load balancing, failure handling, and eventual consistency guarantees.  
4. Show a concrete scaling diagram: client → router → shard(s) → replica set.

**Depth**  
- *Sharding*: key‑based hash or range splits; each node holds a slice of the keyspace. Adding nodes triggers “resharding” by moving ranges—costly but amortized.  
- *Replication*: synchronous replicas for strong consistency (e.g., Cassandra’s quorum reads/writes) vs. asynchronous for high write latency.  
- *Consistency models*: tunable read/write quorums (`QUORUM`, `ALL`, `LOCAL_QUORUM`).  
- *Latency*: consistent reads may hit multiple nodes; eventual reads stay local.  
- *Failure*: anti‑entropy repair, hinted handoff, and gossip protocols keep replicas converging.  
Complexity: O(1) lookup per shard; rebalancing is O(n) over affected shards.

**Edge Cases**  
- Hot keys causing hotspotting → use composite keys or consistent hashing with virtual nodes.  
- Split brain scenarios if network partitions persist > 2× replication factor.  
- Schema evolution—no joins, so denormalize carefully to avoid data duplication.

**Optimize & Communicate**  
Mention that a well‑designed partition key plus a robust load balancer (e.g., AWS ALB) yields linear scalability. I’d summarize: “By distributing data across shards and replicating each shard, NoSQL systems trade strict consistency for horizontal elasticity—enabling petabyte scales with sub‑200 ms writes.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
