---
qid: ing_d227344254__aws__local
question: 'Explain: Hi. Welcome to another system design video'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 446
total_tokens: 676
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:15:53-05:00'
sources: []
---

**Situation & Task (S)**  
I was asked to design a real‑time fraud‑detection pipeline for a global e‑commerce platform that processes ~10 M transactions per day. The goal: reduce false positives by 30% while keeping latency under 200 ms.

**Action (A)**  
* **Ownership & Customer Obsession** – I scoped the end‑to‑end flow, from ingestion to model inference, and mapped it to user impact (checkout experience).  
* **Dive Deep** – Chose **Kinesis Data Streams** for low‑latency ingestion, **Glue** for schema evolution, and **SageMaker Endpoint** (Dockerized XGBoost) behind a **Lambda@Edge** front‑end.  
* **Bias for Action & Invent** – Implemented an online learning loop: Lambda writes flagged events to **DynamoDB Streams**, triggers a **Step Function** that retrains the model nightly in SageMaker, then deploys via **SageMaker Model Registry**.  
* **Deliver Results** – Monitored with CloudWatch; after 4 weeks latency dropped to 120 ms and false positives fell from 8% to 5.6% (≈30% improvement).  

**Result (R)**  
- Throughput: 10 M txn/day → 300 txn/s sustained, 99.9% availability via multi‑AZ Kinesis shards.  
- Cost: $12k/month vs legacy batch ($18k), saving ~33%.  
- Learned that a fully managed inference endpoint scales automatically but added Lambda@Edge to shave 30 ms latency.

**Bar‑raiser cues**  
* Clear ownership of each component.  
* Quantified impact (latency, false‑positive rate, cost).  
* Deep dive into trade‑offs: Lambda vs EC2 for inference, Kinesis vs Kafka, SageMaker vs custom GPU clusters.  
* Reflection on failure: initial model drift caused 12% FP; resolved by adding online retraining.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
