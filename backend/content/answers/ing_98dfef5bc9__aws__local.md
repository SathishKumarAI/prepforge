---
qid: ing_98dfef5bc9__aws__local
question: 'Explain: Terraform Apply — How does Terraform turn Code into Cloud?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 483
total_tokens: 716
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:11:17-05:00'
sources: []
---

**Situation / Task**  
At my last role I led the migration of our on‑prem ML pipeline (TensorFlow + Spark) to a fully managed AWS stack so we could scale model training from 2 × CPU workers to 20 × GPU instances without manual provisioning. The key challenge was turning declarative Terraform code into a repeatable, auditable cloud environment while keeping costs under the $150k/quarter budget.

**Action (Technical Design)**  
1. **Infrastructure as Code** – I wrote HCL modules for VPC, subnets, IAM roles, and an ECS‑Fargate cluster with GPU‑enabled task definitions.  
2. **Terraform Apply Pipeline** – The `apply` command was wrapped in a CI/CD job that first ran `terraform plan`, reviewed the diff, then executed `apply -auto-approve`.  
3. **State Management** – Remote state stored in an S3 bucket (encryption‑at‑rest + versioning) with DynamoDB for locking, ensuring no drift across environments.  
4. **Observability** – Integrated CloudWatch Logs and AWS Config to automatically audit changes; added a Lambda that parses the plan output and posts a Slack alert if resource count > +10.

**Result (Data‑driven)**  
- Reduced provisioning time from 3 days to < 30 minutes per environment.  
- Cut infra costs by 35 % through spot instance usage and auto‑scaling policies.  
- Maintained 99.9 % availability for the training service during a 2‑week spike in data volume.

**Leadership Principles**  
- **Ownership** – Took end‑to‑end responsibility for the migration, from architecture to monitoring.  
- **Dive Deep** – Conducted cost‑benefit analysis of on‑prem vs. cloud GPU usage and engineered a state‑locking solution that prevented accidental drift.  

*Bar‑raiser note:* I highlighted ownership by leading cross‑team workshops, quantified impact with exact cost savings, and learned from an early failure when the first `apply` leaked credentials; we fixed it by adding SSM Parameter Store encryption and automated rotation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
