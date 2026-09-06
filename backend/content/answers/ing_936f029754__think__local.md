---
qid: ing_936f029754__think__local
question: 'Explain: 2.2. Access Token Request — RFC 8707: Resource Indicators for
  OAuth 2.0'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 203
output_tokens: 487
total_tokens: 690
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T10:49:57-05:00'
sources: []
---

**1. Clarify the scope and assumptions**  
- The user wants an explanation of *“Access Token Request – RFC 8707: Resource Indicators for OAuth 2.0”*.  
- Assume they have basic OAuth 2.0 knowledge but need specifics on how a resource indicator changes the token request flow.  
- We’ll keep it concise (≈150‑220 words) and focus on the key concepts, not the entire RFC.

**2. Mental model / framework to use**  
- Treat OAuth as a 3‑party exchange: *client → authorization server → resource server*.  
- Introduce “resource indicator” as an extra hint that tells the AS which downstream API(s) the token will target.  
- Map this onto the standard token request diagram, noting where the new parameter appears and how it influences the response.

**3. Step‑by‑step reasoning**  
1. Start with a regular `token` endpoint call (client_id, client_secret, grant_type).  
2. Add the optional `resource` query or form parameter.  
3. Explain that `resource` can be one URI or a list, and that it is *not* used for authorization checks by the AS but as metadata.  
4. Show how the AS may use the indicator to:  
   - Select an appropriate signing key (e.g., per‑resource audience).  
   - Return a token whose `aud` claim matches the indicated resource(s).  
5. Mention that the AS can also return *multiple* tokens or a single token with multiple audiences, depending on policy.

**4. Common traps to avoid**  
- Don’t conflate “resource indicator” with scopes; they are orthogonal.  
- Avoid implying the AS will validate the URI against its own resources; it merely echoes it back.  
- Remember that the parameter is optional and only useful when multiple resource servers exist.

**5. Sanity‑check & communication**  
- Verify we’ve covered: purpose, placement, effect on `aud`, interaction with scopes, and policy flexibility.  
- Conclude by summarizing that RFC 8707 simply adds a hint to the token request so that tokens are issued with the correct audience(s) for downstream APIs, improving multi‑resource scenarios without changing core OAuth semantics.

---

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
