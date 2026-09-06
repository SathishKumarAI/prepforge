---
qid: vq_7872d87494__faang__local
question: Does Scala and Java support call-by-name?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 515
total_tokens: 747
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:17:49-05:00'
sources: []
---

**Clarify**  
The interviewer asks whether *Scala* and *Java* support the **call‑by‑name** evaluation strategy (arguments are re‑evaluated each time they’re used). I’ll assume we’re comparing language features, not libraries.

**Approach**  
1. Explain call‑by‑name semantics.  
2. Cover Scala’s native syntax (`=> T`).  
3. Discuss Java’s lack of built‑in support and the workaround via `Supplier<T>`.  
4. Highlight differences in performance & type safety.

**Depth**  

| Language | Native support | Syntax | Evaluation | Notes |
|----------|----------------|--------|------------|-------|
| **Scala** | ✔ | `def foo(x: => Int)` | Lazily re‑evaluated each use of `x` | Can be wrapped as a by‑name parameter; compiler generates a function closure. |
| **Java** | ❌ (prior to Java 8) | – | – | No language keyword; you can emulate with `Supplier<T>` or method references. |
| **Java 8+** | ✔ via functional interface | `def foo(Supplier<Integer> x)` | `x.get()` is called each use; programmer must call explicitly | Less ergonomic, no compile‑time guarantee of laziness. |

- **Scala**: The compiler rewrites by‑name arguments into a zero‑arg function; every access invokes the closure.  
- **Java**: Using `Supplier<T>` you get lazy evaluation, but you lose syntactic sugar and risk accidental eager calls.

**Edge Cases**  
- In Scala, side‑effects inside a by‑name argument execute each time it's referenced.  
- Java’s `Supplier` can be eagerly invoked if the caller forgets to call `.get()`.  
- Performance: Scala’s closure may allocate per call; Java’s lambda is optimized but still incurs a function call.

**Optimize & Communicate**  
I’d note that for true call‑by‑name, Scala is the natural choice. In Java, the idiomatic workaround is `Supplier<T>` or using streams to defer computation. If performance matters, profiling both approaches is advisable because the overhead of repeated lambda invocations can be non‑trivial. This shows I understand language semantics, trade‑offs, and practical implementation details—key signals for a FAANG data‑engineering role.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
