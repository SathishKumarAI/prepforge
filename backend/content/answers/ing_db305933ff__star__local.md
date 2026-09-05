---
qid: ing_db305933ff__star__local
question: 'Explain: Abstract — RFC 8707: Resource Indicators for OAuth 2.0'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 331
total_tokens: 574
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:46:20-05:00'
sources: []
---

**Situation**  
When my team was launching a multi‑tenant SaaS platform that used OAuth 2.0 for API access, we discovered that our authorization server was issuing tokens that were valid across all tenants. This caused a security risk: an attacker who stole a token could potentially read data from any tenant.

**Task**  
I needed to design and implement a solution that let the client explicitly state which resource (tenant) it intended to access, ensuring that the token was scoped to that particular resource and could not be reused elsewhere.

**Action**  
I studied RFC 8707 “Resource Indicators for OAuth 2.0” and added support for the `resource` request parameter on both the authorization endpoint and the token endpoint. On the client side I updated our SDK to automatically include the tenant’s base URL as a resource indicator when requesting tokens. On the server, I extended the token‑generation logic to record the supplied resource in the JWT’s `azp` claim and added validation middleware that rejected any request where the resource claimed by the access token did not match the requested API endpoint.

**Result**  
The new implementation reduced cross‑tenant token misuse by 100 % as verified in our penetration tests. It also improved auditability, since each token now carries a clear resource claim. I learned how RFCs translate into practical security controls and gained deeper expertise in OAuth flow customization.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
