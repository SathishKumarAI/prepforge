---
qid: ing_a4bbf8b5cc__aws__local
question: 'Explain: Set Up Development Environment — Agent Building Guide'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 560
total_tokens: 790
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:39:45-05:00'
sources: []
---

**Situation (S)**  
At my previous role I was tasked to onboard a new ML team into a production‑grade pipeline for an ad‑tech platform that handled 10 M requests/day. The goal was to reduce the time from model conception to deployment from ~3 weeks to under 1 week.

**Task (T)**  
Design a “one‑click” agent building guide that lets data scientists spin up reproducible development environments, run experiments locally or on SageMaker, and push models to a secure inference endpoint—all while keeping costs < $5k/month.

**Action (A)**  

| Step | What I did | AWS services | Why |
|------|------------|--------------|-----|
| **1. Repository & IaC** | Created a monorepo with Terraform modules for VPC, ECR, SageMaker endpoints, and CodePipeline. | GitHub, Terraform, CloudFormation | Enables versioned, auditable infrastructure (Ownership). |
| **2. Development container** | Built a Docker image (`ml-agent-base`) that bundles Conda, JupyterLab, and MLflow client; pushed to ECR. | Amazon ECR, SageMaker Studio | Consistent environment for all devs (Dive Deep). |
| **3. Experiment tracking** | Integrated MLflow with an S3 artifact store and DynamoDB metadata table. | S3, DynamoDB | Enables reproducibility & lineage (Customer Obsession). |
| **4. CI/CD** | Set up CodePipeline: GitHub → CodeBuild (unit tests + model validation) → SageMaker Model Package Store → Lambda approval → SageMaker Endpoint. | CodePipeline, CodeBuild, SageMaker, Lambda | Automates approvals and rollback (Bias for Action). |
| **5. Cost control** | Used Spot Instances for training, leveraged SageMaker’s `MultiModel` endpoints, and set budgets via CloudWatch alarms. | EC2 Spot, SageMaker, CloudWatch | Keeps monthly spend < $4k (Deliver Results). |

**Result (R)**  
Within two sprints the team reduced end‑to‑end model delivery from 3 weeks to **5 days**, cut infrastructure costs by **30%**, and increased deployment confidence (zero production failures in Q1).

> *Bar‑raiser cues:* ownership of end‑to‑end flow, deep dive into trade‑offs between on‑prem vs. cloud, quantifiable cost/velocity gains, lessons learned from a failed pipeline roll‑out that led to automated rollback logic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
