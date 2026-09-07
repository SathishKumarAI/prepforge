---
qid: ing_2566134412__faang__local
question: 'Explain: Authentication — What is an API? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 565
total_tokens: 800
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:10:38-05:00'
sources: []
---

**1️⃣ Clarify**  
*Problem:* “Explain what an API is, specifically in the context of authentication.”  
Assumptions:  
- Audience knows basic auth concepts (OAuth, JWT).  
- Want to link APIs to secure token issuance/validation.

---

**2️⃣ Approach**  
Define *API*, then map it to *auth flow* components. Show a typical request‑response diagram and note key security concerns.

---

**3️⃣ Depth**  

| Component | What the API does | Example |
|-----------|------------------|---------|
| **Auth Endpoint (`/login`)** | Accepts credentials → validates against user store → issues token (JWT/OAuth). | `POST /auth/login` with body `{email, pwd}` returns `{access_token, refresh_token}`. |
| **Token Validation Endpoint (`/validate`)** | Receives token → checks signature, expiry, scopes. | `GET /auth/validate?token=...` → `{valid:true, userId:123}`. |
| **Refresh Endpoint (`/refresh`)** | Exchanges a valid refresh token for a new access token. | `POST /auth/refresh` with body `{refresh_token}` returns new JWT. |
| **Revoke Endpoint (`/revoke`)** | Invalidates tokens (logout, compromise). | `POST /auth/revoke?token=...`. |

*Security notes:*  
- Use HTTPS everywhere.  
- Sign JWTs with asymmetric keys; rotate keys.  
- Store refresh tokens in HttpOnly secure cookies or server‑side session store.

---

**4️⃣ Edge Cases**  

| Scenario | What can break it | Test |
|----------|------------------|------|
| Token replay | Same token used after expiry | Replay a captured JWT and ensure validation fails. |
| Clock skew | Client clock off by >5 min | Verify server rejects tokens with `nbf`/`exp` outside tolerance. |
| Compromised refresh | Refresh token leaked | Ensure revoke endpoint immediately invalidates it. |

---

**5️⃣ Optimize & Communicate**  

- **Performance:** Cache public keys; use stateless JWTs to avoid DB lookups on each request.  
- **Scalability:** Horizontal scaling via load balancer; keep key store in a CDN‑cached object store.  
- **Observability:** Log auth attempts, rate‑limit per IP, alert on anomalies.

*Communication tip:* Start with the high‑level flow, then drill into each endpoint’s responsibilities and security hardening steps—this shows both breadth (architecture) and depth (implementation).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
