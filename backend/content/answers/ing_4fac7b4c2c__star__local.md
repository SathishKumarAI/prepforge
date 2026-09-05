---
qid: ing_4fac7b4c2c__star__local
question: 'Explain: Company context — Sarvam Ai'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 311
total_tokens: 544
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:07:28-05:00'
sources: []
---

**Situation**  
I joined Sarvam AI as a senior data scientist when the startup was pivoting from a niche sentiment‑analysis tool to a full‑stack recommendation engine for e‑commerce merchants in India. Our existing model was only 65 % accurate on the new product catalog, and we had an upcoming client demo in three weeks.

**Task**  
I needed to redesign the feature pipeline and retrain the recommendation system so that precision rose above 80 % while keeping inference latency under 200 ms for a production environment on AWS Lambda.

**Action**  
First, I mapped the data flow with Apache Airflow, adding a nightly ETL job that ingested click‑stream logs into an Amazon Redshift warehouse. I engineered contextual embeddings using Sentence‑Transformers and combined them with collaborative filtering via LightFM, tuning hyperparameters with Optuna on SageMaker. To meet latency constraints, I distilled the model to a 32‑bit TensorRT engine and deployed it behind a FastAPI gateway in ECS Fargate.

**Result**  
The new pipeline lifted recommendation precision from 65 % to 82 %, reduced inference time to 150 ms, and cut monthly compute costs by 35 %. I learned how to balance model complexity with operational constraints and the importance of end‑to‑end observability in a fast‑moving startup.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
