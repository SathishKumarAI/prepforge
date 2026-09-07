---
qid: ing_42ad90625e__faang__local
question: 'Explain: What is an authorization model — Designing an Authorization Model
  for an Enterprise | Cerbos'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 507
total_tokens: 748
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:19:07-05:00'
sources: []
---

**Clarify**  
*Problem:* We need to design a scalable, policy‑driven authorization system for an enterprise with many services, users, and data types (e.g., documents, APIs).  
*Assumptions to confirm:* 1) Users belong to roles/teams; 2) Permissions are fine‑grained (CRUD + custom actions); 3) Policies may change at runtime; 4) Auditing and compliance are required.

**Approach**  
1. **Policy abstraction** – represent rules as *subjects → objects → actions* with optional conditions (time, location).  
2. **Central policy store** – a read‑optimized database (e.g., DynamoDB/Spanner) or key‑value store for rapid lookup.  
3. **Evaluation engine** – stateless microservice that fetches relevant policies and evaluates using short‑circuit logic.  
4. **Caching & pre‑evaluation** – cache user‑policy bindings; use compiled policy trees to avoid repeated parsing.  
5. **Audit trail** – log every decision with context for compliance.

**Depth**  
- Policies expressed in a declarative language (e.g., CEL or JSON‑Policy).  
- Engine complexity: O(log n) per lookup if policies are indexed by subject/role; evaluation is linear in number of applicable rules.  
- Use short‑circuit “deny‑by‑default” to minimize processing.  
- Support *attribute‑based access control* (ABAC) for dynamic attributes and *role‑based access control* (RBAC) for static groups.

**Edge Cases**  
- Conflicting policies → resolve by priority or deny‑first rule set.  
- Circular role definitions – detect during import.  
- High‑volume read traffic – ensure cache hit rate >95%.  
- Policy drift over time – implement automated validation against baseline models.

**Optimize & Communicate**  
Iterate with a “policy sandbox” allowing admins to test changes before deployment. Offer real‑time dashboards for policy health and audit alerts. Explain the trade‑off: a central engine simplifies governance but must be horizontally scaled; caching reduces latency at cost of stale data—mitigate with short TTLs and versioning. This design balances flexibility, performance, and compliance—exactly what FAANG teams expect in an enterprise authorization model.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
