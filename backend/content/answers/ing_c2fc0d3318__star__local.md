---
qid: ing_c2fc0d3318__star__local
question: 'Explain: Sessions — Cookies vs Sessions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 339
total_tokens: 572
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:59:51-05:00'
sources: []
---

**Situation:**  
When I was building a web‑based dashboard for a predictive maintenance model at my last company, we had to authenticate users and keep them logged in while they explored real‑time sensor data.

**Task:**  
I needed to implement a secure session system that could scale across multiple app servers without exposing sensitive tokens or overloading the database.

**Action:**  
I chose Flask for the backend. Instead of storing session data in client cookies (which would expose user IDs and risk tampering), I stored only a signed session ID in an HTTP‑only cookie and kept the actual session payload—user role, last activity timestamp, and token revocation list—in Redis. I used `itsdangerous` to sign the cookie so that any tampering could be detected immediately. For cross‑site request forgery protection, I added a CSRF token stored in the server session. The Flask‑Login extension handled login flow, while custom middleware refreshed the session on each request and logged out idle users after 15 minutes.

**Result:**  
The solution reduced client‑side storage by over 90 % compared to plain cookie sessions, cut authentication latency from ~120 ms to ~35 ms due to Redis caching, and eliminated a prior security audit finding that exposed user IDs in cookies. I learned the importance of keeping sensitive data server‑side and using stateless signed tokens only for minimal identifiers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
