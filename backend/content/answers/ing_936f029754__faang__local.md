---
qid: ing_936f029754__faang__local
question: 'Explain: 2.2. Access Token Request — RFC 8707: Resource Indicators for
  OAuth 2.0'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 498
total_tokens: 745
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:27:10-05:00'
sources: []
---

**Clarify**  
The question asks how the *Access‑Token Request* in RFC 8707 (“Resource Indicators for OAuth 2.0”) works and why it’s needed. I’ll assume you’re familiar with standard OAuth 2.0 flows (authorization code, client credentials) and that “resource” refers to a protected API.

**Approach**  
1. Explain the problem: a single authorization server may issue tokens for multiple APIs; clients need to tell the AS which API they target.  
2. Describe the solution: add the `audience` or `scope`‑like *resource* parameter to the token request.  
3. Cover how it is validated and returned in the JWT.

**Depth**  
- In the **client credentials** flow, the client sends `POST /token` with `grant_type=client_credentials`. RFC 8707 introduces an optional `resource` query/body param (e.g., `resource=https://api.example.com`).  
- The AS may accept multiple resources; it validates that the client is allowed to access each.  
- The resulting **access token** includes a claim `aud` (or custom `azp`) listing the requested resources, ensuring downstream APIs can verify the intended audience.  
- For **authorization code** flow, the same parameter can be sent in the `token_request` or included as part of the `scope`.  
- Complexity: O(1) per request; storage overhead is minimal (just a claim). Trade‑offs include needing to maintain resource‑to‑client mapping on the AS.

**Edge Cases**  
- No `resource`: token becomes a *generic* one, usable by any API that trusts it.  
- Unsupported resource: AS returns error `invalid_request`.  
- Multiple resources: some ASs may reject if not pre‑configured.  
- Malformed URL or non‑HTTPS: validation failure.

**Optimize & Communicate**  
Explain that adding the resource indicator decouples token issuance from a fixed audience, enabling multi‑tenant or micro‑service architectures. To test, I’d run unit tests for valid/invalid resources, mock AS responses, and verify downstream APIs reject tokens with mismatched `aud`. This shows a clear understanding of RFC 8707’s intent and practical implications.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
