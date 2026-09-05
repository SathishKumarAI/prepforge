---
qid: ing_39532aac39__eli5__local
question: 'Want to learn more about this pattern? — Pattern: Saga'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 214
total_tokens: 374
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:07:17-05:00'
sources: []
---

Think of a long recipe that you and your friends follow together in a kitchen. Each step (mixing, baking, frosting) must be done in order, but if something goes wrong—say the oven breaks—you need a backup plan: maybe finish with a quick snack instead or undo the last step. In software, a *Saga* is like that recipe for data changes spread across many services. It’s a sequence of small, independent transactions (the steps) that together form a big operation. If one transaction fails, the Saga rolls back earlier ones by running compensating actions (undoing the frosting). The “unavoidable terms” are **transaction**—a single, atomic change—and **compensating action**—an operation that reverses a previous step. This pattern keeps data consistent without locking everything for a long time, just like a flexible kitchen that can adapt when something goes wrong.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
