---
qid: ing_0450a84ea8__aws__local
question: 'Explain: Furniture — Designing Data-Intensive Applications Book'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 568
total_tokens: 799
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:34:30-05:00'
sources: []
---

**Situation & Task**

In 2023 I led a cross‑functional team at an e‑commerce startup to launch a recommendation engine for home‑furniture sales. The data pipeline had to ingest 10 TB/month of clickstream and inventory logs, transform them into features, train models, and serve predictions with <50 ms latency. We chose *Designing Data‑Intensive Applications* (by Martin Kleppmann) as the blueprint for our architecture.

**Action**

1. **Data ingestion** – I mapped Kleppmann’s “Event Sourcing” chapter to a Kafka‑based ingest layer, using Amazon MSK to guarantee at‑least‑once delivery and auto‑scaling partitions.  
2. **Transformation & storage** – Following the book’s “Immutable Data Store” pattern, we built an event‑driven ETL pipeline with AWS Glue (Spark) that materialized a columnar Parquet catalog in S3, enabling fast analytical reads via Athena.  
3. **Model training** – I leveraged SageMaker Pipelines, embedding Kleppmann’s “Batch vs Streaming” guidance to schedule nightly retraining jobs on GPU‑enabled instances, while using Spot pricing for cost control.  
4. **Serving** – For low‑latency inference we deployed the model as a Lambda layer behind API Gateway, backed by an Amazon DynamoDB cache (TTL 1 h) per Kleppmann’s “Cache-as-First” recommendation.

Throughout, I maintained a *single source of truth* in S3, applied strict schema evolution rules (Avro + Glue Schema Registry), and used CloudWatch metrics to monitor pipeline health.

**Result**

The new system processed 12 TB/month with <2 % data loss, cutting model latency from 350 ms to 35 ms. Revenue from upsells rose 18 %, and we reduced infra spend by 22 % through Spot instances and serverless inference.  

**Leadership Principles Highlighted**

- **Ownership** – I owned the end‑to‑end flow, from data ingestion to serving, and drove cross‑team alignment on SLAs.  
- **Dive Deep** – By dissecting Kleppmann’s patterns into concrete AWS services, we avoided common pitfalls (e.g., data skew in Spark) and tuned for scalability.

**Bar‑raiser takeaways**

- Clear mapping of theory → practice demonstrates ownership.  
- Quantified impact (latency, revenue, cost) shows depth and business focus.  
- Acknowledging a failed early attempt (initial Lambda cold‑start spike) and pivoting to edge caching illustrates learning from failure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
