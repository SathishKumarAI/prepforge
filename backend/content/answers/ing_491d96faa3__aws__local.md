---
qid: ing_491d96faa3__aws__local
question: 'Explain: Core RBAC — Designing an Authorization Model for an Enterprise
  | Cerbos'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 450
total_tokens: 686
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:10:58-05:00'
sources: []
---

**Situation & Task**  
While leading the security team at a global SaaS provider, I was asked to replace our legacy role‑based access control (RBAC) that had grown unwieldy and slowed new feature releases. The goal: design a **core RBAC model** that could scale to 1 M users, support dozens of microservices, and reduce the mean time to grant or revoke permissions from days to minutes.

**Action – Design & AWS Services**  
I chose a **policy‑as‑code** approach using **Cerbos** (open‑source policy engine) deployed on an **EKS cluster** behind an **ALB**. Policies are stored in S3 and versioned via GitHub Actions, ensuring auditability. For high availability I leveraged **AWS Fargate Spot** for cost‑efficiency and **Route 53 latency routing** to serve global users. Permissions changes trigger a Lambda that updates the Cerbos cache in Redis (Elasticache), guaranteeing sub‑second propagation.

I implemented **audit logs** in CloudWatch, aggregated with Athena for compliance queries. The model supports *dynamic scopes* (e.g., project, environment) and *attribute‑based extensions*, allowing us to add new roles without code changes—meeting the “Invent & Simplify” principle.

**Result**  
- Granted/revoked permissions in **≤ 3 s** versus previous 48 h.  
- Reduced infrastructure cost by **35 %** through Spot and Fargate usage.  
- Achieved **99.99 % availability** during a 6‑month rollout, validated by automated health checks.

**Reflection (Bar‑raiser focus)**  
I took full ownership of the migration, diving deep into policy semantics to avoid “security debt.” The quantitative lift in speed and cost demonstrates clear business impact, while post‑mortem analysis on an early staging failure taught us to add stricter idempotency checks—an iterative learning loop that aligns with Amazon’s *Bias for Action* and *Customer Obsession*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
