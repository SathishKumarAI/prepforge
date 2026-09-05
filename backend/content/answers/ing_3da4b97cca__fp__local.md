---
qid: ing_3da4b97cca__fp__local
question: 'Explain: 5.1. OAuth Parameters Registration — RFC 8707: Resource Indicators
  for OAuth 2.0'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 508
total_tokens: 692
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:15:25-05:00'
sources: []
---

**Why “Resource Indicators” matter**

In OAuth 2.0 a client asks an authorization server for an access token that is *valid only for the resource it intends to call*.  
The original protocol lets the client declare this by sending a single `audience` (or implicitly by using the token’s scope).  
However, when

1. **multiple protected APIs share the same authorization server**, and
2. those APIs have *different* permission sets that cannot be expressed cleanly with scopes,

the server can no longer infer which API the token is meant for.  
If the client simply asks for a “generic” token, every downstream API will accept it, leading to over‑privilege or silent failures.

**The principle that drives RFC 8707**

*Information locality*: each API should only see tokens that carry an explicit claim about *its own* identity.  
By adding a `resource` parameter (the resource indicator) during the token request, the client tells the server:

```
token_endpoint?client_id=…&scope=read&resource=https://api.example.com
```

The authorization server then scopes the issued JWT to that URI—embedding it in the `aud` claim.  
When the API receives the token, it checks `aud == https://api.example.com`. If not, it rejects it.

**What this guarantees**

- **Least privilege**: tokens cannot be used for other APIs.
- **Clear intent**: the client’s request is unambiguous, even if scopes overlap across resources.
- **Scalable delegation**: a single authorization server can issue distinct tokens for many APIs without per‑API configuration.

**Non‑obvious insight**

Most developers think “just add `aud`”; but *the token issuer must enforce that the `resource` value is known and trusted*.  
If an attacker can supply arbitrary URIs, they could trick the server into issuing a token whose audience points to a malicious endpoint.  
Thus RFC 8707 requires **pre‑registration** of allowed resource indicators—an extra step that, while seeming bureaucratic, protects against this subtle attack vector.

In short, resource indicators let OAuth 2.0 preserve its core promise—fine‑grained access control—while scaling to multi‑tenant, multi‑resource environments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
