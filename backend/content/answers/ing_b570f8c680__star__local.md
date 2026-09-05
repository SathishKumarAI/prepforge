---
qid: ing_b570f8c680__star__local
question: 'Explain: Powering businesses of all sizes. — Stripe | Financial Infrastructure
  to Grow Your Revenue'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 278
total_tokens: 522
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:34:20-05:00'
sources: []
---

**Situation** – In early 2022 I joined Stripe’s Growth Optimization team, where we were tasked with boosting merchant revenue during a volatile quarter. Our key metric was the conversion rate of merchants signing up for the “Pay Later” feature.

**Task** – I had to build a machine‑learning model that could predict which merchants would benefit most from targeted upsell offers, so we could allocate marketing spend more efficiently and lift activation rates by at least 15%.

**Action** – I sourced transactional data, engineered features around payment velocity, churn risk, and regional compliance scores, then trained an XGBoost classifier. Using a custom cost‑sensitive loss function, the model prioritized high‑value merchants while keeping false‑positive costs low. I deployed the model via Stripe’s internal MLOps pipeline (MLflow + Kubernetes), monitored drift with Evidently AI, and iterated weekly based on A/B test feedback.

**Result** – The targeted upsell campaign lifted activation by 18%, exceeding our goal. Revenue grew $12 M in a month, and we reduced marketing spend per activated merchant by 22%. I learned how to balance model performance with operational constraints and the importance of continuous monitoring in production ML systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
