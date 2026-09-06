---
qid: ing_bfa95a7535__fp__local
question: 'Explain: 1.2. Terminology — RFC 8707: Resource Indicators for OAuth 2.0
  | RFC Editor'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 415
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:50:45-05:00'
sources: []
---

**Why the “resource indicator” is required**

When an OAuth 2.0 client asks a single authorization server for an access token that may be used against *many* APIs, the server has no way to know which downstream resource the caller intends to reach.  
If it blindly issues a token that is valid everywhere, a malicious party could replay that token on any protected API, violating the principle of *least privilege*.  
Thus the request must carry an explicit **resource indicator**—the URI of the intended target—so the server can issue a token scoped only for that resource.

**Derivation from core principles**

1. **Authorization as a constrained delegation problem**:  
   The server delegates access to *exactly* what the client needs, nothing more (information‑theoretic minimalism).  
2. **Token semantics must be unambiguous**:  
   A token is a bearer credential; its meaning cannot depend on context.  
3. **Interoperability across multi‑tenant backends**:  
   The same authorization server may serve several resource servers, each with distinct scopes and policies.

The RFC therefore defines the *resource* parameter as part of the request (and optionally in the `audience` claim). The server validates that the indicator is known, then includes it in the token’s `aud` field, ensuring that only that resource will accept the token.  

**Non‑obvious insight**

A resource indicator **does not merely filter scopes**; it *creates* a new security boundary by binding the token to a specific audience. Even if an attacker intercepts the token, it cannot be used against any other API because the `aud` claim mismatches. This subtle coupling of URI and scope is what turns OAuth from a generic grant into a fine‑grained authorization framework.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
