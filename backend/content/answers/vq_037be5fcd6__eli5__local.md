---
qid: vq_037be5fcd6__eli5__local
question: What is the difference between a normal class and a case class in Scala?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 221
total_tokens: 384
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:00:59-05:00'
sources: []
---

Think of a **normal class** like a recipe card you hand out to friends: it tells them what ingredients (variables) are needed and how to mix them (methods). You can change the recipe, add new steps, or leave some parts blank—there’s no guarantee that two cards with the same name will look exactly alike.

A **case class** is like a pre‑printed form that always includes the same fields and automatically fills in the blanks for you. When you create one, Scala gives it:

- A constructor that takes every field as an argument.
- An automatic `equals` and `hashCode` so two forms with identical data are considered equal.
- A nice `toString` that shows all the values.
- Pattern‑matching support (you can “unpack” it like a tuple).

So, a case class is a lightweight, immutable data holder that behaves predictably in collections and pattern matching—perfect for modeling simple, value‑based objects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
