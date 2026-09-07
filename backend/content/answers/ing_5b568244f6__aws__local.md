---
qid: ing_5b568244f6__aws__local
question: 'Explain: Now even though if it''s a directed — Google Maps System Design
  Interview Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 462
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:51:46-05:00'
sources: []
---

**Situation / Task**  
I was tasked to design a real‑time traffic prediction layer for a navigation app (Google Maps‑style). The goal was to deliver 99.9 % availability, < 200 ms latency per request, and reduce fuel‑consumption predictions by 12 % compared to the rule‑based baseline.

**Action**  
*Ownership & Bias for Action*: I scoped a serverless ML pipeline on AWS.  
1️⃣ **Data ingestion** – Kinesis Data Streams fed 5 M events/s (speed, GPS, weather).  
2️⃣ **Feature store** – DynamoDB + ElasticCache cached per‑region features; updated via Lambda every minute.  
3️⃣ **Model training** – SageMaker Pipelines trained an XGBoost model nightly on S3‑based parquet data, auto‑tuned with Hyperparameter Tuning jobs.  
4️⃣ **Inference** – SageMaker Endpoint (multi‑model) behind API Gateway, with a caching layer in CloudFront to hit 80 % of identical queries.  
5️⃣ **Observability** – CloudWatch metrics + X-Ray traced latency; Lambda alerts triggered if error > 0.1 %.  

*Dive Deep*: I benchmarked model latency (avg = 120 ms) vs. baseline rule‑based (250 ms). Cost analysis: $0.02 per inference vs. $0.08 for legacy server farm.

**Result**  
- 99.9 % uptime, 150 ms average latency across 10 regions.  
- Reduced predicted fuel consumption by **12 %**, translating to ~$3M annual savings for fleet customers.  
- Cut infrastructure cost by **35 %** vs. on‑prem servers.

**Learning**  
The first iteration missed cold‑start latency; we switched from SageMaker Endpoint to Lambda‑based inference, cutting 30 ms. This reinforced the importance of end‑to‑end monitoring and iterative optimization—core Amazon values of *Customer Obsession* and *Dive Deep*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
