---
qid: ing_0bf21a48c0__aws__local
question: Where does your golden dataset come from, and how do you stop it rotting?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 404
total_tokens: 640
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:52:45-05:00'
sources: []
---

**Situation & Task**  
At my last role I led the AI‑model refresh for a recommendation engine that served ~3 M daily users. The “golden” training set had to stay fresh while keeping costs under $1 M/quarter.

**Action (Design)**  
1. **Data Ingestion** – Event streams from DynamoDB Streams + Kinesis Data Firehose → S3 Glacier Deep Archive for long‑term storage.  
2. **ETL & Validation** – Glue jobs run nightly; they dedupe, flag outliers, and compute a *data quality score* (DQ = 1–100).  
3. **Rotational Policy** – If DQ < 80 or data is >30 days old, the job auto‑replaces the slice in the training S3 bucket.  
4. **Monitoring & Alerting** – CloudWatch metrics on ingestion lag and Glue job success; SNS alerts to ML ops.  

**Result**  
- Reduced model drift by 35% (validated via A/B test: click‑through rate ↑ 12%).  
- Cut storage cost from $280k/yr to $120k/yr, saving 57%.  
- Maintained 99.9% data availability with a single‑AZ design; added cross‑region replication for disaster recovery.

**Reflection (Bar‑raiser focus)**  
I owned the pipeline end‑to‑end, dove deep into Glue diagnostics to surface subtle schema changes, and iterated the rotation rule after an initial false‑positive spike. The lesson: continuous quality checks are cheaper than large model retraining.  

> **Leadership Principles:** *Customer Obsession* (accurate recommendations), *Ownership* (full lifecycle control), *Dive Deep* (root‑cause analysis of data drift).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
