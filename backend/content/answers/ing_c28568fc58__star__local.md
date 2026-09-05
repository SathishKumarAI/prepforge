---
qid: ing_c28568fc58__star__local
question: 'Explain: Comparisons b/w Services — All Comparisons'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 382
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:58:52-05:00'
sources: []
---

**Situation:**  
At my last job we were migrating a recommendation engine from an on‑prem cluster to the cloud. The team had to decide between AWS SageMaker, Google Vertex AI, and Azure Machine Learning based on cost, speed of experimentation, and integration with our existing data lake.

**Task:**  
I was tasked with benchmarking each service for training time, inference latency, and operational overhead so we could make an evidence‑based recommendation.

**Action:**  
I built a lightweight end‑to‑end pipeline that loaded the same 1.2 M‑row dataset from S3/Blob/BigQuery, trained a LightGBM model, and deployed it as a REST endpoint on each platform. I used SageMaker’s automatic model tuning, Vertex AI’s hyperparameter search with custom Docker containers, and Azure ML’s Pipelines with ACI for inference. Metrics collected included: training duration (seconds), cost per epoch, GPU usage, latency of 99th percentile predictions, and log verbosity. I also scripted the deployment steps in Terraform to capture IaC overhead.

**Result:**  
Vertex AI gave the fastest training (≈12 min vs. SageMaker’s 18 min and Azure’s 22 min) but had higher per‑hour costs; SageMaker offered the lowest inference latency (0.45 ms/req). After weighing these, we chose Vertex AI for development and SageMaker for production, reducing overall ML ops cost by ~15% while keeping latency under SLA targets. I learned that a systematic, metric‑driven comparison is essential when evaluating cloud ML services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
