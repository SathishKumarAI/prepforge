---
qid: ing_5b6d370998__faang__local
question: 'Explain: ABAC — Designing an Authorization Model for an Enterprise | Cerbos'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 435
total_tokens: 673
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:15:42-05:00'
sources: []
---

**ABAC – Attribute‑Based Access Control (Cerbos)**  
*Structured interview answer (≈200 words)*  

| Step | What to say |
|------|-------------|
| **Clarify** | *Restate*: “We’re building an enterprise authorization layer that decides, at request time, whether a user can perform an action on a resource.” <br>*Assumptions*: 1) All subjects, objects and actions expose attributes; 2) Policies are centrally stored and versioned; 3) The system must support dynamic context (time, location). |
| **Approach** | 1️⃣ **Attribute model** – define subject, resource, action, environment. <br>2️⃣ **Policy language** – declarative rules (e.g., Cerbos JSON) that combine attributes with logical operators. <br>3️⃣ **Evaluation engine** – fast in‑memory resolver that applies policies and returns allow/deny. <br>4️⃣ **Audit & observability** – log decisions for compliance. |
| **Depth** | *Policy example*: `allow if subject.role == "manager" && resource.owner_id == subject.id`. <br>*Evaluation complexity*: O(p) where p = number of applicable policies; optimized with indexes on attributes. <br>*Trade‑offs*: Rich expressiveness vs. evaluation latency – use caching for hot paths. |
| **Edge Cases** | • Missing attribute → default deny (principle of least privilege). <br>• Conflicting rules → policy precedence or “deny‑by‑default”. <br>• Circular references in attributes → detect at load time. |
| **Optimize & Communicate** | • Pre‑compile policies into decision trees for O(1) lookup. <br>• Batch evaluate for bulk requests to reduce overhead. <br>Explain that Cerbos’s open‑source engine already implements these optimizations, and I’d monitor throughput/latency, adjusting cache sizes or sharding policy store as needed. |

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
