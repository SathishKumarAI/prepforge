---
qid: ing_491d96faa3__fp__local
question: 'Explain: Core RBAC — Designing an Authorization Model for an Enterprise
  | Cerbos'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 543
total_tokens: 719
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:41:02-05:00'
sources: []
---

**Core RBAC – the “why” behind enterprise‑grade authorisation**

At its heart an organisation must decide *who* may perform *what* on *which* data.  
If we denote users by **U**, resources by **R** and actions by **A**, every legal operation is a triple \((u,r,a)\).  The fundamental problem is to reduce the combinatorial explosion of such triples into something that can be reasoned about, audited and evolved.

1. **Principle of least privilege**  
   We want each user to have *just enough* rights.  This is achieved by grouping users into *roles* \(S\) that capture job functions.  A role is a set of permissions \(\{(r,a)\}\).  By assigning roles rather than individual permissions we enforce the “minimum” requirement automatically.

2. **Hierarchy and inheritance**  
   Roles often have sub‑roles; a parent inherits all child permissions plus its own.  This mirrors organisational hierarchy (manager → team lead → engineer) and guarantees consistency: adding a new permission to a high‑level role propagates downstream, avoiding orphaned rights.

3. **Separation of duty as a constraint**  
   Certain combinations of roles are forbidden (e.g., “approve” + “submit”).  These constraints are expressed declaratively (e.g., *not both*), allowing the policy engine to check compliance in one pass.

4. **Cerbos’s twist: policy‑as‑code**  
   Instead of hard‑coded tables, Cermos stores RBAC rules as JSON/YAML policies that can be versioned and tested like code.  This satisfies two deep principles:
   * **Transparency:** audit logs are deterministic because the same policy is executed everywhere.
   * **Composability:** policies can reference other roles or external attributes (time of day, location), enabling fine‑grained context‑aware decisions.

**Non‑obvious insight:**  
RBAC’s power lies not just in grouping permissions but in treating *roles as first‑class objects* that can themselves be subject to constraints and dynamic attributes.  By elevating roles to policy entities (as Cerbos does), you turn static authorisation into a flexible, testable, and version‑controlled system—essential for modern microservices where the same role may mean different things in different services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
