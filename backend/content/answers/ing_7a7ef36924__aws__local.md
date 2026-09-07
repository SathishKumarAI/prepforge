---
qid: ing_7a7ef36924__aws__local
question: 'Explain: Tech Decisions — Socialnetworkfacebookinstagram'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 456
total_tokens: 685
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:02:26-05:00'
sources: []
---

**Situation & Task**  
I led the redesign of our recommendation engine for a global photo‑sharing app (≈ 3 B daily active users). The goal was to reduce cold‑start latency by 70 % while keeping cost < $5M/yr.

**Action – Technical Design**  
* **Data ingestion:** Kinesis Data Streams → Glue ETL → S3 (partitioned by day).  
* **Feature store:** DynamoDB for user‑level features, DAX cache for low‑latency reads.  
* **Model training:** SageMaker Pipelines with distributed training on Spot GPU instances; hyper‑parameter tuning via Hyperparameter Tuning jobs.  
* **Inference:** Real‑time endpoint in SageMaker Hosting (multi‑model) behind an Application Load Balancer; batch inference nightly on EMR Spark for bulk updates.  
* **Observability:** CloudWatch metrics + Evidently for canary rollouts, and Athena queries on logs for drift detection.

I introduced *feature versioning* (S3 object tags) to enable A/B testing without code changes—an example of “Invent & Simplify.” The system auto‑scales with Lambda triggers; cost dropped 32 % due to Spot savings and reduced over‑provisioning.

**Result**  
Latency fell from 1.8 s to 0.5 s (70 % reduction). Model precision improved by 4.2 % (CTR ↑ 12 %). Monthly spend stayed under $4.6M, beating the target by 10 %.  

**Reflection – Bar‑raiser Lens**  
I took full ownership of data quality and end‑to‑end latency; I dove deep into metrics to uncover the bottleneck in feature lookup. The quantified impact (latency & cost) satisfies Deliver Results. Failure analysis—initially, we over‑cached features causing stale data—led us to implement a TTL policy, showing continuous learning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
