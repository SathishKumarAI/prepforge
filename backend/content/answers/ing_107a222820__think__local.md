---
qid: ing_107a222820__think__local
question: 'Explain: Resource Parameter — RFC 8707: Resource Indicators for OAuth 2.0'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 197
output_tokens: 447
total_tokens: 644
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T03:47:05-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
- Identify that *RFC 8707* is an IETF draft extending OAuth 2.0.  
- Assume the audience knows basic OAuth terms (client, resource server, token).  
- Decide to focus on the “resource parameter” and its role as a *Resource Indicator*, not on other RFCs.

**2️⃣ Adopt a “layered‑explanation” framework**  
- **Layer 1:** What is a Resource Indicator?  
- **Layer 2:** Why is it needed (e.g., multi‑tenant APIs, cross‑origin resource servers).  
- **Layer 3:** How the parameter is used in requests and tokens.  
- **Layer 4:** Security implications (token scope narrowing, mitigations).

**3️⃣ Step‑by‑step reasoning**  
1. Define the “resource” concept in OAuth 2.0.  
2. Explain how RFC 8707 introduces a URI or string to explicitly identify that resource.  
3. Show the syntax: `resource=<URI>` in the Authorization Request, Token Request, and introspection calls.  
4. Illustrate with an example (client → authorization server → token → API).  
5. Highlight the effect on scopes: the access token is bound to the indicated resource.

**4️⃣ Avoid common pitfalls**  
- Don’t confuse the *resource* with the “audience” claim (`aud`).  
- Don’t assume every OAuth flow needs a resource indicator; it’s optional but recommended for multi‑tenant or federated scenarios.  
- Beware of mixing up `resource` with `scope`; they are orthogonal.

**5️⃣ Sanity‑check & verbalize**  
- Verify that the explanation covers “what, why, how, and security”.  
- Use a quick mental test: can I explain to a non‑technical colleague what the resource parameter does?  
- If yes, the answer is clear; if not, simplify the language or add an analogy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
