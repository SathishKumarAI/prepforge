---
qid: vq_8aa14595b2__faang__local
question: What are Left and Right in Scala? Explain Either/Left/Right Design Pattern
  in Scala?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 445
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:21:09-05:00'
sources: []
---

**Clarify**

The interviewer wants an explanation of the `Either`, `Left`, and `Right` types in Scala and how they’re used as a design pattern for error handling or bifurcated results.

**Approach**

1. Define the sealed trait hierarchy (`Either[A,B]`).  
2. Show the two concrete case classes (`Left[A]`, `Right[B]`).  
3. Explain typical usage: *success* → `Right`; *failure* → `Left`.  
4. Highlight functional helpers (`map`, `flatMap`, `fold`).  
5. Mention real‑world patterns (validation, service calls).  

**Depth**

```scala
sealed trait Either[+L,+R]
case class Left[+L](value: L) extends Either[L,Nothing]
case class Right[+R](value: R) extends Either[Nothing,R]
```

* `Right` is conventionally the “good” branch; `Left` carries an error or alternate value.  
* Monadic operations treat `Right` as the identity; `Left` short‑circuits.  
* `fold(f,g)` lets you handle both cases in a single expression.  

**Edge Cases**

- Mixing types (`Either[String,Int]`) vs. using a type alias like `Validation[A]`.  
- When `L` or `R` can be `Nothing`; beware of `Left[Nothing]`/`Right[Nothing]`.  
- Performance: boxing overhead for value classes; consider `scala.util.Either` in 2.13+.

**Optimize & Communicate**

Using `Either` keeps callers free from exceptions, enabling composable pipelines (`for { a <- f(); b <- g(a) } yield ...`).  
If you need to accumulate errors, switch to `Validated` (Cats).  

In short: `Left/Right` are Scala’s functional error‑handling pair; they let you express “either this succeeded or that failed” in a type‑safe, composable way.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
