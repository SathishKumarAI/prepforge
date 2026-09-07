---
qid: ing_adec08b5be__aws__local
question: 'Explain: Business Service — Proximity Service'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 434
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:58:50-05:00'
sources: []
---

**Situation**  
At my previous role, we were building a *Proximity Service* that delivered real‑time location‑based offers to users of a food‑delivery app. The business required sub‑second latency and 99.9 % uptime while handling millions of location updates daily.

**Task**  
Design an end‑to‑end architecture that scales globally, ensures data privacy, and provides actionable insights for marketing teams—all within a $2 M annual budget.

**Action**  
1. **Data ingestion & storage** – I leveraged **Amazon Kinesis Data Streams** (sharded to 200 MB/s) for ingesting GPS events, then stored raw data in **Amazon S3** with lifecycle policies to tier to Glacier after 30 days.  
2. **Real‑time processing** – Using **AWS Lambda** + **Amazon EventBridge**, I built a stateless microservice that enriches each event (city, time zone) and pushes results to **DynamoDB** for fast read/write.  
3. **ML inference** – Trained a lightweight XGBoost model on SageMaker, exported as a TensorFlow Lite endpoint hosted in **Amazon ECS Fargate**, achieving 2 ms latency per prediction.  
4. **Analytics & alerts** – Data flows into **Redshift Spectrum** for OLAP and feeds a **QuickSight** dashboard that surfaced a 12 % lift in conversion after first‑time offers.  

**Result**  
The system handled 15 M events/day with <1 ms processing latency, reduced operational costs by 35 % versus the legacy on‑prem solution, and increased user engagement by 18 %. I iterated quickly (Bias for Action), logged all changes in a GitOps repo (Ownership), and performed post‑mortems to capture lessons (Dive Deep).  

**Leadership Principles** – *Customer Obsession*, *Deliver Results*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
