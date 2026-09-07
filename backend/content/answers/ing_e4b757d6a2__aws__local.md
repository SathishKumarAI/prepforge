---
qid: ing_e4b757d6a2__aws__local
question: 'Explain: Per-tenant scoping with audience binding (RFC 8707)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 468
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:55:08-05:00'
sources: []
---

**Situation (S)**  
While leading the API gateway redesign for our multi‑tenant SaaS platform, we discovered that a single OAuth token was being accepted across all tenants. This exposed tenant data and violated our compliance SLA of 99.9 % isolation.

**Task (T)**  
Implement per‑tenant scoping with audience binding as defined in RFC 8707 to enforce strict separation while keeping latency <20 ms for 95 % of requests.

**Action (A)**  
1. **Requirements & Design** – Added an `aud` claim containing the tenant ID and a custom `scp` claim for feature scopes.  
2. **AWS Services** –  
   * **Amazon Cognito** to issue tokens with custom claims.  
   * **API Gateway** + **Lambda@Edge** to validate `aud` against the request path (`/tenant/{id}/...`).  
   * **DynamoDB** for tenant‑specific policy cache (TTL 5 min).  
3. **Scalability & Availability** – Lambda@Edge runs at edge locations, ensuring <10 ms overhead and 99.999 % availability. DynamoDB’s provisioned capacity auto‑scales to 200k RCU/WCU during peak bursts.  
4. **Cost Trade‑offs** – Lambda@Edge costs $0.20 per million invocations; with a 1M request/day load, that’s ~$7/month—acceptable for the added security value.

**Result (R)**  
After rollout, tenant isolation compliance jumped from 85 % to 100 %, and we reduced cross‑tenant data exposure incidents by **98 %**. Latency impact was <5 ms on average, keeping SLA intact.  

*Leadership Principles*: **Ownership** – I took end‑to‑end responsibility for the security fix; **Dive Deep** – dissected token claims, edge logic, and DynamoDB caching; **Deliver Results** – quantified compliance lift and latency metrics.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
