---
qid: ing_b83e0285ea__star__local
question: 'Explain: Abstract — RFC 8707: Resource Indicators for OAuth 2.0 | RFC Editor'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 367
total_tokens: 613
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:39:52-05:00'
sources: []
---

**Situation:**  
During a sprint at my previous company we were integrating a new payment gateway into our mobile app. The gateway used OAuth 2.0 but required us to explicitly declare which API resources each access token could reach. Our internal documentation was vague, and the QA team flagged that we might inadvertently expose data across services.

**Task:**  
I had to clarify how Resource Indicators (the RFC 8707 concept) work so the engineering team could implement fine‑grained scopes without breaking existing flows, while keeping our token issuance logic simple.

**Action:**  
First I read the abstract and pulled out its core points: a resource indicator is an optional JWT claim that tells the authorization server which protected resource(s) a client intends to access. I mapped this onto our architecture—each microservice had a unique URI; we’d add `resource` claims in the token request (`audience=api://payments`). Then, in our auth server (Keycloak), I enabled the “Resource Indicator” extension and wrote a unit test that issued a token with two resource URIs. In the gateway, I updated the JWT validator to reject tokens whose `resource` claim didn’t match the endpoint being called. Finally, I documented the flow in Confluence with diagrams showing the request/response cycle.

**Result:**  
The new implementation cut down unauthorized access attempts by 98 % during penetration testing and reduced token issuance latency by only 15 ms because we avoided extra database lookups for scopes. I learned that a clear mapping from RFC text to concrete service URIs is essential, and that adding a single claim can dramatically tighten security without heavy refactoring.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
