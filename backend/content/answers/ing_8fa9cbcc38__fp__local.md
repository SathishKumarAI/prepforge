---
qid: ing_8fa9cbcc38__fp__local
question: 'Explain: 2.2. Access Token Request — RFC 8707: Resource Indicators for
  OAuth 2.0 | RFC Editor'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 473
total_tokens: 660
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:10:36-05:00'
sources: []
---

**Why a separate “resource indicator” is required**

When an OAuth client asks an authorization server for a token it traditionally just supplies *client credentials* and the scope of access.  
The server then issues a single bearer token that the client may use against any resource provider (RP) that trusts the same issuer.  

In practice many clients must call **different** RPs (e.g., a cloud API, an internal microservice, a third‑party SaaS). If the same token were accepted by all of them, the server would have to encode in the token *which* RP it can be used for.  
That encoding is expensive: the token must carry a large “audience” claim or a separate list of allowed RPs; each new RP requires changes to the issuer’s policy and revocation lists.  

RFC 8707 introduces an explicit **resource indicator** in the token request:

```
POST /token
   grant_type=client_credentials
   &scope=read
   &resource=https://api.example.com
```

The server interprets this as “issue a token that is *valid only for* `https://api.example.com`.”  
The issuer can then generate a short, opaque token whose internal data need not enumerate all RPs. The RP simply checks the indicator against its own identity.

**Deeper principle**

This design embodies *information‑theoretic separation of concerns*: the authorization server’s job is to prove “I trust you” and “you may act on your behalf”; the resource provider’s job is to decide whether that proof applies to it. By delegating the latter check to the RP via a simple string, we avoid bloated tokens and keep revocation local.

**Non‑obvious insight**

Because the indicator is part of the **request**, not the token, the issuer can refuse to issue any token if the client does not supply it—preventing accidental over‑privilege. Moreover, the RP can silently ignore or reject a token that was issued for another resource without needing to parse its claims, simplifying downstream security checks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
