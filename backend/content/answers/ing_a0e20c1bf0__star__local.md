---
qid: ing_a0e20c1bf0__star__local
question: 'Explain: 1.11. Ensembles: Gradient boosting, random forests, bagging, voting,
  stacking'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 359
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:54:24-05:00'
sources: []
---

**Situation:** In my last role at a fintech startup, we were tasked with predicting loan default risk for over 50,000 customers. Our baseline logistic regression model only achieved an AUC of 0.72, which was below the regulatory benchmark of 0.78.

**Task:** I had to build a more robust predictive system that leveraged ensemble techniques—gradient boosting, random forests, bagging, voting, and stacking—to lift the performance while keeping inference latency under 200 ms per request.

**Action:** I started by implementing a Random Forest (500 trees) as a quick bagging baseline; it raised AUC to 0.75 but was still slow. Next, I switched to XGBoost for gradient boosting, tuning learning rate and max depth via Bayesian search; this pushed AUC to 0.79. For further gains, I built a lightweight Gradient Boosting Machine (GBM) using LightGBM and combined it with the Random Forest in a soft voting ensemble—averaging probabilities—to balance bias and variance. Finally, I stacked these two models on top of a logistic regression meta‑learner trained on out‑of‑fold predictions, achieving an AUC of 0.82 while keeping inference time at 180 ms.

**Result:** The final ensemble met the regulatory threshold and reduced false positives by 12%, directly saving the company roughly $1.2 M in potential default losses annually. I learned that carefully layering diverse ensembling methods—bagging for variance reduction, boosting for bias correction, voting for stability, and stacking for meta‑learning—can yield substantial performance gains without sacrificing speed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
