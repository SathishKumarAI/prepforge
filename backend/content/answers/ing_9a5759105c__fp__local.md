---
qid: ing_9a5759105c__fp__local
question: 'Explain: 2.1. Authorization Request — RFC 8707: Resource Indicators for
  OAuth 2.0'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 361
total_tokens: 544
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:34:03-05:00'
sources: []
---

**RFC 8707 – “Resource Indicators” in the Authorization Request**

The core problem:  
OAuth 2.0 was originally designed for a *single* protected resource (the “resource server”). In practice, a client often needs to access **multiple** resources—each with its own scopes and policies—using the same authorization endpoint. The standard flow cannot express which resource is intended; the server has no way to decide whether a scope applies to one or another.

**Solution principle – explicit intent as an observable**  
RFC 8707 introduces a *resource indicator* (a URI) in the Authorization Request. This turns the hidden “who am I talking to?” question into a visible, signed claim. The authorization server can now:

1. **Validate scope‑resource compatibility** – enforce that requested scopes are allowed for that particular resource.
2. **Select token policies** – issue a token with a *resource‑specific* audience (the `aud` claim), limiting its use to the indicated URI.

The indicator is a *first‑principles* extension: it preserves OAuth’s decoupled architecture while adding a minimal, unambiguous parameter that aligns the authorization request with the resource server’s policy space.  

**Non‑obvious insight**  
Because the indicator is part of the signed JWT (or included in the `scope` set), it can be used by downstream services to *prove* which resource was intended without revealing any client secrets—enabling fine‑grained delegation even across multiple domains, a feature many overlook but essential for multi‑tenant SaaS ecosystems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
