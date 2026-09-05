---
qid: ing_55c3797b3d__star__local
question: 'Explain: we can now see that black should — Coding Adventure: Chess'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 354
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:19:28-05:00'
sources: []
---

**Situation:**  
In my last role at FinTechX we were building a credit‑scoring model that fed into an automated loan approval pipeline. The initial version used a gradient‑boosted tree trained on 250,000 historical customer records, but the production AUC dropped from 0.82 in dev to 0.74 after deployment because the model overfitted to a handful of high‑frequency features.

**Task:**  
I needed to redesign the feature engineering and regularization pipeline so that the model generalized better while still meeting our regulatory explainability requirements.

**Action:**  
First, I performed an SHAP analysis to identify which features were driving the spikes in dev AUC. I discovered that a few categorical variables with many rare levels were inflating importance scores. I applied target‑encoding with K‑fold smoothing and added L1 regularization (ElasticNet) directly into the XGBoost objective. Next, I built an automated feature‑selection script using Recursive Feature Elimination with cross‑validation to prune noisy predictors. Finally, I wrapped the whole process in a lightweight Docker container so it could be re‑run nightly on fresh data.

**Result:**  
After deploying the revised model, the production AUC rose back to 0.81 and the false‑positive rate dropped by 12%. The pipeline now runs in under two minutes per batch, freeing up 30 % of our compute budget for other experiments. I learned that a disciplined, reproducible feature‑engineering workflow is often more effective than tweaking hyperparameters alone.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
