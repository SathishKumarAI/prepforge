---
qid: vq_bc878316de__eli5__local
question: What is the difference between a trait and an abstract class in Scala?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 230
total_tokens: 392
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:25:50-05:00'
sources: []
---

Think of **Scala** code as building blocks for a LEGO set that creates data pipelines.

*An abstract class* is like a LEGO instruction booklet that contains some completed pieces and leaves gaps (abstract methods) for you to fill in. You can only use it by extending the booklet – you create a new book that adds the missing parts. It can hold shared fields, helper functions, or even default implementations, but every concrete block must inherit from it.

*A trait* is like a single LEGO piece that contains a special connector (a mix‑in). You can snap this piece onto any other block, adding new behavior without being the main structure. Traits cannot store state (no constructor parameters) and you can combine several of them on one class, just as you might attach multiple small pieces to a larger model.

So: an abstract class is a partial blueprint you must extend; a trait is a reusable feature you mix into any class, like adding extra connectors to your LEGO model.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
