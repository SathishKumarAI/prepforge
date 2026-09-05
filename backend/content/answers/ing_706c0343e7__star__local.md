---
qid: ing_706c0343e7__star__local
question: 'Explain: ML Take-Home Projects — Data Science & AI Interview Prep | StrataScratch'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 352
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:11:55-05:00'
sources: []
---

**Situation** – When I applied for a data‑science role at a fintech startup, the interview panel asked me to walk through my most recent ML take‑home project because they wanted to gauge not just my coding skills but how I approached problem design under time pressure.

**Task** – My goal was to build a churn‑prediction model from raw customer logs that could be deployed in their existing Python‑based pipeline. The deadline was two weeks, and the dataset had 1.2 M rows with missing values and unbalanced classes (only 8% churners).

**Action** – I started by profiling the data with Pandas and visualizing feature distributions in Seaborn to spot outliers. Using scikit‑learn’s Pipeline I chained a SimpleImputer, OneHotEncoder for categorical fields, and a GradientBoostingClassifier. To address class imbalance I applied SMOTE inside a cross‑validation loop, tuning hyperparameters via Optuna. I logged every experiment with MLflow, versioned the dataset in DVC, and wrapped the final model in a Docker container ready for their Airflow DAG.

**Result** – The model achieved an AUC of 0.87 on the holdout set, outperforming the baseline logistic regression by 12 %. Deployment cut the churn‑prediction time from 3 hours to under 30 seconds, and I presented a reproducible notebook that the team could extend for future feature engineering. I learned how critical it is to combine robust preprocessing, automated hyperparameter tuning, and clear experiment tracking when turning raw data into production‑ready ML artifacts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
