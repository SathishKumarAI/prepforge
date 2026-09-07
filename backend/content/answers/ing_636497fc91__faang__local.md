---
qid: ing_636497fc91__faang__local
question: Design agent orchestration across dozens of connected SaaS systems. Where
  is authorization enforced, and why can it not live in the model?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 460
total_tokens: 709
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:34:44-05:00'
sources: []
---

**Clarify**  
We need an orchestrator that coordinates multiple SaaS services (CRM, ERP, BI, etc.) while ensuring every API call is authorized. The question asks *where* the authorization check lives and why it can’t be embedded in the AI model itself.

Assumptions:  
- All SaaS APIs use OAuth/OIDC or mutual TLS.  
- The orchestrator runs as a stateless micro‑service behind an API gateway.  
- The AI model is purely a computation engine, not a policy engine.

**Approach**  
1. Place authorization at the *edge* (API gateway / ingress).  
2. Use token introspection/claim checks to decide if a request can reach the orchestrator.  
3. Inside the orchestrator, enforce fine‑grained role‑based access via a lightweight service registry.  
4. The AI model receives only sanitized data; it never sees raw tokens.

**Depth**  
- **Edge enforcement**: OIDC JWTs are verified once per request (O(1)).  
- **Orchestrator checks**: A lookup table of allowed SaaS scopes (O(log n) with a B‑tree).  
- **Model isolation**: The model is served via an inference endpoint that strips all auth headers, so the model cannot be tricked into acting on behalf of another user.  
Why not in the model? Models are data‑driven; they can’t reliably enforce stateful policies or audit trails. Trust boundaries would break if the model could decide which SaaS to call.

**Edge cases**  
- Token revocation: use a cache with TTL and a webhook for immediate invalidation.  
- Privilege escalation via compromised tokens: monitor anomalous request patterns.  

**Optimize & communicate**  
Explain that placing auth at the gateway gives *single source of truth* for identity, reduces attack surface, and keeps the AI pure. If performance is critical, cache token claims; if auditability matters, log every gate‑pass decision. This layered strategy balances security, scalability, and maintainability—exactly what FAANG teams look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
