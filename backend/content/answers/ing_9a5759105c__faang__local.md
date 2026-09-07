---
qid: ing_9a5759105c__faang__local
question: 'Explain: 2.1. Authorization Request — RFC 8707: Resource Indicators for
  OAuth 2.0'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 528
total_tokens: 774
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:43:25-05:00'
sources: []
---

**Clarify**  
The question asks about the *Authorization Request* extension defined in **RFC 8707**, which introduces *resource indicators* for OAuth 2.0. I’ll assume we’re focusing on how the indicator is sent, why it matters, and its impact on token issuance.

**Approach**  
1. Explain the standard OAuth 2.0 flow briefly.  
2. Introduce the resource‑indicator parameter (`audience` or `resource`).  
3. Describe where it appears in the request (authorization endpoint).  
4. Discuss how the authorization server uses it to scope and issue tokens.  
5. Touch on security implications.

**Depth**  
In OAuth 2.0, a client obtains an access token by redirecting the resource owner to the **Authorization Endpoint**. RFC 8707 adds a `resource` query parameter (or `audience` in some implementations) that explicitly names the API or service the client intends to call. Example:  

```
GET /authorize?response_type=code&client_id=…&
    redirect_uri=…&scope=…&state=…
    &resource=https://api.example.com
```

The authorization server validates the `resource` value against its configuration, ensuring that the client is permitted to access that API. It can then issue a token whose **audience** claim (`aud`) matches the resource or include a `scp` claim scoped specifically for that API. This prevents *token reuse* across unrelated services and supports *multi‑tenant* scenarios where a single authorization server serves many downstream APIs.

Security benefits:  
- Reduces scope leakage (tokens are bound to the intended audience).  
- Enables fine‑grained policy enforcement on token issuance.  

**Edge Cases**  
- Missing or malformed `resource` → server may reject or default to a primary resource, risking over‑granting.  
- Multiple resources in one request aren’t allowed; RFC 8707 disallows a list.  
- Clients that don’t support the parameter must fall back gracefully.

**Optimize & Communicate**  
For production use, we’d validate `resource` against an allowlist, log mismatches for audit, and optionally expose an introspection endpoint that includes the resource claim. When explaining to stakeholders, I’d highlight how this extension tightens security without altering the core OAuth flow—an incremental change that aligns with best practices in API monetization and multi‑tenant SaaS deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
