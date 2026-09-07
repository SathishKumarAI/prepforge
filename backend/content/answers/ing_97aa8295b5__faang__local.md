---
qid: ing_97aa8295b5__faang__local
question: 'Explain: Scaling — SQL vs NoSQL | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 643
total_tokens: 877
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:37:30-05:00'
sources: []
---

## Clarify  
We need to compare how scaling is handled when persisting ML‑pipeline data (e.g., training logs, feature stores) in **SQL** vs **NoSQL** databases and sketch a high‑level system design that supports both workloads.

### Assumptions to confirm
- Workload mix: write‑heavy training pipelines + read‑heavy inference serving.  
- Data model: tabular features for SQL; semi‑structured/graph logs for NoSQL.  
- Latency requirement: < 50 ms for inference, > 1 s acceptable for batch training.

## Approach
1. **Identify scaling axes** (horizontal vs vertical, read/write split).  
2. **Map each database type to those axes**.  
3. **Design a hybrid architecture** that routes traffic accordingly.  

## Depth

| Scaling Axis | SQL (RDBMS) | NoSQL (e.g., DynamoDB, Cassandra) |
|--------------|-------------|-----------------------------------|
| **Horizontal scaling** | Limited; sharding/replication is complex and often introduces joins across shards → performance hit. | Native sharding via partition keys → linear scale for writes. |
| **Read scaling** | Replication read replicas improve reads but maintain ACID guarantees; cache (Redis) needed for low latency. | Built‑in read replicas & eventual consistency allow many concurrent readers with minimal overhead. |
| **Write scaling** | Locks and transaction logs become bottlenecks at high TPS; sharding required. | Partitioned writes are fast; tunable consistency lets you trade durability for speed. |
| **Schema evolution** | Rigid schema → migrations expensive; schema changes require downtime. | Flexible JSON/column families → add/remove fields without downtime. |

### Hybrid System Design
- **Feature Store (SQL)**: Postgres with partitioned tables + read replicas + Redis cache for inference.  
- **Training Logs & Metadata (NoSQL)**: DynamoDB with a global secondary index on `job_id`.  
- **Orchestration**: Kafka streams route log events to both stores; batch jobs write to SQL via ETL pipeline.  
- **Monitoring**: Use Prometheus + Grafana to surface latency per tier.

## Edge Cases
- **Cold starts**: Cache miss → hit SQL → slower inference. Mitigate with pre‑warm cache.  
- **Schema drift**: NoSQL accommodates new feature fields; SQL requires migration scripts—use schema versioning table.  
- **Consistency needs**: Inference may tolerate eventual consistency; training data must be strongly consistent.

## Optimize & Communicate
- **Cost trade‑off**: Use cheaper DynamoDB on bursty workloads, expensive Postgres only for critical reads.  
- **Explain to interviewers**: Emphasize that SQL guarantees correctness where needed (feature lookup), while NoSQL delivers elasticity for unstructured telemetry. Highlight how the hybrid design aligns with FAANG’s need for high availability and low latency in ML serving pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
