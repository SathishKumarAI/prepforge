---
qid: vq_f17e457a90__fp__local
question: What is Either in Scala?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 530
total_tokens: 696
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:03:19-05:00'
sources: []
---

## Why `Either` Exists

In a program every function can *succeed* or *fail*.  
A failure is not just an exception; it’s data that the caller may want to inspect, combine, or recover from.  
If we encode “success” as one type (`Right`) and “failure” as another (`Left`), we get a **sum type** that can be treated uniformly: you pattern‑match on it, map over the success value, or chain computations.

### The Formal Picture

```scala
sealed trait Either[+L,+R]
case class Left[+L](value:L) extends Either[L,Nothing]
case class Right[+R](value:R) extends Either[Nothing,R]
```

`Either` is a **functor** in its right component and an **applicative/monad** in the same spot.  
This lets us write:

```scala
def parseInt(s: String): Either[String, Int] =
  if (s.matches("""-?\d+""")) Right(s.toInt)
  else Left("not a number")

val result = for {
  x <- parseInt("42")
  y <- parseInt("abc")   // chain stops here
} yield x + y
```

The monadic laws guarantee that `Right` values are propagated while the first `Left` short‑circuits, mirroring exception propagation but in a type‑safe way.

### Deeper Principle

`Either` embodies **information flow control**: it forces callers to *handle* both branches.  
In functional programming, side effects are represented as pure data; `Either` is the pure representation of “error or value.”  

### Non‑Obvious Insight

Because `Either` is a **covariant** in its right type but not in its left, you can freely map over successful results (`Right`) without touching errors.  
This asymmetry lets libraries expose APIs that return `Either[Error, Result]` while still allowing the caller to transform only the success path—something impossible with plain tuples or generic sum types.

> **Bottom line:** `Either[L,R]` is Scala’s idiomatic way to encode a computation that may produce either an error (`L`) or a value (`R`), preserving type safety and enabling compositional error handling through monadic laws.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
