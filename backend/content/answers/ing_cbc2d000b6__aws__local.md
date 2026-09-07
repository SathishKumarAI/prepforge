---
qid: ing_cbc2d000b6__aws__local
question: 'Explain: Streaming bridge — Open sourcing Brooklin: Near real-time data
  streaming at scale'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 430
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:01:33-05:00'
sources: []
---

**Situation / Task**  
At my previous role I led the migration of our nightly batch ETL for fraud scoring from a Hadoop‑based pipeline to a near‑real‑time architecture. The goal was to reduce data latency from 4 hrs to < 5 min while keeping cost under $50k/month.

**Action**  
I championed **Brooklin**, an open‑source streaming bridge that ingests Kafka topics and writes directly into S3, DynamoDB, or Redshift with exactly‑once semantics. I designed a stateless, horizontally scalable microservice on ECS Fargate, using the Brooklin connectors for Kafka → S3 + Glue ETL. The pipeline was instrumented with CloudWatch metrics (latency, error rate) and Auto Scaling rules.

*AWS services used:*  
- **Amazon MSK** (Kafka) – 10 TB/day throughput  
- **ECS Fargate** – zero‑maintenance scaling, cost $0.025/CPU‑hr  
- **S3** – durable storage for raw streams  
- **Glue** – serverless ETL to transform and load into Redshift  
- **Redshift Spectrum** – query over S3 + Redshift tables

**Result**  
Latency dropped from 4 hrs to < 5 min (99th percentile). Throughput increased by 3×, enabling real‑time fraud detection with a 30% lift in click‑through rates on flagged transactions. Monthly cost fell from $120k to $48k—a 60% savings—while maintaining 99.9% availability.

**Reflection**  
This experience reinforced **Customer Obsession** (delivering instant insights for fraud analysts) and **Ownership** (owning the end‑to‑end pipeline). I learned that open‑source tools like Brooklin can scale with managed services, but require careful observability to surface subtle backpressure issues.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
