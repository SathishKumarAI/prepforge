---
qid: ing_0000f9d3d6__star__local
question: 'Explain: I. Codebase — The 12-Factor App'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 425
total_tokens: 664
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:28:39-05:00'
sources: []
---

**Situation** – In late 2023 I was leading a team that built an end‑to‑end recommendation engine for a subscription media platform. The existing codebase was monolithic: data ingestion, model training, and inference all lived in one Docker container, making deployments slow and hard to scale.

**Task** – We needed to refactor the stack into a 12‑factor‑app style microservice architecture so that each process (ETL, training pipeline, API gateway) could be independently versioned, scaled, and monitored. The goal was to cut deployment time from 45 minutes to under 10 and increase model availability by 99.9%.

**Action** – First I split the monolith into three services:  
1️⃣ **Data‑Ingest Service** (Python + Airflow) that pulls logs from Kafka, validates schema with Schematics, and writes Parquet to S3.  
2️⃣ **Training Service** (PyTorch + MLflow) that pulls data, trains models on Spot Instances, and stores artifacts in an S3 bucket, exposing a REST endpoint for hyper‑parameter tuning.  
3️⃣ **Inference Service** (FastAPI + ONNX Runtime) deployed on ECS Fargate with autoscaling rules based on CPU/latency. I used environment variables for all config, GitHub Actions for CI/CD, and Prometheus/Grafana for metrics. All services were containerized with Dockerfiles that only included runtime dependencies, following the 12‑factor principle of keeping code separate from data.

**Result** – Deployment time dropped to 8 minutes; inference latency improved by 30 %. We reduced AWS costs by 18% through spot usage and better autoscaling. The team gained confidence in continuous delivery, and I learned how strict adherence to the 12‑factor model can streamline ML operations while keeping production stable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
