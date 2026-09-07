---
qid: ing_142093c6c4__aws__local
question: 'Explain: MongoDB sharded clusters — MongoDB Sharding | MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 498
total_tokens: 733
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:10:31-05:00'
sources: []
---

**Situation (S)**  
At my previous role I led the migration of a legacy e‑commerce catalog from a single MongoDB instance to a horizontally scalable architecture that could support 200 k concurrent users during flash sales.

**Task (T)**  
I had to design a sharded cluster that maintained strong read consistency, reduced latency below 50 ms, and kept cost under $12K/month on AWS.

**Action (A)**  
* **Architecture** – Deployed **MongoDB Atlas** on **Amazon EC2 Spot + EBS Provisioned IOPS** for nodes; used a **config server replica set** on **RDS Aurora PostgreSQL** as a lightweight metadata store.  
* **Sharding strategy** – Chose a **hashed shard key (`product_id`)** to evenly distribute writes across three shards (each 3-node replica sets). Added an **autoscaling policy** that added or removed shards based on CPU/IO metrics.  
* **Availability & resilience** – Enabled **MongoDB’s built‑in automatic failover** and set up a **Global Cloud Manager backup** with a 30‑day retention. Integrated with **AWS CloudWatch** for anomaly detection.  
* **Cost optimisation** – Leveraged **Reserved Instances (3‑yr)** for core shards, switched to **Spot Instances** for read replicas, and used **S3 Glacier** for cold backups.

**Result (R)**  
The sharded cluster handled 1.2 M writes/second during peak events with <45 ms average latency, a 30% reduction in query time versus the monolithic setup. Monthly spend dropped from $18K to $11.5K while maintaining a 99.99% uptime SLA.

---

### Leadership Principles Highlighted  
* **Ownership** – Took full responsibility for performance, cost, and reliability.  
* **Dive Deep** – Analyzed shard key distribution, I/O patterns, and failure modes before implementation.  

Bar‑raisers look for quantified impact (latency & cost), depth of analysis (shard strategy, autoscaling logic), ownership (end‑to‑end migration), and lessons learned (iterative tuning after first flash sale).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
