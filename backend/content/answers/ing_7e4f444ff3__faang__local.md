---
qid: ing_7e4f444ff3__faang__local
question: 'Explain: Cloud-native and open — The five laws of cloud-native authorization'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 576
total_tokens: 813
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:38:53-05:00'
sources: []
---

**Clarify**  
We’re asked to explain the *five laws of cloud‑native authorization*—the guiding principles that shape how we design secure, scalable auth systems in a cloud‑first world. I’ll assume the audience knows basic OAuth2/OpenID Connect but wants the high‑level “why” and “how” behind these rules.

**Approach**  
1. List each law briefly.  
2. For each, give its core intent, typical implementation patterns, and trade‑offs.  
3. Keep language concise yet technical enough for a FAANG interview.

**Depth**

| Law | Intent | Typical Implementation | Trade‑offs |
|-----|--------|------------------------|------------|
| **1️⃣ Decentralized Identity** | Treat identity as a first‑class resource, not bound to any single service. | Use federated IdPs (e.g., OIDC) and store claims in tokens. | Increases complexity of trust chains; requires robust PKI. |
| **2️⃣ Stateless Tokens** | Avoid server‑side session stores for scalability. | JWTs signed by a shared key or JWK set; short lifetimes + refresh flows. | Token revocation is harder; larger payload can hit bandwidth limits. |
| **3️⃣ Fine‑grained, Contextual Claims** | Permissions should be expressed as claims tied to context (scopes, roles, resource IDs). | Scope strings + attribute assertions in JWTs; use ABAC engines. | More complex token generation logic; risk of over‑granting if misconfigured. |
| **4️⃣ Zero Trust by Default** | Never trust incoming requests; enforce least privilege everywhere. | Mutual TLS, mTLS‑enabled service meshes, runtime policy enforcement (OPA). | Adds latency and operational overhead; requires proper key rotation. |
| **5️⃣ Observability & Auditing** | Every auth decision must be traceable for compliance and debugging. | Centralized logs, audit trails, event streams (Kafka/Cloud Pub/Sub). | Extra storage and processing cost; must balance privacy with transparency. |

**Edge Cases**  
- Token size limits in HTTP headers → compress or split claims.  
- Revoking short‑lived JWTs → implement a revocation list or use opaque tokens.  
- Cross‑cloud federation → ensure clock skew tolerance and consistent JWKS endpoints.

**Optimize & Communicate**  
Emphasize that these laws are orthogonal: you can adopt any subset, but full compliance yields the most resilient systems. Highlight trade‑offs early to show awareness of real‑world constraints. End with a quick note: “In practice, we layer these principles—start with stateless JWTs and add mTLS once we hit scaling thresholds.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
