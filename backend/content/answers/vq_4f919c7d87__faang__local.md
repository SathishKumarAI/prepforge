---
qid: vq_4f919c7d87__faang__local
question: what is currying in scala?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 484
total_tokens: 714
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:10:05-05:00'
sources: []
---

**Clarify**  
The interviewer asks for *currying* in Scala—a functional‑programming concept. I’ll assume they want a definition, an example, and its practical use (e.g., partial application).

---

**Approach**  
1. Define currying conceptually.  
2. Show Scala syntax (`def f(a: A)(b: B): C`).  
3. Explain how it enables partial application.  
4. Mention where it’s useful (dependency injection, DSLs).  

---

**Depth**  
Currying transforms a function that takes multiple arguments into a chain of single‑argument functions. In Scala:

```scala
def add(x: Int)(y: Int): Int = x + y   // curried form
```

Calling `add(3)` returns a new function `Int => Int`; applying `(5)` yields `8`.  
This is equivalent to an uncurried version:  

```scala
def addUncurried(x: Int, y: Int) = x + y
```

Currying allows **partial application**:

```scala
val inc = add(1)          // Function1[Int,Int]
val result = inc(10)      // 11
```

It also improves type inference and readability in higher‑order APIs (e.g., `map`, `flatMap`). In Scala 3, the syntax can be simplified with `def f(x: Int)(y: Int): Int`.

---

**Edge Cases**  
- **No side effects**: Currying is purely functional; stateful functions may not benefit.  
- **Performance**: Each partial application creates a new closure—rarely problematic but worth noting in tight loops.  
- **Over‑currying**: Excessive nesting can hurt readability.

---

**Optimize & Communicate**  
I’d highlight that currying is not just syntactic sugar; it enables clean, composable APIs and supports functional patterns like *function factories*. I would finish by mentioning that Scala’s implicit conversions or `FunctionN` types further leverage currying for DSL design. This concise, structured explanation aligns with FAANG expectations: clear problem framing, methodical reasoning, depth, edge‑case awareness, and a polished narrative.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
