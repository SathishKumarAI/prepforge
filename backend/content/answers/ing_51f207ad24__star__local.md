---
qid: ing_51f207ad24__star__local
question: 'Explain: Industry Adoption — Tool Use And Mcp'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 340
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:12:17-05:00'
sources: []
---

**Situation:**  
When I joined a mid‑size fintech at the end of 2023, our data science team was still using Jupyter notebooks on local machines while the engineering side deployed models to a single on‑prem Kubernetes cluster. The result was duplicated effort and a lag of 4–6 weeks from model training to production.

**Task:**  
I needed to build an end‑to‑end pipeline that allowed data scientists to experiment in a cloud‑native environment, share artifacts with developers, and deploy models across hybrid clouds without breaking existing CI/CD practices.

**Action:**  
I evaluated several AI platform tools—MLflow, SageMaker Pipelines, and Databricks—and chose MLflow for its open‑source flexibility. I integrated it into our GitHub Actions workflow, set up a private registry in Azure Container Registry, and used Terraform to provision the same Kubernetes cluster on both AWS and Azure (MCP – Multi‑Cloud Platform). We also added automated A/B testing with Evidently AI to monitor drift.

**Result:**  
Model deployment time dropped from 5 weeks to under 48 hours. The team now trains models in a single, reproducible environment, and we can roll out updates to either cloud without downtime—cutting infrastructure costs by ~30% while improving feature velocity by 40%. I learned that choosing the right tool isn’t just about technical fit; it’s also about aligning with operational workflows and multi‑cloud strategy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
