---
qid: ing_5e9ed3c49c__aws__local
question: 'Explain: Mongos — MongoDB Sharding | MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 365
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:59:30-05:00'
sources: []
---

**Situation (S)** – While architecting a real‑time recommendation engine for an e‑commerce platform, the data volume hit 1 TB per day and queries began to saturate single‑node clusters, causing >30 % latency spikes.

**Task (T)** – Scale read/write throughput while keeping cost under $10K/month and maintaining <200 ms query response.

**Action (A)** –  
* Adopted **MongoDB sharding** with **mongos** routers.  
  * Deployed a **sharded cluster** on EC2 Spot + RDS‑Aurora for metadata, using **Auto Scaling Groups** for mongos instances to match traffic patterns.  
  * Implemented **hashed shard keys** on the `user_id` field and enabled **config server replica sets** for high availability.  
  * Leveraged **AWS Global Accelerator** to route traffic regionally, reducing egress costs by ~15 %.  
* Optimized read/write by adding **compound indexes** (e.g., `(category, timestamp)`) and using **read‑preference “secondary”** on replicas for analytics jobs.

**Result (R)** – Achieved 4× throughput with <200 ms latency, cut operational cost from $18K to $9.2K/month, and reduced data‑center energy usage by 22 %.  

> *Leadership Principles*: **Ownership**—I drove end‑to‑end scaling; **Dive Deep**—analyzed shard key distributions and index hit ratios; **Deliver Results**—quantified performance gains and cost savings.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
