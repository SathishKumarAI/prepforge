---
qid: ing_55b47c0d89__fp__local
question: 'Explain: Resource Parameter — RFC 8707: Resource Indicators for OAuth 2.0
  | RFC Editor'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 518
total_tokens: 699
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:06:58-05:00'
sources: []
---

**Why a “resource” argument is necessary**

OAuth 2.0 was originally conceived as an *authorization* protocol: the client asks the resource owner for consent to access **some protected data** on the server.  
When the token is issued, the authorization server knows only *who* may act (the scope) and *where* the token can be sent (the redirection URI). It does **not** know *what* the client actually wants to read or write.

In practice, a single API endpoint often serves many logical resources (e.g., `/users/123`, `/orders/456`).  
A bearer token that authorizes “read‑user” can be sent to any user‑endpoint; without an explicit resource indicator the server has no way to enforce fine‑grained access control or audit usage per target.  

**Deriving the parameter**

Let  
- \(T\) = issued token,  
- \(R\) = intended resource (URI),  
- \(C(T,R)\) = authorization check.

We want \(C(T,R)=\text{true}\) iff the scope embedded in \(T\) permits operation on \(R\).  
If \(R\) is omitted, the server must assume the worst‑case: *any* resource that matches the token’s scopes could be accessed. This yields either over‑permissive access or an impractical “token per resource” model.

Thus RFC 8707 introduces the **resource** query or header field, allowing the client to explicitly state \(R\). The server can then compute a *resource‑specific* policy:  

\[
C(T,R) = \text{Scope}(T)\;\cap\; \text{Policy}(R) \neq \varnothing .
\]

**Non‑obvious insight**

The resource indicator is not merely an audit aid—it protects against **token replay across resources**.  
If a token for `/users/123` is reused on `/orders/456`, the server can reject it because the indicated resource does not match any scope the client holds, even if the bearer token itself is valid. This subtle “resource binding” turns a single bearer token into a *context‑dependent* credential, hardening OAuth against cross‑resource misuse without requiring separate tokens or heavy state on the authorization server.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
