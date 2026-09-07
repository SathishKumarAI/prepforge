---
qid: ing_444fd2c131__faang__local
question: 'Explain: Introduction — RFC 8707: Resource Indicators for OAuth 2.0 | RFC
  Editor'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 466
total_tokens: 709
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:23:17-05:00'
sources: []
---

**1️⃣ Clarify**  
We’re asked to explain *RFC 8707 – “Resource Indicators for OAuth 2.0”*.  
Key points to confirm:  
- Audience is familiar with OAuth 2.0 basics (authorization server, client, resource owner).  
- Need to highlight why a new RFC was needed and what problem it solves.  

**2️⃣ Approach**  
1. Summarize the core idea of the RFC.  
2. Map it onto existing OAuth flow.  
3. Highlight benefits & trade‑offs.  

**3️⃣ Depth**  
RFC 8707 introduces an *audience* (resource indicator) parameter that clients attach to access‑token requests (`scope` or `aud`). The authorization server validates this against the protected resource’s allowed audience list and can issue a token scoped only for that target.  

- **Why?** In multi‑tenant or API‑gateway scenarios, a single OAuth client may request tokens for many downstream APIs. Without an indicator, the token could be misused if intercepted.  
- **How it works:** The client sends `aud=api.example.com` in the token request; the server checks that this audience is whitelisted and includes it in the JWT’s `aud` claim. The resource server then verifies the claim before accepting the token.  

**4️⃣ Edge Cases**  
- Missing or empty `aud`: fallback to default scopes, but may expose risk.  
- Multiple audiences: RFC allows comma‑separated list; servers must enforce all listed are allowed.  
- Legacy clients not sending `aud` will receive a generic token—could lead to unintended access if the resource server is lax.

**5️⃣ Optimize & Communicate**  
Explain that this RFC tightens **token binding** to resources, reducing replay attacks and simplifying revocation. Mention that it’s backward‑compatible: servers can ignore `aud` if they don’t support it. Conclude with a quick note on how to test: mock token requests with varying audiences and verify server responses.  

> *Result:* Clear, concise explanation fitting FAANG interview style—structured, depth‑rich, and focused on practical implications.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
