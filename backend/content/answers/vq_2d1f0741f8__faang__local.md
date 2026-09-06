---
qid: vq_2d1f0741f8__faang__local
question: What is function currying in scala?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 476
total_tokens: 707
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:04:04-05:00'
sources: []
---

**Clarify**  
The interviewer asks for *function currying* in Scala. I’ll confirm they mean turning a multi‑parameter function into a chain of single‑parameter functions (also known as “curried” functions), and that they’re interested in both the syntax and why it matters.

**Approach**  
1. Define what currying is conceptually.  
2. Show the Scala syntax for declaring a curried function.  
3. Explain how invocation works with partial application.  
4. Touch on type inference, higher‑order functions, and real‑world use cases (e.g., DSLs, partial updates).  

**Depth**  
In Scala, a curried function is written as:

```scala
def add(a: Int)(b: Int): Int = a + b
```

The parentheses separate parameter lists. Calling `add(2)(3)` yields 5. Because each list returns a new function when partially applied, you can write:

```scala
val inc = add(1)          // inc : Int => Int
val result = inc(4)       // 5
```

Scala’s type system infers the types of intermediate functions (`Int => Int`). Currying is useful for building composable APIs (e.g., `map`, `filter` on collections), creating domain‑specific languages, and enabling partial application in functional pipelines. It also aligns with currying in pure mathematics: a function `f(a,b)` becomes `λa. λb. f(a,b)`.

**Edge Cases**  
- Functions with more than two parameter lists are fine; each list can be partially applied independently.  
- Default arguments or implicit parameters cannot cross curried boundaries unless explicitly handled.  
- Performance overhead is negligible, but excessive currying can increase stack usage if deep recursion is involved.

**Optimize & Communicate**  
I’d note that while Scala’s `FunctionN` traits support up to 22 parameters, currying beyond a few lists is rarely practical. I would emphasize readability and maintainability over “just using” currying everywhere. This showcases clear reasoning, technical depth, and an eye for trade‑offs—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
