---
qid: ing_4ffa2cebaa__fp__local
question: 'Explain: Security Considerations — RFC 8707: Resource Indicators for OAuth
  2.0'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 369
total_tokens: 548
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:55:13-05:00'
sources: []
---

### Why “resource indicators” are a security necessity

OAuth 2.0 was designed to delegate *access* to a protected API, but it never specified **which** resource the access token actually targeted.  
In practice this omission let attackers hijack a single bearer token and use it against any downstream service that accepted the same token format—an *inter‑resource replay*.  

RFC 8707 reintroduces the idea of a **resource indicator** as an explicit claim in the authorization request (`resource=`). The server then validates that the issued token’s `aud` (audience) matches this indicator.  

#### Core principle: *tight coupling between intent and credential*

1. **Intent encoding** – The client declares the target resource;  
2. **Credential binding** – The Authorization Server embeds that same value in the access token;  
3. **Enforcement** – Resource servers reject any token whose `aud` ≠ declared indicator.

This is a direct application of *principle‑of‑least‑privilege* and *information flow control*: the token carries only the minimal rights needed for one resource, preventing accidental or malicious cross‑resource use.

#### Non‑obvious insight

Most developers treat the `aud` claim as a static “client ID”. RFC 8707 turns it into a **dynamic, per‑request assertion**. Thus, even if an attacker intercepts a token (e.g., via TLS downgrade), they cannot simply replay it against another API unless that API explicitly declares and validates the same resource indicator. This subtle shift from static to dynamic audience binding is what makes OAuth 2.0 secure in multi‑tenant, micro‑service environments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
