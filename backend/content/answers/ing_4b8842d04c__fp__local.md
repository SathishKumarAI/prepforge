---
qid: ing_4b8842d04c__fp__local
question: 'Explain: The DynamoDB approach to scaling — How Amazon DynamoDB adaptive
  capacity accommodates uneven data access patterns (or, why what you know about DynamoDB
  might be outdated) | AWS Database Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 198
output_tokens: 378
total_tokens: 576
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:45:51-05:00'
sources: []
---

### Why Adaptive Capacity Matters

A key problem in distributed key‑value stores is *hot partitions*: a few items receive the bulk of traffic, while most are idle. If capacity is provisioned uniformly, those hot keys starve and throughput drops—yet provisioning extra for them wastes resources on the cold ones.

DynamoDB’s **Adaptive Capacity** solves this by letting each partition automatically absorb more of the workload that it actually receives. Internally, DynamoDB monitors request rates per partition key (the *partition key* is the hash input). When a partition exceeds its share of the table’s provisioned capacity, DynamoDB transparently shifts data to adjacent partitions or splits the hot partition into smaller ones. This keeps read/write latency low without manual re‑sharding.

### Deeper Principle: Localized Load Balancing

Adaptive Capacity implements *local* load balancing—an instance of online convex optimization. Each request is a point in a high‑dimensional space (partition key, operation type). The system continuously projects the workload onto a capacity budget and adjusts partition boundaries to minimize regret (the difference between actual throughput and the best possible under uniform allocation). This guarantees that the average latency converges to optimal while respecting resource limits.

### Non‑Obvious Insight

Most people think DynamoDB’s scaling is purely “elastic” in the sense of adding more nodes. In reality, **capacity is elastic *within* each node**: hot partitions are split without moving data across availability zones. Thus, even a single region can accommodate skewed workloads, and the cost model remains linear in provisioned throughput. This subtle internal sharding is why many legacy “fixed‑size” DynamoDB tables continue to perform well under uneven access patterns—without any application‑level re‑partitioning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
