---
qid: ing_921334a704__aws__local
question: 'Explain: Amazon System Design — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 574
total_tokens: 804
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:56:32-05:00'
sources: []
---

**Situation (S)**  
In my last role I was asked to build a real‑time recommendation engine for an e‑commerce platform that had 12 M active users and 3 B product views per month. The goal was to reduce cart abandonment by 15 % within six months.

**Task (T)**  
Design a scalable, low‑latency system that ingests clickstream data, trains models on the fly, and serves predictions with <50 ms latency while keeping cost under $10K/month.

**Action (A)**  

| Step | AWS Service(s) | Why |
|------|----------------|-----|
| 1. Ingest | Kinesis Data Streams + Lambda | Near‑real‑time ingestion; auto‑scales. |
| 2. Store raw events | DynamoDB with TTL | Fast writes, cost‑effective storage for 30 days. |
| 3. Feature store | SageMaker Feature Store | Unified feature access across training & inference. |
| 4. Training | SageMaker Pipelines + Spot Instances | Continuous model retraining every 12 h; spot saves ~70 %. |
| 5. Inference | SageMaker Endpoint (Neptune‑optimized) + API Gateway | <50 ms latency, auto‑scaling, can be throttled to control cost. |
| 6. A/B test & monitor | CloudWatch + Evidently | Real‑time metrics and drift alerts. |

**Result (R)**  
After launch:  

* Cart abandonment dropped 18 % (exceeding target).  
* Monthly spend stayed at $8.7K, a 12 % saving vs the planned budget.  
* Model accuracy improved by 4 % after iterative feature tuning.

---

### Leadership Principles Anchored

1. **Customer Obsession** – The system was built to deliver instant recommendations that directly improved user experience and revenue.  
2. **Ownership & Dive Deep** – I led cross‑functional talks, wrote the architecture docs, and dove into cost models to prove feasibility.  

---

### What a Bar‑Raiser Looks For

* **Quantified Impact**: Clear metrics (18 % drop, $8.7K spend).  
* **Depth**: Justification for each AWS choice, trade‑offs between latency vs cost.  
* **Learning from Failure**: Initial prototype had 120 ms latency; we identified the bottleneck in SageMaker’s warm start and switched to a multi‑variant endpoint strategy.  

This design showcases ownership, deep technical insight, and measurable business value—exactly what Amazon expects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
