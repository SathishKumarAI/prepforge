---
qid: ing_b9fc945d49__think__local
question: 'Explain: Introduction — RFC 8707: Resource Indicators for OAuth 2.0'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 196
output_tokens: 509
total_tokens: 705
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T13:13:03-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
- Identify that the user wants a *conceptual* introduction, not a deep dive into code or RFC text.  
- Assume they know basic OAuth 2.0 but may be unfamiliar with “resource indicators.”  
- Decide to keep it concise (≈200 words) and focus on why the RFC exists, its core idea, and practical impact.

**2️⃣ Build a mental model**  
- Treat OAuth 2.0 as an *authorization* framework: client → auth server → resource server(s).  
- Add “resource indicator” as an extra layer that tells the auth server *which* downstream resource the token is meant for.  
- Map this onto a simple diagram in mind: Client ➜ Auth Server (with indicator) ➜ Resource Server.

**3️⃣ Step‑by‑step reasoning**  
1. **State the problem:** In multi‑resource scenarios, an access token might be valid for several APIs; without context, the auth server can’t tailor scopes or policies.  
2. **Introduce RFC 8707:** It formalizes a way to attach a URI (the resource indicator) to authorization requests and token responses.  
3. **Explain mechanics:** Client includes `resource` parameter in the request; token response echoes it; resource servers verify it matches their own URI.  
4. **Highlight benefits:** Fine‑grained scope, better revocation, clearer audit trails.  
5. **Wrap up with practical note:** Most libraries now expose a `resource` option; implementers should validate against known URIs.

**4️⃣ Avoid common traps**  
- Don’t confuse “resource server” with “resource indicator.”  
- Remember it’s optional; many legacy systems ignore it.  
- Avoid over‑simplifying: the indicator is a URI, not just a string label.

**5️⃣ Sanity‑check & communicate**  
- Re‑read to ensure each sentence logically follows the previous one.  
- Ask mentally: “If I were explaining this to someone with only OAuth 2.0 basics, would they grasp why an extra parameter is useful?”  
- Adjust wording for clarity and keep jargon minimal.

By following these five steps you’ll produce a clear, focused explanation of RFC 8707 that stays within the requested length and covers the essential concepts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
