---
qid: ing_4ccb9a7d8e__star__local
question: 'Explain: Authentication and Authorization — A Cheatsheet to Build Secure
  APIs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 340
total_tokens: 579
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:01:57-05:00'
sources: []
---

**Situation** – At my previous company we launched a new analytics platform that exposed user data through REST endpoints. Early penetration tests revealed the API accepted any JWT, and role checks were missing, so anyone with a token could read or write sensitive records.

**Task** – I was tasked to redesign authentication and authorization so that each request was validated against OAuth2 scopes and fine‑grained RBAC rules, while keeping latency under 100 ms for our production traffic.

**Action** – First, I integrated Keycloak as the identity provider and switched to JWTs signed with RS256. I added a middleware layer in FastAPI that extracted the `sub`, `aud`, and `scp` claims and cached them in Redis to avoid hitting Keycloak on every call. For authorization I implemented an attribute‑based access control (ABAC) policy engine using Casbin, mapping scopes like `read:orders` or `write:users`. I also introduced rate limiting with Envoy’s Lua filter to mitigate brute‑force token guessing. Finally, I wrote automated tests that spun up a mock Keycloak server and verified every endpoint against all possible role combinations.

**Result** – After deployment, the API passed the external security audit with zero critical findings. Token validation latency dropped from 250 ms to 60 ms, and our internal monitoring showed a 70 % reduction in unauthorized access attempts. I learned that combining JWT verification, Redis caching, and a policy engine can deliver both strong security and high performance in production APIs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
