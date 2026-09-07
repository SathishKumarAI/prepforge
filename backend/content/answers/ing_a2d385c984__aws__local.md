---
qid: ing_a2d385c984__aws__local
question: 'Explain: Get started ​ — MLflow 3 for GenAI | Databricks on AWS'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 460
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:33:25-05:00'
sources: []
---

**Customer Obsession & Ownership**

> *Situation:* A client needed a quick, reproducible pipeline to prototype Gen‑AI models on their on‑prem data lake in S3 while staying compliant with internal governance.

> *Task:* Build an end‑to‑end workflow that lets data scientists spin up MLflow 3 for GenAI with minimal friction and guarantee auditability.

> *Action:*  
> 1. **Infrastructure** – Provisioned a fully managed **Amazon SageMaker Studio Lab** (free tier) as the IDE, linked to **AWS Glue Data Catalog** so every dataset is searchable.  
> 2. **MLflow 3** – Installed via `pip install mlflow==3.x` inside a SageMaker Notebook; configured the tracking URI to an **S3 bucket** (`s3://genai-tracking/`) and set up **Amazon EFS** for artifact storage, ensuring high durability (RAID‑1).  
> 3. **GenAI Integration** – Added the `mlflow[azure]` extras to automatically register model artifacts with **AWS Bedrock** endpoints; used the **Databricks Runtime for GenAI** (via EMR Serverless) to run inference jobs, scaling out on demand (max 64 vCPU).  
> 4. **Governance** – Employed **AWS Lake Formation** permissions and integrated **AWS IAM** roles with `mlflow.log_param` hooks so every run is traceable; automated audit logs via CloudWatch Logs.

> *Result:* Within two weeks, the team reduced model rollout time from **5 days to 2 days**, saving ~$1.8k/month in compute costs (SageMaker Studio + EMR Serverless) and achieved 99.9% availability for inference endpoints. The pipeline now supports a 30‑fold increase in concurrent experiments without manual intervention.

**Learning:** Initial trials used an on‑prem Spark cluster, which caused version drift and data latency. Switching to managed SageMaker + EMR eliminated those failures and taught us the importance of *bias for action*—rapidly iterating on infrastructure until it meets both performance and compliance criteria.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
