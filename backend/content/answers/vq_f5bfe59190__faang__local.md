---
qid: vq_f5bfe59190__faang__local
question: How do you pass values from one form to another form ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 506
total_tokens: 741
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:42:40-05:00'
sources: []
---

**Clarify**  
You want to transfer data entered in *Form A* to *Form B*—for example, after a user signs up on Form A you want the same name and email pre‑filled on Form B.  Confirm whether the forms are on the same page, different routes, or even separate domains; also check if the data is sensitive (needs encryption) or just public.

**Approach**  
1. **Client‑side**: use `localStorage`, `sessionStorage`, or URL query parameters for quick transfer when the user stays in one session.  
2. **Server‑side**: post Form A to an endpoint, store values in a server session (e.g., Express session, JWT), then redirect to Form B and pre‑populate fields from the session.  
3. **Hybrid**: send Form A data via AJAX to the backend, receive a token, append it to the URL for Form B, and let Form B fetch the payload.

**Depth**  
- *Client‑side*: `sessionStorage.setItem('user', JSON.stringify(data))`; on Form B read with `JSON.parse(sessionStorage.getItem('user'))`. Complexity O(1).  
- *Server‑side*: store in session: `req.session.user = data;` then redirect. When rendering Form B, inject `value="{{session.user.name}}"`. This is secure if the session cookie is HttpOnly & Secure.  
- *Hybrid*: POST → `/saveUser`, server returns `{token: 'abc123'}`; redirect to `/formB?token=abc123`; Form B fetches `/user/abc123` and populates fields.

**Edge Cases**  
- User clears storage or closes tab → data lost.  
- Cross‑domain redirects break `sessionStorage`.  
- Sensitive data must never be stored in URL query strings.  
- Validate data on the server even if pre‑filled.

**Optimize & Communicate**  
Choose the simplest that meets security needs: for most SPA flows, `sessionStorage` + client‑side rendering is fastest; for multi‑step wizard or multi‑domain scenarios, server session with a short‑lived token is safer. Always explain your trade‑offs to interviewers: performance vs. security vs. user experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
