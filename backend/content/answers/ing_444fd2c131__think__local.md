---
qid: ing_444fd2c131__think__local
question: 'Explain: Introduction — RFC 8707: Resource Indicators for OAuth 2.0 | RFC
  Editor'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 199
output_tokens: 496
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:06:04-05:00'
sources: []
---

**1. Clarify the scope and assumptions**  
- Identify that the user wants an *explanation* of a specific RFC (RFC 8707) about “Resource Indicators” in OAuth 2.0.  
- Assume the audience has basic OAuth knowledge but may not know this extension.  
- Decide to focus on purpose, key concepts, how it fits into OAuth flows, and practical implications.

**2. Mental model / framework**  
- Treat the RFC as an *extension layer* that adds a new header/value (`audience`/resource indicator) to existing OAuth messages.  
- Map it onto the classic OAuth 2.0 request–token–access‑token flow: where the resource identifier fits, what problems it solves (multi‑tenant, multi‑resource scenarios).  
- Use a “problem → solution → impact” triad.

**3. Step‑by‑step reasoning**  
1. Start with the problem: OAuth tokens are issued to a single audience; clients often need to call multiple resource servers that should verify token validity for *their* scope.  
2. Explain the RFC’s core idea: allow the client to include a “resource indicator” in the authorization request or token request so the server can issue a token scoped to that particular resource.  
3. Detail the mechanism: `audience` parameter, how it appears in the `/authorize` and `/token` endpoints, and how the authorization server validates/uses it.  
4. Show the effect on the client’s workflow and on the resource server’s validation logic (it now checks both scope and audience).  

**4. Common traps to avoid**  
- Don’t conflate “resource indicator” with “audience” in JWTs; they’re related but distinct concepts.  
- Avoid implying that all OAuth servers must implement this RFC—many still use the legacy single‑audience model.  
- Don’t over‑emphasize technical details (e.g., exact JSON schema) unless asked.

**5. Sanity‑check & communicate**  
- Verify that the explanation flows from problem → solution → practical usage.  
- Use simple examples (e.g., a client accessing both Google Drive and Calendar).  
- Summarize key takeaways: what the RFC adds, why it matters, and how to start using it.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
