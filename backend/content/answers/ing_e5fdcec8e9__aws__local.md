---
qid: ing_e5fdcec8e9__aws__local
question: 'Explain: Multi-tenant architecture — MongoDB Sharding | MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 445
total_tokens: 679
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:57:58-05:00'
sources: []
---

**Situation & Task**  
I led a data‑platform revamp for a SaaS startup that grew from 3 to **30 k customers** in 12 months. The existing single‑tenant MongoDB cluster hit CPU and IOPS limits; we risked SLA breaches and costly vertical scaling. My goal: design a cost‑effective, highly available multi‑tenant architecture with zero downtime.

**Action**  
1. **Sharding Strategy** – Chose *customer_id* as the shard key to isolate tenant data and guarantee even distribution.  
2. **AWS Services** – Deployed **Amazon EC2 Auto Scaling** for mongod nodes, **Elastic Load Balancer** for routing, and **Amazon EBS Provisioned IOPS SSDs** (io1) for storage.  
3. **Operational Enhancements** – Implemented **MongoDB Atlas**‑style sharded clusters with *config servers* on **RDS Aurora PostgreSQL** for metadata, ensuring consistency. Added **AWS CloudWatch + Prometheus** metrics for real‑time monitoring and automated alerts.  
4. **Cost & Availability** – Utilized spot instances for 70 % of read replicas; achieved **25 % cost reduction** while maintaining 99.999 % uptime via multi‑AZ deployments.

**Result**  
- Cut monthly DB spend from **$12k to $9k** (≈ 25 %).  
- Eliminated 95 % of CPU bottlenecks, enabling **10× concurrent tenant load** without performance regression.  
- Reduced mean time to recovery from >30 min to <5 min after node failures.

**Reflection**  
I owned the end‑to‑end migration, dove deep into shard key selection, and iterated on monitoring thresholds based on real metrics. The bar‑raiser will see my proactive ownership, quantitative impact, and lessons learned—specifically that sharding + spot instances can deliver both scalability and cost efficiency in a multi‑tenant MongoDB environment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
