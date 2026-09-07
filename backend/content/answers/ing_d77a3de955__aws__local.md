---
qid: ing_d77a3de955__aws__local
question: What is Database Sharding? — Sharding | System Design
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 456
total_tokens: 688
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:26:40-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Leadership Principles:** *Customer Obsession* – we shard to keep latency low for every user request; *Ownership* – I led the migration and owned post‑go‑live monitoring.

### Situation
A recommendation engine at my previous company served 10 M active users. The monolithic PostgreSQL DB hit 200 ms read latency under peak traffic, causing a 3% drop in click‑through rate (CTR).  

### Task
Design a sharding strategy that keeps per‑request latency < 50 ms while staying cost‑effective.

### Action
1. **Analyze access patterns** – most reads were user‑centric (`user_id`), writes were write‑heavy on `session_logs`.  
2. **Choose shard key & layout** – horizontal sharding by `user_id % 256`, placing each shard on an **Amazon Aurora Serverless v2 cluster** (auto‑scales to 0–64 ACUs).  
3. **Routing layer** – a lightweight **AWS Lambda@Edge** function maps incoming requests to the correct shard via DNS aliasing, ensuring sub‑10 ms routing.  
4. **Cross‑shard queries** – offload heavy analytics to an **Amazon Redshift Spectrum** job that reads all shards in parallel.  
5. **Monitoring & rollback plan** – CloudWatch dashboards track per‑shard latency; automated rollbacks via Lambda if any shard exceeds 80 ms.

### Result
*Latency dropped from 200 ms → 45 ms (average) within 3 weeks.*  
*CTR improved by 4% (+120k daily clicks).*  
*Cost reduced by 18 % because Aurora Serverless auto‑scales during low traffic.*

**Bar‑raiser notes:** I showed *ownership* of the full migration, *deep dive* into query patterns, quantified impact on business metrics, and learned from a failed attempt where we used a single RDS instance—prompting us to adopt serverless for elasticity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
