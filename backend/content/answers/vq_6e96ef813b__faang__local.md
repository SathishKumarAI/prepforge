---
qid: vq_6e96ef813b__faang__local
question: What is call-by-name?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 518
total_tokens: 747
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:15:38-05:00'
sources: []
---

**Clarify**  
*Problem*: Explain “call‑by‑name” in the context of programming language evaluation strategies.  
*Assumptions to confirm*:  
1. The audience knows basic parameter passing (by value / by reference).  
2. We’re focusing on lazy evaluation, not just macro expansion.  

**Approach**  
Describe the concept, illustrate with a simple example, compare it to call‑by‑value and call‑by‑reference, then discuss pros/cons in data‑engineering pipelines.

**Depth**  
Call‑by‑name is an *evaluation strategy* where an argument’s expression isn’t evaluated when the function is invoked; instead, the raw expression (or a thunk) is substituted into the function body. Each time the parameter is used, the expression is re‑evaluated.  

```scala
def foo(x: => Int) = if (x > 0) x else -1   // Scala call‑by‑name

var counter = 0
def inc() = { counter += 1; counter }

foo(inc())   // inc() runs twice → counter == 2
```

Key points:  
- **Lazy evaluation** – no upfront cost.  
- **Re‑evaluation** – side effects or expensive ops are repeated unless memoized.  
- Useful for infinite data streams (lazy lists) and conditional computation (e.g., `if` branches).  

In data engineering, call‑by‑name can defer heavy transformations until needed, reducing memory footprint in Spark UDFs or PySpark RDD operations.

**Edge Cases**  
1. **Side effects**: repeated evaluation may corrupt state.  
2. **Performance**: if the expression is cheap but called many times, overhead outweighs laziness.  
3. **Infinite loops**: a non‑terminating expression never returns; the caller must guard against it.

**Optimize & Communicate**  
- Prefer call‑by‑name for *conditional* or *potentially unused* arguments (e.g., optional logging).  
- Memoize expensive thunks (`lazy val` in Scala) when repeated use is expected.  
- In interview, highlight trade‑offs: laziness vs. predictability, and how you’d document assumptions to avoid hidden side effects.  

This structured explanation demonstrates clear reasoning, technical depth, and practical awareness—key signals for FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
