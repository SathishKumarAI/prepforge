---
qid: ing_d7a143a292__faang__local
question: 'Explain: When to use RBAC — Designing an Authorization Model for an Enterprise
  | Cerbos'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 441
total_tokens: 682
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:00:51-05:00'
sources: []
---

**Clarify**  
The interview asks when a *Role‑Based Access Control* (RBAC) model is appropriate for designing enterprise authorization in Cerbos, and how it compares to other models. I’ll assume the system handles fine‑grained permissions over many resources, supports auditability, and must scale across departments.

**Approach**  
1. Outline RBAC fundamentals.  
2. Identify scenarios where RBAC shines: large user bases, clear organizational hierarchies, reusable policies.  
3. Contrast with ABAC/OPA for dynamic attributes.  
4. Highlight Cerbos‑specific benefits (policy-as-code, policy versioning).  

**Depth**  
RBAC assigns *roles* to users; each role bundles permissions on resources. It excels when:  
- **Static hierarchies** exist (e.g., Manager > Employee).  
- **Policy reuse** is critical—roles can be shared across teams.  
- **Compliance** demands auditable, traceable permission sets.  
Cerbos lets you encode roles as policy files; changes propagate instantly, and versioning guarantees audit trails.

ABAC or OPA shines when permissions depend on runtime attributes (e.g., location, device). However, they add complexity: more variables to manage, harder to reason about defaults. For an enterprise with well‑defined departments, RBAC keeps the model simple and maintainable while still allowing fine‑grained actions via nested roles or resource scopes.

**Edge Cases**  
- *Role explosion* if too many specialized roles are created; mitigate by grouping permissions into composite roles.  
- *Dynamic context* (e.g., remote workers) may require hybrid RBAC+ABAC to enforce conditional access.  

**Optimize & Communicate**  
Recommend starting with a core set of business‑driven roles, then iteratively flatten or merge them based on usage analytics. Explain the trade‑off: RBAC offers clarity and auditability; ABAC offers flexibility but at the cost of complexity. In Cerbos, keep policies declarative and versioned to blend both worlds efficiently.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
