---
qid: ing_d902c5fcae__star__local
question: 'Explain: let''s assume this is what we have — Google Maps System Design
  Interview Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 336
total_tokens: 578
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:42:42-05:00'
sources: []
---

**Situation:**  
At my previous role, I was part of a team tasked with improving the route recommendation feature for a ride‑hailing app that used a similar data stack to Google Maps. The existing model returned suboptimal routes for 18% of trips during peak hours, leading to customer complaints and higher operational costs.

**Task:**  
I needed to design an end‑to‑end machine learning pipeline that could ingest real‑time traffic, weather, and historical trip data; train a predictive routing model; and deploy it with minimal latency so drivers received accurate suggestions within 2 seconds.

**Action:**  
I built a feature store in BigQuery that aggregated sensor streams (traffic speed, incident alerts) and engineered contextual features (time of day, route popularity). Using Vertex AI Pipelines, I trained an XGBoost model on 12 million labeled trips, tuning hyperparameters with Optuna. For inference, I exported the model to TensorFlow Lite and deployed it behind a Cloud Run container behind a Cloud CDN edge cache, ensuring <500 ms latency. Continuous A/B testing fed new data back into the pipeline for online learning.

**Result:**  
The updated system cut routing errors by 36%, reduced average trip time by 12 minutes per ride, and lowered fuel consumption estimates by 8%. I learned how to balance model complexity with real‑time constraints and the importance of a robust feature store in large‑scale map services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
