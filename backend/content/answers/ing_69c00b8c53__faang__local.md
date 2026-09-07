---
qid: ing_69c00b8c53__faang__local
question: 'Explain: SSO (Single Sign-On) — Token, Cookie, Session'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 537
total_tokens: 775
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:49:33-05:00'
sources: []
---

**Clarify**  
We’re asked to compare the three common ways a web app keeps a user “logged in” after they authenticate: **SSO token**, **cookie**, and **session**. I’ll assume we’re talking about browser‑based SSO (e.g., OAuth/OpenID Connect) versus server‑side session storage, and that the audience is familiar with HTTP basics.

**Approach**  
1. Define each mechanism.  
2. Explain how each fits into the SSO flow.  
3. Highlight pros/cons: security, scalability, statelessness, and user experience.  

**Depth**  

| Mechanism | How it works | Typical storage | Key trade‑offs |
|-----------|--------------|-----------------|----------------|
| **SSO Token (JWT/OIDC)** | Client receives a signed token from an IdP; attaches it to every request (e.g., `Authorization: Bearer <token>`). | Entire payload is stored on the client, only signature verified by service. | Stateless → scales horizontally; risk if token leaked; must handle revocation carefully. |
| **Cookie** | Browser stores a cookie set by the SSO provider or application; sent automatically with each request. Can be HTTP‑Only and Secure. | Stored in browser; server can optionally read it to validate session. | Slightly more secure than plain local storage (HttpOnly), but still vulnerable to CSRF unless `SameSite` is used. |
| **Session** | After authentication, server creates a server‑side record keyed by a random session ID stored in a cookie or token. | In‑memory store (Redis, Memcached) or database. | Stateful → easier revocation, audit, but requires shared storage across servers; can hit scaling limits if not sharded. |

**Edge Cases**  
- Token expiration: must refresh via silent login or `refresh_token`.  
- Revocation: JWTs are hard to revoke; sessions can be killed instantly.  
- Cross‑origin requests: cookies need `SameSite=None; Secure`.  

**Optimize & Communicate**  
In practice, most SSO stacks use a hybrid: an opaque cookie that points to a server‑side session for revocation + a short‑lived JWT for stateless API calls. I’d emphasize the trade‑off between **stateless scalability** (JWT) and **control/ revocation** (session). This framing shows understanding of security, architecture, and operational concerns—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
