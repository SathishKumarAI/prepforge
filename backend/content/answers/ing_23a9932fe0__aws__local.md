---
qid: ing_23a9932fe0__aws__local
question: 'Explain: So this is something if if you — Google Maps System Design Interview
  Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 404
total_tokens: 640
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:47:06-05:00'
sources: []
---

**Situation (S)**  
When I joined the Alexa Location team, our real‑time traffic‑prediction model was stuck in a 12‑hour training cycle and produced only a 15 % accuracy improvement over the rule‑based baseline.

**Task (T)**  
I owned the end‑to‑end redesign: from data ingestion to inference latency, with the goal of delivering a production‑ready ML service that boosts route ETA accuracy by ≥30 % while keeping cost < $0.02 per request.

**Action (A)**  
1. **Dive Deep & Ownership** – I mapped the entire pipeline, identified 4 bottlenecks (data lag, feature recomputation, model size, inference latency).  
2. Built a streaming ETL on **Amazon Kinesis Data Streams → Glue** to refresh features every minute.  
3. Trained an ensemble of XGBoost models on **AWS SageMaker Pipelines**, using spot instances for cost savings; added a lightweight CatBoost model for edge inference.  
4. Deployed the best model as a **SageMaker Endpoint** behind **API Gateway** with Lambda authorizers, guaranteeing < 50 ms latency.  
5. Implemented A/B testing via **CloudWatch metrics** and stepped‑up rollout, capturing 32 % ETA accuracy gain in production.

**Result (R)**  
- Latency dropped from 1.2 s to 45 ms (99th percentile).  
- Cost per inference fell by 70 %.  
- Customer satisfaction scores rose 12 points in the next quarterly survey.  

This showcases **Customer Obsession**, **Ownership**, and **Bias for Action**—hallmarks of an Amazon bar‑raiser.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
