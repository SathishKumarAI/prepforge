---
qid: ing_a37e8049b0__think__local
question: 'Explain: Hierarchical RBAC — Designing an Authorization Model for an Enterprise
  | Cerbos'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 196
output_tokens: 430
total_tokens: 626
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T11:52:53-05:00'
sources: []
---

**1. Clarify the scope and assumptions**  
   - *What is being asked?* We need to explain how Hierarchical RBAC works and why Cerbos uses it for enterprise authorization.  
   - *Assume the reader knows basic RBAC (roles, permissions) but not hierarchical extensions or Cerbos’ specifics.*  

**2. Adopt a mental model / framework**  
   - Start with **RBAC fundamentals → Role hierarchy → Inheritance rules → Cerbos implementation details**.  
   - Think of roles as nodes in a tree; permissions are attached to leaves and propagate upward.

**3. Reason step‑by‑step toward the explanation**  
   1. Define RBAC and its limitations (flat role lists).  
   2. Introduce hierarchy: parent–child relationships, inherited rights.  
   3. Explain how this reduces duplication (one permission granted to a “Manager” role automatically applies to all subordinate roles).  
   4. Map the model onto Cerbos: policy files, subject attributes, resource scopes, and how Cerbos evaluates a request by walking the hierarchy.  
   5. Highlight benefits for enterprises (scalability, audit‑friendly).

**4. Common traps to avoid**  
   - *Mixing up inheritance direction*: remember permissions flow from child → parent in most RBAC hierarchies.  
   - *Overlooking circular dependencies*: ensure role graphs remain acyclic.  
   - *Assuming Cerbos is purely a policy engine*: it also stores role definitions and handles attribute resolution.

**5. Sanity‑check & communicate**  
   - Verify that each bullet logically follows the previous one.  
   - Use concrete examples (e.g., “Developer” inherits from “Team Lead”).  
   - Conclude with a quick recap: hierarchical RBAC extends flat RBAC, Cerbos implements it via policy files and attribute resolution to give enterprises a flexible, auditable model.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
