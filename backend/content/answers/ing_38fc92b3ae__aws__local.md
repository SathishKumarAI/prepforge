---
qid: ing_38fc92b3ae__aws__local
question: 'Explain: Why did that happen? That was because — Google I/O 2009 - Google
  Wave: Under the hood'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 420
total_tokens: 664
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:33:47-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led a cross‑functional team to rebuild an internal recommendation engine that was underperforming by **30 %** in click‑through rate (CTR). The root cause was a stale feature pipeline and overfitting in our models, echoing the “Google Wave” lesson that *under‑the‑hood* changes can ripple through downstream services.

**Action & Technical Design**  
I adopted an **event‑driven architecture** on AWS:

| Layer | Service | Reason |
|-------|---------|--------|
| Data ingestion | Amazon Kinesis + Lambda | Real‑time feature extraction, low latency |
| Feature store | DynamoDB + DAX | Fast read/write for millions of users |
| Model training | SageMaker Pipelines | Automated CI/CD, versioning |
| Inference | SageMaker Endpoint + API Gateway | 99.9 % availability, auto‑scaling |

I introduced a **feature drift monitor** using CloudWatch metrics and automated retraining triggers, reducing concept drift from 15 % to <5 %. I also simplified the feature set (Invent & Simplify) by removing redundant columns, cutting storage costs by **$12k/month**.

**Result**  
Within three months, CTR rose from 3.4 % to **4.8 %** (+41 %), and revenue per user increased by **$0.25**. The system now supports **10× traffic growth** with a single‑region deployment cost of $18k/month.

**Learning & Ownership**  
I documented the failure mode in our post‑mortem, shared it across teams, and set up quarterly “Feature Drift” workshops—demonstrating ownership and bias for action. The bar‑raiser will notice my deep dive into metrics, quantified impact, and continuous learning loop.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
