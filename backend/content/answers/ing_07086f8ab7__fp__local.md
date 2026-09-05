---
qid: ing_07086f8ab7__fp__local
question: 'Explain: 1.2. Terminology — RFC 8707: Resource Indicators for OAuth 2.0'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 433
total_tokens: 616
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:20:49-05:00'
sources: []
---

**Why a “resource indicator” is needed**

In OAuth 2.0 the *access token* is issued to a client for **one** protected API (“resource server”).  
When a single authorization server (AS) serves many resource servers, the AS must know which
server the access‑token will be presented to in order to issue the correct scopes and claims.
Without that knowledge it would have to grant a generic token that either:  

* is too permissive (risking over‑exposure), or  
* is too restrictive (forcing clients to re‑authorize for each server).

Thus the protocol introduces an explicit *resource indicator* – a URI sent with the
authorization request that tells the AS “this token is meant for <https://api.example.com>”.

**How it works**

1. The client appends `audience=<URI>` (or `resource=<URI>` in earlier drafts) to the
   `/authorize` or `/token` endpoint.
2. The AS validates that URI against its list of supported resource servers, then
   scopes the token accordingly and embeds the same URI in the `aud` claim.
3. The resource server verifies that the incoming token’s `aud` matches itself before
   accepting it.

**Deep principle**

This is a *disambiguation* step: it turns an implicit assumption (“the token will be used by whoever asks”) into an explicit, machine‑readable statement. It enforces the *principle of least privilege* across multiple services without forcing each client to manage separate tokens manually.

**Non‑obvious insight**

The indicator is not merely a label; it also serves as a **security boundary**. Because the AS can refuse unknown URIs, attackers cannot simply reuse a token intended for one API on another, even if they intercept it. Thus resource indicators convert a single “bearer” token into *audience‑bound* credentials, tightening both scope and trust in distributed OAuth ecosystems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
