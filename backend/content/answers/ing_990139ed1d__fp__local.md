---
qid: ing_990139ed1d__fp__local
question: 'Explain: RFC 8707 : Resource Indicators for OAuth 2.0'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 405
total_tokens: 580
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:31:22-05:00'
sources: []
---

**RFC 8707 – “Resource Indicators for OAuth 2.0”**

At its core, OAuth 2.0 is an *authorization* protocol: a client obtains an access token that the resource server uses to decide whether to grant access to a protected API.  
The problem is that a single token can be valid at many servers (e.g., a “profile‑read” scope could work for Google, Facebook, and a custom service).  Without knowing *which* server issued the request, the server cannot enforce per‑resource policies or revoke tokens selectively.

RFC 8707 solves this by adding an explicit **`audience`** claim—called a *resource indicator*—to the token request.  
The client supplies `aud=<URL>`; the authorization server embeds that URL into the access token (or returns it as a separate header).  The resource server can then:

1. Verify that the token’s audience matches its own identifier.
2. Apply fine‑grained scopes or revocation lists tied to that specific audience.

Mathematically, this is an instance of *information flow control*: the `aud` field is a side channel ensuring that the token’s *intended recipient* is known before any resource access decision.  It turns OAuth into a **multi‑tenant** system without sacrificing the statelessness of bearer tokens.

**Non‑obvious insight:**  
Because the audience is part of the signed JWT (or returned in an opaque form), it protects against *token replay across domains*.  A token issued for `api.example.com` cannot be used at `malicious.io` even if both share a secret; the mismatch will cause immediate denial, preventing silent cross‑domain hijacking that was possible before RFC 8707.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
