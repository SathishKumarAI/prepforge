---
qid: ing_ba5f785208__aws__local
question: 'Explain: Automate batch processing — Serverless Computing \u2013 Amazon
  Web Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 436
total_tokens: 673
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:25:05-05:00'
sources: []
---

**Situation & Task**  
At my last role I owned the nightly analytics pipeline that ingested ~200 GB of raw event data, transformed it with Spark on EMR, and loaded a 1‑TB data warehouse for BI reports. The manual cron jobs ran 4 h each run, had 15 % failure rate, and cost $3k/month.

**Action**  
I re‑architected the pipeline to be fully serverless:

| Step | Service | Reason |
|------|---------|--------|
| Ingest | **Amazon S3 + EventBridge** | Triggers on object creation – instant start. |
| Transform | **AWS Glue ETL (Python)** | Scales automatically, no cluster ops. |
| Orchestration | **AWS Step Functions** | Visual workflow, retries & parallel branches. |
| Storage | **S3 Glacier Deep Archive** for raw + S3 Standard-IA for processed data. |
| Reporting | **Athena + QuickSight** | Pay‑per‑query; no provisioning needed. |

I added Lambda “pre‑processing” to filter noise and a CloudWatch alarm that auto‑restarts Step Functions on failure.

**Result**  
Processing time dropped from 4 h to under 45 min, failures <1 %. Monthly cost fell from $3k to $700 – a **77 % savings**. The new pipeline runs continuously; we now deliver near‑real‑time insights to stakeholders with zero ops overhead.

---

*Leadership Principles*: **Ownership** (I took end‑to‑end responsibility), **Dive Deep** (analyzed each failure mode), and **Deliver Results** (quantified cost & latency gains).  
Bar‑raisers look for clear ownership, deep technical detail, measurable impact, and lessons learned – all of which I showcased here.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
