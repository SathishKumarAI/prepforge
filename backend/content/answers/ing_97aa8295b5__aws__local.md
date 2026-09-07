---
qid: ing_97aa8295b5__aws__local
question: 'Explain: Scaling — SQL vs NoSQL | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 439
total_tokens: 670
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:08:36-05:00'
sources: []
---

**Situation & Task**  
In my last role I led the migration of a recommendation engine from an on‑premises SQL cluster to a cloud‑native data platform that had to support > 10 M daily users with sub‑second latency. The key challenge was choosing between relational and document stores while keeping cost, availability, and developer velocity in check.

**Action**  
I *dive deep* into the access patterns: user profiles (highly normalized), click streams (write‑heavy, append‑only), and product catalog (read‑many).  
- **SQL (Amazon RDS Aurora PostgreSQL)** for transactional data where ACID guarantees were critical.  
- **NoSQL (Amazon DynamoDB)** for click streams and catalog caching because of its single‑digit millisecond reads/writes at scale.  
I built a *data lake* on S3 with Glue ETL to feed an Athena / Redshift Spectrum warehouse for batch analytics, enabling model training in SageMaker.  

To keep **cost** low I used DynamoDB On‑Demand for unpredictable traffic and Aurora Serverless for bursty SQL workloads. For **availability**, I enabled multi‑AZ deployments and Global Tables for cross‑region reads. I also introduced a *caching layer* (ElastiCache Redis) to reduce database load by ~35 %.  

**Result**  
The new architecture cut infrastructure spend by 28 % YoY, improved recommendation latency from 350 ms to 75 ms, and increased click‑through rate by 12 % after a model update. I *owned* the post‑mortem of an earlier failure (a write hotspot) and introduced automated CloudWatch alerts that reduced similar incidents by 90 %.  

**Learning & Ownership**  
I learned that “one size does not fit all” – SQL for consistency, NoSQL for scale. By continuously monitoring metrics I stayed *customer obsessed*, ensuring the system delivered real business value while remaining cost‑efficient and highly available.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
