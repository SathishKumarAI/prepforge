---
qid: ing_07086f8ab7__faang__local
question: 'Explain: 1.2. Terminology — RFC 8707: Resource Indicators for OAuth 2.0'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 371
total_tokens: 617
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:00:49-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise explanation of *RFC 8707* (Resource Indicators) and why it matters for OAuth 2.0 flows. I’ll confirm that they’re interested in the spec’s purpose, key concepts, and practical impact on token handling.

**Approach**  
1. Define “resource indicator” and its role.  
2. Explain how it modifies standard OAuth grant types.  
3. Highlight security benefits (scope narrowing, reduced abuse).  
4. Touch on implementation notes for clients/servers.  

**Depth**  
RFC 8707 extends OAuth 2.0 by allowing a client to specify the target resource server (`resource` parameter) in authorization and token requests. This forces the authorization server to issue tokens scoped only to that resource, preventing a token from being misused on other services. It also lets multiple resource servers share a single auth endpoint without needing separate OAuth realms. Implementation requires:
- Clients to send `resource=<uri>` on `/authorize` and `/token`.  
- Authorization servers to validate the URI against an allowed list and include it in the `audience` claim of the JWT.  
- Resource servers to reject tokens whose audience doesn’t match their own identifier.

**Edge Cases**  
- Omitting `resource`: token becomes broadly scoped.  
- Invalid or unsupported URI: server must return `invalid_request`.  
- Legacy clients lacking support will fail; backward‑compatibility layers are needed.

**Optimize & Communicate**  
Emphasize that resource indicators reduce scope leakage and simplify multi‑tenant deployments, improving security posture with minimal client changes. Conclude by noting the trade‑off: added request complexity versus tighter token validity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
