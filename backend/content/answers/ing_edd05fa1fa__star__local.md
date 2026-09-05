---
qid: ing_edd05fa1fa__star__local
question: 'Explain: Using Too Many Cloud Services Without a Strategy'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 347
total_tokens: 583
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:24:23-05:00'
sources: []
---

**Situation:**  
When I joined a fintech startup, the data science team had already provisioned six different cloud services—AWS S3 for storage, GCP BigQuery for analytics, Azure ML Studio for model training, Databricks on AWS, Snowflake for warehousing, and an on‑prem Kafka cluster. Each service was used by a handful of engineers, but there was no unified architecture or cost governance.

**Task:**  
I was tasked with reducing operational overhead, cutting costs, and ensuring reproducible ML pipelines while keeping the team’s agility intact.

**Action:**  
First, I mapped every data flow and identified duplicated storage/compute. I proposed consolidating raw data into a single object store (AWS S3) and moving all analytical workloads to Snowflake, leveraging its elastic scaling and native integration with Python notebooks. For model training, we switched from Azure ML Studio to an open‑source Kubeflow on GKE, which allowed us to share GPU resources across experiments. I introduced Terraform scripts for infrastructure-as-code, automated cost alerts via CloudWatch, and set up a centralized GitOps workflow for pipeline versioning.

**Result:**  
Within three months the cloud spend dropped 35 %, data duplication reduced by 80 %, and model training time improved from 12 hours to under 4 hours. The team now runs reproducible experiments on a single platform, and I’ve learned that aligning tooling with clear cost‑and‑workflow governance is essential for scaling ML at speed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
