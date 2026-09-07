---
qid: ing_0b79583c13__aws__local
question: 'Explain: ML design interview — Meta Machine Learning Engineer (MLE) Interview
  Guide | Sample Questions (2026) - Exponent'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 434
total_tokens: 679
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:51:54-05:00'
sources: []
---

**Situation & Task**  
I was hired by a fintech startup to build an end‑to‑end recommendation engine that would surface loan products to users in real time. The goal: boost conversion by **15 %** while keeping latency under **200 ms** for 1 M daily active users.

**Action – Design & AWS Stack**  
*Data ingestion:* Kinesis Data Streams → Lambda → S3 (raw) and DynamoDB (real‑time feature store).  
*Feature engineering:* Glue ETL jobs run nightly; incremental updates via Lake Formation.  
*Model training:* SageMaker Training Jobs on GPU instances, hyperparameter tuning with Bayesian optimization. Models are containerized and pushed to SageMaker Model Registry.  
*Serving:* SageMaker Endpoint (multi‑model) behind an Application Load Balancer with **Auto Scaling** based on CPU usage; cold‑start mitigated by keeping a warm pool of 2 instances.  
*Observability:* CloudWatch metrics + SageMaker Debugger logs fed into Grafana dashboards; A/B test results stored in Redshift for causal analysis.

**Result**  
After deployment, conversion rose **18 %**, exceeding the target and generating an additional **$3.6M** in revenue over six months. Latency stayed below 150 ms on average, with 99.9 th‑percentile < 200 ms. Cost per inference dropped by **27 %** after switching to spot instances for training.

**Reflection (Bar‑raiser)**  
I took full ownership of the pipeline, performed a deep dive into cold‑start latency and cost trade‑offs, and iterated quickly based on real metrics. The failure I learned from was an initial mis‑estimate of feature cardinality that caused DynamoDB throttling; after adding partition keys and scaling throughput, we avoided outages. This showcases **Ownership**, **Dive Deep**, and **Bias for Action**—core Amazon leadership principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
