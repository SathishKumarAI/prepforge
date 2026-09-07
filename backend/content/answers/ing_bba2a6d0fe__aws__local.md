---
qid: ing_bba2a6d0fe__aws__local
question: 'Explain: Google System Design — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 459
total_tokens: 689
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:28:11-05:00'
sources: []
---

**Situation / Task**  
At my last role I led the migration of a Google‑style “real‑time click‑through rate” model from on‑prem to AWS. The team had to support > 10 M requests/sec with < 200 ms latency while keeping cost under $2 M/yr.

**Action (Design)**  
* **Data ingestion:** Kinesis Data Streams → Lambda for preprocessing → S3 cold storage.  
* **Feature store:** DynamoDB + Amazon SageMaker Feature Store, sharded by user‑segment to keep read latency < 20 ms.  
* **Model serving:** SageMaker Endpoint on an Auto Scaling cluster (GPU p4d.2xlarge) behind Application Load Balancer; we added a *canary* traffic split and Lambda‑based A/B testing for drift detection.  
* **Batch retraining:** Step Functions orchestrate nightly Glue jobs that pull the latest 30 days of data, train on SageMaker, and deploy via CI/CD (CodePipeline).  
* **Observability:** CloudWatch metrics + X-Ray tracing; we set up a Grafana dashboard with alerting for latency spikes.

**Result**  
Latency dropped from 450 ms to 180 ms (60 % improvement), while cost fell by 30 %. The new pipeline reduced model‑drift incidents by 85 %, increasing CTR prediction accuracy from 0.42 to 0.55.  

**Leadership Principles Reflected**  
* **Customer Obsession & Deliver Results** – We focused on end‑user latency and business KPIs.  
* **Ownership & Dive Deep** – I championed the full stack, from ingestion to monitoring, and iterated on failures (e.g., the initial Lambda timeout).  

**Bar‑raiser takeaways**  
They’ll look for my ownership of the whole lifecycle, quantitative impact, deep technical trade‑offs (e.g., GPU vs. CPU cost), and lessons learned from the first production failure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
