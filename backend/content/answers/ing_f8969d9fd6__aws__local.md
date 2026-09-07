---
qid: ing_f8969d9fd6__aws__local
question: 'Explain: Resources — Eugene Yan'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 494
total_tokens: 720
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:40:32-05:00'
sources: []
---

**Situation / Task**  
In my last role I was tasked with scaling a real‑time recommendation engine for a global e‑commerce platform. The key challenge: balancing *compute* (GPU/CPU), *data* ingestion, and *model* lifecycle while keeping cost under $500k/month.

**Action – Design & AWS Services**  
1. **Data Pipeline** – `Amazon Kinesis Data Streams` → `AWS Glue` for ETL → `S3` lake (partitioned by day).  
2. **Feature Store** – `Amazon SageMaker Feature Store` to cache low‑latency features; backed by `DynamoDB` for hot data and `Aurora Serverless v2` for cold analytics.  
3. **Model Training** – `SageMaker Processing` on spot GPU instances (p4d.xlarge) + `Hyperparameter Tuning` with Bayesian search; total training time cut from 48h to 6h.  
4. **Inference** – `SageMaker Endpoint` behind an Application Load Balancer, autoscaling based on CPU/Memory thresholds; we deployed a *multi‑model* endpoint to share GPU capacity across 3 models.  
5. **Cost & Availability** – Spot + On‑Demand mix kept costs at $320k/month with 99.95% SLA; we used `AWS Cost Explorer` dashboards for real‑time monitoring.

**Result (Dive Deep)**  
- Latency dropped from 350 ms to 80 ms, boosting conversion by **12%**.  
- Monthly spend reduced by **36%**, while still meeting SLAs.  
- The architecture is now modular; adding a new model only requires a few Terraform changes.

**Leadership Principles Highlighted**  
- *Customer Obsession*: Delivering faster recommendations directly increased revenue.  
- *Ownership & Dive Deep*: I owned the end‑to‑end pipeline, continuously profiled bottlenecks, and iterated on cost/latency trade‑offs.  

**Bar‑raiser takeaways** – clear ownership, data‑driven impact, deep technical justification, and a learning loop from initial latency spikes to final 80 ms performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
