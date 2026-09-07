---
qid: ing_de8d43d76c__aws__local
question: 'Explain: Change Data Capture (CDC) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 414
total_tokens: 645
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:42:53-05:00'
sources: []
---

**Situation / Task**  
While revamping our recommendation engine for the e‑commerce platform, we needed near‑real‑time inventory updates from a legacy Oracle DB to the data lake without downtime. The goal: capture every insert/update/delete in < 1 s and feed it into SageMaker pipelines.

**Action**  
I designed a CDC pipeline using **AWS DMS** (source → S3 + Kinesis Data Streams) and **Lambda** for transformation. DMS streams change records to Kinesis, which guarantees at‑least‑once delivery and auto‑scales with shards. Lambda parses the JSON, enriches it with metadata, and writes to an Amazon Redshift Spectrum table for ML training. I added a **CloudWatch metric filter** on `kinesis:PutRecordFailed` to trigger alerts. To reduce cost, I enabled **On‑Demand DMS** during peak hours only and reserved Kinesis shards thereafter.

- **Ownership** – I wrote the IaC (Terraform) and automated the rollback in case of schema drift.
- **Dive Deep** – Analyzed 500 GB of change logs; identified that 23% were stale deletes, so added a TTL filter to avoid garbage ingestion.
- **Bias for Action** – Deployed the pipeline within 3 days, before the holiday sales window.

**Result**  
Latency dropped from 10 min to < 1 s. The recommendation model’s click‑through rate improved by **12%** during the first month of deployment. Operational cost decreased by **$4k/month** thanks to shard optimization.  

*Bar‑raiser takeaway*: Demonstrated end‑to‑end ownership, deep metrics analysis, and quantifiable business impact while learning that a small TTL filter saved 23 GB/day in storage costs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
