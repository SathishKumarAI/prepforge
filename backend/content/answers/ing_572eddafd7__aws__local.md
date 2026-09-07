---
qid: ing_572eddafd7__aws__local
question: 'Explain: Coding (Python / Java) — Glean Interview Guide (2026): Process,
  Questions, Compensation \u2013 techinterview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 407
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:43:14-05:00'
sources: []
---

**Answer – Amazon Style**

> *“In my last role I built a production‑grade ML pipeline for a global retailer that processed 2 TB of daily transaction data, delivering real‑time fraud scores to the checkout system.”*

**Situation & Task**  
The company needed a **real‑time fraud detection service**. Existing batch jobs ran nightly and missed many high‑risk transactions.

**Action (Technical Design)**  
1. **Data Ingestion** – *Kinesis Data Streams* for 10 k events/sec, auto‑scaling with Lambda shards.  
2. **Feature Store** – *Amazon SageMaker Feature Store* to serve up‑to‑date embeddings; low latency (<5 ms).  
3. **Model Serving** – *SageMaker Endpoint* behind an Application Load Balancer (ALB) for 99.9% availability, with weighted routing for A/B testing.  
4. **Monitoring & Retraining** – *CloudWatch* metrics + *S3* model registry; retrain every 24 h using *EMR Spark* on Spot Instances, saving ~30% of compute cost.

**Result (Data‑driven)**  
- Latency dropped from 12 s to <200 ms.  
- Fraud detection accuracy improved by **18 pp** (from 92 % to 110 %).  
- Cost per inference fell from $0.004 to $0.0012, yielding $1.2M annual savings.

**Learning & Ownership**  
I owned the end‑to‑end pipeline, iterated on feature importance after each retraining cycle, and documented a rollback plan that reduced downtime risk by 40 %. This shows *Ownership* and *Dive Deep*, while the rapid iteration demonstrates *Bias for Action*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
