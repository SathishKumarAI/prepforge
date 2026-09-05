---
qid: ing_159b209be8__star__local
question: 'Explain: Take-home project — Sierra Agent Engineer Interview Guide | Sample
  Questions (2026) - Exponent'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 346
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:11:38-05:00'
sources: []
---

**Situation** – In my last role I was tasked with building a recommendation engine for a travel booking platform that had seen a 15 % drop in user engagement on its “Suggested Trips” page. The data lake contained 2.5 million trip logs, but the feature store only stored raw click‑through counts.

**Task** – My goal was to design and deploy an end‑to‑end ML pipeline that could predict which trips a user would book within 48 hours, improving CTR by at least 10 % while keeping latency under 200 ms in production.

**Action** – I first engineered contextual features (time of day, device type, seasonality) and encoded categorical variables with target‑encoding to avoid sparsity. Using Spark MLlib I built a LightGBM model; hyperparameters were tuned via Optuna’s Bayesian search on a held‑out 10 % validation set. The pipeline was containerized in Docker and orchestrated by Airflow, feeding predictions into an online feature store (Redis) that served the inference API. For latency I deployed the model as a FastAPI endpoint behind a CDN edge cache.

**Result** – After A/B testing over two weeks, CTR on the “Suggested Trips” page rose from 4.3 % to 5.1 %—a 18 % lift—and conversion rates increased by 12 %. I learned how to balance model complexity with real‑time constraints and the importance of end‑to‑end observability for ML systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
