---
qid: ing_049fd79df9__star__local
question: 'Explain: 2.1. Authorization Request — RFC 8707: Resource Indicators for
  OAuth 2.0 | RFC Editor'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 312
total_tokens: 564
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:38:07-05:00'
sources: []
---

**Situation** – While leading the authentication layer for our multi‑tenant SaaS platform, we noticed that API calls from partner applications were being denied because our OAuth server didn’t differentiate between resources the client could legitimately access and those it shouldn’t.

**Task** – I needed to extend our token issuance process so that each access token carried explicit information about which resource(s) it was valid for, ensuring fine‑grained authorization and preventing accidental data leaks across tenants.

**Action** – I introduced RFC 8707 “Resource Indicators” into our OAuth 2.0 flow. First, we added a `resource` query parameter to the `/authorize` endpoint so clients could declare the target API. Our auth server validated this against the client’s allowed scopes and appended a `resource_id` claim in the JWT. On token introspection, we checked that the resource ID matched the request context before granting access. We also updated our policy engine to read the new claim and enforce tenant isolation at the gateway level, using Open Policy Agent for dynamic rule evaluation.

**Result** – The change cut cross‑tenant data exposure incidents by 98 % and reduced token revocation overhead by 30 %. It also enabled us to onboard new partners faster—each could request a single token per resource instead of juggling multiple tokens—and gave us a clear audit trail of which resources were accessed by whom.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
