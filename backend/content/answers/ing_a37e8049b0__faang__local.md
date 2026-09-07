---
qid: ing_a37e8049b0__faang__local
question: 'Explain: Hierarchical RBAC — Designing an Authorization Model for an Enterprise
  | Cerbos'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 602
total_tokens: 842
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:05:03-05:00'
sources: []
---

**Clarify**  
We’re asked to explain *Hierarchical RBAC* as used by Cerbos for enterprise‑grade authorization.  Key assumptions: the model must support many users, roles, and resources; it should allow role inheritance, dynamic attributes, and efficient runtime checks.

**Approach**  
1. Define core entities (User, Role, Permission).  
2. Introduce a hierarchy where roles can inherit permissions from parent roles.  
3. Explain attribute‑based constraints that refine the model.  
4. Show how Cerbos implements this with its policy language and engine.

**Depth**  

| Layer | What it does | Implementation in Cerbos |
|-------|--------------|-------------------------|
| **Roles** | Atomic permission sets (e.g., *ReadOrders*, *ApproveInvoices*). | Stored as JSON policies; each role is a named policy set. |
| **Hierarchy** | A DAG of roles where `Manager → Sales` means Manager inherits all Sales permissions plus its own. | Policies reference parent roles via an `inherits` field; the engine resolves transitive closure at load time. |
| **Attributes** | Contextual data (department, location, device) that gates permission evaluation. | Policies use Cerbos’s expression language (`if department == "sales" && region == "EU"`). |
| **Users** | Assigned to one or more roles; can have per‑user attributes overriding defaults. | User records in a lightweight DB reference role IDs and attribute maps. |
| **Evaluation** | At request time, the engine merges user, role, and resource attributes, then checks policy conditions. | Linear in number of policies; caching avoids recomputing inherited permissions on every call. |

*Complexity*: Loading policies is O(R + E) where R = roles, E = edges in hierarchy. Runtime check is O(1) per permission once the inheritance graph is flattened.

**Edge Cases**  
- **Cycles**: Detect during policy import; reject or break cycles to avoid infinite loops.  
- **Large hierarchies**: Use memoization of inherited permissions to keep lookup constant time.  
- **Conflicting attributes**: Define precedence rules (user > role > global).  

**Optimize & Communicate**  
Improvements: pre‑compute a permission bitmap per user for subsecond checks; support incremental updates so that adding a child role doesn’t trigger full re‑load. In interviews, I’d narrate how the hierarchy gives you both *simplicity* (one policy per role) and *flexibility* (attributes for fine‑grained control), then walk through a sample “Manager” request to show the engine’s path: load user → resolve roles → expand inherits → evaluate conditions. This demonstrates structured reasoning, clear communication, and deep technical insight—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
