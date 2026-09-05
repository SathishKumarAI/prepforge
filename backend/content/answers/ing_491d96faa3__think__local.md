---
qid: ing_491d96faa3__think__local
question: 'Explain: Core RBAC — Designing an Authorization Model for an Enterprise
  | Cerbos'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 401
total_tokens: 596
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:16:20-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
* Identify what “Core RBAC” and “Cerbos” refer to (role‑based access control, a policy engine).  
* Assume the reader knows basic security concepts but not Cerbos’ specifics.  
* Decide whether to focus on design principles or Cerbos syntax.

**2️⃣ Pick a mental model**  
Use the classic *“permissions → roles → users”* diagram:  
- Permissions (what can be done)  
- Roles (grouping of permissions)  
- Users (assigned to roles).  
Add Cerbos’ policy‑as‑code layer on top, mapping roles to business rules.

**3️⃣ Step‑by‑step reasoning**  
1. Outline the enterprise’s data assets and operations.  
2. Define granular permissions for each asset type.  
3. Cluster permissions into logical roles (e.g., “Sales Rep”, “Finance Manager”).  
4. Write Cerbos policies that bind roles to resources and actions, using conditions (time, department).  
5. Show how the policy engine checks a user’s role against a request at runtime.

**4️⃣ Common pitfalls to avoid**  
* Over‑granting permissions by lumping too many functions into one role.  
* Ignoring dynamic context (e.g., location, device) that Cerbos can evaluate.  
* Mixing up “role” with “user group”; roles should be stable business concepts, not ad‑hoc groups.

**5️⃣ Sanity‑check & verbalize**  
* Verify that every permission appears in at least one role and no role has unnecessary permissions.  
* Walk through a sample request (e.g., user X tries to edit invoice Y) and trace the policy evaluation: role → policy rule → decision.  
* Conclude by highlighting how Cerbos’ declarative policies simplify updates compared to hard‑coded checks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
