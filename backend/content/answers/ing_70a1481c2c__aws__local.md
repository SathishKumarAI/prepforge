---
qid: ing_70a1481c2c__aws__local
question: 'Explain: Grow new lines of revenue. — Stripe | Financial Infrastructure
  to Grow Your Revenue'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 399
total_tokens: 636
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:40:11-05:00'
sources: []
---

**Situation & Task**  
I led a cross‑functional team at Stripe to launch an AI‑driven upsell engine that could recommend new product lines (e.g., fraud protection, treasury APIs) to existing merchants. The goal was to grow revenue by 15 % YoY and reduce churn.

**Action**  
*Customer Obsession & Ownership*: I started by interviewing 200+ merchants to surface pain points and high‑value use cases.  
*Dive Deep & Bias for Action*: Built a data pipeline on **AWS Glue** → **Amazon S3** → **Redshift**, ingesting 10 TB of transactional logs daily. Trained a gradient‑boosted model (XGBoost) in **SageMaker** with feature importance analysis to surface the most predictive signals.  
*Invent & Simplify*: Deployed the model as a real‑time scoring service on **AWS Lambda** behind an API Gateway, scaling automatically and keeping latency < 50 ms. The recommendation logic was encapsulated in a single CloudFormation stack for rapid iteration.  

**Result**  
Within 6 months, merchants exposed to AI‑driven upsell saw a **21 % lift** in add‑on revenue (>$12 M incremental), exceeding the target by 6 %. Churn dropped from 4.2 % to 3.8 %, saving $1.5 M annually. Costs were capped at $0.03 per inference, keeping the cost per dollar earned below 10 %.

**Learning & Bar‑Raiser Insight**  
I validated assumptions with A/B tests before full rollout, learned that model drift required a nightly retraining schedule, and documented fallback rules for latency spikes—demonstrating ownership of both success and failure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
