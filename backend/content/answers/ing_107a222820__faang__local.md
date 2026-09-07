---
qid: ing_107a222820__faang__local
question: 'Explain: Resource Parameter — RFC 8707: Resource Indicators for OAuth 2.0'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 557
total_tokens: 798
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:21:37-05:00'
sources: []
---

## Clarify  
The question asks about **RFC 8707 – “Resource Indicators for OAuth 2.0”**.  
We need to explain what a *resource parameter* is, why it was introduced, and how it changes the token‑request flow.  Assume the interviewee knows basic OAuth 2.0 (authorization code grant, scopes, access tokens).

## Approach  
1. Define “resource server” in OAuth.  
2. Explain the limitation of “scopes only” for multi‑tenant or multi‑resource scenarios.  
3. Introduce the `resource` parameter: its syntax, placement, and effect on the token request.  
4. Summarize how the issuer interprets it (audience claim, policy).  

## Depth  
- **What is a resource indicator?**  
  - A URI or opaque identifier supplied in the *token request* (`POST /token`) as `resource=…`.  
  - It tells the authorization server which downstream resource(s) the client intends to access with the token.  
- **Why it matters**  
  - In single‑tenant systems a scope suffices, but in multi‑tenant or federated setups one access token may be valid for many APIs.  
  - Without an indicator, the issuer must guess the audience (`aud`) from scopes or client ID, which can lead to over‑privileged tokens or mis‑routing.  
- **How it works**  
  1. Client sends `resource` along with standard parameters (`grant_type`, `client_id`, etc.).  
  2. The AS validates the request against its *resource policy* (e.g., does the client have rights to that resource?).  
  3. If approved, the AS sets the `aud` claim in the JWT to the supplied URI and may include a `resource_access` claim listing allowed scopes for that resource.  
- **Impact on downstream**  
  - Resource servers can trust the `aud` claim and enforce per‑resource policies without extra introspection.  

## Edge Cases  
- Multiple resources: spec allows repeating `resource=`; issuer must aggregate scopes accordingly.  
- Unknown resource URI: server must return `invalid_request`.  
- Scope mismatch: if requested scope not allowed for that resource, token is denied or limited to intersection of scopes.

## Optimize & Communicate  
Highlight that RFC 8707 solves the “audience‑guessing” problem and enables fine‑grained access control in large ecosystems. Mention that it’s optional but widely adopted by providers (e.g., Azure AD). Conclude with a quick example request/response to cement understanding.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
