---
qid: vq_9ca1fe6028__fp__local
question: What is Nothing in Scala?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 364
total_tokens: 530
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:48:26-05:00'
sources: []
---

**Nothing in Scala: the ultimate bottom type**

At its core, Scala’s `Nothing` is a *bottom* of the subtype lattice: every type `T` satisfies `Nothing <: T`. The reason this exists is that the compiler must be able to prove *totality* for functions that never return normally. If we write

```scala
def fail(msg:String): Nothing = throw new RuntimeException(msg)
```

the method’s signature promises “I will never produce a value of type `Nothing`”. Because `Nothing` is a subtype of every other type, the compiler can safely treat the result as any expected return type:

```scala
val x: Int = fail("oops")   // legal because Nothing <: Int
```

This mechanism underpins Scala’s handling of *absurd* cases in pattern matching and the `match` expression’s exhaustiveness checker. If a branch returns `Nothing`, the compiler knows that control can never reach subsequent code, allowing it to infer that the overall type is still sound.

A subtle insight: `Nothing` also models *nullability* at the type level. Since `null` has type `Null`, and `Null <: Nothing`, any expression that may evaluate to `null` can be typed as `Nothing`. This gives the compiler a way to enforce null‑safety without runtime checks.

In short, `Nothing` is not a “value” but a *type* that signals non‑termination or impossible execution paths, enabling the type system to reason about safety and exhaustiveness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
