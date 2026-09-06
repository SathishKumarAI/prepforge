---
qid: ing_049fd79df9__think__local
question: 'Explain: 2.1. Authorization Request — RFC 8707: Resource Indicators for
  OAuth 2.0 | RFC Editor'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 205
output_tokens: 500
total_tokens: 705
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T03:02:25-05:00'
sources: []
---

**Thinking process (for explaining the “Authorization Request” section of RFC 8707)**  

1. **Clarify scope & assumptions**  
   - *What*: The part of the spec that shows how a client tells an Authorization Server which resource it wants to access, using the `resource` parameter.  
   - *Assumptions*: Reader knows basic OAuth 2.0 flow (client‑server roles, tokens), and is familiar with RFC 6749 terminology.

2. **Mental model / framework**  
   - Treat the request as a *message* that carries intent: “I need access to X on behalf of Y.”  
   - Map each parameter (`response_type`, `client_id`, `redirect_uri`, etc.) onto roles in this message (identifiers, security controls, target).

3. **Step‑by‑step reasoning**  
   a. Identify the request type (authorization code, implicit, device).  
   b. Enumerate mandatory fields per RFC 6749 and note where `resource` is optional/required.  
   c. Explain how `resource` can appear multiple times for multi‑resource scopes.  
   d. Show how it influences the Authorization Server’s decision: whether to issue a token scoped to that resource or reject.

4. **Common traps**  
   - Mixing up *resource* (the protected API) with *scope* (permissions).  
   - Forgetting that `resource` is not part of the access‑token itself; it only guides issuance.  
   - Assuming every Authorization Server must support it—RFC 8707 only defines the syntax, not enforcement.

5. **Sanity‑check & communication**  
   - Verify each parameter’s presence against a real example request (e.g., `https://auth.example.com/auth?response_type=code&client_id=abc…&resource=https%3A%2F%2Fapi.example.com`).  
   - When explaining, use the “client → AS” arrow to remind that `resource` is sent by the client and processed by the server.  
   - End with a quick recap: “The `resource` parameter tells the Authorization Server which protected API the resulting token should allow access to; it’s optional unless required for the flow or policy.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
