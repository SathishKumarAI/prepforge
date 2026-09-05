---
qid: vq_2f83e9f8c5__fp__local
question: What is the relationship between Int and RichInt in Scala?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 327
total_tokens: 499
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:29:53-05:00'
sources: []
---

In Scala a **`Int`** is a value type that implements the primitive `java.lang.Integer`.  
A **`RichInt`** (now in `scala.IntOps`) is an *extension* object that adds many utility methods—arithmetic, bit‑ops, conversions—to that raw integer.

The fundamental problem: we want to keep the compactness and performance of a primitive while giving users a rich API.  
Scala solves this by **implicit enrichment**:

1. The compiler sees an `Int` where a method not defined on it is called.
2. It looks for an implicit conversion from `Int` to some type that has that method.  
   `RichInt` provides exactly those methods and is made available via the implicit
   `intWrapper`.
3. The call is rewritten as `intWrapper(x).method`.

Thus `Int → RichInt` is a *view* (a zero‑cost wrapper), not an inheritance relationship; it preserves primitive semantics while enabling fluent syntax.

**Non‑obvious insight:**  
Because the conversion is implicit, every method on `RichInt` can be used as if it were part of `Int`, but only when the type checker allows a view. This means that adding new methods to `RichInt` automatically extends the expressive power of all integers without changing their binary representation—an elegant blend of *static typing* and *dynamic dispatch*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
