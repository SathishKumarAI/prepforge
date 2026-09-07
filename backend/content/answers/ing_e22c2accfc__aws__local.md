---
qid: ing_e22c2accfc__aws__local
question: 'Explain: Summary — SQL vs NoSQL | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 402
total_tokens: 633
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:50:54-05:00'
sources: []
---

**Situation & Task**  
I led a data‑engineering sprint for a recommendation engine that had to ingest ~5 M events per day, generate daily user summaries, and feed them into an ML model on SageMaker. The team debated whether to keep the raw event store in **SQL (Amazon Aurora)** or shift to **NoSQL (DynamoDB)**.

**Action & Design**  
I proposed a hybrid approach:  

| Layer | Data | Service | Rationale |
|-------|------|---------|-----------|
| Ingestion | Raw events | Kinesis Data Firehose → S3 + Lambda → DynamoDB Streams | Low‑latency, autoscaling writes; schema‑flexible for evolving event types. |
| Aggregation | Daily summaries | Athena on partitioned S3 + Glue jobs → Redshift Spectrum | SQL‑friendly analytics, cost‑effective query pricing, and easy business reporting. |
| ML Input | Feature vectors | SageMaker Endpoint (batch transform) reading from Redshift via JDBC | Strong consistency, joins, and ACID guarantees for training data. |

**Result**  
- Write throughput grew from 500 ops/s to 20 k ops/s without provisioning changes.  
- Query latency on daily aggregates dropped from 12 s to <1 s (95th percentile).  
- Storage cost fell by 35 % because S3 lifecycle moved infrequently accessed data to Glacier.  

**Reflection**  
I owned the decision, dug deep into write patterns, and validated trade‑offs with a proof of concept. The experiment taught me that *no single database* is best; blending services yields the highest ROI—an embodiment of **Ownership** and **Dive Deep**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
