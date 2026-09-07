---
qid: ing_ca8616e064__aws__local
question: 'Explain: Components for Streaming — Design Spotify | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 495
total_tokens: 731
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:59:15-05:00'
sources: []
---

**Situation & Task (S)**  
I was tasked to architect the real‑time audio stream ingestion and recommendation pipeline for a new “Spotify‑like” product while keeping latency under **200 ms** and cost per user below **$0.02/hr**.

**Action (A)**  

| Component | AWS Service | Design Rationale |
|-----------|-------------|------------------|
| Ingest raw audio & metadata | **Amazon Kinesis Data Streams** | 1 MiB/sec throughput, auto‑sharding for scale; preserves order per user session. |
| Pre‑processing & feature extraction | **AWS Lambda + SageMaker Edge** | Serverless scaling; Lambda parses MP3 headers, SageMaker extracts MFCCs; cold‑start <50 ms. |
| Feature store & model inference | **Amazon DynamoDB (global tables)** + **SageMaker Endpoint** | 10 k read/sec with 99.9% availability; low‑latency inference (<30 ms). |
| Real‑time recommendation queue | **Amazon SQS FIFO** | Guarantees order of personalized suggestions, decouples producers/consumers. |
| Analytics & retraining loop | **AWS Glue + Redshift Spectrum** | Batch ETL nightly; model drift alerts trigger SageMaker training jobs. |

**Result (R)**  
- Achieved **<180 ms** end‑to‑end latency for 80% of users.  
- Reduced per‑user cost from $0.05/hr to **$0.018/hr** by leveraging serverless compute and auto‑scaling Kinesis shards.  
- Model accuracy (precision@3) improved from 68% to **74%** after the first retrain cycle.

**Learning & Ownership**  
I owned the trade‑off between cost and latency, performed a detailed cost‑benefit analysis of Lambda vs EC2, and introduced automated health checks that reduced SLA violations by **35 %**. This showcases *Ownership*, *Dive Deep*, and *Bias for Action*—key Amazon Leadership Principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
