---
qid: vq_0d23769b34__faang__local
question: What are the default imports in Scala Language?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 499
total_tokens: 731
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T17:57:22-05:00'
sources: []
---

**Clarify**

The interviewer wants a concise list of *implicit* or *default* packages that are available without an explicit `import` when writing plain‑Scala code (e.g., in the REPL or a simple script).  
Assumptions: we’re speaking about Scala 2.13/3.x, standard library only, no external dependencies.

**Approach**

1. Enumerate the top‑level packages that are automatically on the classpath.  
2. Group them by purpose (core types, collections, utilities).  
3. Mention any subtlety such as `scala.Predef` being implicitly imported for its members.

**Depth**

| Package | Key contents |
|---------|--------------|
| **scala** | Core language constructs (`Any`, `Object`, `Int`, etc.). |
| **scala.collection** | Base collection interfaces; sub‑packages: `immutable`, `mutable`. |
| **scala.util** | Utility classes: `Try`, `Success`, `Failure`, `Random`. |
| **scala.concurrent** | Futures, Promises, ExecutionContext. |
| **scala.io** | I/O helpers (`Source`). |
| **scala.math** | Numeric types and functions. |
| **scala.annotation** | Annotation definitions (e.g., `@tailrec`). |
| **scala.language** | Feature‑enabling flags (e.g., `implicitConversions`). |
| **scala.sys** | System utilities (`props`, `exit`). |

Additionally, *every* Scala source implicitly imports `scala.Predef._`, which brings in:

- Predefined types (`AnyVal`, `Option`, etc.).
- Implicit conversions (`stringWrapper` for string interpolation).
- Extension methods (`toInt`, `toDouble`).

**Edge Cases**

- In a *package object*, you may need to explicitly import sub‑packages if you want them visible.  
- Scala 3’s new **implicit imports** can bring additional names (e.g., `scala.collection.mutable`) but they’re still optional.

**Optimize & Communicate**

To show mastery, I’d explain that while these are the “default” imports, a production project usually adds its own aliases or hides unwanted ones. I’d conclude by stressing that understanding this baseline helps avoid accidental name clashes and keeps code portable across Scala versions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
