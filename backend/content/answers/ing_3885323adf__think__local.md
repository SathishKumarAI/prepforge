---
qid: ing_3885323adf__think__local
question: 'Explain: Role-based access control — Designing an Authorization Model for
  an Enterprise | Cerbos'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 196
output_tokens: 489
total_tokens: 685
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:39:17-05:00'
sources: []
---

**1. Clarify the scope & assumptions**  
- Identify what “role‑based access control” (RBAC) means in this context: users → roles → permissions.  
- Assume an enterprise with multiple departments, a mix of internal and external services, and that Cerbos is the policy engine being considered.  
- Ask whether we need to cover only high‑level design or also implementation details.

**2. Adopt a mental model / framework**  
- Use the classic RBAC hierarchy: *User → Role(s) → Permission(s)*.  
- Map it onto Cerbos’s concepts: *subjects*, *resources*, and *policy rules*.  
- Think in terms of “who can do what on which resource under what conditions”.

**3. Step‑by‑step reasoning toward the answer**  
1. List core business entities (e.g., documents, applications).  
2. Define role families (admin, manager, employee) and their scope.  
3. Translate roles into Cerbos subjects or subject sets.  
4. Draft permission patterns (CRUD, view, approve).  
5. Express policies in Cerbos’s policy language, using subject‑role bindings and resource attributes.  
6. Show how to compose policies (inheritance, overrides).  
7. Mention auditability and dynamic attributes (time, location).

**4. Common traps & wrong turns**  
- Mixing up “roles” with “users”: remember roles are abstract; users get assigned roles.  
- Over‑restricting by hardcoding resource IDs; prefer attribute‑based matching.  
- Ignoring the need for role hierarchy: a manager should inherit employee rights.  
- Forgetting to handle external or temporary roles (e.g., contractors).

**5. Sanity‑check & verbalize**  
- Verify that every permission needed by business processes is covered by at least one policy rule.  
- Run through a few example scenarios mentally (e.g., an engineer editing a design doc).  
- Explain the flow aloud: “When User X requests action Y on Resource Z, Cerbos checks X’s roles → matches to policy → returns Allow/Deny.”  

By following these numbered steps you’ll structure a clear, correct explanation of designing an RBAC model with Cerbos.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
