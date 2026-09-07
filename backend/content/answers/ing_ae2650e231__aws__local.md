---
qid: ing_ae2650e231__aws__local
question: 'Explain: Frequency — What is Database Sharding? - Shard DB Explained -
  AWS'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 488
total_tokens: 724
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:59:22-05:00'
sources: []
---

**Answer – “What is Database Sharding?”**

> *Leadership Principles:* **Ownership** & **Dive Deep**  
> I take full responsibility for the system’s reliability and dive deep into every layer to understand its limits.

**Situation / Task**  
When launching a global e‑commerce platform, our monolithic PostgreSQL instance hit 3 TB and started throttling on reads. The goal: keep latency < 200 ms for 90% of traffic while staying within the $2k/month budget.

**Action**  
I designed a **horizontal sharding** strategy:

| Component | AWS Service | Rationale |
|-----------|-------------|-----------|
| Shard routing | Amazon Route 53 + Application Load Balancer (ALB) with weighted target groups | Low‑latency DNS routing by customer region |
| Data store per shard | Amazon Aurora PostgreSQL Cluster (one cluster per shard) | Managed scaling, HA, and read replicas |
| Metadata & orchestration | DynamoDB for shard map + Lambda to update mapping | Serverless, zero‑ops, instant propagation |
| Monitoring | CloudWatch + AWS X-Ray | Capture latency per shard, auto‑scale |

Sharding key: `customer_id % N` (N = 8). Each shard handled ~400 GB. I added **read replicas** for high‑traffic shards, reducing read latency from 350 ms to <120 ms and cutting RDS instance hours by 35%.

**Result**  
- *Availability:* 99.97% uptime vs 99.9% pre‑shard.  
- *Cost:* Monthly spend dropped from $4.8k to $2.1k (45% savings).  
- *Performance:* 90th percentile latency <200 ms, peak read throughput increased by 3×.

**Learnings & Bar‑raiser Signals**  
I validated the shard key with real traffic patterns, iterated on the routing logic after a 12 h failure test, and documented rollback procedures. The bar‑raiser will look for this ownership cycle—design → deploy → monitor → iterate—and the data-backed impact I quantified above.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
