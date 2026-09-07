---
qid: ing_1c95594ec8__aws__local
question: 'Explain: Real-Time Presence Platform High-Level Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 429
total_tokens: 658
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:30:57-05:00'
sources: []
---

**Situation & Task (Ownership + Bias for Action)**  
In my last role I was tasked to build a real‑time presence platform for a global messaging app that had to show “online/offline” status for 200 M users with <1 s latency, while keeping cost under $5 M/yr.  

**Action (Dive Deep + Invent & Simplify)**  
I chose a **Kafka + Kinesis Data Streams** pipeline to ingest presence events from mobile clients.  
* **Producer**: lightweight gRPC client writes to Kinesis; the stream is partitioned by user‑segment for linear scaling.  
* **Consumer**: an autoscaling ECS Fargate fleet runs stateless workers that update a **DynamoDB Global Table** (partition key = `user_id`).  
  * TTL on items guarantees stale presence is purged automatically.  
* **Cache layer**: a **Redis‑Elasticache** cluster with read replicas serves UI lookups, giving <10 ms latency for 99th percentile.  

To reduce write amplification I batch updates every 200 ms and use DynamoDB’s *UpdateItem* with conditional writes.  
For high availability we deployed across two AZs; the Kinesis stream is replicated to a backup region via Cross‑Region Replication, ensuring zero data loss.

**Result (Deliver Results + Customer Obsession)**  
Within three months we hit 99.9 % request latency <500 ms, handled peak of 12 M presence events/second, and reduced infra cost by **32 %** compared to the legacy polling system. The platform also supported a 40 % user growth without additional engineering cycles.

*What bar‑raisers listen for:* ownership in defining SLAs, deep dive into DynamoDB capacity planning, quantified impact (latency & cost), and learning from a failed batch‑processing prototype that highlighted the need for idempotent writes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
