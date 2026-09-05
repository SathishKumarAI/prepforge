---
qid: vq_14b6570584__eli5__local
question: What are the differences between Scala’s Int and Java’s java.lang.Integer?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 269
total_tokens: 432
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:03:29-05:00'
sources: []
---

Think of **Scala’s `Int`** like a *plastic toy car* that you can push around on a flat table. It’s lightweight, moves fast, and you don’t need to carry any extra gear—just the car itself.

Now picture **Java’s `java.lang.Integer`** as the same car wrapped in a *soft, protective case*. The case lets you hand it to someone who might not have a plastic surface ready; they can store it, pass it through a mail slot, or keep it safe. Because of the case, the car is heavier and slower to handle, but it works everywhere Java runs.

- **`Int`** (Scala) = primitive numeric type, stored directly as a 32‑bit value in memory. Fast and memory‑efficient.
- **`Integer`** (Java) = an *object wrapper* around that same 32‑bit number, adding the ability to be treated like any other Java object (e.g., put it in collections). It carries extra overhead for its box.

So, use `Int` when you just need raw numbers; use `Integer` when you need an object—perhaps to store in a generic collection or interface that expects objects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
