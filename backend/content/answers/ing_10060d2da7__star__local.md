---
qid: ing_10060d2da7__star__local
question: 'Explain: Enabling integration — What Is a Data Architecture? | IBM'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 341
total_tokens: 581
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:00:22-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup, we were building a real‑time fraud detection engine. Our engineering team had trained several ML models on historical transaction logs stored in an on‑prem Hadoop cluster, but the production environment was a cloud‑based streaming pipeline that couldn’t access that data lake.

**Task** – I needed to design a data architecture that would let our model training and inference pipelines share the same schema, scale horizontally, and expose a single API for downstream services—all while keeping compliance with GDPR.

**Action** – First, I mapped out an end‑to‑end flow: raw Kafka streams → Spark Structured Streaming jobs → a columnar Delta Lake on S3 for both historical backfill and online serving. I introduced a canonical data model (customer ID, transaction amount, merchant code, timestamp) and built a schema registry in Confluent to enforce versioning. Then I set up an Airflow DAG that periodically refreshed the Delta tables from our Hadoop HDFS, using AWS Glue to convert Avro files into Parquet. Finally, I wrapped the ML model in a FastAPI service that queried the Delta Lake via Spark SQL for inference.

**Result** – The new architecture cut data latency from 30 minutes to under 5 seconds, increased throughput by 4×, and reduced storage costs by 25 % through columnar compression. I learned that a well‑defined canonical schema and a unified lakehouse can bridge disparate systems without sacrificing real‑time performance or regulatory compliance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
