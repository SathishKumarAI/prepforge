---
qid: vq_e29b5f1d23__aws__local
question: How do you go about tackling a data analytics project?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 412
total_tokens: 642
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:19:35-05:00'
sources: []
---

**Answer (Amazon Style)**  

> *“I approach every analytics project like a product launch: I obsess over the customer’s insight needs, own the data pipeline from ingestion to storytelling, and dive deep into performance.”*  
> **Leadership Principles:** Customer Obsession, Ownership, Dive Deep.

### Situation / Task
At my last role, we needed to deliver *real‑time churn predictions* for a SaaS product. The goal was to reduce churn by 15% within six months while keeping latency under 200 ms per request.

### Action  
1. **Data ingestion** – used Kinesis Data Streams (10 M events/day) → Lambda → Glue ETL → Redshift Spectrum for raw logs, and S3 + Athena for historical data.  
2. **Feature store** – built with SageMaker Feature Store to serve 200 features per user in <50 ms.  
3. **Model training** – XGBoost on SageMaker Pipelines; hyper‑parameter tuning via SageMaker Experiments.  
4. **Serving** – deployed as a SageMaker endpoint behind an Application Load Balancer, auto‑scaling based on CloudWatch metrics.  
5. **Monitoring** – CloudWatch dashboards + Evidently for canary rollouts; automated retraining trigger when AUC drops 2%.

### Result  
- Achieved **18% churn reduction** in 4 months (exceeding target).  
- Latency averaged **35 ms**, cost saved $12k/month by using spot instances and caching.  

### Learnings & Bar‑raiser Signals  
*Own the end‑to‑end flow, dive into metric drift, quantify impact, and iterate on failures—exactly what a bar‑raiser looks for.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
