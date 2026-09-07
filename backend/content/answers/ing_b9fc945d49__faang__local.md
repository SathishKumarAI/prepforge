---
qid: ing_b9fc945d49__faang__local
question: 'Explain: Introduction — RFC 8707: Resource Indicators for OAuth 2.0'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 429
total_tokens: 669
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:55:19-05:00'
sources: []
---

**Clarify**  
The question asks for a concise explanation of *RFC 8707*—the “Resource Indicators” extension to OAuth 2.0. I’ll assume the audience knows basic OAuth flow but not this specific draft, and that they want both why it matters and how it works.

---

**Approach**  
1. Summarize RFC 8707’s purpose in one sentence.  
2. Explain the problem it solves (multi‑resource authorization).  
3. Describe the key mechanisms: `audience` claim in access tokens, `resource` request header, and server validation.  
4. Mention compatibility with existing flows.  

---

**Depth**  
RFC 8707 introduces *Resource Indicators* to let a client explicitly declare which protected resource(s) it intends to call. The client adds the `resource` query parameter (or header) when requesting an access token; the authorization server may then issue a token whose `audience` (`aud`) claim lists that URI. When the client presents the token, the resource server verifies that its own identifier appears in `aud`. This prevents *token replay* across unrelated APIs and supports *resource‑specific scopes* without needing separate grant types.

---

**Edge Cases**  
- **Multiple resources:** RFC allows a comma‑separated list; servers must handle array parsing.  
- **Legacy clients:** Those omitting `resource` receive a generic token—still usable but less secure.  
- **Scope mismatch:** If the token’s scopes don’t cover the requested API, the resource server should reject it.

---

**Optimize & Communicate**  
Emphasize that RFC 8707 is backward‑compatible and can be adopted incrementally: start by adding `resource` to your OAuth flows, then enforce audience checks on servers. Highlight its benefits for microservices architectures and regulatory compliance (e.g., GDPR). Conclude with a quick note on implementation libraries that now support the extension.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
