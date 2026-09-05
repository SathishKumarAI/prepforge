---
qid: ing_a9b4c48d3e__star__local
question: 'Explain: Look, we have these two methods that — Python Full Course for
  Beginners'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 351
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:12:03-05:00'
sources: []
---

**Situation:**  
At a fintech startup I was tasked with improving the fraud‑detection model that flagged credit‑card transactions. The existing rule‑based system had a false‑positive rate of 18 % and missed about 12 % of actual fraudulent cases, hurting user experience and revenue.

**Task:**  
I needed to build a predictive model that reduced false positives by at least 30 % while keeping detection sensitivity above 90 %, all within a two‑week sprint so the team could roll it out before the next quarterly audit.

**Action:**  
I first extracted transaction logs from our PostgreSQL warehouse and used Pandas for feature engineering—creating lag features, one‑hot encodings of merchant categories, and calculating rolling fraud rates per user. I then split the data 80/20 and trained two algorithms: a Random Forest (sklearn) and an XGBoost classifier. Using Optuna I tuned hyperparameters, balancing precision–recall trade‑offs via a custom objective that penalized false positives more heavily. After cross‑validation, I deployed the best model into our FastAPI microservice, integrating it with Kafka for real‑time scoring.

**Result:**  
The new model cut false positives from 18 % to 11 %, a 39 % reduction, while maintaining a fraud detection rate of 92 %. The deployment also lowered CPU usage by 15 % thanks to the lighter XGBoost pipeline. I learned that careful feature engineering and a business‑centric objective function can dramatically improve model performance without sacrificing speed or maintainability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
