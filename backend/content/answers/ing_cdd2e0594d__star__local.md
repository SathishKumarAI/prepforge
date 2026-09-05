---
qid: ing_cdd2e0594d__star__local
question: 'Explain: JWT — Token, Cookie, Session'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 366
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:20:46-05:00'
sources: []
---

**Situation:** In early 2024 I led the security redesign for a production recommendation engine that served personalized content via a Flask API and a React front‑end. The previous session‑based login was leaking stale tokens and causing performance spikes on our Redis store.

**Task:** Replace the monolithic session system with stateless JWTs while still supporting legacy cookie‑backed logins for mobile clients, ensuring zero downtime and audit compliance.

**Action:** I first mapped out the data flow: user logs in → Auth Service issues a signed JWT (HS256) containing `sub`, `iat`, `exp`, and role claims. The token is stored in an HttpOnly secure cookie on web browsers; for mobile apps we returned it as a bearer header. On each request, the API validated the signature using our shared secret and refreshed the token if `exp` was within 10 minutes. For legacy support I kept a short‑lived session ID in Redis that mapped to the same user data, but set its TTL to match the JWT expiration so both mechanisms stayed in sync. I added rate limiting on login attempts and implemented revocation via a blacklist table.

**Result:** The new system cut authentication latency from 120 ms (Redis lookup) to <10 ms per request and reduced Redis memory usage by 35 %. We also eliminated session‑leak incidents, meeting SOC‑2 audit requirements. I learned that combining JWTs with a lightweight server‑side revocation list offers the best trade‑off between scalability and control.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
