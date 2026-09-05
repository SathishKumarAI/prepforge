---
qid: vq_99846a278b__eli5__local
question: WHAT IS THE DIFFERENCE BETWEEN A PRIMARY KEY AND A UNIQUE KEY?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 169
total_tokens: 331
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:21:19-05:00'
sources: []
---

Think of a library’s catalog system.  
A **primary key** is like the book’s unique call number – it must exist for every book, can’t be duplicated, and you can’t leave it blank. It guarantees that each record (book) has one unambiguous identifier.

A **unique key** is like a special author‑ID tag: it ensures no two books share the same tag, but some books might not have one at all. You can still create many tags (multiple unique keys), and they may be optional.

So, the primary key is mandatory, singular, and never null; a unique key simply enforces “no duplicates” and can allow missing values or multiple such constraints in the same table.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
