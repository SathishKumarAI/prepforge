---
qid: ing_9a5759105c__think__local
question: 'Explain: 2.1. Authorization Request — RFC 8707: Resource Indicators for
  OAuth 2.0'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 202
output_tokens: 508
total_tokens: 710
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T11:17:22-05:00'
sources: []
---

**Metacognition for explaining “Authorization Request – RFC 8707 (Resource Indicators for OAuth 2.0)”**

1. **Clarify the scope & assumptions**  
   - *Audience*: readers know basic OAuth 2.0 flow but not RFC 8707 specifics.  
   - *Goal*: show why resource indicators exist, how they’re used in an auth request, and what changes they bring to the standard flow.

2. **Choose a mental model**  
   - Treat the OAuth flow as a *message exchange* between client → authorization server → resource server.  
   - Add a new “resource” dimension: a URI that identifies the target API or scope set on that server.

3. **Step‑by‑step reasoning**  
   1. Start with the classic auth request (`/authorize` + `client_id`, `response_type`, etc.).  
   2. Introduce the optional `resource` query parameter per RFC 8707: a URI (or multiple URIs) that tells the AS which resource server(s) the client intends to access.  
   3. Explain how the AS validates the resource URI, may present it in consent screens, and scopes the token accordingly.  
   4. Note that if omitted, the AS assumes “default” or “any” resources, potentially leading to over‑privileged tokens.  
   5. Highlight that the same `resource` value is later used in the token request (`/token`) so the AS can issue a token scoped for those URIs.

4. **Common traps**  
   - Confusing the *resource* URI with an OAuth scope string.  
   - Assuming all ASs support multiple resource values; some only allow one.  
   - Overlooking that `resource` is purely informational to the AS—no enforcement on the client side.

5. **Sanity‑check & verbalize**  
   - Verify that each step logically follows: “add a hint → AS can tailor scopes.”  
   - Use an example (e.g., `resource=https://api.example.com`) and walk through what the browser sees, what the AS shows, and how the token is returned.  
   - Conclude by summarizing benefits: tighter scope enforcement, clearer consent, reduced risk of over‑privileged tokens.

This structured approach ensures clarity, completeness, and guards against common misunderstandings.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
