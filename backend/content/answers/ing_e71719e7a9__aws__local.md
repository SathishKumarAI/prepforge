---
qid: ing_e71719e7a9__aws__local
question: 'Explain: so everything was stored as events flowing'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 453
total_tokens: 682
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:00:50-05:00'
sources: []
---

**Situation & Task**  
At my last role I led the migration of a legacy batch‑processing data lake (≈ 50 TB/year) into an event‑driven architecture so that downstream ML models could be retrained in near real‑time. The goal was to cut model drift time from 3 days to under 4 hours while keeping cost < 15% of the old pipeline.

**Action**  
- **Ownership & Customer Obsession:** I mapped every ingestion point (Kafka, IoT SDKs, SaaS logs) into a single *EventBridge* hub and created granular event schemas with JSON Schema Registry.  
- **Dive Deep & Invent & Simplify:** Implemented a serverless data flow:  
  - *Amazon Kinesis Data Streams* → *Lambda* → *AWS Glue Catalog* → *Lake Formation* → *S3* (partitioned by hour).  
  - Triggers on new partitions fire a *Step Functions* workflow that runs *Amazon SageMaker Processing Jobs* to retrain the churn‑prediction model.  
- **Bias for Action & Deliver Results:** I introduced *AWS AppConfig* to roll out new feature flags for experiments, and used *CloudWatch Alarms* + *SNS* to alert on drift metrics.

**Result**  
- Retraining latency dropped from 3 days → 3 hours (≈ 96% reduction).  
- Model accuracy improved by 4.2% after each retrain cycle.  
- Operational cost fell 12% thanks to serverless compute and auto‑scaling Kinesis shards.  
- Incident response time for data quality issues decreased from ~48 hrs to < 30 min.

**Learning & Bar‑raiser Insight**  
I learned that a clear event schema + automated cataloging dramatically reduces engineering friction, and that continuous monitoring turns data drift into a predictable KPI. The bar‑raiser will note my end‑to‑end ownership, deep technical trade‑offs (Kinesis vs SQS), quantified impact, and iterative learning from early failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
