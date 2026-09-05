---
qid: ing_044b93fc3a__star__local
question: 'Explain: [Music] Stanford University. Okay. Can you hear'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 305
total_tokens: 544
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:37:21-05:00'
sources: []
---

**Situation** – At my last job I was tasked with improving the churn prediction model for our SaaS product, which had only a 0.68 AUC and was running on a 2‑hour nightly batch that stalled our data pipeline.

**Task** – My goal was to lift the AUC above 0.80, reduce inference time by 50%, and deploy the model into production without disrupting existing services.

**Action** – I first rewrote the feature engineering step in Spark, using a columnar Parquet format to cut read latency. Then I switched from a single‑layer logistic regression to a gradient‑boosted tree (XGBoost) because it handles missing values and non‑linearities better. I tuned hyperparameters with Bayesian optimization (Optuna), balancing depth versus training time. For deployment, I containerized the model in Docker, added an MLflow tracking server for reproducibility, and set up a lightweight REST endpoint that served predictions in under 10 ms.

**Result** – The new pipeline produced an AUC of 0.84, cut batch runtime from 2 hrs to 35 min, and reduced inference latency by 60%. I learned the importance of aligning model complexity with production constraints and the value of automated hyperparameter search in speeding experimentation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
