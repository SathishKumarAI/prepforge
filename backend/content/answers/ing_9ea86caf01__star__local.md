---
qid: ing_9ea86caf01__star__local
question: 'Explain: relevant and applicable to like actual work'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 293
total_tokens: 528
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:49:22-05:00'
sources: []
---

**Situation:** In my last role at a fintech startup, our credit risk model was consistently over‑penalizing customers with thin credit histories, leading to a 12% drop in new account sign‑ups during the holiday season.

**Task:** I needed to redesign the model so it could incorporate alternative data (social media engagement scores, utility payment history) while staying compliant with fair‑credit‑reporting regulations and maintaining real‑time inference speed for our mobile app.

**Action:** I built a feature‑engineering pipeline in Python using Pandas and scikit‑learn, normalizing the new variables and applying L1 regularization to prevent overfitting. I then swapped the RandomForest baseline for a LightGBM model, tuning hyperparameters with Optuna and validating against a hold‑out set of 50k customers. To keep latency under 200 ms, I exported the final model as ONNX and deployed it on our Kubernetes cluster with GPU autoscaling.

**Result:** The updated model cut false positives by 35%, boosting new sign‑ups by 18% during the campaign. It also reduced inference time to 120 ms, meeting our SLA. I learned how to balance regulatory constraints, feature diversity, and performance trade‑offs in a production ML system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
