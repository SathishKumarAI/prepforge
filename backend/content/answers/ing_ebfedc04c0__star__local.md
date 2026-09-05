---
qid: ing_ebfedc04c0__star__local
question: 'Explain: So across the whole ensemble, we''re using'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 374
total_tokens: 610
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:21:00-05:00'
sources: []
---

**Situation:** At my last role I was tasked with improving the click‑through rate prediction for a high‑traffic ad network where our baseline model lagged by 12 % in AUC.

**Task:** Build an ensemble that could push AUC above 0.85 while staying within the real‑time inference budget of 5 ms per request.

**Action:** I assembled a two‑stage stack: first, three base learners—XGBoost, LightGBM, and a shallow neural net—each trained on different feature subsets to maximize diversity. For the second stage, I created a meta‑learner (a logistic regression) that took the calibrated probability outputs from each base model as input. During inference, I pre‑computed the meta‑model coefficients so we only evaluated the three fast tree models and then applied a single matrix multiplication for the logistic layer, keeping latency low. I also implemented early‑exit logic: if any base model’s confidence exceeded 0.95, the system returned that prediction immediately.

**Result:** The stacked ensemble achieved an AUC of 0.86, a 4 % lift over baseline, and maintained average inference time at 3.8 ms—well under our SLA. I learned that carefully managing feature diversity and leveraging a lightweight meta‑learner can combine the strengths of heterogeneous models without sacrificing performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
