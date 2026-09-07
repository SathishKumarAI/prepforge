---
qid: ing_be8a2394e2__aws__local
question: Why is database sharding important? — What is Database Sharding? - Shard
  DB Explained - AWS
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 404
total_tokens: 644
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:34:16-05:00'
sources: []
---

**Why is database sharding important?**

> *Customer Obsession | Ownership | Dive Deep*

I led a migration for a SaaS platform that served 3 M users. The monolithic PostgreSQL cluster hit a 2 s median latency at peak, and our SLA promised < 200 ms. I proposed sharding on the `user_id` hash to spread load across six Aurora‑PostgreSQL replicas.

**Situation & Task**  
The single cluster was becoming a bottleneck for read/write throughput and backup windows were expanding beyond our 4‑hour maintenance window.

**Action**  
1. **Design** – Partition tables by `user_id % 6`; each shard lives in its own Aurora instance, with cross‑shard queries routed through an application‑level router.  
2. **AWS services** – Aurora Serverless for autoscaling per shard; Route 53 weighted routing to balance read replicas; DynamoDB Streams + Lambda for eventual consistency on global tables.  
3. **Scalability & Availability** – Each shard handles ~500 k TPS, with Multi‑AZ failover (1–2 s recovery). Cost ≈ $0.03/GB/month vs $0.12/GB for the monolith.

**Result**  
- Latency dropped from 2 s to **180 ms median** during peak loads.  
- Throughput increased by **4×**, allowing a 30% growth in user base without further hardware.  
- Backup time reduced to **45 min** (vs 3 h).  

I learned that sharding isn’t just horizontal scaling; it’s about isolating failure domains and aligning data locality with access patterns. If a shard fails, the rest remain online—an ownership mindset that keeps customers satisfied.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
