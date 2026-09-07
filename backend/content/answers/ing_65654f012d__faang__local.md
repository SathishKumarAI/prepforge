---
qid: ing_65654f012d__faang__local
question: 'Explain: Developer-centric — The five laws of cloud-native authorization'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 423
total_tokens: 658
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:40:04-05:00'
sources: []
---

**Clarify**  
The interviewer asks for a concise, developer‑centric explanation of the “five laws of cloud‑native authorization.” I’ll assume they want the core principles that guide how we design auth in microservices: *principle of least privilege, composability, policy‑driven, audit‑ready, and identity‑first*.  

**Approach**  
I’ll first restate each law, then illustrate with a typical SaaS stack (API gateway → service mesh → downstream services). I’ll note how the laws influence token design, policy evaluation, and observability.  

**Depth**  
1. **Least Privilege** – Tokens contain only scopes needed for the current request; services reject any excess claims.  
2. **Composability** – Authorization logic is decoupled into reusable policies (OPA/Keycloak) so services can share rules without code duplication.  
3. **Policy‑Driven** – Rules live in a central store and are evaluated at runtime, allowing dynamic updates without redeploying services.  
4. **Audit‑Ready** – Every decision is logged with request context; logs feed into SIEM for compliance.  
5. **Identity‑First** – All requests carry an identity token (JWT/OIDC) that is the single source of truth; downstream services never rely on IP or network assumptions.  

**Edge Cases**  
- Token revocation latency → use short lifetimes + refresh tokens.  
- Cross‑region policy sync lag → versioned policy bundles.  
- Service mesh sidecar misconfigurations → health checks for auth proxies.  

**Optimize & Communicate**  
I’d highlight trade‑offs: tighter scopes increase security but add token churn; central policies simplify governance but can become bottlenecks. I’ll finish by stressing that these laws turn authorization from a brittle, per‑service concern into a scalable, observable system—exactly what FAANG teams expect when building cloud‑native products.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
