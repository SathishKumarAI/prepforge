---
qid: ing_bc526a519c__star__local
question: 'Explain: Reusable workflow files — Agentic Engineering - by Neo Kim and
  Paul Hoekstra'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 314
total_tokens: 559
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:47:55-05:00'
sources: []
---

**Situation** – In the summer of 2023, my team was tasked with deploying a real‑time fraud detection pipeline across three different banking clients. Each client had slightly varied data schemas and compliance requirements, but all needed the same core model training, feature engineering, and deployment steps.

**Task** – I had to design a workflow that could be reused for each client, reduce duplication of effort, and ensure auditability so we could meet regulatory deadlines in under two weeks per rollout.

**Action** – Using Airflow’s DAG-as-code approach, I created a parameterized “workflow template” that defined all stages: data ingestion, feature extraction (via Spark), model training with XGBoost, evaluation, packaging into Docker containers, and deployment to Kubernetes. The key was splitting the template into reusable sub‑DAGs and leveraging Jinja templating for client‑specific variables. I also added a versioned GitHub Actions pipeline that automatically triggered unit tests and linting on every change, and stored artifacts in an S3 bucket with lifecycle policies.

**Result** – Deployment time per new client dropped from 10 days to just 4 days, cutting costs by ~35%. The reusable workflow was cited as a best practice in our quarterly engineering review, and I learned how fine‑grained parameterization combined with CI/CD can turn monolithic pipelines into scalable, agentic systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
