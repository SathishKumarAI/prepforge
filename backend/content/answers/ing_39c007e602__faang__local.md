---
qid: ing_39c007e602__faang__local
question: 'Explain: Cardinality — What is Database Sharding? - Shard DB Explained
  - AWS'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 413
total_tokens: 653
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:58:47-05:00'
sources: []
---

**Clarify**  
You’re asking how “sharding” turns a single relational database into many smaller ones that can scale horizontally—think of it as partitioning data by key. We’ll assume the goal is to handle high read/write throughput and avoid hot‑spots while keeping query latency low.

**Approach**  
1. Define a *shard key* (user_id, order_id, etc.).  
2. Create separate DB instances or clusters per shard.  
3. Route every request to the correct shard using the key.  
4. Keep cross‑shard joins minimal; use application‑level aggregation if needed.

**Depth**  
- **Partitioning**: Hashing vs range. Hash gives uniform distribution but makes range queries hard; range supports sequential scans.  
- **Infrastructure**: In AWS, you can spin up RDS instances or Aurora Serverless clusters per shard. Use Elastic Load Balancer + Lambda for routing logic.  
- **Consistency**: Each shard is isolated; ACID holds locally. Global transactions require two‑phase commit or eventual consistency patterns.  
- **Resilience**: Replicate each shard (multi‑AZ) and use read replicas for scaling reads.

**Edge Cases**  
- *Skew*: Some shards may receive far more traffic → rehash or add new shards.  
- *Rebalancing*: Moving data between shards requires downtime or online migration tools.  
- *Cross‑shard queries*: If you need joins, consider denormalization or a separate analytics layer.

**Optimize & Communicate**  
Explain trade‑offs: sharding reduces contention but increases operational complexity (more replicas, routing logic). Emphasize monitoring shard health and automating rebalancing. Conclude by noting that AWS offers managed services (Aurora Global Database) to abstract many of these concerns while still exposing a sharded architecture under the hood.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
