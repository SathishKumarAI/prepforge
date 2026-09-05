---
qid: vq_0894342fae__eli5__local
question: Why Lambda is used in Python?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 154
output_tokens: 236
total_tokens: 390
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:01:47-05:00'
sources: []
---

**Why use `lambda` in Python?**

Think of a *lambda* as a quick, one‑liner recipe that you can sprinkle into your code whenever you need a small function but don’t want to write a full definition. Imagine you’re at a buffet and you only need a tiny spoonful of sauce for a single dish; you grab a cup instead of setting up a whole pot. A `lambda` lets you create that “cup” on the spot—an anonymous, short‑lived function.

*Unavoidable term:* **Anonymous** – a function with no name (unlike the usual `def` functions).  

You use lambdas when:

1. The function is simple (one expression).
2. It’s only needed once or in a small context.
3. You want to pass it as an argument to higher‑order functions like `map`, `filter`, or `sorted`.

So, lambdas are Python’s way of giving you a quick, nameless helper without the ceremony of a full function definition.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
