---
qid: ing_444fd2c131__fp__local
question: 'Explain: Introduction — RFC 8707: Resource Indicators for OAuth 2.0 | RFC
  Editor'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 456
total_tokens: 636
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:31:08-05:00'
sources: []
---

**Why resource indicators?**  
OAuth 2.0 was born to delegate access to *resources* (APIs) on behalf of a user. In early drafts the “resource server” was implicit: the client simply sent an access token to whatever endpoint it targeted, and the token’s scope dictated what could be done there. When multiple resource servers share a single authorization server—think Google APIs or Azure AD—the implicit model becomes brittle: the same token may inadvertently work on a wrong domain, or an attacker can hijack a token by targeting a different server that accepts it.

**Fundamental fix:**  
RFC 8707 introduces *resource indicators*—a small header (`X-Forwarded-Host`‑style) or query parameter that explicitly tells the authorization server which resource server the request is intended for. The server then validates the token **against that specific target**, rejecting any mismatch. This is a direct application of *information bottleneck*: we compress the client’s intent (the intended resource) into a single, unambiguous field so that downstream services can enforce boundaries without guessing.

**Deeper principle:**  
It turns OAuth from a “single‑token for all” system into a *multi‑tenant* one. The indicator is analogous to a domain tag in DNS: it anchors the token to a particular namespace, ensuring that scope calculations and revocation are scoped correctly. This preserves **confidentiality** (tokens don’t leak across tenants) and **integrity** (resource servers cannot be tricked into accepting an unsuitable token).

**Non‑obvious insight:**  
Most implementations treat the indicator as just another header. The subtlety is that the *authorization server* must *store* a mapping of valid indicators per client, and enforce them at issuance time—otherwise the indicator could become a vector for replay attacks against any server that accepts the token regardless of target. Thus RFC 8707 effectively adds an extra dimension to the access‑token’s “signature,” tightening the coupling between issuer, subject, scope, and intended audience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
