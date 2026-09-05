---
qid: vq_7872d87494__eli5__local
question: Does Scala and Java support call-by-name?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 236
total_tokens: 393
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:16:46-05:00'
sources: []
---

**Answer**

Yes—both Scala and Java can use a *call‑by‑name* style, but they do it in slightly different ways.

Think of a recipe that says “add the sauce when you’re ready.”  
With **call‑by‑value**, the sauce is measured out before the cooking starts (the value is computed once).  
With **call‑by‑name**, the kitchen waits until the pot actually needs the sauce; each time it’s asked for, the sauce is freshly measured.  

- **Scala** has built‑in support: you write `def foo(x: => Int)` and every reference to `x` re‑evaluates the expression.
- **Java** doesn’t have a keyword for this, but you can mimic it with a parameter of type `Supplier<T>` (or use a lambda). Each call to `get()` inside the method forces a fresh evaluation.

So, Scala gives you direct syntax; Java offers a functional workaround.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
