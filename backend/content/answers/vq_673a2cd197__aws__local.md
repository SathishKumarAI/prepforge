---
qid: vq_673a2cd197__aws__local
question: What is your strategy for the incremental load?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 401
total_tokens: 630
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:55:04-05:00'
sources: []
---

**Situation** – At my previous role I was tasked with moving a 200 GB nightly data lake from on‑prem Hadoop to an S3‑based analytics platform while keeping downstream BI dashboards live.

**Task** – Design an incremental load that minimizes compute, costs, and downtime, yet guarantees consistency for the next day’s reports.

**Action**  
1. **Capture change** – I leveraged AWS DMS with CDC enabled on the source RDS instance; this streams only changed rows to a Kinesis Data Stream.  
2. **Transform & enrich** – A Lambda function (Python 3.10) consumes the stream, applies schema‑agnostic transformations, and writes Parquet files to an S3 “staging” bucket using AWS Glue Schema Registry for versioning.  
3. **Merge into lake** – An EMR Serverless Spark job runs every 15 min, reads new Parquet partitions, performs a UPSERT against the existing dataset in the target lake (S3 + Athena table). The job is scheduled via EventBridge and uses Spot Instances to cut compute cost by ~60%.  
4. **Validation & rollback** – I built a CloudWatch alarm that checks row‑count drift (>2 %); if triggered, the Lambda rolls back to the last successful checkpoint.

**Result** – The incremental pipeline reduced data latency from 8 h to <30 min, cut processing cost by 70 %, and maintained >99.9 % accuracy in downstream dashboards.  

> **Leadership Principles**: *Ownership* (I owned end‑to‑end design), *Dive Deep* (probed CDC limits & Glue schema evolution), and *Bias for Action* (deployed a fully automated, fault‑tolerant workflow).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
