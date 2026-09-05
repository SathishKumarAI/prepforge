---
qid: ing_b5f06f563c__star__local
question: 'Explain: Hi, I''m Eugene Yan,'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 364
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:35:10-05:00'
sources: []
---

**Situation** – At my last job I was assigned to build a churn‑prediction model for our SaaS platform, where the monthly churn rate had slipped from 4 % to 7 %. The company needed an actionable scorecard within two weeks to target high‑risk customers.

**Task** – My goal was to create a production‑ready model that could be deployed in real time and provide a probability of churn for each user, while keeping latency under 50 ms per request.

**Action** – I started by cleaning the log data with Pandas, engineered features like “days since last login” and “feature‑usage entropy”, then split the data using scikit‑learn’s `StratifiedShuffleSplit`. For modeling I chose a LightGBM classifier because of its speed and handling of categorical variables. I tuned hyperparameters via Optuna, constrained to a 1 s training budget. After validation (AUC = 0.83), I exported the model to ONNX and wrapped it in a FastAPI endpoint with Uvicorn; profiling ensured <40 ms inference time. Finally, I set up a CI/CD pipeline on GitHub Actions that automatically retrained the model nightly.

**Result** – The deployed churn scorecard reduced churn by 1.8 % over three months (from 7 % to 5.2 %), saving roughly $300k in annual revenue. I learned how to balance model accuracy with real‑time constraints and the importance of automated retraining for drift mitigation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
