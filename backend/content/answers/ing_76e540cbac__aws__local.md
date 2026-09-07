---
qid: ing_76e540cbac__aws__local
question: 'Explain: Safer Access to Data and Secrets — Client-Server Architecture
  | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 378
total_tokens: 615
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:54:10-05:00'
sources: []
---

**Situation & Task**  
At my last role I led the redesign of a multi‑tenant analytics platform that stored sensitive customer data and secrets in a single database cluster. The security audit revealed that any compromise of the API gateway could expose all tenant secrets, violating our *Customer Obsession* and *Ownership* principles.

**Action (Design)**  
I re‑architected to a **client‑server model**:

| Layer | AWS Service | Rationale |
|-------|-------------|-----------|
| Client SDK | Amazon Cognito + AppSync | Fine‑grained IAM roles per tenant; serverless GraphQL for minimal payloads. |
| Gateway | API Gateway + Lambda@Edge | Zero‑trust entry, request validation, rate limiting. |
| Server | AWS Fargate (ECS) + RDS Aurora PostgreSQL | Each tenant runs in isolated containers; secrets stored in **AWS Secrets Manager** and only injected at runtime. |
| Audit & Monitoring | CloudTrail + GuardDuty + Amazon EventBridge | Continuous compliance checks. |

The architecture enforces *Least Privilege*—each client can only call its own endpoints, and the server never receives raw secrets.

**Result**  
Within 3 months we reduced potential attack surface by **97 %**, cut database read latency from 120 ms to 35 ms, and lowered infrastructure cost by **$12K/month** through Fargate’s pay‑per‑second model. Post‑deployment, no security incidents were logged.

**Reflection (Bar‑raiser)**  
I owned the entire migration, dove deep into tenant isolation metrics, quantified risk reduction, and learned that serverless can deliver both performance and compliance when designed with proper segregation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
