---
qid: ing_bb837853b2__star__local
question: 'Explain: Supervised learning — What is Machine Learning? \u00a0|\u00a0
  Google for Developers'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 317
total_tokens: 567
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:46:16-05:00'
sources: []
---

**Situation:**  
While leading the data‑science team at a fintech startup, we were tasked with predicting credit risk for new loan applicants. The existing rule‑based model was only 68 % accurate and couldn't handle the surge in application volume during our Q4 push.

**Task:**  
I needed to build a supervised learning solution that would increase prediction accuracy, reduce false positives, and scale automatically as data grew.

**Action:**  
First, I curated a labeled dataset of 120,000 past applicants, ensuring balanced classes with SMOTE for minority samples. Using Python’s scikit‑learn, I compared several classifiers—logistic regression, random forest, and XGBoost—tuning hyperparameters via cross‑validation in Optuna. After feature engineering (interaction terms, log‑transformed income), I settled on an XGBoost model with 200 trees, depth = 6, learning rate = 0.05. I deployed the pipeline in a Docker container orchestrated by Kubernetes, exposing a REST endpoint through FastAPI for real‑time scoring.

**Result:**  
Accuracy jumped to 87 %, reducing false positives by 32 % and cutting approval time from 12 hours to under 5 minutes per batch. The team learned that a disciplined feature pipeline and automated hyperparameter search dramatically improve model reliability in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
