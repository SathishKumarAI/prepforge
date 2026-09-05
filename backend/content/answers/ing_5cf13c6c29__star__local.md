---
qid: ing_5cf13c6c29__star__local
question: 'Explain: Authorization — What is an API? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 379
total_tokens: 617
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:33:44-05:00'
sources: []
---

**Situation**  
I was leading the redesign of a customer‑facing analytics platform at my last company. The old monolith exposed all endpoints through a single HTTP interface, and any user could query data regardless of their role. By Q3 we were seeing an 18 % spike in support tickets about unauthorized access to sensitive financial metrics.

**Task**  
I had to design a new API layer that enforced fine‑grained authorization, protected personally identifiable information (PII), and remained performant under a projected 2× traffic growth.

**Action**  
1. **Define resource models** – I mapped every data entity (reports, dashboards, raw logs) to a set of permissions (read, write, admin).  
2. **Adopt OAuth 2.0 + JWT** – Users authenticate via our identity provider; the access token contains scopes and a “role” claim.  
3. **Implement an API gateway with rate‑limiting and request validation** using Kong; each route checks the token’s scopes against the required permission before forwarding to microservices.  
4. **Use attribute‑based access control (ABAC)** inside services: a lightweight in‑memory policy engine evaluates user attributes (department, clearance level) against resource tags.  
5. **Audit logging** – Every API call is logged with token ID, endpoint, and outcome; we store logs in Elasticsearch for compliance queries.

**Result**  
Within two months the new API cut unauthorized access incidents by 92 % and reduced support tickets by 15 %. The gateway handled a peak of 5k RPS with <50 ms added latency. I learned that coupling OAuth scopes with ABAC gives both simplicity for developers and the flexibility to evolve permissions without redeploying services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
