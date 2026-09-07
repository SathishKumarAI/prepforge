---
qid: ing_8fa9cbcc38__faang__local
question: 'Explain: 2.2. Access Token Request — RFC 8707: Resource Indicators for
  OAuth 2.0 | RFC Editor'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 614
total_tokens: 864
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:18:24-05:00'
sources: []
---

**Clarify**  
You’re asking about the “Access Token Request” section of *RFC 8707* (OAuth 2.0 Resource Indicators). The goal is to let a client request an access token that’s scoped for **multiple** resource servers, not just the one implied by the token endpoint. I’ll assume we’re talking about the `resource` parameter in the token request and its implications.

**Approach**  
1. Summarize what RFC 8707 adds to the standard OAuth flow.  
2. Explain how the `resource` parameter is used (single vs. multiple values).  
3. Discuss security/validation concerns the server must perform.  
4. Touch on backward‑compatibility and implementation notes.

**Depth**  

| Step | Detail |
|------|--------|
| **1. Purpose** | Enables a client to request an access token that is valid for one or more specific resource servers, even if the authorization server hosts many APIs. |
| **2. Token Request** | Client POSTs to the token endpoint with `grant_type=authorization_code` (or other grant) plus `resource=<URI>`; RFC 8707 allows a comma‑separated list of URIs or multiple `resource=` parameters. |
| **3. Server Validation** | *a.* Verify each URI is known, registered, and belongs to the client’s allowed scopes. <br>*b.* Ensure the URI matches an existing resource server configuration; otherwise reject with 400/invalid_request. <br>*c.* If multiple resources are requested, the token may contain a `resource` claim listing all URIs or be issued per‑resource (one token per URI). |
| **4. Token Claims** | The resulting JWT can include a `azp` (authorized party) and one or more `aud` (audience) claims matching the resource URIs, or a custom `resource` claim as per the spec. |
| **5. Backwards Compatibility** | Servers that don’t support RFC 8707 simply ignore unknown parameters; clients should fall back to single‑resource tokens if the server rejects the request. |

**Edge Cases**  
- *Invalid URI format* → 400 error.  
- *Unregistered resource* → 401/invalid_client or 403 forbidden.  
- *Duplicate URIs* → deduped before processing.  
- *Large list of resources* may hit request size limits; enforce a maximum count.

**Optimize & Communicate**  
To keep the system performant, cache the mapping from `resource` URI to resource server metadata and validate against it in O(1). When explaining this to stakeholders, highlight that adding resource indicators reduces token misuse across APIs and aligns with zero‑trust security models. Conclude by noting that proper logging of denied requests is essential for auditability.

*Word count: ~210*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
