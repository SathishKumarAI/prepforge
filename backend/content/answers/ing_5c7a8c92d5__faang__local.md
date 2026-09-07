---
qid: ing_5c7a8c92d5__faang__local
question: 'Explain: Comparing RBAC and ABAC — Designing an Authorization Model for
  an Enterprise | Cerbos'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 529
total_tokens: 771
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:18:26-05:00'
sources: []
---

**Clarify**  
We need to compare Role‑Based Access Control (RBAC) vs Attribute‑Based Access Control (ABAC) for a large enterprise using Cerbos as the policy engine. Key assumptions: users, resources, and actions are well‑defined; policies must scale across dozens of services; compliance requires auditability and dynamic context.

**Approach**  
1. Outline RBAC strengths/weaknesses.  
2. Outline ABAC strengths/weaknesses.  
3. Map each to Cerbos features (policy DSL, runtime).  
4. Recommend a hybrid strategy that balances simplicity with fine‑grained control.

**Depth**  

| Aspect | RBAC | ABAC |
|--------|------|------|
| **Model** | Users → Roles → Permissions (static mapping) | Policies evaluate attributes (user, resource, environment) at runtime |
| **Scalability** | Role explosion when many granular permissions needed; role churn costly | One policy per “policy type”; fewer changes as attributes evolve |
| **Flexibility** | Limited to predefined roles; difficult to express contextual rules (e.g., time‑of‑day) | Express conditions like `user.dept == resource.ownerDept && now < 5pm` |
| **Audit & Compliance** | Role assignments easy to audit; however, role changes may not capture context | Full policy logs provide granular audit trail; easier to prove compliance for dynamic rules |
| **Cerbos Fit** | Use Cerbos “role” objects and “allow” actions; policies remain simple but require many entries | Use Cerbos’s attribute model (JSON path predicates) to encode ABAC logic; single policy per resource type |

**Edge Cases**  
- *Role explosion*: too many roles degrade maintainability.  
- *Attribute drift*: if user attributes change, ABAC may silently alter access unless updated.  
- *Policy conflicts*: overlapping ABAC rules must be resolved deterministically.

**Optimize & Communicate**  
Recommend a **hybrid model**:  
1. Use RBAC for coarse‑grained, stable permissions (e.g., “Finance”, “HR”).  
2. Layer ABAC policies in Cerbos to enforce contextual constraints (e.g., “access only during business hours” or “only if user’s clearance >= resource sensitivity”).  

Explain that this keeps the policy surface manageable while leveraging Cerbos’s runtime evaluation for dynamic, audit‑ready decisions. This balance satisfies enterprise scalability and compliance without over‑engineering roles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
