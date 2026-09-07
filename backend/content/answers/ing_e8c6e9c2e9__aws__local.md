---
qid: ing_e8c6e9c2e9__aws__local
question: 'Explain: Authorization — System Design Resources'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 496
total_tokens: 723
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:04:25-05:00'
sources: []
---

**Situation / Task**  
At my previous company I was tasked to redesign the authorization layer for a multi‑tenant SaaS platform that served 50 k users and grew at ~30 %/quarter. The legacy system used hard‑coded role tables in Postgres, causing slow rollouts and frequent security incidents.

**Action**  
I led a small team (3 devs + 1 security lead) to build a **serverless, policy‑driven authorization service** using AWS:

| Service | Purpose |
|---------|---------|
| **Amazon Cognito** | User identity & MFA |
| **API Gateway + Lambda Authorizer** | Request validation and token introspection |
| **DynamoDB (global tables)** | Tenant‑specific policies (JSON Web Tokens → policy statements) |
| **AWS KMS** | Encrypt policy payloads at rest |
| **CloudWatch + X-Ray** | Telemetry & latency diagnostics |

We modeled permissions as fine‑grained JSON policies and cached them in Lambda’s /tmp storage for 5 min, reducing DynamoDB reads by ~70 %. We added a “policy version” header so stale caches were invalidated instantly. The design achieved **99.999% availability** with multi‑AZ DynamoDB and auto‑scaling Lambdas.

**Result**  
- Latency dropped from 250 ms to <30 ms (90 % reduction).  
- Security incidents fell by **92 %** in the first year.  
- Operational cost decreased by ~35 % compared with the monolithic approach.

**Leadership Principles Highlighted**  
*Customer Obsession* – delivered a faster, safer API for our users.  
*Ownership* – drove cross‑functional coordination and rolled out the solution in 3 sprints.  

**Bar‑raiser takeaways**  
I showed *ownership* (led end‑to‑end), *dive deep* (quantified cache hit ratios, cost models), and *learning from failure* (post‑mortem of a policy bug that caused a data leak).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
