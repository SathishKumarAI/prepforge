---
qid: ing_049fd79df9__fp__local
question: 'Explain: 2.1. Authorization Request — RFC 8707: Resource Indicators for
  OAuth 2.0 | RFC Editor'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 430
total_tokens: 616
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:15:34-05:00'
sources: []
---

**Why the RFC is needed**

OAuth 2.0 was designed to grant access *to a single protected API* per token.  
In practice, a client often needs to act on behalf of a user across **multiple resource servers** (e.g., Google Drive and Gmail) with one authorization flow. Without a mechanism to specify the target resource, the server would have to guess or expose all scopes, leading to over‑privileged tokens and security holes.

**Fundamental problem**

The client sends an *authorization request* (`/authorize`) to the **Authorization Server (AS)**.  
- The AS must decide which **Resource Server (RS)** will consume the token.  
- It must also decide what **scopes** are relevant for that RS, without leaking scopes intended for other RSs.

Thus we need a *resource indicator*—a URI that unambiguously identifies the target RS and is part of every request where the AS must tailor its response.

**How it works**

1. The client includes `resource=<URI>` in the authorization request (and later in token requests).  
2. The AS validates that the URI belongs to a known RS, optionally performing discovery (`/.well-known/oauth-authorization-server`).  
3. The AS issues a token scoped only for that RS; the RS validates the resource claim inside the JWT or via introspection.

**Deep principle**

This is an instance of *information partitioning* in distributed systems: each party receives exactly the data it needs, no more. It mirrors the *principle of least privilege* and reduces inter‑service coupling.

**Non‑obvious insight**

Most developers assume a single token works everywhere; however, **resource indicators enable a single authorization flow to spawn multiple, isolated tokens**—each bounded by its own scope set. This eliminates the need for “wildcard” scopes or separate flows per service, dramatically tightening security while keeping UX seamless.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
