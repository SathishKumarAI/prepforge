---
qid: ing_665929fcab__fp__local
question: 'Explain: Security Considerations — RFC 8707: Resource Indicators for OAuth
  2.0 | RFC Editor'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 448
total_tokens: 630
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:42:48-05:00'
sources: []
---

**Why the “resource indicator” is a security necessity**

OAuth 2.0 was designed for *delegated access* without exposing credentials.  
In practice, an authorization server (AS) may issue tokens that are valid
across multiple APIs, while each resource server (RS) must trust only the
token it receives.  If an RS cannot verify that a token was issued **for
it**, a malicious client could replay a token from another RS or use a
token that the AS issued for a different audience.  
This is the *audience confusion* problem, which can lead to privilege
escalation and data leakage.

RFC 8707 solves this by adding an explicit `resource` request parameter
(`resource=URI`) to the token‑request flow.  The AS records this URI in
the token’s `azp` (authorized party) or a custom claim, and the RS checks
that the received token’s resource claim matches its own base URI.
Thus, the **information‑theoretic guarantee** that the token was meant for
that RS is preserved.

### Deeper principle

This is an instance of *mutual authentication* in asymmetric systems:
each party proves to the other that it controls a specific identifier
(the resource URI).  It is essentially a constrained form of audience
validation, akin to TLS’s Server Name Indication but applied at the
application level.

### Non‑obvious insight

Many deployments ignore `resource` because they assume the AS and RS are
tightly coupled.  However, in multi‑tenant or federated setups where an
AS issues tokens for numerous third‑party APIs, **omitting the resource
indicator turns a single token into a universal key**—the very problem
RFC 8707 is meant to prevent.  Hence, enabling `resource` is not just
good practice; it is a hard requirement whenever an AS serves more than
one RS with overlapping scopes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
