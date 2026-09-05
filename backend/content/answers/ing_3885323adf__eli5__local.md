---
qid: ing_3885323adf__eli5__local
question: 'Explain: Role-based access control — Designing an Authorization Model for
  an Enterprise | Cerbos'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 224
total_tokens: 389
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:05:35-05:00'
sources: []
---

Think of a big office building where every employee has a keycard.  
**Role** = the job title (manager, accountant, IT support).  
**Permission** = what doors or rooms that keycard can open (view payroll, edit software, access servers).  
**User** = the person wearing the card.

In **role‑based access control (RBAC)** you first assign each employee a role. Then you give that role a set of permissions. Finally, every user inherits the permissions of the roles they hold. If someone becomes a manager, you don’t have to touch individual users—just add “manager” permissions to the manager role and everyone who gets that role automatically gains those doors.

This keeps the system tidy: change one role’s permissions and all its members are updated at once. It’s like updating a master list of keys rather than rewiring every employee’s card separately.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
