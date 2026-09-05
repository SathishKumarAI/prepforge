---
qid: ing_d4694b197c__star__local
question: 'Explain: Amazon Salaries — Amazon Salaries | Levels.fyi'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 377
total_tokens: 616
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:34:03-05:00'
sources: []
---

**Situation:**  
When I joined a fintech startup, we were hiring our first senior data scientist and needed a transparent salary benchmark against Amazon’s levels to negotiate competitively.

**Task:**  
Build an internal model that predicts the expected base + bonus range for a “Senior Machine Learning Engineer” at Amazon using publicly available Levels.fyi data, so we could present a realistic offer within 10% of market value.

**Action:**  
I scraped the Levels.fyi API to gather salary fields (base, signing bonus, stock) for all Amazon ML roles, cleaned outliers with median‑absolute‑deviation filtering, and encoded “Level” as an ordinal feature. Using scikit‑learn’s GradientBoostingRegressor, I trained on 70% of the data and tuned hyperparameters via cross‑validation. To ensure interpretability, I plotted SHAP values to confirm that Level was the dominant predictor while experience and location had smaller effects. I wrapped the model in a Flask microservice so HR could input a candidate’s level and receive an estimated range instantly.

**Result:**  
The model achieved an RMSE of $4,800 on a held‑out test set, keeping predictions within ±$6k (≈5%) of actual salaries reported by Levels.fyi. The startup used the estimate to offer a package that matched Amazon’s median for that level, which helped secure the hire and validated our data‑driven hiring strategy. I learned how to translate raw public compensation data into actionable business insights while balancing model complexity with interpretability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
