---
qid: vq_2f83e9f8c5__faang__local
question: What is the relationship between Int and RichInt in Scala?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 440
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:04:37-05:00'
sources: []
---

**Clarify**  
The question asks how `Int` (the primitive integer type) relates to `RichInt`, a wrapper class in Scala’s standard library. I’ll assume the interviewer wants the object‑oriented vs. value‑type relationship and any implications for performance or API design.

**Approach**  
1. Explain that `Int` is a value type compiled directly to JVM `int`.  
2. Describe `RichInt` as an implicit wrapper (`class RichInt(val self: Int)`) providing enriched methods.  
3. Mention how Scala’s pre‑Scala 2.13 implicit enrichment works, and the modern `scala.math.RichInt` deprecation in favor of extension methods.

**Depth**  
- `Int` is a sealed trait extending `AnyVal`; no heap allocation.  
- `RichInt` extends `AnyRef` and holds an `Int` field (`self`).  
- Operations on `Int` are primitives; when you call a method that only exists on `RichInt`, the compiler inserts an implicit conversion: `new RichInt(x)`.  
- This adds one object allocation per such call, affecting performance in tight loops.  
- In Scala 2.13+, extension methods replace `RichInt`; no runtime wrapper is created—methods are compiled as static functions.

**Edge Cases**  
- Mixing Java APIs that expect `java.lang.Integer` will auto-box `Int`.  
- Recursive calls to `RichInt` methods can cause stack overflow if not careful.  
- Using `RichInt` on the JVM’s hotspot may lead to subtle JIT de‑optimizations due to extra indirection.

**Optimize & Communicate**  
Highlight that for production code, prefer built‑in operators or Scala 2.13 extension methods over `RichInt`. If you must use `RichInt`, benchmark critical paths to ensure no hidden allocations. Conclude by noting the historical context: `RichInt` was essential before extension methods, but modern Scala has streamlined this pattern.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
