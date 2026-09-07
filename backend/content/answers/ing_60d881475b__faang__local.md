---
qid: ing_60d881475b__faang__local
question: 'Explain: Access Control for LLM Systems'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 509
total_tokens: 739
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:29:13-05:00'
sources: []
---

**Clarify**  
We’re asked how to enforce *who* can read or write data in a large‑language‑model (LLM) system—i.e., authentication and authorization for model inputs/outputs. I’d confirm:  
1. Are we protecting user prompts, model weights, or both?  
2. Is the system cloud‑based, on‑prem, or edge?  
3. What compliance regimes (GDPR, HIPAA) apply?

**Approach**  
1. **Identity layer** – integrate with OAuth/OIDC or SAML for single sign‑on.  
2. **Attribute‑based access control (ABAC)** – encode roles (admin, analyst), data sensitivity tags, and contextual attributes (time, IP).  
3. **Fine‑grained policy engine** – use Open Policy Agent (OPA) to evaluate ABAC rules before any request reaches the model.  
4. **Secure API gateway** – throttle, log, and enforce token scopes.  
5. **Encryption at rest/in transit** – HSM‑backed keys for weights; TLS 1.3 for APIs.

**Depth**  
- *Authentication*: JWT with short‑lived access tokens + refresh flow.  
- *Authorization*: OPA policy written in Rego; e.g., `allow = data.roles[role] == "analyst" && input.sensitivity <= role.max_sensitivity`.  
- *Complexity*: Policy evaluation is \(O(n)\) over attributes, negligible compared to inference latency.  
- *Trade‑offs*: ABAC offers flexibility but can become a bottleneck if policies are overly complex; caching decisions mitigates this.

**Edge Cases**  
- Token replay attacks → use nonce and rotate keys.  
- Model updates that change sensitivity tags → trigger re‑policy evaluation.  
- Zero‑trust networking: ensure all internal services authenticate via mTLS.

**Optimize & Communicate**  
- Cache policy results per user‑session to reduce OPA calls.  
- Use a layered defense: network ACLs + API gateway + OPA.  
- In my interview narrative, I’d emphasize that secure access control is not just about blocking unauthorized reads; it also protects the model’s intellectual property and prevents data leakage through outputs. This structured flow demonstrates clear problem‑solving, technical depth, and awareness of operational constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
