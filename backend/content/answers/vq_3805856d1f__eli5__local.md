---
qid: vq_3805856d1f__eli5__local
question: Is Scala an Expression-Based Language or Statement-Based Language?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 223
total_tokens: 382
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:08:25-05:00'
sources: []
---

Think of a programming language as a kitchen.  
A **statement‑based** kitchen is like a recipe that says “do this, then do that” – it focuses on *actions* (mixing, stirring, baking).  
An **expression‑based** kitchen treats every instruction as something that produces a value, just like every step in a recipe yields an ingredient that can be used later.

Scala lives in the expression‑based camp. In Scala you write `val x = 5 + 3` – the right side (`5 + 3`) is an *expression* that evaluates to the number 8 and becomes the value of `x`. Even control structures like `if (cond) a else b` are expressions; they return a value. So, Scala’s design encourages building small expressions that produce values rather than just performing actions. This makes code more composable, similar to how you can combine ingredients into new dishes without having to follow a strict sequence of steps.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
