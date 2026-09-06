---
qid: vq_533af52a08__faang__local
question: What is the difference between call-by-value and call-by-name function parameters?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 450
total_tokens: 688
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:10:32-05:00'
sources: []
---

**Clarify**  
The interviewer asks how *call‑by‑value* (CBV) differs from *call‑by‑name* (CBN) in passing arguments to a function.  
Assumptions: we’re dealing with pure functions in a language that supports both evaluation strategies (e.g., Scala, Haskell, or Java’s `Supplier<T>`).  

**Approach**  
1. Define CBV and CBN.  
2. Compare timing of evaluation, side‑effects, and cost.  
3. Give an example.  

**Depth**  
- **CBV**: The argument expression is evaluated *before* the function call; the resulting value is passed in. Every reference to the parameter inside the function uses that single computed value. Complexity: O(1) for passing a primitive, but potentially expensive if the expression is costly. Side‑effects occur once.  
- **CBN**: The argument isn’t evaluated until it’s first used (lazy evaluation). Each time the parameter is referenced, the original expression is re‑evaluated unless the language memoizes it. This can avoid unnecessary work or cause repeated expensive computations. Side‑effects may happen multiple times if the expression changes state.  

Example in Scala:  
```scala
def f(x: => Int) = x + x   // CBN
f(1 + 2)   // evaluates twice → 6, whereas CBV would evaluate once → 3
```

**Edge Cases**  
- Infinite recursion or non‑terminating expressions: CBN can defer evaluation and avoid immediate failure.  
- Mutability inside the expression: repeated evaluations may yield different results (CBN).  

**Optimize & Communicate**  
When performance matters, prefer CBV to guarantee a single evaluation. Use CBN for short‑circuiting (`if` conditions) or when you want lazy computation. Clearly state your choice in code reviews and document any memoization used to prevent repeated work. This structured reasoning aligns with FAANG expectations of clear communication and deep technical insight.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
