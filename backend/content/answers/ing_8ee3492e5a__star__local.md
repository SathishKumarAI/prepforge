---
qid: ing_8ee3492e5a__star__local
question: 'Explain: Base Web — Uber Engineering \u2014 Where the Digital World Meets
  the Physical One'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 338
total_tokens: 583
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:18:41-05:00'
sources: []
---

**Situation** – When I joined Uber’s Engineering team, the mobile app was struggling to predict real‑time rider wait times during surge periods. Our current heuristic model lagged by an average of 12 seconds, leading to a 3% drop in rider satisfaction scores.

**Task** – I was tasked with building a production‑ready machine learning pipeline that could ingest live traffic, weather, and driver availability data, produce accurate wait‑time estimates within 1 second latency, and scale across the global fleet.

**Action** – First, I set up an Airflow DAG to pull data from Kafka streams and store them in a ClickHouse cluster for low‑latency querying. Using Scikit‑Learn’s Gradient Boosting framework, I engineered features such as “average driver speed per zone” and “real‑time traffic congestion index.” After hyperparameter tuning with Optuna, I wrapped the model in a TensorFlow Lite inference service deployed via Kubernetes. I also added an A/B testing layer that routed 5% of requests to the new model to monitor live performance.

**Result** – The new system reduced average wait‑time prediction error from 12 seconds to 2 seconds, boosting rider satisfaction scores by 4.7 points and cutting surge‑price disputes by 18%. I learned how critical end‑to‑end observability is in a production ML stack and the value of lightweight inference engines for mobile‑centric services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
