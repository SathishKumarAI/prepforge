---
qid: vq_75c6ada849__fp__local
question: Mention Some keywords which are used by Java and not required in Scala?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 443
total_tokens: 617
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:41:21-05:00'
sources: []
---

### Java‑only keywords (Scala can do without them)

| Keyword | Why it’s exclusive to Java | Scala substitute |
|---------|---------------------------|------------------|
| `synchronized` | Java uses monitor locks on every object; the keyword is a *statement* that acquires/releases a lock. | Scala’s `@volatile`, `AtomicReference`, or higher‑level concurrency primitives (`Future`, `Actor`) replace the need for explicit monitors. |
| `transient` | Marks a field to be skipped by Java’s default serialization. | Scala’s `@SerialVersionUID` and custom `readObject/writeObject` methods handle serialization; the language itself doesn’t expose a `transient` keyword. |
| `volatile` | Declares that reads/writes bypass thread caches, ensuring visibility across threads. | Scala encourages immutable data or uses `java.util.concurrent.atomic` types; the language’s type system and immutability reduce the need for volatile fields. |
| `native` | Indicates a method is implemented in JNI (C/C++). | Scala runs on the JVM too but typically avoids native code, using Java libraries instead. |
| `strictfp` | Forces strict IEEE‑754 floating‑point semantics. | Scala inherits Java’s FP rules; it offers no keyword to enforce stricter rounding. |

**Why these exist in Java?**  
Java was designed as a low‑level language that exposes JVM internals (locks, serialization flags). Scala, built on top of the JVM, prefers higher‑level abstractions: immutable data structures, functional concurrency, and type safety. By omitting these keywords, Scala encourages idiomatic use of its own primitives rather than fiddling with JVM quirks.

**Non‑obvious insight:**  
Even though Scala runs on the same VM, it *doesn’t need* `volatile` because its emphasis on immutability turns most shared state into read‑only data. The burden of visibility is shifted to the type system, not a keyword.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
