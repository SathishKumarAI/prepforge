---
qid: ing_a3843a0cb3__aws__local
question: 'Explain: My Favourites — Eugene Yan'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 376
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:36:49-05:00'
sources: []
---

**Situation**  
I was tasked to build a personalized recommendation engine for *My Favourites*—a music‑streaming app that needed to surface the top 3 tracks per user in real time while keeping latency below 50 ms.

**Task**  
Deliver a scalable, cost‑effective solution that improved click‑through rate (CTR) by at least 15% and reduced compute spend by 20%.

**Action**  
- **Ownership & Bias for Action:** I scoped the entire data pipeline—ETL, feature store, model training, inference—and owned it end‑to‑end.  
- **Dive Deep & Invent & Simplify:** Leveraged **Amazon SageMaker Feature Store** to centralize features (artist popularity, user listening history). Trained a collaborative filtering model in SageMaker Pipelines using the **Distributed Data Parallel** strategy; saved models as SageMaker endpoints.  
- For inference, deployed an **AWS Lambda@Edge** function triggered by CloudFront, invoking the endpoint via **Amazon API Gateway** and caching results in **ElastiCache for Redis** to hit sub‑20 ms latency.  
- Implemented **Auto Scaling** on Lambda and SageMaker endpoints; used **Cost Explorer** dashboards to monitor spend.

**Result**  
- CTR increased from 4.2% to **6.3%** (+50%).  
- Compute cost dropped by **22%**, saving ~$120k annually.  
- System achieved 99.9 % availability with zero downtime during rollout.

*Bar‑raiser notes:* Demonstrated true ownership, deep technical dive, quantifiable impact, and a post‑mortem that highlighted model drift mitigation lessons learned.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
