---
qid: ing_d2b4ef757a__star__local
question: What is an ensemble method? — What is the difference between Bagging and
  Boosting? | Quantdare
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 285
total_tokens: 533
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:30:56-05:00'
sources: []
---

**Situation** – In early 2023 I was leading a churn prediction project for a telecom client whose baseline model (a single XGBoost) achieved only 0.71 AUC on the validation set, below the target of 0.78.

**Task** – My goal was to boost performance by combining multiple models while keeping inference latency under 50 ms per request.

**Action** – I first applied **bagging**: trained ten LightGBM trees on bootstrap samples and averaged their probabilities (ensemble size 10). This raised AUC to 0.74 but still short of the goal. Next, I switched to **boosting‑style stacking**—I used the bagged predictions as features for a second‑level logistic regression that also incorporated raw engineered fields. During cross‑validation, this stacked ensemble pushed AUC to 0.79 and maintained latency at ~45 ms because the second‑level model was lightweight.

**Result** – The final model exceeded the target metric by 1% absolute, reduced churn by an estimated $3M annually for the client, and taught me that bagging is great for variance reduction, while boosting (or stacking) can capture residual patterns when models are weakly correlated.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
