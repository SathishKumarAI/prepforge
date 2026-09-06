---
qid: vq_97683b3f09__faang__local
question: How does yield work in Scala?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 487
total_tokens: 717
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:23:41-05:00'
sources: []
---

**Clarify**  
You’re asking how the `yield` keyword behaves in Scala’s for‑comprehensions (or generators). I’ll assume you mean *“what does `yield` do and when should we use it?”* – not the database yield or other contexts.

**Approach**  
1. Explain the syntactic sugar of a for‑comprehension → map/flatMap/filter.  
2. Show how `yield` transforms the comprehension into a collection builder.  
3. Discuss side‑effects and when to avoid `yield`.  
4. Provide complexity notes (O(n) in most cases).  

**Depth**  
A Scala *for* loop is syntactic sugar for successive calls to `map`, `flatMap`, or `withFilter` on the first generator’s collection. The pattern

```scala
for (x <- xs; y <- ys if p(x,y)) yield f(x,y)
```

expands roughly to:

```scala
xs.flatMap { x =>
  ys.withFilter(y => p(x,y)).map { y => f(x,y) }
}
```

`yield` forces the result of the last expression inside the block to be collected into a new collection (the same type as the first generator). The compiler uses an implicit builder (`CanBuildFrom`) to accumulate results, so the operation is linear in the number of produced elements.

If you omit `yield`, the comprehension becomes a *for‑do* statement: it executes side‑effects but returns `Unit`. Use `yield` when you need a new collection; use a plain for‑do when only side‑effects matter (e.g., logging).

**Edge Cases**  
- Empty collections → empty result.  
- Nested generators with filters can lead to exponential blow‑up if not careful.  
- Using mutable collections as the first generator may bypass builder optimizations.

**Optimize & Communicate**  
For large datasets, prefer streaming APIs (`Iterator`, `Stream`) or parallel collections (`par`). Always benchmark the generated code to confirm it matches expectations. In an interview, I’d narrate: *“`yield` is essentially a map over the flattened result of all generators; it’s clean, type‑safe, and lets the compiler pick the best builder.”*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
