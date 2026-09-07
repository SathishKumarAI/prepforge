---
qid: ing_56898ce5ba__aws__local
question: Don’t code? — Stripe | Financial Infrastructure to Grow Your Revenue
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 431
total_tokens: 664
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:41:53-05:00'
sources: []
---

**Situation & Task**  
At my previous role I was asked to build a fraud‑detection model for high‑value payments. The business required *zero downtime* and *real‑time scoring* with a 10 % lift in revenue protection.

**Action**  
I owned the project end‑to‑end:  
- **Data pipeline** – used **Amazon S3** + **Glue** to ingest raw logs, then **Athena** for ad‑hoc exploration.  
- **Feature store** – built with **AWS SageMaker Feature Store**, caching 2 M active features per day for low latency.  
- **Model training** – leveraged **SageMaker Pipelines** (Python SDK) and a hyper‑parameter tuning job that ran on **p3dn.24xlarge** instances, reducing inference error from 4.2% to 1.8%.  
- **Deployment** – served the model via **SageMaker Real‑Time Endpoint** behind an **Application Load Balancer**; autoscaling was based on *CPU* and *latency* metrics.  
- **Observability** – integrated **CloudWatch Logs**, **X-Ray**, and a custom dashboard in **Grafana** to detect drift within 2 hrs.

**Result**  
The system achieved <20 ms latency, handled 50k TPS, and cut fraudulent chargebacks by **27 %**, translating to ~$1.4 M annual revenue lift.  

**Leadership Principles Highlighted**  
- *Ownership* – drove all decisions from data ingestion to monitoring.  
- *Dive Deep* – iterated on feature engineering until the error plateaued.  
- *Bias for Action* – launched a beta in 3 weeks, then rolled out globally after A/B validation.

Bar‑raisers listen for concrete ownership, depth of technical trade‑offs, and measurable impact—exactly what this solution delivers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
