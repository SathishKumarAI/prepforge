---
qid: vq_3b9d28bcf1__eli5__local
question: When a form is invoked with CALL_FORM does Oracle forms issues SAVEPOINT
  ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 198
total_tokens: 361
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:08:41-05:00'
sources: []
---

When you use **CALL_FORM** in Oracle Forms, think of opening a new book chapter while reading another one. The program simply jumps to that chapter; it does not automatically put a bookmark (a *savepoint*) in the current chapter unless you ask for it.

A *savepoint* is just a named place you can return to later with **ROLLBACK TO SAVEPOINT**. Oracle Forms creates savepoints only when you explicitly do so—by issuing a `SAVEPOINT` statement or using a built‑in feature that sets one. CALL_FORM merely loads the new form; it doesn’t trigger any implicit transaction control.

So, unless your code or a form setting tells Oracle to create one, CALL_FORM does **not** issue a SAVEPOINT.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
