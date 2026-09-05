---
qid: ing_491d96faa3__eli5__local
question: 'Explain: Core RBAC — Designing an Authorization Model for an Enterprise
  | Cerbos'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 199
total_tokens: 363
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:33:02-05:00'
sources: []
---

Imagine your company is a big library.  
**Roles** are like “Student,” “Professor,” or “Librarian.” Each role comes with a set of **permissions**—the books they can borrow, the sections they can access, or the ability to add new titles.  

In core RBAC (Role‑Based Access Control), every employee is assigned one or more roles. The system checks those roles first: if your role says “can view financial reports,” you get that right; if it says “cannot edit inventory,” you’re blocked from doing so.  

Think of the library’s catalog as the *policy engine*: it holds rules (“Students may borrow up to 5 books for 3 weeks”) and applies them whenever someone asks for access. The model is simple, predictable, and easy to audit—just like a well‑organized library where everyone knows which shelves they can touch.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
