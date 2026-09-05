---
qid: ing_e4b757d6a2__star__local
question: 'Explain: Per-tenant scoping with audience binding (RFC 8707)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 351
total_tokens: 592
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:05:08-05:00'
sources: []
---

**Situation:**  
At my last company we launched a multi‑tenant SaaS platform that used OAuth2 for API access. A sudden audit revealed that some tenant clients were able to call APIs outside their own scope because the audience claim in the JWT was not properly bound, violating RFC 8707.

**Task:**  
I had to redesign the token issuance flow so each tenant’s access tokens were strictly scoped and auditable, ensuring no cross‑tenant leakage while keeping latency under 50 ms per request.

**Action:**  
I implemented a per‑tenant audience claim by extending our auth server. For every login, we now embed `aud` as `urn:app:{tenant_id}` and enforce it in the API gateway with a Lua script that checks the token’s `aud` against the tenant ID extracted from the request path. I also introduced a short‑lived “resource‑binding” claim to limit token usage to specific services, and added automatic rotation of JWT keys per tenant to reduce blast radius. We used Redis for caching tenant metadata, cutting validation time by 30 %.

**Result:**  
Post‑deployment, cross‑tenant API calls dropped to zero; the audit score improved from 52/100 to 98/100. Our response latency stayed below 45 ms, and we reduced key management overhead by 40 %. I learned how critical precise audience binding is for secure multi‑tenant architectures and gained deep experience with RFC 8707 implementation nuances.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
