---
qid: ing_9f358845b0__faang__local
question: 'Explain: Step 3: Authentication & Authorization — What is an API Gateway?
  - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 465
total_tokens: 711
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:54:14-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise, technical description of an *API Gateway* in the context of authentication and authorization. I’ll assume they’re asking about cloud‑native microservice environments (AWS API Gateway, Azure APIM, Kong, etc.) and expect mention of OAuth/OIDC flows.

**Approach**  
1. Define what an API Gateway is.  
2. Explain its role in auth/authorization: token validation, policy enforcement, routing.  
3. Highlight key features that support security.  
4. Touch on trade‑offs (latency, single point of failure).  

**Depth**  
An **API Gateway** sits between clients and backend services, acting as a reverse proxy that aggregates multiple endpoints into a single surface. For auth/authorization it:

- **Authenticates** every request by validating JWTs, API keys, or performing OAuth/OIDC token introspection against an IdP.
- **Authorizes** via scopes, roles, or custom policies (e.g., AWS IAM policies, Azure RBAC) before forwarding the call.
- Enforces rate‑limiting, IP whitelisting, and request/response transformations to shield downstream services from untrusted input.
- Provides TLS termination, CORS handling, and optional mutual TLS for service‑to‑service calls.

Internally it routes to microservices using service discovery or static mapping, often with load balancing. This centralization simplifies security management but adds a single point of failure; high availability is achieved through clustering and auto‑scaling.

**Edge Cases**  
- Token revocation: gateway must support introspection or cache refresh logic.  
- Long‑running requests may hit timeout limits if the gateway buffers responses.  
- Misconfigured scopes can either over‑expose services or block legitimate traffic.

**Optimize & Communicate**  
I’d suggest integrating a *policy engine* (OPA, AWS WAF) for fine‑grained rules and monitoring with distributed tracing to surface bottlenecks. In an interview I’d emphasize that the gateway is the “front door” of the system: its design dictates security posture, performance, and developer experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
