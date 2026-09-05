---
qid: ing_70a1481c2c__star__local
question: 'Explain: Grow new lines of revenue. — Stripe | Financial Infrastructure
  to Grow Your Revenue'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 300
total_tokens: 543
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:12:37-05:00'
sources: []
---

**Situation:**  
At a fintech startup I was part of the product team that launched an automated card‑processing API. Our user growth plateaued because merchants kept canceling subscriptions after the first month—our churn rate hit 18%, hurting revenue projections.

**Task:**  
I needed to build a predictive model that could flag high‑risk merchants early, so we could intervene with targeted onboarding or credit offers and reduce churn below 10%.

**Action:**  
Using Python’s scikit‑learn, I engineered features from transaction volume, velocity spikes, and support tickets. I trained an XGBoost classifier, tuned hyperparameters via Bayesian optimization, and deployed the model as a REST endpoint in our Kubernetes cluster. The model scored each new merchant in real time; scores above 0.8 triggered a proactive outreach workflow that offered a short‑term credit line and a personalized onboarding video.

**Result:**  
Within three months, churn dropped to 7%, adding $2.4 M in recurring revenue annually. The model’s AUC of 0.87 gave us confidence in its predictions, and the data pipeline became reusable for other product lines, scaling our ML infrastructure across the company. I learned that coupling a robust predictive model with immediate business action can turn a churn problem into a revenue engine.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
