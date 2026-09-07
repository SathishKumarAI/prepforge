---
qid: ing_5cf13c6c29__faang__local
question: 'Explain: Authorization — What is an API? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 453
total_tokens: 688
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:19:49-05:00'
sources: []
---

**Clarify**  
The interview asks you to explain “Authorization – What is an API?” in a system‑design context. I’ll assume:  
* You’re designing a service that exposes functionality over HTTP/HTTPS.  
* Clients need to prove they have permission before invoking endpoints.  
* The goal is to show how an API gateway can enforce authorization, not just authentication.

**Approach**  
1. Define the components (client, API gateway, auth server, resource servers).  
2. Show the flow of a request and token validation.  
3. Discuss token formats, scopes, and revocation.  
4. Mention scalability & security trade‑offs.

**Depth**  
An **API** is an interface that exposes operations over a network, typically RESTful or gRPC. In a micro‑service architecture we place an **API gateway** in front of all services. Clients first obtain a bearer token (JWT or opaque) from an **Authorization Server** via OAuth 2.0 flows. The gateway validates the signature and claims, checks scopes against the requested endpoint, and forwards the request if authorized. Tokens carry metadata: `sub` (user), `exp`, `aud`, and `scp`. Revocation can be handled by a short TTL or a revocation list queried via introspection.  

**Edge Cases**  
* Token expiration → automatic refresh flow.  
* Scope mismatch → 403 Forbidden.  
* Compromised token → immediate revocation, re‑issuance required.  
* High latency in introspection → cache tokens locally with a safe TTL.

**Optimize & Communicate**  
- Use signed JWTs to avoid per‑request introspection and reduce load.  
- Cache validation results in the gateway; invalidate on revocation events via pub/sub.  
- Separate read/write scopes for least‑privilege access.  

Explain that this pattern scales horizontally (stateless gateways), keeps authorization logic centralized, and allows fine‑grained control—exactly what FAANG interviewers expect: clear problem framing, systematic design, depth in technical choices, and awareness of edge cases.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
