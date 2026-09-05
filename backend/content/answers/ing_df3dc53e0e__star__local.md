---
qid: ing_df3dc53e0e__star__local
question: 'Explain: When NOT to Use Ensembles — Ensemble Methods'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 333
total_tokens: 569
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:55:04-05:00'
sources: []
---

**Situation:**  
During a recent churn‑prediction project for a telecom client, the data science team had already built a solid XGBoost model that achieved an AUC of 0.89 on the validation set. The business asked us to improve this score by at least 2% before rolling it out.

**Task:**  
I was tasked with exploring advanced modeling techniques—including ensemble methods—to push the metric higher, while ensuring deployment feasibility and maintainability.

**Action:**  
First, I benchmarked several ensembles: bagging of XGBoost, stacking with a logistic regression meta‑learner, and a voting classifier combining XGBoost, LightGBM, and CatBoost. Each ensemble added about 1–2% computational overhead during inference. I also measured model size, latency, and interpretability using SHAP plots. The ensembles improved AUC only marginally (0.90–0.91) but doubled the prediction time from 10 ms to 25 ms per record, increased memory usage by ~30%, and made feature importance harder to explain.

**Result:**  
We decided against deploying an ensemble because the incremental performance gain didn’t justify the higher latency, cost, and reduced transparency needed for regulatory compliance. The single XGBoost model stayed in production with a 0.89 AUC, meeting business targets while keeping inference lean. I learned that ensembles are powerful but should be reserved when the marginal accuracy boost outweighs operational trade‑offs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
