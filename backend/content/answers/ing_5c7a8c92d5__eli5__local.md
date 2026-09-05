---
qid: ing_5c7a8c92d5__eli5__local
question: 'Explain: Comparing RBAC and ABAC — Designing an Authorization Model for
  an Enterprise | Cerbos'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 216
total_tokens: 383
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:02:46-05:00'
sources: []
---

Imagine a company as a big library.  
**RBAC (Role‑Based Access Control)** is like giving each employee a badge that says “Teacher,” “Student,” or “Librarian.” Once you have the badge, you automatically get all the books and rooms that role allows—no matter who you are or where you’re standing in the building.

**ABAC (Attribute‑Based Access Control)** is more like having a smart door that reads many details: your badge *and* whether it’s morning, what department you belong to, if you’re on a project, and even the time of day. The door checks all these attributes before deciding if you can enter a room or read a book.

So, RBAC is “who you are,” while ABAC is “who you are *plus* many other facts.” In an enterprise, using ABAC lets policies adapt to context—like granting temporary access during a crisis—something RBAC alone can’t do.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
