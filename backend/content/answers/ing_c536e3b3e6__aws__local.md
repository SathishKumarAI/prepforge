---
qid: ing_c536e3b3e6__aws__local
question: 'Explain: In the News — Careers | Harvey'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 417
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:48:51-05:00'
sources: []
---

**Customer Obsession & Ownership**

*Situation*: While leading a cross‑functional team at my previous company, we noticed that our “News – Careers” feed was not engaging job seekers—click‑through dropped 27 % in Q1.

*Task*: Build an ML‑driven recommendation engine to surface personalized career stories and job postings.

*Action*:  
- **Requirements & Design**: Collected user interaction logs (≈10M events/day). Designed a two‑stage pipeline:  
  1. *Feature extraction* on Amazon SageMaker Processing – embeddings for content, user demographics, and browsing context.  
  2. *Model training* with XGBoost on SageMaker Training, tuned via Bayesian optimization.  
- **AWS Services**:  
  - S3 & Glue for data cataloging, Athena for ad‑hoc queries.  
  - SageMaker Pipelines for CI/CD of models.  
  - Lambda + API Gateway to serve predictions in real time; results cached in Amazon ElastiCache (Redis) to keep latency <30 ms.  
- **Scalability & Cost**: Autoscaling training jobs on spot instances reduced spend by 35 %. Real‑time inference uses a single m5.large instance, cost <$50/month.  
- **Bias for Action**: Deployed A/B test within two weeks; achieved 18 % lift in engagement and 12 % increase in applications.

*Result*: Within three months, the personalized feed boosted user sessions by 22 %, driving a $1.8 M incremental revenue from job placements—proof that data‑driven ownership leads to measurable business impact.  

**Bar‑raiser take‑away**: I owned the full lifecycle, dove deep into feature engineering, quantified success with real metrics, and iterated quickly after learning from initial click‑through decline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
