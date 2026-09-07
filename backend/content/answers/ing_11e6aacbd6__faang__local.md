---
qid: ing_11e6aacbd6__faang__local
question: 'Explain: Token — Token, Cookie, Session'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 450
total_tokens: 682
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:25:23-05:00'
sources: []
---

**Clarify**  
We need to explain the concepts of **Token**, **Cookie**, and **Session** as used in web authentication & state management.  
Assumptions: the audience knows basic HTTP but not necessarily security details.

---

### 1️⃣ Approach  
- Define each term separately.  
- Show how they interact (cookie ↔ token ↔ session).  
- Highlight pros/cons, typical use‑cases, and security implications.

---

## Token  
A **token** is a short string (often JWT or opaque ID) that encodes authentication info.  
* **Stateless** – server doesn’t keep per‑user data; token carries claims.  
* Stored client‑side (localStorage/SessionStorage).  
* Valid until expiration; refreshed via refresh tokens.

## Cookie  
A **cookie** is a key/value pair stored by the browser and automatically sent with every request to its domain.  
* Can store any string, including a token.  
* Has attributes: `HttpOnly`, `Secure`, `SameSite` for security.  
* Subject to size limits (~4 KB) and potential CSRF if not protected.

## Session  
A **session** is server‑side state keyed by a session ID (often stored in a cookie).  
* Server holds user data, expiration timer, revocation list.  
* Requires persistent storage (memory, DB, Redis).  
* Provides fine‑grained control (logout, force‑invalidate).

---

### Edge Cases  
- **Cookie theft** → use `HttpOnly` + `SameSite`.  
- **Token replay** → rotate refresh tokens & include nonce.  
- **Session fixation** → regenerate session ID on login.

---

### Optimize & Communicate  
Explain that modern SPAs usually prefer *token‑in‑cookie* (JWT in an `HttpOnly` cookie) for security, while legacy apps rely on *session IDs*. Emphasize the trade‑off: **stateless tokens** scale horizontally but need careful revocation; **sessions** are simple to revoke but require shared storage. Use this narrative to show structured thinking and depth.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
