---
qid: ing_69ec1b0d00__star__local
question: 'Explain: Database Tier — Scalability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 313
total_tokens: 549
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:59:14-05:00'
sources: []
---

**Situation:**  
At my previous company we launched a recommendation engine that served up-to‑10 million users daily. Our analytics database started lagging; query latency spiked from 120 ms to over 3 s during peak hours.

**Task:**  
I was tasked with redesigning the data layer so it could scale horizontally, reduce read/write contention, and keep cost under a 15% budget increase.

**Action:**  
First, I profiled workloads in CloudWatch and discovered that most reads were range queries on user‑activity tables. I replaced the monolithic RDS instance with a sharded Aurora Serverless cluster, using partition keys based on user ID modulo 16 to spread writes evenly. For read‑heavy analytics, I introduced a materialized view layer in Amazon Redshift Spectrum, pulling data from S3 partitions that were refreshed nightly via Glue ETL. To avoid cold starts, I added an autoscaling Lambda pool that pre-warmed new Aurora nodes during anticipated traffic spikes. Finally, I set up CloudWatch Alarms and a CI/CD pipeline to automatically deploy schema changes without downtime.

**Result:**  
Read latency dropped to 45 ms on average, while write throughput increased by 4×. Monthly operating costs grew only 12%, staying within budget. I learned that coupling sharding with serverless compute can deliver elastic scalability for mixed read/write ML pipelines without over‑provisioning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
