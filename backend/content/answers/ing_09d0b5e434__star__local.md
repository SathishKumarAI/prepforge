---
qid: ing_09d0b5e434__star__local
question: 'Explain: Example: — System Design: How to Scale a Database'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 360
total_tokens: 599
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:48:43-05:00'
sources: []
---

**Situation:**  
I was leading the backend team for an online recommendation engine that served 2 million daily users. Our training pipeline stored raw click logs in a single PostgreSQL instance, and during peak hours it would lock tables, causing batch jobs to stall and latency to spike.

**Task:**  
Redesign the data layer so that ingestion, training data extraction, and real‑time inference could run concurrently without bottlenecks, while keeping cost per GB low and ensuring ACID guarantees for critical user events.

**Action:**  
I split the schema into a write‑optimized hot tier (Amazon Aurora Serverless) and a read‑heavy cold tier (Redshift). For ingestion I introduced Kafka topics partitioned by user segment, with each consumer writing to the hot tier in micro‑batches. A nightly Spark job materialized summary tables into Redshift for feature engineering. To avoid cross‑tier contention I added a caching layer (Redis) for frequently accessed lookup tables and implemented row‑level security on Aurora to isolate tenant data. Finally, I automated scaling policies: Aurora’s Aurora Serverless v2 adjusted compute based on CPU usage, while Redshift Spectrum queried S3 backups during off‑peak hours.

**Result:**  
Ingestion throughput increased from 200 k rows/sec to 1.2 M rows/sec, and batch training time dropped by 70 %. Real‑time inference latency fell below 50 ms for 95% of requests. The architecture cost decreased by 35% after the first year, and I learned that decoupling write and read workloads with a hybrid cloud strategy is essential for ML pipelines at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
