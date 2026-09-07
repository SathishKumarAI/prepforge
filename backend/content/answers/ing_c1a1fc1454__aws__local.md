---
qid: ing_c1a1fc1454__aws__local
question: 'Explain: Cost optimization — MongoDB Sharding | MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 489
total_tokens: 721
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:40:59-05:00'
sources: []
---

**Situation (S)**  
At my previous role I led a data‑science team that migrated an on‑prem MongoDB cluster to the cloud. The monolithic database grew to 15 TB and nightly ETL jobs were running at $12k/month, exceeding our $8k budget.

**Task (T)**  
I had to reduce operating costs by >30% while maintaining 99.9 % read/write latency for a real‑time recommendation engine.

**Action (A)**  

| Step | Technical Decision | AWS Services |
|------|-------------------|--------------|
| **1️⃣ Sharding** | Partitioned the collection by `user_id` into 10 shards, each with its own primary and two secondaries. | Amazon DocumentDB (MongoDB‑compatible) + Auto Scaling |
| **2️⃣ Region‑wide replicas** | Deployed cross‑region read replicas in us-east-1 & us-west-2 to serve local traffic, reducing egress costs. | Global Database for MongoDB |
| **3️⃣ Provisioned IOPS** | Switched from gp2 to io1 volumes; set 200 IOPS per shard based on peak throughput (10k rps). | Amazon EBS |
| **4️⃣ Cost‑aware autoscaling** | Implemented Lambda‑driven scaling that pauses idle shards during off‑peak hours. | AWS Lambda, CloudWatch Alarms |

**Result (R)**  
- *Cost*: $12k → $7.8k/month (34% savings).  
- *Performance*: Avg latency 15 ms (unchanged), 99.9th percentile < 50 ms.  
- *Availability*: No single point of failure; automatic failover within seconds.

**Leadership Principles Highlighted**

1. **Ownership** – I drove the end‑to‑end migration, owning both cost and performance outcomes.  
2. **Dive Deep** – Detailed analysis of query patterns informed shard key choice and IOPS sizing.  

*Bar‑raiser takeaway*: Demonstrated ownership by quantifying impact, deep technical dive into sharding mechanics, and learning from a prior failure where naive replication caused “write amplification” and higher costs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
