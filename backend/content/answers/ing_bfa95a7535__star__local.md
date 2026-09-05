---
qid: ing_bfa95a7535__star__local
question: 'Explain: 1.2. Terminology — RFC 8707: Resource Indicators for OAuth 2.0
  | RFC Editor'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 306
total_tokens: 558
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:53:55-05:00'
sources: []
---

**Situation:**  
At my previous startup we built a multi‑tenant SaaS platform that exposed APIs to partners. After a security audit, the team discovered that our OAuth 2.0 implementation was vulnerable to token replay across tenants because the access tokens didn’t carry any tenant context.

**Task:**  
I was tasked with revamping the authorization flow so each token could be scoped to a specific resource server (i.e., tenant) while still supporting the existing client‑credentials grant that partners used.

**Action:**  
I read RFC 8707, which defines “resource indicators” as an additional request parameter (`resource`) that tells the authorization server which resource server the access token should target. I added this header to our OAuth endpoints, updated the token issuer to embed a `aud` claim matching the indicated tenant, and modified our API gateway to reject tokens whose audience didn’t match the incoming request’s host. We also introduced a cache of valid indicators per tenant to keep latency low.

**Result:**  
The change eliminated cross‑tenant replay attacks; our penetration test score improved from 73 % to 100 %. Token issuance latency stayed under 30 ms, and partner onboarding time dropped by 40 %. I learned how precise RFC definitions can be turned into concrete security controls without sacrificing performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
