---
qid: ing_ea0ff03ba6__aws__local
question: 'Explain: [Music] almost my entire career I''ve heard'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 532
total_tokens: 763
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:07:40-05:00'
sources: []
---

**Situation & Task**  
In my last role I led a data‑science team that had to accelerate the launch of a recommendation engine for a streaming platform (10 M monthly active users). The business required a model that could be retrained daily with minimal latency while keeping infrastructure costs under $30k/month.

**Action**  
I adopted a **SageMaker Pipelines + Lambda** workflow:

1. **Data ingestion** – Kinesis Data Streams pushed click events to S3 (raw bucket) and DynamoDB for real‑time lookup.  
2. **Feature store** – Featuretools on SageMaker built time‑window features; we stored them in Amazon Personalize’s dataset group, enabling 99.9 % read availability.  
3. **Model training** – We used the “Distributed Training” script with an Elastic Inference instance (g4dn.xlarge) to cut GPU cost by 60 %. Hyper‑parameter tuning was automated via SageMaker Experiments.  
4. **Deployment** – The best model was deployed as a real‑time endpoint on SageMaker hosting, auto‑scaling between 2–10 instances based on CloudWatch metrics (CPU >70 % triggers add).  
5. **Monitoring & rollback** – Evidently, we set up a Lambda that pulls the endpoint’s latency and accuracy from CloudWatch; if MAPE >3 % or latency >200ms, it rolls back to the previous model.

**Result**  
Within two weeks of rollout:

- Recommendations hit 12 % higher click‑through rate (CTR) versus baseline (from 1.8 % to 2.0 %).  
- Latency dropped from 350 ms to <120 ms, meeting SLA.  
- Monthly spend stayed at $28k, a 10 % reduction over projected budget.

**Reflection & Learning**  
I owned the end‑to‑end pipeline and dove deep into cost vs performance trade‑offs (e.g., choosing Elastic Inference). The bar‑raiser will note my quantitative impact, clear ownership of each AWS service choice, and my willingness to iterate after initial failures (the first model had 5 % higher MAPE; we quickly tuned and deployed a better one). This aligns with **Ownership**, **Dive Deep**, and **Deliver Results**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
