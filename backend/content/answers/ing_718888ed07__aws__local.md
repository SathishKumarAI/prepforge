---
qid: ing_718888ed07__aws__local
question: 'Explain: Create indices that cover longer time periods'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 459
total_tokens: 688
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:42:12-05:00'
sources: []
---

**Situation (S)** – While leading the data‑engineering team at a fintech startup, we needed to support an anomaly‑detection model that looked back over *three years* of transaction history instead of the default one‑month window. The existing Snowflake warehouse only had daily fact tables; querying past 36 months was slow (≈30 s per job) and cost‑excessive.

**Task (T)** – Design a scalable indexing strategy that would let the ML pipeline retrieve 3‑year windows in sub‑second time, while keeping storage costs under $2k/month.

**Action (A)**  
- Adopted **Amazon Redshift Spectrum** to externalize raw logs into S3 and create *time‑partitioned* tables.  
- Built a *composite GSI* on `customer_id + transaction_date` in DynamoDB for fast point lookups, then materialized a *rolling window table* in Redshift with a daily incremental ETL job (Glue).  
- Implemented **Redshift’s columnar compression** and **vacuuming** to keep I/O low.  
- Added an Athena query layer for ad‑hoc analytics, caching results in S3 with lifecycle policies.  

**Result (R)** – Query latency dropped from 30 s → 0.8 s (≈38× faster). Cost fell from $4.5k/month to $1.9k/month. The anomaly model’s recall improved by 12% due to richer historical context, directly boosting revenue protection by ~$120k/year.

**Leadership Principles** – *Customer Obsession* (improved fraud detection for users), *Ownership* (took full responsibility from ingestion to ML inference), and *Dive Deep* (engineered the partitioning logic). The bar‑raiser would note my quantitative impact, clear trade‑off discussion, and learning loop: after a failed first attempt with pure S3 Parquet, I pivoted to Redshift Spectrum for better performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
