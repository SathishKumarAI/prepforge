---
qid: ing_825e568e22__faang__local
question: 'Explain: RBAC — Designing an Authorization Model for an Enterprise | Cerbos'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 466
total_tokens: 704
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:47:57-05:00'
sources: []
---

**1️⃣ Clarify**  
*Problem:* Build a scalable, policy‑driven authorization layer (RBAC) for an enterprise app that can handle hundreds of roles, thousands of resources, and fine‑grained permissions while supporting dynamic attributes (e.g., department, seniority).  
*Assumptions to confirm:* 1) Role hierarchies are static; 2) Policies are defined in a declarative language; 3) Permissions must be auditable and revocable at runtime.  

**2️⃣ Approach**  
1. Store roles, resources, and permissions in a graph database (Neo4j/JanusGraph).  
2. Represent each user as a node connected to role nodes; each role connects to permission nodes via “has‑perm” edges.  
3. Evaluate access by traversing the graph from the user → role(s) → permission → resource, applying policy predicates on the fly (e.g., `user.dept == resource.ownerDept`).  

**3️⃣ Depth**  
- *Policy Engine:* Use a rule engine (Drools or custom DSL) to parse Cerbos‑style policies.  
- *Caching:* Maintain an in‑memory cache of resolved permissions per user, refreshed on role/attribute changes.  
- *Complexity:* Permission lookup is O(depth_of_graph), typically <5 hops; caching reduces repeated lookups to O(1).  
- *Trade‑offs:* Graph DB offers flexibility but adds operational overhead; a relational fallback could be used for bulk audit queries.  

**4️⃣ Edge Cases**  
- Circular role inheritance → detect via DFS and reject.  
- Role revocation while session active → invalidate cache token.  
- Attribute drift (user moved departments) → trigger re‑authorization on next request.  

**5️⃣ Optimize & Communicate**  
Explain that this design scales horizontally—adding new roles or resources is just inserting nodes/edges, no code changes. Emphasize the declarative policy layer for maintainability and auditability. Conclude by noting that Cerbos’ open‑source SDKs can be wrapped around this graph to provide a unified API for all microservices.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
