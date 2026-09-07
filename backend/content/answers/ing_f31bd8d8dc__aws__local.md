---
qid: ing_f31bd8d8dc__aws__local
question: 'Explain: So another thing is we also selectively — Seattle Conference on
  Scalability: YouTube Scalability'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 433
total_tokens: 673
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:26:19-05:00'
sources: []
---

**Situation** – In my last role I was asked to design a real‑time recommendation engine for a video platform that had to serve > 10 M concurrent users while keeping latency below **120 ms** during peak traffic (e.g., the Seattle Conference on Scalability).  

**Task** – Build a scalable, cost‑effective ML pipeline that ingests clickstream data, trains a collaborative‑filter model nightly, and serves predictions with sub‑100 ms response time.  

**Action** –  
1. **Data ingestion**: Kinesis Data Streams → Lambda → S3 (raw logs).  
2. **Feature store**: DynamoDB + DAX for low‑latency read/write; periodic batch updates via Glue into Redshift for training.  
3. **Training**: SageMaker Pipelines with Spot instances (cost × 0.2 of on‑demand) and hyperparameter tuning across 8 GPUs; model versioning in S3.  
4. **Serving**: SageMaker Endpoint behind an Application Load Balancer, auto‑scaling to 1–10 endpoints based on CloudWatch metrics; use Lambda@Edge for edge caching.  
5. **Observability**: CloudWatch Logs + X-Ray to trace latency; automated rollback if AUC drops < 0.02.  

**Result** – Achieved a **99.8% request success rate**, reduced prediction latency from 250 ms to **95 ms**, and cut monthly ML spend by **35%** compared with the legacy on‑prem solution.  

*Leadership principles highlighted*: **Customer Obsession** (delivering low latency for end users), **Ownership** (full ownership of data, model, ops), **Dive Deep** (instrumentation & cost analysis), and **Bias for Action** (rapid prototyping & rollbacks).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
