---
qid: vq_a4697794a3__fp__local
question: What is the difference between val and var in Scala?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 356
total_tokens: 527
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:49:33-05:00'
sources: []
---

In Scala the keyword **`val`** declares an *immutable* binding, while **`var`** declares a mutable one.  
The fundamental problem is *state change*: in concurrent or functional code you want to guarantee that once a value is assigned it will never be altered, which eliminates race conditions and makes reasoning about program flow tractable. `val` achieves this by generating a final field (or an accessor method with no setter) in the compiled Java bytecode; `var` generates both getter and setter methods, allowing reassignment.

Because `val` is immutable, it can be safely used as a key in hash‑maps, as a constant in pattern matching, or as a parameter to higher‑order functions without fear of accidental mutation. Moreover, immutability enables **referential transparency**—the expression always yields the same result—which underpins lazy evaluation and optimizations such as memoisation.

A subtle point many overlook: *a `val` can still be overridden in subclasses*. Scala allows a subclass to provide a different implementation via an abstract `def`, or to replace it with a `lazy val`. Thus, while `val` guarantees immutability at the instance level, polymorphism can still change what value is observed. This duality—immutability for safety, yet overridability for extensibility—is why Scala’s type system treats `val` as both a contract and an open point of extension.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
