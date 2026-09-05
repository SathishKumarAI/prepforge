---
qid: vq_e29b5f1d23__star__local
question: How do you go about tackling a data analytics project?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 374
total_tokens: 610
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:24:13-05:00'
sources: []
---

**Situation** – In Q2 last year I was handed a customer‑retention dataset from our SaaS platform: 3 million rows of usage logs and 500k user profiles, but churn predictions were only 68% accurate and the dashboard lagged by 4 minutes.

**Task** – My goal was to build an end‑to‑end analytics pipeline that delivered real‑time churn scores with >85% AUC, reduce query time to under a second, and provide actionable insights for the marketing team.

**Action** – I first extracted raw logs into Snowflake using dbt models, then performed feature engineering in Python (pandas + scikit‑learn) – engineered session length, cohort flags, and interaction embeddings. To handle scale, I switched from local SQLite to a Spark cluster on Databricks, training an XGBoost model with hyperparameter tuning via Optuna. I wrapped the trained model into a REST endpoint using FastAPI, deployed it in Azure Functions for low‑latency inference, and visualized results in Power BI with incremental refreshes. Throughout, I set up CI/CD pipelines (GitHub Actions) to ensure reproducibility.

**Result** – The new pipeline cut churn prediction latency from 4 minutes to <1 second, boosted AUC to 87%, and the marketing team reported a 12% lift in retention campaigns within two months. I learned that marrying cloud data warehousing with scalable ML training and tight DevOps practices is key to turning raw analytics into business‑driving decisions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
