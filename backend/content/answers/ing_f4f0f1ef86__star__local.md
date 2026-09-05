---
qid: ing_f4f0f1ef86__star__local
question: 'Explain: Airbnb — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 306
total_tokens: 540
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:38:20-05:00'
sources: []
---

**Situation:** In my last role I joined the pricing team at a regional travel startup that was pivoting to compete with larger players like Airbnb. Our revenue model relied on dynamic pricing, but our existing algorithm was only 12 % accurate in predicting optimal price points during peak seasons.

**Task:** My goal was to build a machine learning model that could increase price‑prediction accuracy by at least 20 % and reduce manual intervention for the data science team.

**Action:** I first performed an exploratory data analysis on over 2 million booking records, uncovering missing seasonality signals. I engineered new features—cumulative booking velocity, local event calendars, and competitor pricing scraped via Selenium—and used a LightGBM ensemble to capture nonlinear interactions. To avoid overfitting, I implemented k‑fold cross‑validation with time‑series splits and tuned hyperparameters using Optuna. For deployment, I containerized the model in Docker, integrated it into our Flask API, and set up an A/B testing framework on our pricing dashboard.

**Result:** The new model lifted accuracy from 12 % to 35 %, boosting revenue by $1.8 M annually during peak months. It also cut manual review time by 70 %. I learned the importance of feature engineering, rigorous validation in time‑series data, and seamless MLOps pipelines for production impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
