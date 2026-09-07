---
qid: ing_4ccb9a7d8e__faang__local
question: 'Explain: Authentication and Authorization — A Cheatsheet to Build Secure
  APIs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 565
total_tokens: 801
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:43:03-05:00'
sources: []
---

**Authentication & Authorization Cheat‑Sheet for Secure APIs**  
*(FAANG‑style interview answer – 200 words)*  

---

### 1️⃣ Clarify  
You’re asked: *“Explain authentication and authorization, and give a quick cheat‑sheet to build secure APIs.”*  
Assumptions: RESTful API, stateless JWTs, no legacy sessions, need to protect user data & resources.  

### 2️⃣ Approach  
- Distinguish **authenticating** (who are you?) from **authorizing** (what can you do?).  
- Lay out a 3‑step workflow: token issuance → request validation → scope check.  
- Provide concrete code snippets and best‑practice bullets.

### 3️⃣ Depth  

| Step | What to Do | Example/Tech |
|------|------------|--------------|
| **Auth** | Verify identity via OAuth2/OpenID Connect; issue a signed JWT with `sub`, `iat`, `exp`. | Use Auth0, Okta or custom `/login` endpoint. |
| **Token Validation** | Middleware checks signature (RS256), audience (`aud`), issuer (`iss`). Reject if expired or tampered. | `express-jwt` + JWKS endpoint. |
| **Authorization** | Enforce scopes/roles via policy engine (OPA, Casbin). Store minimal claims in JWT; fetch extra data lazily. | `role:admin`, `scope:read:orders`. |

- **Rate‑limit** & **IP throttling** to mitigate brute‑force attacks.  
- Use **HTTPS everywhere**, HSTS, and Content Security Policy (CSP).  
- Log all auth failures with correlation IDs for audit.

### 4️⃣ Edge Cases  

| Scenario | What Breaks | Test |
|----------|-------------|------|
| Token replay across services | Same JWT reused by attacker | Replay‑attack simulation. |
| Clock skew causing premature expiry | `exp` misread | Sync NTP, test ±30 s window. |
| Missing `sub` claim | Cannot map to user | Validate payload schema. |

### 5️⃣ Optimize & Communicate  

- **Performance**: Cache JWKS; avoid DB hit on every request.  
- **Scalability**: Use stateless JWTs; no server‑side session store.  
- **Explainability**: Walk interviewers through the flow diagram, emphasizing separation of concerns and why each guard is necessary.  

*Result:* A concise, actionable cheat‑sheet that covers identity verification, token handling, fine‑grained access control, and common pitfalls—ready to implement in any high‑scale API.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
