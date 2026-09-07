---
qid: ing_990139ed1d__faang__local
question: 'Explain: RFC 8707 : Resource Indicators for OAuth 2.0'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 548
total_tokens: 786
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:40:24-05:00'
sources: []
---

**Clarify**  
The question asks for an explanation of *RFC 8707 – “Resource Indicators for OAuth 2.0”*.  
Assumptions:  
- The interviewee is expected to know the OAuth 2.0 flow and why a client might target multiple APIs.  
- They should be able to articulate what the RFC adds, its motivation, and how it changes request/response handling.

**Approach**  
1. Summarize the RFC’s purpose in one sentence.  
2. Explain the problem it solves (resource‑specific scopes vs. generic “audience”).  
3. Describe the key technical change: the `resource` parameter on token requests and responses.  
4. Mention implementation notes, security implications, and compatibility.

**Depth**  

> RFC 8707 introduces a *Resource Indicator* that lets a client explicitly state which protected resource (API) it intends to access when requesting an access token.  
> In standard OAuth 2.0, scopes are generic (“read”, “write”) and the authorization server issues tokens that may be valid for any audience.  When a single authorization server backs multiple APIs with different policies, a client cannot tell which API the token is meant for, leading to either over‑privileged tokens or unnecessary revocation.  
> The RFC defines:  
> * **`resource` request parameter** – included in the `/token` endpoint (and in some flows like `client_credentials`). It may be a URI or an opaque string representing the target API.  
> * **`audience` response claim** – added to the access token’s JWT (`aud`) to reflect the indicated resource.  
> The auth server validates that the client is allowed to request that resource, and can issue a token scoped only for it.  If no `resource` is supplied, the server defaults to its own audience or rejects if ambiguous.  
> Security: prevents token reuse across APIs; mitigates “token‑reuse” attacks.

**Edge Cases**  
- Multiple resources in one request (RFC allows comma‑separated list).  
- Legacy clients not sending `resource`: they may receive a default audience or an error.  
- Authorization servers that do not support the RFC: clients must fall back to legacy scopes.  

**Optimize & Communicate**  
I’d highlight that this RFC adds fine‑grained control without breaking existing flows, improving least‑privilege enforcement and simplifying token revocation.  I would finish by noting that adoption is optional but strongly recommended for multi‑tenant or micro‑service architectures where each API enforces its own policies.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
