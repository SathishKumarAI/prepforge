---
qid: ing_049fd79df9__faang__local
question: 'Explain: 2.1. Authorization Request — RFC 8707: Resource Indicators for
  OAuth 2.0 | RFC Editor'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 535
total_tokens: 784
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:55:16-05:00'
sources: []
---

**Clarify**  
We’re asked to explain *RFC 8707 – “Resource Indicators for OAuth 2.0”*. The goal is to clarify why the spec exists: it lets an OAuth client request a token that is scoped not just to the issuer (authorization server) but also to a specific protected resource (resource server). I’d confirm the context—are we talking about multi‑tenant APIs, or a scenario where one authorization server serves many downstream services?  

**Approach**  
1. Outline the problem: standard OAuth only ties a token to an audience (`aud`). In practice, a client may need to access multiple resources that share the same issuer but have distinct scopes or policies.  
2. Explain the solution: RFC 8707 introduces the `resource` request parameter (a URI) and corresponding `azp`, `azinfo`, etc., in token introspection responses.  
3. Show usage flow: client → auth‑server with `resource=…`; server validates, issues a token bearing that resource as an audience or custom claim; token is then sent to the targeted resource server which verifies it matches its own URI.

**Depth**  
- **Request**: `POST /token` with `grant_type`, `client_id`, etc., plus `resource=https://api.example.com/`.  
- **Response**: JWT includes `aud` = resource URI, and optionally a `azp` claim for the original client.  
- **Introspection**: Resource server can send the token to `/introspect`; response contains `active=true`, `aud=…`.  
- **Security**: Prevents token reuse across resources; mitigates “token replay” attacks in multi‑tenant setups.  

**Edge Cases**  
- Multiple `resource` values → spec allows a comma‑separated list; server must decide policy.  
- Unsupported resource URI → auth server rejects with `invalid_request`.  
- Token used at wrong resource → introspection fails or resource server rejects based on `aud`.

**Optimize & Communicate**  
I’d highlight that this extension keeps OAuth’s simplicity while giving fine‑grained control, essential for large-scale SaaS platforms. In a real interview I’d finish with “If you’re building a platform where the same auth server powers many APIs, RFC 8707 is the de‑facto standard to enforce resource‑specific access.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
