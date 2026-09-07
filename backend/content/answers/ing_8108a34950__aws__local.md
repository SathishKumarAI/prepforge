---
qid: ing_8108a34950__aws__local
question: 'Explain: How CDC Works — Change Data Capture (CDC) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 434
total_tokens: 669
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:16:49-05:00'
sources: []
---

**Situation**  
At my last role I led the migration of a legacy on‑prem data warehouse to an event‑driven analytics platform. The business required near‑real‑time insights from transactional tables that changed 10 M rows per day.

**Task**  
Implement a robust Change Data Capture (CDC) pipeline that could ingest, transform and load changes into Redshift while keeping latency < 5 min and cost <$0.05/GB.

**Action**  
1. **Capture** – I enabled MySQL binary log replication via AWS DMS to stream inserts/updates/deletes directly to an S3 “raw‑change” bucket (partitioned by date).  
2. **Transform** – A Lambda authorizer parsed the JSON logs, applied a schema‑driven mapping and wrote Parquet files into an intermediate Athena‑queryable bucket.  
3. **Load** – Redshift Spectrum queried the transformed data for incremental ETL; every 5 min a scheduled Glue job executed `INSERT … SELECT` to merge changes into fact tables.  
4. **Monitoring** – CloudWatch metrics (DMS replication lag, Lambda errors) fed into an SNS alarm that auto‑scales DMS readers.

**Result**  
Latency dropped from 2 h to < 5 min, query cost fell 70 % by using serverless Athena instead of EC2 ETL nodes, and the pipeline processed 12 M rows/day with 99.9 % availability.

> **Leadership Principles:** *Customer Obsession* (delivering timely insights), *Ownership* (full lifecycle design), *Dive Deep* (optimizing each service).  
> **Bar‑raiser cues:** quantified latency & cost savings, end‑to‑end ownership, clear trade‑offs between DMS vs. custom CDC, and post‑mortem on a 30 min outage that led to adding an SQS buffer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
