---
qid: ing_828b242ff7__fp__local
question: 'Explain: 5.1. OAuth Parameters Registration — RFC 8707: Resource Indicators
  for OAuth 2.0 | RFC Editor'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 445
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:42:54-05:00'
sources: []
---

**Why resource‑indicators are required**

OAuth 2.0 was built around a *single* protected resource per authorization server.  
When a client asks for an access token it implicitly means “give me permission to act on **the default** resource”.  
In real deployments, however, the same authorization server often protects dozens of APIs (billing, profile, analytics).  
If every API had its own authorization server, the *client‑registration* burden would explode: a client must know and store a separate set of endpoints and scopes for each resource.  
RFC 8707 solves this by allowing a **single** registration to be reused across all resources; the client signals which resource it wants in the request.

**How it works**

1. The client registers once with an *authorization server* (AS).  
2. When requesting a token, the client includes one or more `resource` query parameters/headers.  
3. The AS validates that the requested resource is allowed for the client and returns a token scoped to that specific resource.  
4. A protected API verifies that the token’s `audience` (or custom claim) matches its own identifier.

**Deeper principle**

This design embodies *policy‑as‑code*: the AS enforces fine‑grained access by inspecting a simple declarative field (`resource`).  
It separates **identity** (the client ID) from **authority** (which API the token can reach), enabling:

- **Scalability:** one registration per developer, many APIs.  
- **Security isolation:** tokens never leak across resources.  

**Non‑obvious insight**

Most people overlook that `resource` is *not* just a hint; it becomes an *enforced claim* in the token.  
Thus, by merely adding the parameter, a client can shift the entire authorization policy of the AS—without changing scopes or roles—making the token’s audience the sole gatekeeper. This subtle shift turns OAuth into a true “resource‑centric” protocol rather than a “scope‑centric” one.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
