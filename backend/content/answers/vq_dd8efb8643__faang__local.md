---
qid: vq_dd8efb8643__faang__local
question: What is scala anonymous function?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 464
total_tokens: 693
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:38:37-05:00'
sources: []
---

**Clarify**  
A question about *Scala anonymous functions* asks how Scala lets you write a function without naming it and in what contexts this is useful (e.g., passing callbacks to higher‑order functions). I’d confirm that the interviewer expects a description of syntax, evaluation model, and typical use cases.

**Approach**  
1. Define an anonymous function.  
2. Show the syntactic sugar (`=>`, `(_)` shorthand).  
3. Explain where it’s used (collection ops, futures, callbacks).  
4. Mention type inference and eta‑expansion.  
5. Discuss performance/closure capture implications.

**Depth**  
- An **anonymous function** is a lambda expression that produces an instance of a functional interface (`Function1`, `Function2`, …) without assigning it to a val or def.  
- Syntax:  
  ```scala
  (x: Int, y: Int) => x + y        // explicit types
  (x, y) => x + y                 // type inferred
  _ + 1                            // single‑arg shorthand
  ```
- It’s a *closure*: captures free variables from its lexical scope.  
- When passed to methods like `map`, `filter`, or `flatMap`, Scala implicitly creates the corresponding function object (eta‑expansion).  
- Performance: each lambda becomes an object; if it captures no variables, the compiler may reuse a singleton instance.

**Edge Cases**  
- **Multiple parameters** need parentheses.  
- **No parameter list** (`() => …`) for `Runnable`.  
- Capturing mutable state can lead to unintended side‑effects.  
- Using `=>` inside pattern matching (e.g., `case f: Function1[_,_] => …`).

**Optimize & Communicate**  
Highlight that anonymous functions keep code concise, improve readability, and enable functional pipelines. Mention the trade‑off of potential heap allocations and how compiler optimizations (SAM conversion, inline) mitigate it. Conclude by summarizing their role in Scala’s expressive collection API and async programming.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
