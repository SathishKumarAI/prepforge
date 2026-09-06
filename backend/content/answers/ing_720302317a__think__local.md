---
qid: ing_720302317a__think__local
question: 'Explain: How SSO Works — What is SSO (Single Sign-On)?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 472
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T08:34:02-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
- The user wants an explanation of *how* SSO works, not just a definition.  
- Assume the audience has basic web‑app knowledge but may not know protocols (OAuth, SAML).  
- Keep it high‑level yet concrete: talk about identity provider (IdP), service providers (SPs), tokens, redirects.

**2️⃣ Pick a mental model / framework**  
- Use the *“trip” analogy*: user → IdP → SP.  
- Map each step to common web concepts: HTTP redirect, cookies, JWT or SAML assertion.  
- Treat SSO as a trust chain between three parties (user, IdP, SP).

**3️⃣ Step‑by‑step reasoning**  
1. User requests protected resource on SP → SP checks for session cookie.  
2. No cookie → SP redirects to IdP with a request ID (often via `SAMLRequest` or OAuth `client_id`).  
3. User authenticates at IdP (username/password, MFA).  
4. IdP issues an assertion/token (JWT/SAML) signed by its private key.  
5. Token is sent back to SP (via redirect + query string or POST).  
6. SP verifies signature → creates local session cookie for the user.  
7. Subsequent requests to any other SP in the federation use the same IdP token, so no re‑login.

**4️⃣ Common traps to avoid**  
- Mixing up *authentication* (prove identity) vs. *authorization* (grant access).  
- Forgetting that SSO is only between parties that trust each other; it doesn’t mean “no password.”  
- Overlooking security details: HTTPS, token expiration, revocation.

**5️⃣ Sanity‑check & verbalize**  
- Ask: “Does this flow make sense to someone who knows cookies and redirects?”  
- Say the key benefit: one login session fuels many services.  
- End with a short recap: IdP → token → SP creates local session; repeat for other SPs.

Use this skeleton whenever you need to explain SSO mechanics in a clear, step‑by‑step way.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
