---
qid: vq_f8f5676e24__eli5__local
question: What is Pure function in scala?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 155
output_tokens: 196
total_tokens: 351
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:34:20-05:00'
sources: []
---

Think of a **pure function** like a vending machine that always gives the same snack for the exact same button press, no matter when you use it or who else has used it before.

*Pure function*: A piece of code that takes input values (arguments) and returns an output **without changing anything outside itself**—no hidden variables, no database writes, no print statements. If you feed it the same inputs again, it will always produce the same result.

In Scala, a pure function is just a method or lambda that follows this rule. Because it never depends on external state and never mutates it, you can reason about its behavior, test it easily, and safely run it in parallel threads—just like you trust the vending machine to deliver the same candy every time you press the button.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
