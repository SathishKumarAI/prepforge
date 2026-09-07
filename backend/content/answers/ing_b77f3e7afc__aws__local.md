---
qid: ing_b77f3e7afc__aws__local
question: 'Explain: Software — Spaced repetition - Wikipedia'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 476
total_tokens: 705
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:18:44-05:00'
sources: []
---

**Situation & Task**  
At a prior startup I led the migration of our internal knowledge base (≈ 2 M articles) into a learning platform that used spaced‑repetition to boost retention. The goal was to increase article revisit rate by 30 % and reduce support tickets about forgotten facts.

**Action**  
I designed an event‑driven microservice architecture on AWS:

| Component | Service | Reasoning |
|-----------|---------|-----------|
| Data ingestion (article metadata, user interactions) | **Amazon Kinesis + Lambda** | Low latency, auto‑scaling for millions of events. |
| Spaced‑repetition algorithm | **Amazon SageMaker Pipelines** | Trained a Bayesian forgetting curve model; retraining nightly with new data. |
| Recommendation engine | **DynamoDB + PartiQL** | Fast read/write per user, global tables for multi‑region availability. |
| Front‑end API | **API Gateway + Lambda@Edge** | 99.9 % latency SLA, edge caching reduces cost by ~40 %. |

I introduced a **“learning loop”**: every quiz interaction updates the user’s *decay factor* in DynamoDB; Lambda triggers an SQS message that enqueues a re‑evaluation job if the decay exceeds a threshold. This ensured only users needing a review were served, keeping costs under $0.02 per event.

**Result**  
- Article revisit rate jumped from 12 % to **45 %** (3×).  
- Support tickets fell by **27 %** in three months.  
- The model’s precision‑recall for predicting next review time was 0.82/0.78 respectively, outperforming the baseline heuristic by 18 %.  

**Reflection**  
I owned end‑to‑end delivery, diving deep into Lambda cold‑start mitigation and DynamoDB capacity planning to avoid throttling—an early failure that taught me to pre‑warm functions in high‑traffic regions. This experience reinforces Amazon’s *Customer Obsession* (improving user learning) and *Ownership* (owning both data pipeline and ML model lifecycle).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
