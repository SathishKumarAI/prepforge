---
qid: ing_32bd21a8a5__star__local
question: 'Explain: Analytics — Think Topics | IBM'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 313
total_tokens: 547
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:09:59-05:00'
sources: []
---

**Situation** – At my last job at a mid‑size fintech, the product team wanted to launch a credit risk scoring model. The existing scorecard was 10 % under‑predicting default rates, and we had only two weeks before the quarterly audit.

**Task** – I needed to build an end‑to‑end analytics pipeline that could ingest the legacy data, engineer new features, train a robust ML model, and generate explainable results for compliance.

**Action** – First, I used IBM Watson Studio’s Data Refinery to clean and join the disparate CSVs from underwriting and transaction logs. Then I applied feature selection with a recursive elimination in Python, leveraging Scikit‑Learn inside the Watson environment. For modeling I chose XGBoost, tuning hyperparameters via Bayesian optimization (using Hyperopt) to hit an AUC of 0.89. Finally, I wrapped the model in a Docker container and deployed it on IBM Cloud Pak for Data, exposing a REST API that returns SHAP values so auditors can see which variables drive each score.

**Result** – The new pipeline cut prediction error by 27 % (from 10 % to 7 %), reduced audit time from three days to one. I learned how to blend IBM’s cloud tooling with open‑source libraries to meet tight deadlines while keeping the model transparent and compliant.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
