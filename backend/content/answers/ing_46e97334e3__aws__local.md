---
qid: ing_46e97334e3__aws__local
question: 'Explain: Tablets (new and certified refurbished) — Designing Data-Intensive
  Applications Book'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 527
total_tokens: 764
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:06:06-05:00'
sources: []
---

**Situation & Task**  
I led a cross‑functional team to launch a new “Tablets” catalog that merged fresh SKUs and certified refurbished units into a single search experience on our e‑commerce platform. The goal was to increase revenue from refurbished tablets by 30 % while keeping latency under 200 ms for the top‑10,000 queries per day.

**Action (Design)**  
1. **Data ingestion & cataloging** – AWS Glue crawls nightly feeds into an Amazon Athena‑backed data lake on S3, tagging each item with a *refurbished* flag and a *quality score*.  
2. **Feature store** – Amazon SageMaker Feature Store holds engineered features (price elasticity, review sentiment, return rate) that are updated every 12 h via Glue jobs.  
3. **Model training & inference** – SageMaker Pipelines train a Gradient‑Boosted Decision Tree model to predict the likelihood of a customer purchasing a refurbished unit. The trained model is deployed as a SageMaker endpoint with a Lambda edge function for real‑time scoring.  
4. **Serving layer** – Amazon OpenSearch Service indexes enriched documents; we use *runtime fields* to inject the ML score on query time, enabling dynamic ranking without re‑indexing.  

**Result**  
- Refurbished tablet sales rose 38 % YoY and contributed $2.1 M in incremental revenue within three months.  
- Query latency stayed below 180 ms for 99.5 % of traffic.  
- Cost per inference was <$0.01, keeping the model’s operational cost <5 % of total catalog spend.

**Leadership Principles Highlighted**  
- **Customer Obsession** – Delivering a frictionless search that surfaces high‑value refurbished options directly to buyers.  
- **Ownership & Dive Deep** – I drove the end‑to‑end pipeline, debugged production bottlenecks, and iterated on feature engineering until we hit the latency SLA.

**Bar‑raiser Takeaway**  
The interviewers look for evidence of *owning* a problem beyond your immediate scope, *deeply understanding* data flows (Glue → SageMaker → OpenSearch), quantifying impact (38 % lift, $2.1 M), and learning from early failures (initial model over‑fitted to price, fixed by adding sentiment features).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
