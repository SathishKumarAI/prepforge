---
qid: ing_60690e26f3__fp__local
question: 'Explain: Privacy Considerations — RFC 8707: Resource Indicators for OAuth
  2.0'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 394
total_tokens: 573
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:30:37-05:00'
sources: []
---

### Why “Resource Indicators” are a Privacy Safeguard

OAuth 2.0 gives an access token to a *client* for a *resource server*.  
In the original spec the client only signs its request with the token; it does **not** prove which resource server will receive it.  
This omission lets a malicious or mis‑configured client redirect the token to any server that accepts it, leaking data across domains and allowing *token replay* attacks.

RFC 8707 introduces an explicit “resource indicator” – a URI (or opaque string) attached to each request.  
The token‑issuing server can now:

1. **Bind** the token to a specific resource indicator during issuance.
2. **Validate** that the incoming request’s indicator matches the one bound to the token.

Mathematically, this is a *constraint* on the token’s state space:  
\( \mathcal{T} = \{(k, r) | k\in K, r\in R\}\), where \(k\) is the key and \(r\) the indicator.  
A request succeeds only if its \(r'\) equals the stored \(r\).  
This turns token validation into a one‑to‑one mapping, eliminating cross‑resource replay.

#### Non‑obvious Insight
Most people think privacy in OAuth means “don’t share user data.”  
But the real vulnerability is **token mis‑routing**.  
By binding tokens to resource indicators, RFC 8707 enforces *path confinement*: a token’s validity is confined to the precise API endpoint it was intended for, preventing silent leakage even when clients are compromised or intentionally malicious.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
