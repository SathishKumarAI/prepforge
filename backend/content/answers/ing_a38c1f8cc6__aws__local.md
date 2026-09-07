---
qid: ing_a38c1f8cc6__aws__local
question: 'Explain: And so the the bottlenecks are obviously'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 427
total_tokens: 658
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:36:55-05:00'
sources: []
---

**Situation** – In a recent e‑commerce recommendation pipeline I noticed that model training time grew from *3 hrs* to *18 hrs* as the catalog expanded to **1.2 M SKUs**.  
**Task** – Reduce end‑to‑end latency while keeping costs under $5k/month and ensuring 99.9 % availability.

**Action** –  
1. **Diagnosed bottlenecks**:  
   *Data ingestion* (Glue jobs stalled on S3 → EMR cluster scaling).  
   *Feature engineering* (Spark UDFs hit CPU limits).  
   *Model training* (single‑node SageMaker instance over‑committed).  

2. **Implemented solutions**:  
   • Split Glue ETL into multiple smaller, parallel crawlers; switched to **AWS Glue Streaming** for near‑real‑time updates.  
   • Refactored Spark UDFs to vectorized PandasUDFs and launched an **EMR on EKS** cluster with auto‑scaling (max 32 m5.xlarge).  
   • Deployed a **SageMaker Multi‑Model Endpoint** using **Inference Scheduler**; added **Spot Instances** for training, cutting GPU usage from 8 to 3 per job.  

**Result** – Training time dropped to *4 hrs*, overall pipeline latency ≤*30 min*, cost fell to $3.2k/month (≈ 35 % savings), and we achieved a 15 % lift in recommendation click‑through rate.

> **Bar‑raiser check**: Ownership—drove cross‑team refactor; Dive Deep—identified each layer’s bottleneck; Quantified impact—time, cost, CTR; Learned from failure—documented scaling guidelines for future catalog growth.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
