---
qid: ing_936f029754__star__local
question: 'Explain: 2.2. Access Token Request — RFC 8707: Resource Indicators for
  OAuth 2.0'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 388
total_tokens: 638
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:27:32-05:00'
sources: []
---

**Situation:**  
At my previous company we launched a multi‑tenant SaaS platform where each client had its own API gateway. When integrating third‑party analytics services, we discovered that the standard OAuth2 token flow would issue a bearer token that could be used against any of our APIs, violating the principle of least privilege and exposing data across tenants.

**Task:**  
I was tasked with designing an access‑token request mechanism that limited tokens to specific downstream resources, in compliance with RFC 8707 (Resource Indicators). The goal was to prevent accidental cross‑tenant data leakage while keeping user experience seamless.

**Action:**  
I introduced the `resource` query parameter into our OAuth2 token endpoint. Using Node.js and Express, I updated the `/oauth/token` route to validate that each request included a whitelisted resource URI (e.g., `https://api.company.com/tenant/{id}/analytics`). The token issuer then embedded the requested resource as an audience claim (`aud`) in the JWT. On the API side, we added middleware that extracted the `aud` claim and matched it against the incoming request’s host+path, rejecting any mismatches with a 403 error. I also set up automated tests to confirm that tokens could not be reused for other tenants.

**Result:**  
After deployment, we saw a 100 % drop in cross‑tenant token misuse incidents reported by our security audit. The new flow added only ~15 ms latency per request and required no changes from the client side beyond including the `resource` parameter. I learned how to balance strict security requirements with developer ergonomics, and gained deep experience implementing RFC 8707 in a production environment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
