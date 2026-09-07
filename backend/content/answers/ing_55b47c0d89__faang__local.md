---
qid: ing_55b47c0d89__faang__local
question: 'Explain: Resource Parameter — RFC 8707: Resource Indicators for OAuth 2.0
  | RFC Editor'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 524
total_tokens: 768
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:03:17-05:00'
sources: []
---

**Clarify**  
The question asks about the *Resource Parameter* defined in **RFC 8707 (Resource Indicators for OAuth 2.0)**. It is a mechanism that lets an authorization server identify which protected resource a client intends to access when it requests an access token, especially in multi‑tenant or API‑gateway scenarios.

Assumptions I’d confirm:  
- The client can send the parameter with the standard *token* request (e.g., `client_credentials`, `authorization_code`).  
- The authorization server has knowledge of all registered resource servers and their scopes.  

**Approach**  
1. Explain the problem RFC 8707 solves.  
2. Describe how the parameter is transmitted (`resource` query or body).  
3. Outline its effect on token issuance (scope narrowing, audience).  
4. Mention backward compatibility.

**Depth**  
RFC 8707 introduces a `resource` request‑parameter that may appear in any OAuth 2.0 grant flow where an access token is requested. Its value is a URI identifying the target resource server(s). The authorization server uses this to:

- **Scope filtering:** It intersects the client’s allowed scopes with those required by the indicated resources, ensuring the token only authorizes what the caller needs.  
- **Audience (`aud`) claim:** The issued JWT contains an `aud` value that matches the resource URI, preventing misuse on unintended APIs.  
- **Multi‑tenant safety:** In a shared authorization server, different tenants’ resources can be isolated by distinct URIs.

If multiple `resource` values are sent, the token must satisfy all; otherwise, the request fails with `invalid_request`. The RFC also clarifies that legacy clients simply omit the parameter and receive a broader token.

**Edge Cases**  
- Unsupported or malformed URI → error.  
- Resource server not registered → `invalid_scope`.  
- Conflicting scopes across resources → intersection empty → error.  
- Clients sending the same resource multiple times → idempotent behavior.

**Optimize & Communicate**  
Explain that this parameter improves security without adding client complexity: it’s just an extra field in a normal request. I’d highlight how it aligns with best practices (least‑privilege, audience validation) and mention that implementing it is a drop‑in change to existing auth servers. This shows clear reasoning, depth, and awareness of real‑world constraints—qualities valued by FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
