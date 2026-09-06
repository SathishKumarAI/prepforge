---
qid: vq_225fd5a868__faang__local
question: What is tail-recursion in Scala?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 435
total_tokens: 666
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:01:42-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise explanation of *tail‑recursion* in Scala and why it matters for performance. I’ll confirm they’re looking for the definition, how the compiler treats it, and typical use cases.

**Approach**  
1. Define tail‑call and tail‑recursive function.  
2. Explain Scala’s `@tailrec` annotation and JVM optimization.  
3. Provide a small example that compiles to a loop.  
4. Mention limitations (mutual recursion, multiple parameters).  

**Depth**  
- *Tail call*: the last action of a function is a recursive call with no further computation.  
- Scala (via the `@tailrec` annotation) asks the compiler to transform such calls into a loop, eliminating stack growth.  
- Example:  
  ```scala
  @annotation.tailrec
  def fact(n: Int, acc: BigInt = 1): BigInt =
    if (n <= 1) acc else fact(n - 1, n * acc)
  ```
  The compiler rewrites this into a `while`‑like loop.  
- If the annotation is present and the function isn’t tail‑recursive, compilation fails—useful safety net.  

**Edge Cases**  
- Mutual recursion (A calls B) can be optimized only if both are annotated.  
- Functions with more than one parameter list or side effects may not qualify.  
- In Scala 3, `@tailrec` is still required; the JVM doesn’t perform TCO automatically.

**Optimize & Communicate**  
Highlight that tail‑recursion keeps stack usage O(1), enabling deep recursions (e.g., parsing large trees) without `StackOverflowError`. Explain trade‑offs: readability vs. explicit loops, and when to prefer iterative code for clarity. Conclude by stressing the annotation as a developer safety tool—ensures you don’t inadvertently write non‑tail‑recursive code that would blow the stack.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
