---
qid: ing_6ae09a85d6__think__local
question: 'Explain: Authorization Code Flow — OAuth 2.0 Flows'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 661
total_tokens: 853
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T08:04:48-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
   - *Audience*: Developers who know HTTP but not OAuth internals.  
   - *Goal*: Explain why and how the Authorization Code Flow works, not just list URLs.  
   - *Assumptions*: The client is a web app that can hold a client secret; the resource owner uses a browser.

**2️⃣ Adopt a mental model (the “three‑step dance”)**  
   1. **Authorization request** – Client → Authorization Server (user agent).  
   2. **User consent & code issuance** – User authenticates, consents, and receives an *authorization code*.  
   3. **Token exchange** – Client ↔ Authorization Server (back‑channel) to swap the code for tokens.

This linear flow keeps state in the browser only until the code is issued; the secret stays on the server side.

**3️⃣ Step‑by‑step reasoning**  

| Step | What happens | Key points |
|------|--------------|------------|
| 1. Redirect user to `/authorize` | Include `response_type=code`, `client_id`, `redirect_uri`, `scope`, optional `state`. | `state` protects against CSRF; URL is user‑visible. |
| 2. User authenticates & consents | Auth server shows login & consent screens. | If denied, an error is returned to the redirect URI. |
| 3. Server redirects back with `code` (and `state`) | Example: `https://client/cb?code=abc123&state=xyz`. | The code is short‑lived and single‑use. |
| 4. Client exchanges code for tokens | POST to `/token`: body contains `grant_type=authorization_code`, `code`, `redirect_uri`, `client_id`, `client_secret`. | Back‑channel ensures the secret never travels via browser. |
| 5. Server returns `access_token` (and optionally `refresh_token`). | Tokens are JWT or opaque strings. | Access token scopes limit API calls; refresh token renews without user involvement. |

**4️⃣ Common pitfalls to avoid**  

- **Missing `state`** → CSRF vulnerability.  
- **Using public client secret** in JS → exposed.  
- **Short‑lived code misuse** (reusing a code) → server rejects.  
- **Not validating redirect URI** → open redirect attack.  
- **Exposing tokens in URLs** → log leakage.

**5️⃣ Sanity checks & verbalizing**  

1. *“Does every step involve only what it should?”* – e.g., no secret over the user agent.  
2. *“Are we protecting against replay and CSRF?”* – check `state` and code usage.  
3. Explain with a concrete example: “Client A redirects to AuthZ, user logs in, gets code ‘XYZ’, client sends ‘XYZ’ + secret → token.”  

By walking through this 5‑point framework, you can quickly grasp or teach the Authorization Code Flow without getting lost in implementation details.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
