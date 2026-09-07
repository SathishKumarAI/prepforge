---
qid: ing_902a2cfe46__aws__local
question: 'Explain: Study map — Data Engineer'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 460
total_tokens: 686
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:51:50-05:00'
sources: []
---

**Situation (S)**  
While leading a cross‑functional “Study Map” project for an online learning platform, I was asked to build a data pipeline that ingested user interaction logs (≈ 1 TB/day) and produced real‑time study‑plan recommendations.

**Task (T)**  
Deliver a scalable, fault‑tolerant architecture that processes events in under 5 s, feeds a recommendation model, and exposes results via an API with < 200 ms latency—all while keeping monthly ops cost <$10K.

**Action (A)**  
- **Ownership & Dive Deep:** I wrote the full data‑flow diagram, quantified every bottleneck, and chose services that matched our SLA.  
  - *Ingestion:* Kinesis Data Streams → Lambda for schema validation → S3 Glacier for long‑term storage.  
  - *Processing:* Glue ETL jobs (Spark) to clean & aggregate into Redshift Spectrum tables; also a real‑time Lambda that writes to DynamoDB.  
  - *Model Serving:* SageMaker Endpoint (auto‑scaling) wrapped in API Gateway, throttled to 10 k QPS.  
- **Bias for Action:** Deployed the pipeline in two weeks using IaC (CloudFormation + CDK).  
- **Invent & Simplify:** Replaced a costly EMR cluster with Glue, cutting compute spend by 70%.  

**Result (R)**  
- Throughput: 1 TB/day processed in < 5 s.  
- Latency: API responses < 200 ms for 99.9% of requests.  
- Cost: $8.7K/month (↓30% YoY).  
- Adoption: User engagement on study plans rose 18%, and churn dropped 12%.  

*Bar‑raiser note:* I demonstrated full ownership, deep technical detail, quantified impact, and highlighted lessons from an early failure where a mis‑configured Kinesis shard caused data loss—fixed by adding CloudWatch alarms and auto‑scaling shards.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
