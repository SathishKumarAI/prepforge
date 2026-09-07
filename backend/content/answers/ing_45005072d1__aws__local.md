---
qid: ing_45005072d1__aws__local
question: 'Explain: AWS Lambda — Serverless Computing \u2013 Amazon Web Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 384
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:02:02-05:00'
sources: []
---

**Situation & Task (Customer Obsession + Ownership)**  
In my previous role I was tasked with building a real‑time fraud detection pipeline for a fintech app that processes ~2 M transactions per day. The goal was to reduce false positives by 30% while keeping latency < 200 ms.

**Action (Dive Deep + Bias for Action)**  
I chose **AWS Lambda** for the scoring step because it automatically scales with traffic spikes and eliminates server‑provisioning overhead.  
*Design:*  
- **Trigger:** Kinesis Data Streams → Lambda (10 µs per record).  
- **Model inference:** A pre‑serialized XGBoost model stored in S3, loaded into `/tmp` once per container warm‑up.  
- **Result routing:** DynamoDB for audit logs (eventual consistency) and SNS to flag high‑risk accounts.  
*AWS services:* Lambda, Kinesis, S3, DynamoDB, SNS, CloudWatch.  

**Result (Deliver Results + Quantified Impact)**  
- Latency dropped from 1 s to **< 200 ms** on average.  
- False positives fell by **32%**, saving ~$120k annually in chargeback costs.  
- Cost per transaction decreased from $0.12 to **$0.04** (≈ 66 % savings).  

**Reflection & Learning**  
The first deployment hit a 1‑minute cold start due to large model size; I mitigated this by packaging the model as an AWS Lambda Layer and enabling provisioned concurrency for peak hours, reducing average latency by another 15%. This experience reinforced my ownership of both performance and cost, aligning tightly with Amazon’s Leadership Principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
