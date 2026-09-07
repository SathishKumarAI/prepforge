---
qid: ing_00f71d0b7c__aws__local
question: 'Explain: External data sources — Asynchronous computing at Meta: Overview
  and learnings'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 492
total_tokens: 728
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:26:41-05:00'
sources: []
---

**Situation & Task**  
When I led the *External Data Pipeline* for a recommendation engine at Meta, we had to ingest terabytes of third‑party clickstream logs in near real‑time and feed them into our ML models. The goal was to reduce model retraining lag from 24 hrs to 4 hrs while keeping costs under $200k/month.

**Action – Design & Implementation**  
I architected an **asynchronous, event‑driven pipeline** using:

| Component | AWS Service | Reason |
|-----------|-------------|--------|
| Ingest raw logs | Amazon Kinesis Data Streams (shards × 2) | Low latency, auto‑scaling |
| Pre‑process & enrich | AWS Lambda + Step Functions | Serverless compute, stateful orchestration |
| Persist processed data | Amazon S3 Glacier Deep Archive → S3 Standard-IA | Cost‑effective tiering |
| Feature store | Amazon SageMaker Feature Store | Unified read/write for training & inference |
| Model retraining trigger | EventBridge rule on feature store updates | Decoupled, event‑driven |

We added **deduplication** and **schema validation** in Lambda to avoid noisy data. The pipeline ran 3× faster than the legacy batch jobs and automatically scaled during traffic spikes.

**Result**  
- Model retraining time dropped from 24 hrs → **4 hrs** (87% reduction).  
- Monthly cost fell from $350k → **$190k** (46% savings).  
- Data freshness improved, boosting recommendation CTR by **3.5pp** in A/B tests.

**Reflection & Learnings**  
*Ownership*: I owned the full lifecycle, from requirements to monitoring.  
*Dive Deep*: Profiling Lambda cold‑starts revealed a 30 ms latency bottleneck; moving heavy transforms to Fargate reduced it to <10 ms.  
*Bias for Action*: I shipped a pilot in two weeks, learned failures (schema drift), and iterated rapidly.  

These lessons underline Amazon’s **Customer Obsession**—delivering faster, cheaper data to power better user experiences—and **Ownership**, ensuring end‑to‑end reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
