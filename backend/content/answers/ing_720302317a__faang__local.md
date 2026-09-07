---
qid: ing_720302317a__faang__local
question: 'Explain: How SSO Works — What is SSO (Single Sign-On)?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 471
total_tokens: 710
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:08:49-05:00'
sources: []
---

**Clarify**  
> *What you’re asking:* “Explain the mechanics of Single‑Sign‑On (SSO) – how a user authenticates once and then accesses multiple services without re‑entering credentials.”  
> *Assumptions to confirm:*  
> - The environment is web‑based with browser clients.  
> - Services are separate domains or microservices that need to trust the same identity provider (IdP).  

**Approach**  
1. User → Client (browser) requests protected resource.  
2. Client redirects to IdP for authentication.  
3. IdP authenticates user, issues a token (SAML assertion, OAuth ID Token/JWT).  
4. Token is returned to client and stored (cookie, localStorage).  
5. Subsequent service requests include the token; services validate it against IdP’s public key or via introspection.  

**Depth**  
- **Auth Flow:** Browser → Service → *Login?* → redirect to IdP → login form → IdP → `POST` back with signed assertion/token.  
- **Token Types:**  
  - *SAML:* XML signed assertions, often used in enterprise SSO.  
  - *OAuth2/OpenID Connect:* JWTs or opaque tokens; ID Tokens contain user claims.  
- **Security:** Tokens are short‑lived (refreshable), signed by IdP’s private key, validated by services’ public key. HTTPS ensures confidentiality.  
- **Session Management:** Single logout can be achieved via back‑channel notifications to all services.  

**Edge Cases**  
- Token revocation (e.g., compromised credentials).  
- Cross‑origin cookie restrictions; use `SameSite=None; Secure`.  
- Service discovery for dynamic IdP URLs.  

**Optimize & Communicate**  
Explain trade‑offs: SAML offers richer assertions but heavier XML parsing; JWTs are lightweight yet require secure key management. Emphasize that the goal of SSO is to reduce credential fatigue while maintaining strong, centralized identity governance. This structured walk‑through demonstrates clear problem framing, methodical solution design, and depth in security considerations—key signals for a FAANG interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
