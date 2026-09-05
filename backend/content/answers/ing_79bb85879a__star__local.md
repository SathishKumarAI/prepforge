---
qid: ing_79bb85879a__star__local
question: 'Explain: How to prepare — Harvey'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 381
total_tokens: 613
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:37:02-05:00'
sources: []
---

**Situation** – When I joined the data‑science team at a fintech startup, we were slated to launch an AI‑driven fraud detection module within six weeks. The existing pipeline was monolithic and had no version control; stakeholders demanded production‑ready code that could scale to millions of transactions daily.

**Task** – My goal was to design a reproducible end‑to‑end workflow: from data ingestion, feature engineering, model training, to deployment, all while ensuring auditability and compliance with PCI standards.

**Action** – I first mapped the entire data flow in Apache Airflow, creating DAGs that pulled raw logs from Kafka, cleaned them with Spark, and stored pre‑processed features in Delta Lake. For reproducibility I containerized each step using Docker and managed dependencies with Conda environments pinned to specific versions. I implemented a model training pipeline in PyTorch Lightning, integrated MLflow for experiment tracking (capturing hyperparameters, ROC curves, and AUC scores), and set up automated unit tests that validated data schemas against JSON Schema definitions. Finally, I built an inference microservice on FastAPI, wrapped with Istio sidecars for traffic routing, and exposed metrics to Prometheus.

**Result** – The pipeline processed 1.2 M transactions per day with a latency of <200 ms, achieving an AUC of 0.97 on the validation set. Deployment took just two days after code review, and we reduced fraud loss by 18% in the first month post‑launch. I learned that rigorous orchestration and artifact tracking are as critical to AI success as model accuracy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
