---
qid: ing_08023f53ef__faang__local
question: 'Explain: Copyright Notice — RFC 8707: Resource Indicators for OAuth 2.0
  | RFC Editor'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 639
total_tokens: 883
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:02:49-05:00'
sources: []
---

**Clarify**  
You’re asking for a concise explanation of **RFC 8707 – “Resource Indicators for OAuth 2.0”**.  
Assumptions:  
1. The audience knows basic OAuth‑2.0 flow (client → auth server → resource).  
2. They’re interested in how the spec lets clients target specific resources when the same authorization grant could be used for many APIs.

---

**Approach**  
* Outline what a “resource indicator” is.  
* Explain where it appears in the protocol (request headers, query params).  
* Show the impact on token issuance and scope mapping.  
* Touch on security & interoperability implications.

---

**Depth**  

| Step | What happens | Why it matters |
|------|--------------|----------------|
| **1. Client request** | Client sends `audience` or `resource` header (or `resource=` query) to the authorization endpoint. | Signals which downstream API the client intends to call. |
| **2. Auth server** | Validates the indicator, may apply a policy mapping it to one or more scopes, then issues an access token scoped accordingly. | Prevents over‑privileged tokens; aligns with least‑privilege principle. |
| **3. Resource server** | Reads the same header when validating the token and ensures the token’s audience matches the resource. | Stops token replay on unrelated services. |
| **4. Token format** | Standard JWT claims (`aud`) or custom `resource` claim can be used; RFC allows flexibility. | Enables cross‑domain multi‑tenant deployments without a new grant type. |

*Complexity*: O(1) per request; no extra round‑trips.

---

**Edge Cases**  

| Edge | What could break it? | Test |
|------|---------------------|------|
| Multiple resources in one token | Policy mis‑configuration → scope leakage | Verify token contains *exactly* the requested scopes. |
| Legacy clients without header support | Fallback to default audience → over‑privilege | Ensure backward compatibility or enforce migration. |
| Token replay across services | Resource server ignores indicator | Test with identical tokens on two APIs expecting different `aud`. |

---

**Optimize & Communicate**  
- **Performance**: Keep the indicator in a single header; no DB lookups per request if mapping is static.  
- **Security**: Enforce strict validation of the indicator and reject unknown values.  
- **Narrative**: “RFC 8707 lets us piggy‑back a tiny hint—‘I want to talk to API X’—into the OAuth dance, so each token is purpose‑built and we avoid the ‘token = everything’ pitfall.”  

This structure aligns with FAANG interview expectations: clear problem framing, systematic solution, depth on mechanics, edge‑case awareness, and concise optimization insights.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
