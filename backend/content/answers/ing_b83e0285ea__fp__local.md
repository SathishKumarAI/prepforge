---
qid: ing_b83e0285ea__fp__local
question: 'Explain: Abstract — RFC 8707: Resource Indicators for OAuth 2.0 | RFC Editor'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 370
total_tokens: 550
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:35:49-05:00'
sources: []
---

**Abstract – RFC 8707 (Resource Indicators for OAuth 2.0)**  
OAuth 2.0 was designed as a *delegated authorization* protocol: an application (“client”) asks a resource‑owner to grant it access to protected APIs hosted on one or more servers (“resource servers”). In practice, the same client often needs to talk to many such servers, each with its own audience of scopes and token issuers. The original RFC required the client to *hard‑code* the intended audience in every request—an error‑prone, inflexible approach that breaks the decoupling principle of OAuth.

RFC 8707 introduces a **resource indicator** (a URI) as an optional request parameter. This single value tells the authorization server *exactly which resource server the access token will be presented to*. The server can then issue a token scoped for that specific audience, without the client having to embed any server‑specific logic.

From an optimization standpoint, this moves the burden of audience resolution from the client to the server, reducing the state the client must maintain and enabling *token reuse* across multiple resources when appropriate. It also aligns with information‑theoretic security: by disclosing the target resource early, the authorization server can enforce tighter access control policies and avoid accidental over‑privilege.

A non‑obvious insight is that the indicator effectively **bakes a dynamic “audience claim” into the token request**, allowing the same client to serve multiple tenants without re‑registering or re‑configuring for each one. This subtle shift preserves OAuth’s statelessness while giving developers a clean, declarative way to target resources.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
