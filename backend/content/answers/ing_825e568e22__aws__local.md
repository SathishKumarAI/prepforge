---
qid: ing_825e568e22__aws__local
question: 'Explain: RBAC — Designing an Authorization Model for an Enterprise | Cerbos'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 428
total_tokens: 663
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:19:46-05:00'
sources: []
---

**Situation & Task**  
I led a migration of our on‑prem authorization layer to the cloud for a Fortune‑500 fintech platform that served > 1M users and $2B in daily transaction volume. The legacy system suffered from *policy drift* (no single source of truth) and 30 % slower request latency.

**Action**  
- Adopted **Cerbos** as an open‑source policy engine, exposing a gRPC API behind an Application Load Balancer (ALB).  
- Built a *Policy-as-Code* repository in CodeCommit, CI/CD via CodePipeline that automatically ran unit tests and `policy-check` against the Cerbos schema.  
- Deployed Cerbos on **Amazon ECS Fargate** with 2 CPU/4 GB per task; autoscaling based on CloudWatch metrics (latency >200 ms).  
- Integrated with IAM for service‑to‑service auth, and used **KMS‑encrypted SSM Parameter Store** to keep secrets.  
- Implemented a *policy cache* in Redis (ElastiCache) for 95 % of read traffic, falling back to Cerbos only on cache miss.

**Result**  
- Reduced authorization latency from 250 ms to <50 ms (4×).  
- Eliminated policy drift incidents—downtime dropped from 3 hrs/month to <10 min.  
- Costed $12k/yr vs. $30k for the legacy system, saving 60 % annually.

**Learning & Ownership**  
I championed *Ownership* by coordinating cross‑functional squads and documenting “policy drift” metrics in a shared dashboard. The deep dive into Cerbos’ audit logs revealed that caching 90 % of requests was feasible; this insight guided our cache strategy, exemplifying *Dive Deep*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
