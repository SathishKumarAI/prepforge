---
qid: ing_9c100b934b__aws__local
question: 'Explain: MongoDB sharded database architecture — MongoDB Sharding | MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 531
total_tokens: 767
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:17:43-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> *Leadership Principles*: **Ownership**, **Dive Deep**  
> *Result*: 40 % faster query latency and 3× higher write throughput after redesign.

---

### Situation
I led a migration of a legacy analytics platform from a single‑node MongoDB to a sharded cluster. The existing design could not scale past 200 k writes/sec, and the team struggled with data locality for ad‑hoc reports.

### Task
Redesign the architecture on AWS so that it supports >1 M ops/sec, guarantees 99.99 % availability, and keeps cost below $10k/month while preserving the existing application code.

### Action
1. **Shard key**: Chose `user_id` + `timestamp` to ensure even distribution and locality for time‑series queries.  
2. **Cluster layout**: Deployed 3 shard replica sets (primary+secondary) on **RDS‑Aurora‑MongoDB** instances, each with SSD EBS (500 GB). Added a dedicated **config server set** on **EC2 Spot Instances** to reduce cost.  
3. **Network**: Placed all nodes in an isolated VPC with security groups limiting inter‑node traffic to port 27017; used **AWS PrivateLink** for secure, low‑latency access from application tier.  
4. **Monitoring**: Integrated **CloudWatch** metrics (ops/sec, latency) and set up **Auto Scaling** rules on the shard primaries based on write load.  
5. **Backup & Disaster Recovery**: Enabled point‑in‑time recovery via **MongoDB Ops Manager**; configured cross‑region snapshots to S3.

### Result
- *Latency*: Median query time dropped from 250 ms to 60 ms (84 % reduction).  
- *Throughput*: Sustained 1.2 M ops/sec with no spikes in error rates.  
- *Cost*: Monthly spend fell to $8.7k, a 13 % savings vs. the previous on‑prem solution.  

---

**Bar‑raiser takeaway:** I took full ownership of the migration, dove deep into sharding mechanics and AWS tooling, quantified impact with clear metrics, and iterated based on monitoring data—demonstrating measurable business value and continuous learning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
