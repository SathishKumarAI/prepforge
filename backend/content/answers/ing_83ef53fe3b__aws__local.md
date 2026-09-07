---
qid: ing_83ef53fe3b__aws__local
question: 'Explain: Data streams — Data streams | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 421
total_tokens: 651
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:23:12-05:00'
sources: []
---

**Situation / Task**  
I led a feature for a SaaS analytics platform that had to ingest real‑time telemetry from millions of IoT devices (≈ 10 GB/s). The goal was to provide live dashboards and trigger alerts with < 200 ms latency.

**Action**  
- Adopted **Amazon Kinesis Data Streams** as the ingestion layer, because it guarantees ordered, fault‑tolerant delivery at scale.  
- Created a *Consumer Group* using **Kinesis Data Analytics (SQL)** for real‑time aggregation and anomaly detection; this offloads heavy computation from downstream services.  
- Persisted results to **Amazon DynamoDB** with TTL for 30 days, then archived to **S3** via Kinesis Firehose for long‑term analytics.  
- Implemented *auto‑scaling* on the stream shards (start 200 → auto‑scale up to 1,000) and used **AWS Lambda** to process bursts, keeping cost under $0.03 per GB ingested.  
- Added a *dead‑letter queue* (SQS) for malformed records and an alerting pipeline via **Amazon SNS**.

**Result**  
Reduced end‑to‑end latency from 1 s to 180 ms; handled peak traffic of 12 GB/s without throttling. Monthly operational cost dropped by 35% compared to the legacy Kafka setup, while SLA compliance improved from 92% to 99.9%.

**Learnings**  
- **Ownership:** I drove the end‑to‑end design and took responsibility for failure modes.  
- **Dive Deep:** Continuous monitoring revealed shard imbalance; I tuned shard count and Lambda concurrency accordingly.  
- **Bar‑raiser cues:** Demonstrated measurable impact, cost trade‑offs, and a plan to iterate on error handling after production roll‑out.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
