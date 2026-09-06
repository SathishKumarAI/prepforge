---
qid: vq_a015c316e8__faang__local
question: Which keyword is used to define a function in Scala?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 364
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:25:39-05:00'
sources: []
---

**Clarify**  
The interview asks for the keyword that introduces a user‑defined function in Scala.  
Assumptions: we’re referring to *def* (not lambda syntax) and not to implicit/anonymous functions.

**Approach**  
1. State the keyword.  
2. Explain its syntax and typical usage.  
3. Mention related constructs for completeness.

**Depth**  

| Keyword | Purpose | Example |
|---------|---------|---------|
| `def`   | Declares a named function (method) in a class, trait or object. | `def add(a: Int, b: Int): Int = a + b` |

- `def` can be used at the top level inside an `object`, within a `class`, or inside a `trait`.  
- It supports parameters, return types, default arguments, and can be overloaded.  
- The compiler infers the return type if omitted, but it’s common to specify it for clarity.

Other related keywords: `lazy val` (for lazy evaluation), `val`/`var` (immutable/mutable values). However, only **`def`** defines a function.

**Edge Cases**  
- Anonymous functions use `=>`, not `def`.  
- In Scala 3, the same keyword is still `def`; no change in syntax.  

**Optimize & Communicate**  
Explain that using `def` keeps code readable and type‑safe, and that understanding this keyword is foundational for working with Scala’s functional features such as higher‑order functions and currying. This concise answer demonstrates clear communication, correct depth, and awareness of edge cases—key signals for FAANG interview success.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
