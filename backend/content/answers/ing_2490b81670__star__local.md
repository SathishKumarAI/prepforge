---
qid: ing_2490b81670__star__local
question: 'Explain: Experience Rating — Abridge Software Engineer Interview Experience
  - United States'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 321
total_tokens: 561
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:42:26-05:00'
sources: []
---

**Situation** – In my second year at a fintech startup, the underwriting team was struggling to keep up with the surge in mortgage applications during the housing boom. Our manual risk assessment process lagged behind, and we were missing early warning signals for potential defaults.

**Task** – I was tasked with building an automated experience‑rating engine that could predict borrower creditworthiness using historical application data and real‑time behavioral signals, reducing our review cycle from 48 hours to under 6 minutes while maintaining a false‑positive rate below 3%.

**Action** – I first engineered a feature‑store in Snowflake, pulling transactional, demographic, and device‑usage data. Using Python’s scikit‑learn, I trained an XGBoost model with SHAP explanations to surface the most predictive variables. To meet latency constraints, I containerized the model with Docker and deployed it on AWS Lambda behind an API Gateway, caching frequent queries in Redis. I also set up a CI/CD pipeline with GitHub Actions that automatically retrained the model every night using new data.

**Result** – The engine cut underwriting time by 85%, freeing the team to focus on high‑risk cases. Accuracy improved from 78 % to 92 % (AUC), and we saw a 12 % reduction in first‑year default rates across the portfolio. I learned that marrying robust feature engineering with edge‑deployment constraints is key to turning ML into real business value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
