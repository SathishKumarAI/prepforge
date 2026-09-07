---
qid: ing_107a222820__aws__local
question: 'Explain: Resource Parameter — RFC 8707: Resource Indicators for OAuth 2.0'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 457
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:02:28-05:00'
sources: []
---

**Situation (S)**  
At my last role I led a migration of our internal API gateway from an on‑prem OAuth2 stack to AWS Cognito + API Gateway for a global SaaS product used by 120 000 daily active users. The legacy system exposed every endpoint through a single “resource” identifier, which caused tight coupling and made it hard to enforce fine‑grained access.

**Task (T)**  
I was tasked with redesigning the authorization model to support **RFC 8707 – Resource Indicators** so that clients could request tokens scoped to specific resources (e.g., `/orders`, `/billing`) without exposing the entire API surface. The goal was to reduce token bloat, improve auditability, and cut token issuance latency by 30 %.

**Action (A)**  
1. **Dive Deep** into RFC 8707 and AWS Cognito’s custom scopes feature.  
2. Built a lightweight Lambda authorizer that reads the `resource` claim from the access token, validates it against a DynamoDB lookup of allowed resource scopes per client, and injects fine‑grained IAM policies into API Gateway execution context.  
3. Implemented automatic token revocation via Cognito’s token revocation endpoint and a CloudWatch event to sync revoked tokens to an in‑memory cache (Redis).  
4. Deployed the solution on **AWS Lambda@Edge** for global low‑latency validation, ensuring 99.999 % availability.

**Result (R)**  
- Token size dropped from ~2 KB to <300 B, cutting downstream bandwidth by 45 %.  
- Latency of token validation fell from 120 ms to 30 ms, improving API throughput by 25 %.  
- Security audit score improved from 68/100 to 92/100.  

**Leadership Principles Highlighted**  
*Customer Obsession* – delivering a smoother developer experience and faster APIs for our partners.  
*Ownership* – taking end‑to‑end responsibility for the redesign, from design to production monitoring.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
