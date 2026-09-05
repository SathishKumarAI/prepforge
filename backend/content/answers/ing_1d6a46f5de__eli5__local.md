---
qid: ing_1d6a46f5de__eli5__local
question: 'Explain: Example code — Pattern: Saga'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 156
output_tokens: 248
total_tokens: 404
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:22:57-05:00'
sources: []
---

**The Saga pattern is like a long‑term recipe that keeps cooking even if one step fails.**

Imagine you’re baking a multi‑course meal. Each dish (step) needs to be finished before the next starts, but if a sauce burns or an ingredient runs out, you can’t just stop; you must undo what’s already done—returning the table to its previous state—and try again. In software, a saga is a series of small transactions that together form one big operation (the meal). If any transaction fails, compensating actions “undo” the earlier ones, so the system stays consistent.

*Key terms:*  
- **Transaction** – a single, atomic change to data.  
- **Compensating action** – an undo step that reverses a previous transaction.  

With sagas you avoid one huge lock or rollback; instead, you let each part finish independently and recover gracefully if something goes wrong.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
