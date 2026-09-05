---
qid: ing_52b9b742b7__star__local
question: 'Explain: Intelligent data management and balancing'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 359
total_tokens: 592
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:13:37-05:00'
sources: []
---

**Situation**  
During a churn prediction project for a telecom client, the training set had only 3 % positive cases and the raw logs were 1.2 TB compressed. The model’s ROC‑AUC dropped below 0.68 after initial experiments.

**Task**  
I needed to build an automated pipeline that intelligently sampled, balanced, and enriched the data so that the downstream XGBoost classifier could achieve >0.80 AUC while keeping training time under 2 hours on a single GPU.

**Action**  
First, I implemented a stratified reservoir sampling routine in Spark that kept all positives but randomly down‑sampled negatives to a 1:3 ratio, preserving temporal order for time‑series features. Then I added an automated feature engineering step using Featuretools to generate interaction terms and lagged aggregates on the fly. For balancing, I applied SMOTE‑ENN within scikit‑learn after normalizing with StandardScaler, tuning k via Bayesian search (Optuna). The pipeline was containerized in Docker, orchestrated by Airflow, and scheduled nightly so new data would automatically refresh the model.

**Result**  
The balanced dataset reduced training time to 1 h 45 m. AUC improved from 0.68 to 0.82 on the hold‑out set, and churn prediction precision at 20% recall increased by 15 %. I learned that coupling intelligent sampling with automated feature synthesis can dramatically reduce bias without manual feature engineering, and that containerizing the pipeline guarantees reproducibility across environments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
