---
qid: ing_825e568e22__eli5__local
question: 'Explain: RBAC — Designing an Authorization Model for an Enterprise | Cerbos'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 220
total_tokens: 383
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:03:30-05:00'
sources: []
---

Imagine your company as a big library.  
**Roles** are the library’s “membership cards” – each card says what you can do: borrow fiction, access research papers, or manage the catalog.  
**Users** (employees) get one or more cards; they can act only within the limits of those cards.  
**Permissions** are the specific actions tied to a card—“borrow book,” “add new entry,” “delete record.”  

In RBAC (Role‑Based Access Control), you first decide which cards (roles) are needed: “Reader,” “Librarian,” “Administrator.” Then you assign each user one or more cards. When a user tries to perform an action, the system checks: does their card include that permission? If yes, it’s allowed; if not, it’s denied.  

So RBAC is like giving employees library cards that let them do only what their role requires—simple, scalable, and hard to misuse.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
