---
qid: ing_d44674891d__faang__local
question: 'Explain: The Five Laws of Authorization — The five laws of cloud-native
  authorization'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 570
total_tokens: 808
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:53:41-05:00'
sources: []
---

**Clarify**  
You’re asking for a concise, interview‑ready rundown of the *Five Laws of Authorization* that govern secure, cloud‑native systems. I’ll assume you want the core principles (least privilege, separation of duties, auditability, composable policies, and resilience) and how they map to real‑world patterns.

**Approach**  
1. List each law with a one‑sentence definition.  
2. Tie each to an architectural pattern or best practice.  
3. Highlight the typical tooling (e.g., OPA, RBAC, ABAC).  
4. End with a quick note on trade‑offs and why these laws matter in production.

**Depth**  

| Law | Definition | Cloud‑Native Pattern / Tool |
|-----|------------|-----------------------------|
| **1️⃣ Least Privilege** | Grant only the minimal permissions needed for a task or service. | Fine‑grained IAM roles, Kubernetes ServiceAccounts, *opa* policy checks. |
| **2️⃣ Separation of Duties** | No single entity can perform all critical actions; responsibilities are distributed. | Multi‑role approvals in CI/CD, distinct API gateways per microservice. |
| **3️⃣ Auditable Accountability** | Every authorization decision must be logged and traceable. | Cloud Audit Logs, OpenTelemetry traces, immutable event stores. |
| **4️⃣ Policy Composability** | Policies can be combined, overridden, or inherited without breaking the whole system. | Reusable policy bundles in OPA/Gatekeeper, declarative YAML manifests. |
| **5️⃣ Resilient Fallback** | Authorization must remain functional under partial outages and still enforce safety. | Circuit‑breaker patterns, default‑deny with graceful degradation. |

**Edge Cases**  
- *Hot‑fixes*: temporary overrides can violate least privilege if not tracked.  
- *Zero‑trust networks*: separation of duties is hard when services communicate over shared VPCs.  
- *Performance*: policy evaluation latency must stay <10 ms for high‑throughput APIs.

**Optimize & Communicate**  
Emphasize that these laws aren’t just guidelines; they’re enforceable constraints baked into CI pipelines and runtime guards. In an interview, I’d finish by saying: “By treating authorization as a first‑class architectural pillar—rather than a bolt‑on security layer—we achieve scalability, compliance, and rapid innovation.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
