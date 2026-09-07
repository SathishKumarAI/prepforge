---
qid: ing_413b156b1d__aws__local
question: 'Explain: EJSON — JSON And BSON | MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 496
total_tokens: 727
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:53:30-05:00'
sources: []
---

**Answer (Amazon style)**  

During my last role at a fintech startup, I led the migration of our customer‑profile store from a legacy SQL system to **MongoDB**. The goal was to reduce query latency for real‑time fraud detection while keeping operational costs below $2 M/year.

*Situation:* Our team struggled with “schema‑less” data that mixed JSON and binary blobs (BSON). We needed a unified format that could be ingested by downstream ML pipelines in SageMaker.  
*Task:* Design an ingestion pipeline that normalizes EJSON (extended JSON) into BSON, preserves type fidelity, and streams to Amazon Kinesis for real‑time feature extraction.  
*Action:* I chose **AWS Lambda** (Python 3.9) with the `pymongo` driver to transform incoming HTTP payloads. The Lambda writes to an **Amazon S3 Glacier Deep Archive** tier for cold history and publishes a message to **Kinesis Data Streams**. In Kinesis, we use **Lambda@Edge** to convert EJSON → BSON → Parquet, then store in **S3 Intelligent Tiering**. For ML, the parquet files feed into **AWS Glue** catalog and are queried by SageMaker notebooks.  
*Result:* We cut read latency from 120 ms to <15 ms for 95th‑percentile fraud queries— a 87 % improvement—and reduced storage costs by 35 %. The pipeline processed 1.2 M records per day with 99.9 % availability, meeting our SLA.

**Leadership Principles:**  
- **Customer Obsession** – delivering sub‑15 ms latency for fraud alerts directly protects customers from loss.  
- **Ownership & Dive Deep** – I architected the entire data flow, performed cost/latency trade‑offs, and iterated until metrics met targets.

*Bar‑raiser cue:* The interviewer will look for ownership (I drove the migration), depth (specific AWS services and trade‑offs), quantified impact (87 % latency drop, 35 % cost savings), and learning from failure (we initially over‑provisioned Lambda concurrency, learned to use provisioned concurrency only for peak hours).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
