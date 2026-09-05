---
qid: vq_fd43d8f385__fp__local
question: Difference between and singleton object and class in scala?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 413
total_tokens: 583
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:05:08-05:00'
sources: []
---

In Scala a **class** is a *blueprint* that can be instantiated many times; each instance carries its own state (fields) and behavior (methods). Instantiating a class allocates memory for the new object, assigns it an identity (`==` uses reference equality unless overridden), and may trigger constructor logic.

A **singleton object** (`object Foo`) is a *single* instance created automatically at first access. It has no constructor parameters, cannot be instantiated again, and its members are static in effect. The compiler generates a class `Foo$` with a single field holding the sole instance, and a companion object if a class `Foo` exists.

**Why this design?**  
- **Encapsulation of global state:** A singleton naturally models a unique resource (e.g., configuration, logger).  
- **Lazy initialization & thread safety:** The JVM guarantees that the first reference to an object literal triggers safe publication.  
- **Type‑level separation:** By having distinct classes for `Foo` and `Foo$`, Scala preserves the ability to refer to the type of the singleton (`Foo.type`) while keeping runtime objects separate.

**Non‑obvious insight:**  
The companion `object` can *override* members of its class, enabling a form of “static polymorphism.” Since the compiler treats the object as an instance of its own generated class, you can write:

```scala
class Foo(val x: Int)
object Foo { def apply(x: Int) = new Foo(x + 1) } // custom constructor
```

Thus, singleton objects are not just static holders; they can provide alternative constructors or factory logic that the class itself cannot express. This subtle interplay between compile‑time types and runtime instances is what makes Scala’s object/class duality powerful.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
