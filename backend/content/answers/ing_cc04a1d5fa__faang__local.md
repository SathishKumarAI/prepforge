---
qid: ing_cc04a1d5fa__faang__local
question: 'Explain: Authentication and Authorization — What is an API Gateway? - by
  Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 449
total_tokens: 691
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:33:43-05:00'
sources: []
---

**Clarify**  
The question asks for a concise explanation of **authentication & authorization** in the context of an **API gateway**, and how the gateway implements these security layers. I’ll assume we’re talking about stateless REST/GraphQL services behind a single entry point.

---

### 1. Approach
1. Define *authentication* (who is) vs *authorization* (what they can do).  
2. Explain what an API gateway does in micro‑service architectures.  
3. Map the two security steps onto gateway responsibilities.  
4. Touch on common protocols and token flows.  

---

### 2. Depth
- **Authentication**: The gateway validates a bearer token (JWT, OAuth 2.0) or API key presented in the `Authorization` header. It verifies signature/expiry against an auth service or public key infrastructure, then injects user claims into downstream requests.
- **Authorization**: After authentication, the gateway checks scopes/roles from the claim set or consults a policy engine (OPA, XACML). If allowed, it forwards the request; otherwise returns 403.  
- **Benefits**: Centralized enforcement, reduced duplication across services, easier rotation of credentials, and consistent audit logs.

---

### 3. Edge Cases
- **Token revocation**: Gateway must support short‑lived tokens or a revocation list to prevent stale access.  
- **Multi‑tenant scopes**: Ensure tenant isolation; misconfigured policies can leak data.  
- **Rate limiting & DoS**: Combine auth checks with throttling to protect services.

---

### 4. Optimize & Communicate
To improve performance, cache validated tokens in an LRU store so repeated lookups avoid external calls. For clarity in a production system, expose a *policy‑as‑code* interface and use automated tests that simulate various claim combinations.  

By structuring the answer this way—clarifying terms, outlining the plan, diving into technical details, anticipating pitfalls, and suggesting optimizations—we demonstrate the analytical rigor expected in FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
