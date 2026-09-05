---
qid: vq_10ee9f5611__fp__local
question: What is yield in scala?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 436
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:23:14-05:00'
sources: []
---

**Yield in Scala – a first‑principles view**

At its core, *yield* is the engine that turns a **generator expression** into a new collection.  
A generator has the form  

```scala
for (x <- xs) yield f(x)
```

Think of it as an *abstracted map*: it takes each element `x` from the source `xs`, applies the function `f`, and collects the results in a container that matches the type of `xs`.  
Why must it behave this way? Because Scala’s for‑comprehensions are syntactic sugar over **monadic operations** (`map`, `flatMap`, `withFilter`). The `yield` clause is the *final map* that materialises the output. If you omit it, the comprehension produces a collection of unit values (essentially discarding the results).  

The deeper principle is *compositionality*: every part of the comprehension corresponds to a monadic transformer.  
- `x <- xs` → `flatMap`
- `if p(x)` → `withFilter`
- `yield f(x)` → `map`

This guarantees that you can chain multiple generators, each potentially changing the underlying collection type while preserving purity and laziness.

**Non‑obvious insight:**  
In many languages, a for‑loop with an explicit `collect` is required to build a new list. In Scala, *yield* automatically infers the correct target collection based on the first generator’s type. This means you can write:

```scala
for {
  i <- 1 to 10
  j <- List("a","b")
} yield (i,j)
```

and obtain a `Vector[(Int,String)]` without any boilerplate—leveraging the *collection builder* pattern that underlies all Scala collections. This implicit type inference is what makes Scala’s for‑comprehensions both powerful and succinct.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
