---
qid: ing_32ef239765__aws__local
question: 'Explain: MongoDB database sharding strategies — MongoDB Sharding | MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 482
total_tokens: 718
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:20:19-05:00'
sources: []
---

**Situation & Task**  
At a fintech startup I led the migration of our monolithic PostgreSQL database to a horizontally‑scalable data layer for real‑time fraud detection. The goal was to support **20 M active users** with sub‑second latency and zero single point of failure.

**Action – Sharding Design**  
I chose *MongoDB sharding* because it natively supports range or hash partitioning, automatic balancing, and replica sets—perfect for our read‑heavy analytics workload.  
1. **Shard key selection**: I used a composite key `(userId, transactionTimestamp)` to spread writes across shards while preserving query locality.  
2. **Cluster topology**: 12 shard servers (MongoDB 6.x) on EC2 m5.large, each with an attached 500 GB SSD EBS volume; one config server replica set and a dedicated mongos router per AZ for low‑latency routing.  
3. **Autoscaling & Monitoring**: Leveraged AWS CloudWatch metrics (`shardUtilization`, `writeConcernError`) to trigger EC2 Auto Scaling groups, keeping CPU <70 % and disk IOPS within 80 %.  
4. **Backup & Disaster Recovery**: Daily point‑in‑time backups via MongoDB Atlas’s built‑in snapshot feature, replicated to an S3 bucket in a different region.

**Result**  
- Query latency dropped from **250 ms → 35 ms** (90 % improvement).  
- Write throughput increased by **4×**, supporting peak traffic of **1.2 M ops/sec** without manual rebalancing.  
- Operational costs fell 25 % thanks to efficient shard sizing and autoscaling.

**Reflection**  
I learned that *shard key* choice drives performance; a misstep would have caused hotspotting and degraded service. I documented this in a post‑mortem, shared the playbook with the ops team, and added automated alerts for hot‑shards—an example of **Ownership** and **Dive Deep** that AWS looks for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
