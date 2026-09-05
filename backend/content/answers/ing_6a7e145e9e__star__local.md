---
qid: ing_6a7e145e9e__star__local
question: Where to start? — Overview - Langfuse
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 374
total_tokens: 610
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:00:26-05:00'
sources: []
---

**Situation:**  
At my last role I was assigned to build a predictive model for churn on our SaaS platform. The product team had no data science background and the only metric we cared about was reducing churn by 5% in six months.

**Task:**  
I needed to design an end‑to‑end pipeline that would turn raw event logs into actionable predictions, explain the results to non‑technical stakeholders, and deploy it with minimal latency so that email triggers could run in real time.

**Action:**  
I started by mapping the data flow: raw logs → ingestion (Kafka) → storage (Snowflake) → feature store (Feast). I used Python notebooks for exploratory analysis, then engineered features like session frequency, time‑to‑first‑purchase, and sentiment from support tickets. For modeling I compared a baseline logistic regression with an XGBoost ensemble; the latter improved AUC from 0.72 to 0.85. I wrapped the model in a FastAPI service, containerized it with Docker, and deployed on AWS Fargate behind a CloudFront edge cache so predictions stayed under 50 ms. Finally, I built a Tableau dashboard that visualised probability buckets and churn risk heatmaps.

**Result:**  
Within four weeks we launched the model; churn fell from 12% to 9%, surpassing the target by 3%. The project also established a reusable ML stack (Kafka → Snowflake → Feast → FastAPI) that other teams adopted, cutting their development time by 40%. I learned how to balance technical rigor with stakeholder communication and the importance of a modular, observable pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
