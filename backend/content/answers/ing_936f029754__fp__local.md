---
qid: ing_936f029754__fp__local
question: 'Explain: 2.2. Access Token Request — RFC 8707: Resource Indicators for
  OAuth 2.0'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 389
total_tokens: 573
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:18:39-05:00'
sources: []
---

**Why a client needs to tell the authorization server *which* API it wants**

In OAuth 2.0 an access token is a bearer credential that authorizes the holder to call **some** protected resource.  
If a client can obtain a single token and use it against many APIs, the server has no way to enforce per‑resource limits or to audit usage.  
The fundamental problem is *conflict of interest*: the client may want broad access for convenience, while the resource owner wants fine‑grained control.

**RFC 8707 solves this by attaching a *resource indicator* to the token request.**

```
POST /token
    grant_type=client_credentials
    scope=…
    resource=https://api.example.com/
```

The server reads `resource` as an opaque URI, treats it like a “sub‑scope”, and issues a token whose **audience** (`aud`) is set to that URI.  
When the client presents the token, the API checks that `aud` matches its own identifier.  

*Deep principle*: the indicator turns the generic bearer token into a *qualified credential*—a lightweight cryptographic proof of intent tied to a specific target. It leverages the same information‑theoretic guarantees as JWTs but without requiring the client to know the resource’s signing key.

**Non‑obvious insight**  
Because `resource` is an opaque URI, the authorization server can enforce *token‑level quotas* per API without storing separate permissions for each client. The server simply records how many tokens it has issued with a given indicator and throttles accordingly—an elegant way to combine rate limiting with delegation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
