---
qid: ing_665929fcab__faang__local
question: 'Explain: Security Considerations — RFC 8707: Resource Indicators for OAuth
  2.0 | RFC Editor'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 499
total_tokens: 744
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:42:20-05:00'
sources: []
---

**Clarify**

The question asks how the new *Resource Indicators* extension (RFC 8707) affects security in an OAuth 2.0 flow.  
Assumptions: we’re dealing with a standard authorization‑code or implicit grant, and the client already trusts the Authorization Server (AS). We want to know what new threats appear and how the spec mitigates them.

**Approach**

1. Summarize the purpose of Resource Indicators.  
2. Enumerate the security risks they address (resource‑specific scopes, token leakage, cross‑tenant misuse).  
3. Explain the protocol changes that protect against those risks.  
4. Highlight remaining gaps and best‑practice mitigations.

**Depth**

RFC 8707 introduces a `resource` parameter to the authorization request and token request.  
- **Scope confinement:** The AS now issues *resource‑specific* access tokens, preventing a client from using a token on an unintended resource server (RS).  
- **Token binding:** By including `resource`, the RS can verify that the bearer token was issued for it, thwarting replay attacks across RSs.  
- **Audience validation:** The AS must check that the `aud` claim in the ID token matches the requested resource, eliminating mis‑directed tokens.  
- **CORS & CSRF protection:** The spec requires the RS to enforce strict origin checks on requests containing the bearer token, mitigating cross‑site request forgery.  

**Edge Cases**

- Clients omitting `resource` get a *generic* token; if the AS doesn’t support it, the flow fails.  
- An attacker intercepting a token could replay it to any RS that accepts generic tokens unless the RS enforces resource‑specific validation.  
- Legacy RSs not aware of RFC 8707 will reject tokens with `resource` claims.

**Optimize & Communicate**

Explain that the extension reduces scope creep, limits token misuse, and aligns with zero‑trust principles. Emphasize that the client must still validate the `aud` claim and enforce TLS end‑to‑end. In practice, we’d audit the AS’s implementation of `resource` handling and test replay attacks across multiple RSs to confirm isolation. This structured reasoning demonstrates clear problem framing, technical depth, and practical implications—exactly what a FAANG interviewer looks for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
