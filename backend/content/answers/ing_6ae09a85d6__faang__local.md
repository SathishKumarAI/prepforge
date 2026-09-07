---
qid: ing_6ae09a85d6__faang__local
question: 'Explain: Authorization Code Flow — OAuth 2.0 Flows'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 520
total_tokens: 756
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:52:18-05:00'
sources: []
---

**Authorization Code Flow – OAuth 2.0 (FAANG‑style)**  

| Step | What happens | Key security notes |
|------|--------------|--------------------|
| **1. User → Client → Auth Server** | Client redirects user to the provider’s `/authorize` URL with `client_id`, `redirect_uri`, `scope`, and a state token. | State protects against CSRF. |
| **2. User authenticates & consents** | Provider presents login/consent UI; once approved, it issues an *authorization code* (short‑lived) to the client’s redirect URI. | Code is single‑use and bound to `client_id` & `redirect_uri`. |
| **3. Client → Auth Server** | Client posts the code, its own `client_secret`, and `redirect_uri` to `/token`. | Uses TLS; secret must be stored securely (server‑side). |
| **4. Token issuance** | Provider returns an *access token* (and optionally a refresh token) in JSON. | Tokens are opaque or JWTs signed by the provider. |

### Clarify
- Are we discussing *public* (no secret) vs *confidential* clients?  
- Which endpoints (`/authorize`, `/token`) and parameters are required for your use case?

### Approach
1. Outline the redirect flow, state handling, and token exchange.  
2. Emphasize TLS, short‑lived codes, and server‑side storage of secrets.

### Depth
- **Security**: Code grants only after user consent; code can’t be reused.  
- **Token lifetime**: Access tokens are usually 1 h; refresh tokens longer (days/months).  
- **Refresh flow**: Client exchanges a valid refresh token for a new access token without re‑authenticating the user.

### Edge Cases
- Missing/invalid state → CSRF attack.  
- Code reused → provider rejects.  
- Expired code or token → client must handle 401 and trigger refresh.

### Optimize & Communicate
Explain how this flow balances usability (user never sees secrets) with security (server‑side secret exchange). Mention that for SPAs you’d use PKCE to avoid exposing a client secret, and that modern providers support JWT introspection for stateless validation. Conclude by summarizing the trade‑offs: higher complexity vs stronger protection of user credentials.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
