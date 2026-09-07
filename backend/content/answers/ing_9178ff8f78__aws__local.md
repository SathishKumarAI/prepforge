---
qid: ing_9178ff8f78__aws__local
question: 'Explain: 4.4 Requirement 4: Personalized Recommendations'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 453
total_tokens: 685
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:54:55-05:00'
sources: []
---

**Situation & Task (Customer Obsession)**  
At my last role I led the migration of a legacy e‑commerce recommendation engine to an event‑driven architecture on AWS. The product team wanted **real‑time personalized recommendations** that improved conversion by at least 5 % and were cost‑effective for a catalog of 2 M SKUs.

**Action (Dive Deep & Ownership)**  
1. **Data ingestion** – Kinesis Data Streams captured user click, view, and purchase events with < 200 ms latency.  
2. **Feature store** – DynamoDB + AWS Glue Catalog stored per‑user and per‑SKU features; updated via Lambda every 30 s from the stream.  
3. **Model training** – SageMaker Pipelines orchestrated nightly retraining of a Factorization Machine model, auto‑scaling to 8 GPU instances (p4d) for 12 h, costing ~$1k/month.  
4. **Inference** – Real‑time scoring via SageMaker Runtime endpoint behind an Application Load Balancer; autoscaled to 10 endpoints with a warm pool to keep < 300 ms latency.  
5. **A/B testing** – Feature flags in AppConfig let us roll out the new engine to 20 % of traffic, monitoring lift.

**Result (Deliver Results)**  
- Lifted conversion by **6.3 %** and average order value by **4.1 %** within 90 days.  
- Reduced recommendation latency from 2 s to < 300 ms.  
- Cost savings of **$30k/year** versus the monolithic on‑prem solution.  

**Bar‑raiser cues I met**  
- Took full ownership: defined scope, led cross‑functional alignment, and drove metrics.  
- Dived deep into latency and cost trade‑offs, choosing Kinesis over Kafka for lower operational overhead.  
- Quantified impact with clear A/B test data.  
- Learned from early cold‑start spikes by adding a warm pool, turning a failure into a scalability lesson.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
