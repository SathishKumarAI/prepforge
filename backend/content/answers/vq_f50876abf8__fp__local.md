---
qid: vq_f50876abf8__fp__local
question: what is the difference var and val in scala?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 406
total_tokens: 576
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:03:47-05:00'
sources: []
---

In Scala the choice between **`val`** and **`var`** is not a syntactic sugar but an assertion about *state* that influences every downstream optimisation.

1. **Fundamental problem** – we want to model computation as a sequence of pure functions whenever possible.  
   A `val` guarantees that once the variable is initialised its reference cannot change, so any code that reads it can be treated as reading a constant.  

2. **Why it must work that way** – mutability introduces hidden dependencies: another thread could re‑assign the field after your function has read it, breaking referential transparency and making reasoning impossible.  
   By forbidding reassignment (`var`) we enable *referentially transparent* programs, which in turn allow whole‑program optimisations such as constant folding, dead‑code elimination, and parallel execution without locks.

3. **Connection to deeper principles** – immutability is a form of *information flow control*: the value’s provenance is clear (one write → many reads).  
   In type theory this corresponds to the notion of *algebraic data types* where constructors are values with no side effects, enabling formal verification.

4. **Non‑obvious insight** – even if you only read a `var` once, the compiler still treats it as mutable and cannot perform certain optimisations (e.g., escape analysis).  
   Thus, declaring something as a `val` can yield *better runtime performance* beyond just safety, because the JVM can inline it or avoid generating accessor methods.

In short: **`val` → immutable reference → safer reasoning & better optimisation; `var` → mutable state → more flexibility but loss of guarantees and potential inefficiency.**

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
