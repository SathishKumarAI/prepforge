---
qid: ing_15daeace95__aws__local
question: 'Explain: Need for high availability — MongoDB Sharding | MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 490
total_tokens: 724
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:14:40-05:00'
sources: []
---

**Situation (S)**  
I was leading the backend of a global e‑commerce platform that served ~2 M active users daily. Our catalog and inventory were stored in MongoDB; a single replica set could not meet our SLA of 99.9 % uptime because writes spiked during flash sales.

**Task (T)**  
Design a high‑availability solution that maintained low latency, data consistency, and cost efficiency while scaling to millions of concurrent writes.

**Action (A)**  
- **Sharding strategy:** Partitioned by `product_id` range; each shard ran on an EC2 t3.large in a dedicated VPC subnet with an attached EBS gp3 volume.  
- **Replica sets per shard:** 3‑node replica set (primary + 2 secondaries) to provide automatic failover and read scaling.  
- **AWS services used:**  
  - *Amazon DocumentDB* for managed MongoDB‑compatible clusters, eliminating manual sharding overhead while retaining schema flexibility.  
  - *Elastic Load Balancer* to distribute traffic across shards.  
  - *CloudWatch* for metrics (latency, replica lag) and alarms that trigger an Auto Scaling group to spin up a new shard node when write latency > 200 ms.  
- **Cost & trade‑offs:** Leveraging DocumentDB reduced ops cost by ~30% versus self‑managed sharding; however we accepted slightly higher per‑operation costs (~$0.02) for the benefit of built‑in sharding and automatic backups.

**Result (R)**  
Post‑deployment, we achieved 99.95 % uptime during a 48‑hour flash sale, with average write latency dropping from 350 ms to 80 ms. Monthly operational effort fell by 40 hrs, freeing the team for new feature development.

> **Leadership Principles:** *Customer Obsession* (ensure uninterrupted service), *Ownership* (design end‑to‑end solution), *Dive Deep* (analyze shard performance), and *Bias for Action* (implement quickly).  
> **Bar‑raiser focus:** Quantified impact, depth of technical reasoning, and learning loop—after the first month we tuned shard key distribution to reduce hotspots by 15%.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
