---
qid: ing_0f610efd01__aws__local
question: 'Explain: Container Orchestration Service — DevOps-SRE/2_ContainerOrchestration
  at main \u00b7 Anshul619/DevOps-SRE \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 261
output_tokens: 371
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:00:14-05:00'
sources: []
---

**Answer (Amazon Style)**  

I spearheaded the migration of our legacy monolith into a Kubernetes‑based microservices platform on AWS.  
**Situation:** Our CI/CD pipeline was brittle—deployments took ~30 min and rollbacks were manual, hurting *Customer Obsession* by delaying feature delivery.  
**Task:** Design a container orchestration service that automated deployments, scaled elastically, and reduced downtime.  
**Action:**  

1. **Requirements & Architecture** – Adopt Amazon EKS (managed Kubernetes) for control‑plane simplicity; use Fargate to eliminate server management.  
2. **Deployment Pipeline** – Integrated CodePipeline + CodeBuild with Helm charts; automated Canary releases via Argo Rollouts, ensuring 99.9% success rate.  
3. **Observability & Scaling** – Deployed CloudWatch metrics (CPU/Memory), Prometheus/Grafana dashboards; enabled Cluster Autoscaler and Pod Disruption Budgets to maintain *Availability*.  
4. **Cost Controls** – Leveraged Spot Instances for non‑critical workloads, achieving a 35 % cost reduction while keeping SLA ≥ 99.95%.  

**Result:** Deployment time dropped from 30 min to < 5 min, rollback failures fell to zero, and we achieved an average of 2× more API requests per second with the same infrastructure budget—directly improving *Customer Obsession* and *Deliver Results*.  

**Bar‑raiser Focus:** I showcased ownership (full migration), deep dive into performance metrics, quantified impact (time & cost savings), and lessons learned from a failed Canary that taught us to tighten health checks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
