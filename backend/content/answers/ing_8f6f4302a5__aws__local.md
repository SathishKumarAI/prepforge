---
qid: ing_8f6f4302a5__aws__local
question: 'Explain: Single-Agent Architectures — Agent Building Guide'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 401
total_tokens: 631
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:50:28-05:00'
sources: []
---

**Situation / Task**  
I was tasked to migrate a legacy rule‑based fraud detector into a single‑agent ML system that could run at scale on AWS while keeping latency < 50 ms for every transaction.

**Action (Design & Execution)**  
- **Ownership + Dive Deep**: I scoped the data pipeline, discovered noisy labels and missing features, and wrote a data‑quality dashboard in CloudWatch.  
- **Bias for Action + Deliver Results**: Built an end‑to‑end SageMaker Pipelines workflow: Glue crawls raw logs → Athena queries → Feature Store (SageMaker Feature Store) → nightly training on 10 M samples with XGBoost, then model register to SageMaker Endpoint.  
- **Invent & Simplify**: Replaced the old Java microservice with a single Lambda that pulls the endpoint via API Gateway, caching predictions in ElastiCache for 2 s to keep cost low.  
- **Customer Obsession**: Implemented A/B testing (AWS CloudWatch Alarms) so customers saw no degradation; we monitored false‑positive rate.

**Result**  
- Latency dropped from 200 ms to 35 ms, throughput increased 3× (10k TPS).  
- Fraud detection accuracy improved from 78% to 92%, saving $1.2 M/year in losses.  
- Cost decreased by 28% through serverless architecture and caching.

**Bar‑raiser takeaways**  
- Demonstrated full ownership of the ML lifecycle, deep dive into data quality, and quantitative impact (latency, accuracy, cost).  
- Learned from an initial false‑positive spike: added a feedback loop that re‑trained on flagged cases, reducing errors by 15% in two weeks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
