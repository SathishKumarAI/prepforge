---
qid: ing_c5803487e6__eli5__local
question: 'Explain: RBAC (Role-based Access Control) — Designing a Permission System'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 188
total_tokens: 351
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:49:00-05:00'
sources: []
---

Imagine a school where each student belongs to a club—music, science, or drama. Every club has its own set of lockers: the music club can use the sound booth, the science club can access the lab, and the drama club can stage props. RBAC works like this: **Roles** are the clubs (e.g., “Teacher,” “Student,” “Admin”), **Permissions** are the locker contents (e.g., “edit grades,” “view attendance”), and **Users** get a role assigned to them. When you’re a Teacher, you automatically gain all permissions that belong to the Teacher role; if you change clubs, your access changes with it. This keeps things tidy—no need to hand‑grant each right to every individual; you just assign roles and let the system do the rest.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
