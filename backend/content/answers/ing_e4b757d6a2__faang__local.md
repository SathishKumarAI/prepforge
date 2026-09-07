---
qid: ing_e4b757d6a2__faang__local
question: 'Explain: Per-tenant scoping with audience binding (RFC 8707)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 468
total_tokens: 706
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:29:55-05:00'
sources: []
---

**Clarify**  
The question asks how *per‑tenant scoping* works when combined with *audience binding* as defined in RFC 8707 (OAuth 2.0 Token Exchange). I’ll assume we’re dealing with a multi‑tenant SaaS platform where each tenant has its own resource server and the access token’s `aud` claim must be scoped to that tenant.

**Approach**  
1. Explain audience binding basics.  
2. Show how per‑tenant scopes map onto the `aud` claim.  
3. Discuss implementation steps (token issuance, validation).  
4. Touch on security & operational trade‑offs.

**Depth**  

*Audience binding* requires that a token’s `aud` claim match the resource server’s identifier; otherwise it is rejected. In a multi‑tenant setup each tenant’s API endpoint is its own audience value (`https://api.example.com/tenant‑{id}`).

When a client requests a token for a specific tenant, the authorization server includes that tenant’s audience in the `aud` claim and optionally a custom scope such as `tenant:{id}:read`. The resource server validates:
- `aud` equals its own tenant URI.  
- Scope permits the requested operation.

The token can be reused only against that tenant’s API; any cross‑tenant request fails because the `aud` mismatch triggers a 401/403 response.  

**Edge Cases**  
*Token replay across tenants:* prevented by strict audience check.  
*Dynamic tenant creation:* need to generate new audience URIs on‑the‑fly and rotate secrets.  
*Legacy clients lacking scope awareness:* must fall back to broad scopes with additional checks.

**Optimize & Communicate**  
To reduce latency, cache the mapping of `aud` to tenant metadata in a distributed store (e.g., Redis). Use JWTs signed by a per‑tenant key to avoid lookups. Communicate the design by diagramming token flow and highlighting that audience binding enforces isolation, while scopes grant fine‑grained permissions within each tenant. This satisfies FAANG interview expectations: clear framing, systematic plan, deep technical detail, edge‑case awareness, and optimization narrative.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
