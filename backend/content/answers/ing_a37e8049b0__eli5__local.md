---
qid: ing_a37e8049b0__eli5__local
question: 'Explain: Hierarchical RBAC — Designing an Authorization Model for an Enterprise
  | Cerbos'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 233
total_tokens: 398
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:57:11-05:00'
sources: []
---

Imagine a big office building with many rooms and doors. **RBAC** (Role‑Based Access Control) is like giving each employee a key that opens the rooms they’re allowed to visit—no one can walk into a room unless their key says so.

Now think of an **hierarchy**: some employees are managers, some are engineers, some are interns. A manager’s key is built on top of an engineer’s key—it automatically includes all the engineer’s doors plus extra ones for the whole team. This layered approach means you only need to grant a manager one key that already contains every lower‑level key.

In an enterprise, **Hierarchical RBAC** lets you create broad “roles” (like Manager) that inherit permissions from narrower roles (Engineer, Intern). When you assign a role to someone, they get all the doors of their own role plus those inherited. It keeps permission management simple and scalable—just like handing out a master key instead of dozens of individual ones.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
