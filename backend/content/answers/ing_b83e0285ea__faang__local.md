---
qid: ing_b83e0285ea__faang__local
question: 'Explain: Abstract — RFC 8707: Resource Indicators for OAuth 2.0 | RFC Editor'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 473
total_tokens: 716
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:51:36-05:00'
sources: []
---

**Clarify**  
The question asks to explain the *RFC 8707* (“Resource Indicators for OAuth 2.0”). I’ll assume you want a high‑level overview: what problem it solves, how it extends OAuth 2.0, and its key concepts.

**Approach**  
1. Summarize the motivation (resource server identification).  
2. Outline the main proposal: adding a `resource` parameter to token requests/authorizations.  
3. Explain how the indicator is validated by authorization servers and consumed by resource servers.  
4. Note security implications and compatibility.

**Depth**  

*RFC 8707* introduces **Resource Indicators**—a URI that identifies the target resource server in OAuth 2.0 flows.  
- **Token request**: The client app includes `resource=<uri>` when calling `/token`. The authorization server validates the URI against its registered resources and scopes, then issues a token scoped for that resource.  
- **Authorization request** (for OpenID Connect or OAuth 2.0 “implicit” flows): The `resource` parameter is added to the initial authorization URL so the user’s consent can be scoped appropriately.  
- **Resource server**: Upon receiving a token, it checks the `aud` claim against its own identifier; if mismatched, the request is rejected.  

This mechanism solves the ambiguity when an application interacts with multiple resource servers (e.g., Google Drive vs Gmail) using a single OAuth client ID, preventing scope leakage and ensuring tokens are not misused.

**Edge cases**  
- If `resource` is omitted, the server falls back to default scopes—potential over‑privilege.  
- Malformed URIs or unregistered resources cause token issuance failure.  
- Some legacy clients may not support the new parameter, leading to interoperability gaps.

**Optimize & communicate**  
For production: maintain a mapping table of allowed resource URIs per client; use strict URI validation (RFC 3986). In interviews, highlight that RFC 8707 enhances security without breaking backward compatibility and that it’s an optional extension—clients can opt‑in. This structured explanation shows comprehension of the spec, its practical impact, and awareness of edge conditions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
