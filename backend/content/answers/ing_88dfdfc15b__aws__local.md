---
qid: ing_88dfdfc15b__aws__local
question: 'Explain: Hands-On Exercises (Upcoming) — Course Introduction | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 402
total_tokens: 636
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:33:50-05:00'
sources: []
---

**Situation & Task**  
I was hired as a senior data engineer at an e‑commerce startup that wanted to launch a new “Smart Recommendations” feature. The team’s goal was to design a production‑ready pipeline that could ingest real‑time clickstream, train models nightly, and serve predictions with < 50 ms latency.

**Action (Design)**  
1. **Data ingestion** – Amazon Kinesis Data Streams for raw events; Lambda to transform into Parquet and push to S3.  
2. **Feature store** – Glue jobs aggregate per‑user features into a DynamoDB table, refreshed every hour.  
3. **Model training** – SageMaker Pipelines orchestrate nightly training on an EC2 spot fleet (p3.2xlarge) using XGBoost; hyper‑parameter tuning with SageMaker Hyperparameter Tuning.  
4. **Serving** – Deploy the model to SageMaker RealTimeEndpoint with auto‑scaling (min = 1, max = 8). Route traffic through API Gateway + Lambda for request validation.  

**Result**  
- Latency dropped from 200 ms to 35 ms; user click‑through rate increased by **12%** in two weeks.  
- Cost per prediction fell from $0.07 to $0.03 (≈ 57% savings) thanks to spot fleets and auto‑scaling.  

**Reflection**  
I *owned* the end‑to‑end flow, *dive deep* into each AWS service’s trade‑offs, and iterated quickly after a failed first deployment that caused 3 min outages. By learning from that failure I added CloudWatch alarms and an automated rollback in Lambda, reinforcing our **Ownership** and **Bias for Action** principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
