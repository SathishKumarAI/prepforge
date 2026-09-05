---
qid: ing_f156136b93__star__local
question: 'Explain: That''s all we have to do. Now — Python Full Course for Beginners'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 377
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:31:01-05:00'
sources: []
---

**Situation:** At my previous internship, the data science team was tasked with creating an end‑to‑end predictive pipeline for customer churn on a subscription platform that handled ~2 million active users monthly.

**Task:** I needed to design, train, and deploy a model in Python that could be used by product managers within two weeks, while ensuring reproducibility and interpretability for stakeholders who weren’t data‑savvy.

**Action:** I started by orchestrating the workflow with **GitHub Actions** for CI/CD. For feature engineering I leveraged **pandas** and **scikit‑learn’s ColumnTransformer**, encoding categorical variables with one‑hot encoding and scaling numerics using `StandardScaler`. I experimented with several algorithms—logistic regression, random forest, and XGBoost—using a custom `train_test_split` stratified on churn. Hyperparameters were tuned via **Optuna** to stay within a 0.5 % precision budget. For interpretability, I added SHAP visualizations so product managers could see the top five drivers of churn. Finally, I packaged the model with **MLflow** and deployed it as a REST endpoint on an AWS Lambda function.

**Result:** The XGBoost model achieved an AUC‑ROC of 0.87 (up from 0.78 baseline) and reduced churn by 3 % in a pilot test over one month. The deployment pipeline cut future update time from days to under an hour, and the SHAP dashboards improved stakeholder confidence in data‑driven decisions. I learned how to balance model performance with operational constraints while keeping non‑technical users engaged.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
