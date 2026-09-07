---
qid: ing_d23ad2367f__aws__local
question: 'Explain: Solution — What is Database Sharding? - Shard DB Explained - AWS'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 527
total_tokens: 763
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:16:01-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **S**ituation: While leading a data‑engineering team for an e‑commerce startup, our monolithic PostgreSQL store hit 1 M RPS and started throttling during flash sales.  
> **T**ask: Design a scalable, highly available solution that keeps latency < 50 ms under peak load without breaking existing applications.  
> **A**ction: I introduced *horizontal sharding*—partitioning the table by customer ID hash into 8 shards hosted on Amazon RDS Aurora PostgreSQL clusters. Each shard runs in its own Availability Zone, uses Aurora’s read replicas for scaling reads, and is backed by Multi‑AZ deployments for failover.  
> **R**esult: After migration, write throughput increased to 5 M RPS, latency dropped from 200 ms to 35 ms, and the cost per transaction fell 30% due to efficient use of Aurora Serverless v2 for idle periods. The architecture also supports auto‑scaling of read replicas during flash sales, ensuring zero downtime.

**Key AWS services & trade‑offs**

| Service | Role | Trade‑off |
|---------|------|-----------|
| **Aurora PostgreSQL** | Managed DB with built‑in replication | Slightly higher per‑instance cost vs. self‑hosted |
| **Elastic Load Balancer (ALB)** | Routes queries to shard endpoints | Adds one extra network hop |
| **AWS Lambda + API Gateway** | Shard router layer | Cold start latency for very infrequent shards |

**Leadership Principles Highlighted**

- **Ownership** – I owned the end‑to‑end migration, from schema design to rollback plans.  
- **Dive Deep** – I profiled query patterns, calculated shard key distribution, and benchmarked read/write splits.  
- **Bias for Action & Deliver Results** – We deployed in 3 days, met SLAs, and achieved measurable cost savings.

**Bar‑raiser cues**

1. Quantified impact (latency, throughput, cost).  
2. Depth of design decisions (shard key choice, replication strategy).  
3. Learning loop: Post‑deployment monitoring revealed hotspot shards; we auto‑rebalanced them, reducing read latency by an additional 15%.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
