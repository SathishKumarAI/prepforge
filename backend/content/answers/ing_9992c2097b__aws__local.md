---
qid: ing_9992c2097b__aws__local
question: 'Explain: Global Architecture — Disasterrecovery'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 441
total_tokens: 668
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:12:54-05:00'
sources: []
---

**Situation / Task**  
I led the redesign of a multi‑region inference platform that served 4 M daily users. The previous single‑AZ deployment hit an outage in February, costing us $1.2 M in lost revenue and damaging our brand.

**Action**  
- **Ownership & Customer Obsession**: I drove a *global, zone‑redundant* architecture using **Amazon Route 53 latency routing**, **AWS Global Accelerator**, and **ECS/Fargate** across us-east‑1, eu-central‑1, and ap-southeast‑2.  
- **Dive Deep & Invent & Simplify**: Implemented *S3 object versioning + Glacier* for model checkpoints, backed by **Amazon SageMaker Endpoint Auto Scaling** with a 5 min warm‑up policy to keep latency <120 ms.  
- Added **AWS CloudFormation StackSets** for consistent IaC, and **AWS Config Rules** to enforce multi‑region tagging.  
- Introduced *canary deployments* via **EKS + ArgoCD**, enabling instant rollback on health check failures.  
- For disaster recovery, set up **cross‑region read replicas** of the PostgreSQL metadata store (RDS Aurora Global Database) and **DynamoDB global tables** for session state.

**Result**  
- Zero downtime in a subsequent region‑wide outage; SLA improved from 99.9 % to 99.999 %.  
- Cost decreased by 18 % year‑over‑year due to smarter autoscaling and spot instance usage.  
- Customer satisfaction score rose from 4.2 to 4.8/5.

**Bar‑raiser takeaways**  
I demonstrated full ownership, deep technical understanding, quantified impact, and learned from the failure—ready to scale this pattern across any AI service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
