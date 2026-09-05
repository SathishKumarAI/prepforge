---
qid: ing_d7a143a292__eli5__local
question: 'Explain: When to use RBAC — Designing an Authorization Model for an Enterprise
  | Cerbos'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 212
total_tokens: 378
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:16:14-05:00'
sources: []
---

Think of a large office building that has many rooms—meeting rooms, labs, servers, and storage areas. **RBAC (Role‑Based Access Control)** is like giving each employee a badge that says “Manager,” “Engineer,” or “HR.” The badge automatically unlocks the doors they’re allowed to enter; it’s not about who the person is individually but what job role they hold.

Use RBAC when:

* You have many users who share common duties (e.g., all engineers need read/write on code repos, but only managers can approve budgets).
* Policies should change by adjusting roles, not editing each user.
* The organization grows or changes often—roles can be added or modified without touching individual accounts.

In short, choose RBAC when you want a clean, scalable way to grant and revoke permissions based on job functions rather than tracking every single person’s rights.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
