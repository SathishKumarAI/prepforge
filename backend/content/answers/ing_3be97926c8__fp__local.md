---
qid: ing_3be97926c8__fp__local
question: 'Explain: Copyright Notice — RFC 8707: Resource Indicators for OAuth 2.0'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 380
total_tokens: 558
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:12:12-05:00'
sources: []
---

**RFC 8707 – *Resource Indicators for OAuth 2.0***  
*(≈170 words)*  

The core problem is that a single access‑token may be issued by an authorization server but could legitimately be sent to multiple resource servers (RS).  In practice, a client often needs to target a specific RS, yet the token’s scope does not encode this choice.  If the RS were to accept any bearer token it receives, an attacker could simply replay a token intended for a different RS on the wrong one, breaking confidentiality and violating least‑privilege.

The RFC resolves this by treating *resource indicator* as an **additional request parameter** (the `audience` or `resource` field) that must accompany every protected resource call.  The authorization server, upon receiving the client’s token request, records the indicated RS in the token itself—either as a claim (`aud`) or via a new claim (`azp`).  When an RS receives a bearer token, it validates that its identifier matches the indicator embedded in the token.  This is essentially a **constraint‑based access control** expressed at the protocol level: the token’s integrity guarantees that the resource cannot be substituted.

A non‑obvious insight: the resource indicator mechanism is not merely a security nicety; it also turns the token into an *information‑theoretic proof* of intent.  By binding the RS to the token, we reduce the entropy space an attacker must explore—effectively turning the OAuth flow into a *mutual authentication* channel without extra cryptography. This subtle shift from “who can use the token” to “which resource is the token meant for” is what makes RFC 8707 both elegant and indispensable in multi‑resource ecosystems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
