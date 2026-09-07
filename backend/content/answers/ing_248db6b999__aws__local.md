---
qid: ing_248db6b999__aws__local
question: 'Explain: Fraud Detection System — Grokking The Machine Learning Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 453
total_tokens: 686
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:49:30-05:00'
sources: []
---

**Situation & Task (S)**  
When I joined the FinTech team at XYZ in 2023, the fraud‑rate on credit‑card transactions had risen to **12 %**, costing us ~₹45 M per month. My mandate was to build a real‑time fraud detection pipeline that could scale to 10 k TPS and reduce false positives by >30 %.

**Action (A)**  
*Ownership & Dive Deep:* I scoped the problem, interviewed data scientists, ops engineers, and product managers to map out all data sources (transaction logs, device fingerprinting, behavioral signals).  
*Design:*  
- **Data ingestion:** Kinesis Data Streams → Lambda for enrichment.  
- **Feature store:** Amazon SageMaker Feature Store for low‑latency lookups.  
- **Model training & scoring:** SageMaker Autopilot + custom XGBoost model; deployed as a SageMaker endpoint behind an Application Load Balancer (ALB) with a 1 ms target latency SLA.  
- **Real‑time scoring:** Lambda triggers the endpoint, returns a fraud score that feeds into DynamoDB for audit and a Kinesis Firehose stream to Redshift for batch re‑training.  
*Bias for Action & Invent & Simplify:* I introduced an automated retraining pipeline (scheduled every 6 h) and a self‑healing Lambda that scales the endpoint based on CloudWatch metrics.

**Result (R)**  
Within three months:  
- Fraud rate dropped to **4 %** (a 66 % reduction).  
- False positives fell from 18 % to 12 % (+33 % improvement).  
- Cost per transaction decreased by ₹0.75, saving ~₹20 M annually.  
*Learnings:* Early cross‑team communication uncovered hidden latency in the enrichment step; fixing it cut overall latency by 40 %. This experience reinforced my belief that **Ownership** and **Dive Deep** are non‑negotiable for high‑impact solutions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
