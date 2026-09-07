---
qid: ing_8348ddb7bf__aws__local
question: 'Explain: With that let''s get started. A bit — Google Maps System Design
  Interview Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 474
total_tokens: 711
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:21:53-05:00'
sources: []
---

**Situation / Task**  
I was hired as a ML Solutions Architect for a startup that wanted to launch a “live‑traffic prediction” feature inside its navigation app (Google‑Maps style). The goal: reduce average travel time by 12 % and support 10M concurrent users worldwide.

**Action**  
1. **Ownership + Bias for Action** – I scoped the end‑to‑end pipeline: ingest real‑time GPS & traffic sensor data → feature engineering → model training → inference API.  
2. **Dive Deep** – Built a streaming layer with Amazon Kinesis Data Streams (latency < 500 ms). For compute, used SageMaker Pipelines for nightly retraining on 1 TB of historical trips; models were PyTorch LSTM ensembles.  
3. **AWS Services & Design Choices**  
   * **Amazon DynamoDB** (global tables) to store per‑region traffic heatmaps – provides <10 ms read latency and multi‑AZ availability.  
   * **Lambda + API Gateway** for inference, auto‑scaling 1–2000 RPS, cost ~$0.03/1k requests.  
   * **EFS + ECS** for serving large model files across containers; reduces cold‑start time by 70 %.  
4. **Deliver Results** – After deployment, average travel time dropped from 32 min to 28 min (12 % reduction) during peak hours; latency <90 ms for 99th percentile users.

**Result**  
- 30 % cost saving over a traditional EC2‑based solution.  
- 95 % uptime across all regions.  
- Learned that batching inference in Lambda mitigates cold starts—now we batch 10 requests per invocation, cutting costs by 18 %.  

This showcases *Customer Obsession*, *Ownership*, and *Deliver Results* while demonstrating deep technical chops and measurable impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
