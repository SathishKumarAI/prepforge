---
qid: ing_db305933ff__faang__local
question: 'Explain: Abstract — RFC 8707: Resource Indicators for OAuth 2.0'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 416
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:08:04-05:00'
sources: []
---

**Clarify**  
The question asks about *RFC 8707 – “Resource Indicators for OAuth 2.0”*. I’ll explain the core idea: how a client can explicitly tell an authorization server which resource it wants to access when using OAuth 2.0, and why that matters. I’d confirm whether you need implementation details or just high‑level concepts.

**Approach**  
1. Define “resource indicator” and its place in the OAuth flow.  
2. Explain how it’s sent (query param, header).  
3. Cover server behavior: validation, scopes, token issuance.  
4. Mention security & interoperability benefits.  

**Depth**  
RFC 8707 introduces a *resource* query parameter or `X-Resource-Indicator` header in the authorization request and token request. The client supplies an identifier (e.g., a URI) that uniquely denotes the target API. The authorization server validates this indicator against its registered resources, maps it to allowed scopes, and issues a scoped access token that is *opaque* to other resource servers. This prevents token reuse across unrelated APIs, mitigates replay attacks, and supports multi‑tenant scenarios where the same client ID serves many downstream services.

**Edge Cases**  
- Missing or malformed indicator → 400 Bad Request.  
- Indicator not registered → 403 Forbidden.  
- Token requested without indicator when required → error.  
- Multiple indicators in one request – spec forbids; server must reject.

**Optimize & Communicate**  
Highlight that adding the resource indicator is a minimal change (single param/header) yet vastly improves security by binding tokens to a specific API surface. In an interview, I’d note that implementation requires updating client libraries and auth servers, but no changes to resource servers beyond token introspection. This concise, structured explanation demonstrates clear problem framing, technical depth, and awareness of edge cases—key traits FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
