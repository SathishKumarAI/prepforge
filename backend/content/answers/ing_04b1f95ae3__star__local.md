---
qid: ing_04b1f95ae3__star__local
question: 'Explain: Customer Engineering — Careers | Cognition'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 364
total_tokens: 599
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:38:21-05:00'
sources: []
---

**Situation** – In late 2023 I joined Cognition’s Customer Engineering team as a ML Engineer on a project for a Fortune 500 retailer that was struggling to keep its recommendation engine up‑to‑date during peak shopping seasons. Their click‑through rate had slipped from 12% to 8%, and the existing model pipeline ran in batches, causing a lag of 48 hours between data ingestion and inference.

**Task** – I needed to design an end‑to‑end, real‑time ML workflow that could ingest new user interaction data, retrain the recommendation model within minutes, and deploy it with zero downtime, all while staying under the company’s $50K monthly AI budget.

**Action** – I set up a streaming pipeline using Kafka for event ingestion, Spark Structured Streaming for feature engineering, and a lightweight XGBoost model wrapped in a Docker container orchestrated by Kubernetes. I added an automated A/B testing layer with Optimizely to compare new predictions against the legacy system. To keep costs low, I leveraged spot instances on AWS and implemented model pruning to reduce inference latency from 200 ms to under 80 ms.

**Result** – Within two weeks the updated pipeline was live; click‑through rate rebounded to 11%, a 37% lift over the baseline. The system processed 1.2M events per hour with 99.9% uptime, and I cut inference costs by 28%. This experience taught me how to blend robust engineering practices with data science to deliver scalable, high‑impact solutions in a customer‑facing role.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
