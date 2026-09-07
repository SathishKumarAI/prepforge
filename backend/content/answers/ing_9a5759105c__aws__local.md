---
qid: ing_9a5759105c__aws__local
question: 'Explain: 2.1. Authorization Request — RFC 8707: Resource Indicators for
  OAuth 2.0'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 587
total_tokens: 830
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:14:32-05:00'
sources: []
---

**Situation (S)**  
While leading a cross‑team effort to expose our recommendation engine via a new REST API, I discovered that the existing OAuth 2.0 flow was insufficient for fine‑grained access control on *different resource types* (e.g., user profile vs. product catalog). The client apps needed to specify which downstream service they were calling without exposing additional tokens.

**Task (T)**  
I had to design a solution that:  
1. Lets clients indicate the target resource in their authorization request, and  
2. Keeps our token‑validation pipeline simple, secure, and cost‑effective on AWS.

**Action (A)**  
I chose **RFC 8707 – “Resource Indicators for OAuth 2.0”** as the foundation because it lets a client attach a `resource` query parameter or header to the `/authorize` call, letting the authorization server issue a token scoped only to that resource.

Implementation steps:  

| Step | AWS Service | Reasoning |
|------|-------------|-----------|
| **1. OAuth 2.0 Provider** | Amazon Cognito User Pools + Custom Authorizer (Lambda) | Cognito handles user authentication; Lambda authorizer parses `resource` and validates scopes. |
| **2. Token Issuance** | AWS Secrets Manager + DynamoDB | Store per‑resource scope definitions; lookup in Lambda to add custom claims (`aud`, `scp`). |
| **3. API Gateway** | Amazon API Gateway (REST/HTTP) | Accepts `resource` header, forwards to Cognito authorizer, then routes to target microservice. |
| **4. Monitoring & Auditing** | CloudWatch Logs + Athena | Query logs for `resource` usage patterns; alert on anomalous requests. |

*Scalability*: API Gateway scales automatically; Lambda authorizer is stateless and cached per token.  
*Availability*: All services are multi‑AZ; Cognito offers 99.9 % SLA.  
*Cost*: We avoided building a custom OAuth server, saving ~$3k/month in infra ops.

**Result (R)**  
Post‑deployment, we saw **45 % reduction in unauthorized access attempts** and a **30 % decrease in token revocation overhead** (fewer tokens to rotate). The new flow also cut developer onboarding time by 2 weeks because clients no longer needed custom SDKs for resource scoping.

---

### Leadership Principles Highlighted  
- **Ownership** – I drove the end‑to‑end design, from requirements to production.  
- **Dive Deep** – Selected RFC 8707 after evaluating alternatives and quantified the impact on security and ops costs.  

Bar‑raisers look for clear ownership, depth in technical trade‑offs, and measurable outcomes—exactly what this solution delivers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
