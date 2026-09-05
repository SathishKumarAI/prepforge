---
qid: ing_69c00b8c53__star__local
question: 'Explain: SSO (Single Sign-On) — Token, Cookie, Session'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 378
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:58:44-05:00'
sources: []
---

**Situation** – In my last role I was tasked with adding Single Sign‑On for our SaaS platform that had over 15k users and a legacy PHP backend. The existing login flow used session cookies, but it didn't support mobile clients or third‑party integrations.

**Task** – My goal was to implement an OAuth2‑based SSO that would issue JWT access tokens, store them in secure HTTP‑only cookies for web, and allow API clients to use bearer tokens directly, while keeping the current session mechanism for backward compatibility.

**Action** – I set up a dedicated Auth Service on AWS Cognito, configured it to emit short‑lived JWTs (15 min) signed with RS256. For browsers, I used an HTTP‑only SameSite=Lax cookie that held the refresh token; a silent iframe refreshed it every 10 min without user friction. On mobile and API clients, I built a lightweight SDK that exchanges the SSO code for tokens via HTTPS. We added Redis to store session IDs for legacy users so we could invalidate them if needed. Throughout, I used unit tests with Jest and integration tests in Cypress to catch race conditions between cookie updates and token revocation.

**Result** – The new SSO reduced login failures by 32% and cut the average authentication latency from 1.2 s to 0.6 s across all devices. We also saw a 40% drop in support tickets related to password resets. I learned that balancing security (short‑lived tokens, secure cookies) with usability (silent refresh) requires careful orchestration of client and server state, and that automated end‑to‑end testing is essential for catching subtle timing bugs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
