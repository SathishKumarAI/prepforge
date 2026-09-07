---
qid: ing_828b242ff7__faang__local
question: 'Explain: 5.1. OAuth Parameters Registration — RFC 8707: Resource Indicators
  for OAuth 2.0 | RFC Editor'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 716
total_tokens: 966
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:48:35-05:00'
sources: []
---

**Clarify**  
The question asks to explain *RFC 8707 – “OAuth Parameters Registration”* and its focus on **resource indicators** in OAuth 2.0.  
Assumptions:  
- Audience knows the core OAuth 2.0 flow (authorization, token).  
- We’re interested in how a client can request tokens that are scoped to *specific resources* rather than a single “audience” claim.

---

### Approach
1. **Context** – why resource indicators matter.  
2. **Key concepts** – parameters, scopes, audience.  
3. **RFC 8707 changes** – new syntax and semantics.  
4. **Practical flow** – how the client uses them.  

---

### Depth

| Element | What it does |
|---------|--------------|
| `resource` parameter | Optional query/body field on the **token endpoint**.  It accepts a URI or IRI identifying a protected resource (e.g., https://api.example.com). |
| Multiple resources | The client may list several URIs; the authorization server must issue a token that is valid for *all* listed resources (logical AND). |
| `aud` claim | In the resulting JWT, `aud` becomes an array of those URIs.  Resource servers check membership to allow access. |
| Token type | Same as before (`Bearer`). The RFC does **not** change grant types; it only adds a registration step for scopes tied to resources. |
| Back‑compatibility | If omitted, the token behaves like standard OAuth (audience is implicit). |

**How it works in practice**

1. Client requests an access token: `POST /token` with `grant_type=authorization_code`, `code=…`.  
2. It adds `resource=https://api.example.com/resourceA&resource=https://api.example.com/resourceB`.  
3. Authorization server validates the client’s permission for each URI, issues a token whose `aud` contains both URIs.  
4. The resource servers enforce access by checking that the `aud` array includes their own URI.

**Benefits**

- **Fine‑grained scope**: A single token can be valid for multiple APIs without issuing separate tokens.  
- **Simplified client logic**: One token request instead of many.  

---

### Edge Cases

| Scenario | What to test |
|----------|--------------|
| Client lists a resource it isn’t authorized for | Expect `400 Bad Request` or `403 Forbidden`. |
| Duplicate resource URIs | Should be deduplicated; no error. |
| Mixed relative/absolute URIs | RFC requires absolute URI; test server’s rejection of relative ones. |
| Token replay across resources | Ensure each resource server checks its own `aud` entry. |

---

### Optimize & Communicate

- **Server side**: Cache the mapping of clients to allowed resources to avoid DB lookups on every token request.  
- **Client side**: Build a helper that aggregates required resources per API call, reducing round‑trips.  

When presenting this answer in an interview, I’d start with the *why* (security and efficiency), then drill into the RFC’s new parameter, illustrate a concrete flow, cover edge cases, and finish by highlighting performance considerations—all within ~180 words. This demonstrates structured reasoning, technical depth, and clear communication—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
