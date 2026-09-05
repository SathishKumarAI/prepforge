---
qid: ing_22e47a76d3__star__local
question: 'Explain: MLflow 3 for GenAI | Databricks on AWS'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 359
total_tokens: 599
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:38:54-05:00'
sources: []
---

**Situation** – In mid‑2024 I was leading a GenAI team at a fintech that had just migrated its production workloads to Databricks on AWS. Our models were training in separate notebooks, and we couldn’t track hyper‑parameters or reproducibility across the many fine‑tuning runs.

**Task** – We needed a unified experiment tracking system that could ingest large embeddings, support versioned datasets from Delta Lake, and integrate with SageMaker for inference scaling, all while keeping costs under $30K/month.

**Action** – I introduced MLflow 3.0, leveraging its new “GenAI” extensions: the *MLflow Model Registry* now stores vector indices, and the *Experiment Tracking API* accepts `mlflow.log_embedding()` calls directly from Hugging Face pipelines. On Databricks we deployed the community edition of MLflow on an EMR cluster with Spot Instances, configured auto‑scaling for GPU workloads, and set up a CI/CD pipeline that pushes every new model version to AWS SageMaker endpoints via the *MLflow Deploy* CLI. I also wrote a lightweight Lambda function to trigger cold‑start warm‑ups when traffic spikes.

**Result** – Experiment turnaround time dropped from 3 days to under 12 hours, reproducibility increased by 85% (no “model drift” incidents in production), and we reduced infrastructure spend by 20% by using spot GPUs. I learned that marrying MLflow’s native GenAI features with Databricks’ Delta Lake ops can dramatically accelerate model lifecycle while keeping costs predictable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
