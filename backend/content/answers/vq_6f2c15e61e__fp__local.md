---
qid: vq_6f2c15e61e__fp__local
question: what is scala singleton object?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 335
total_tokens: 501
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:39:58-05:00'
sources: []
---

In Scala a *singleton object* is the concrete instance of an **object‑value** that satisfies the type `Object`.  
Think of a program as a collection of functions and data; each function must be invoked on some value.  
When we write  

```scala
object Config { val port = 8080 }
```

we ask the compiler to create **exactly one** runtime instance of the class that implements this object. The underlying type is an anonymous subclass of `Object`, instantiated once and shared globally.  

Why must it exist? Because many modules need a *shared, immutable* configuration or utility without passing it around. A singleton gives:

1. **Global state with controlled mutation** – the fields are vals, so they’re immutable; only one instance means no accidental copies.
2. **Lazy initialization** – Scala guarantees that the object is created on first access, using thread‑safe double‑checked locking under the hood.
3. **Namespace and static members** – `object` lets you expose methods (`def load()`) without requiring an outer class; they act like Java’s static methods but with full type safety.

A non‑obvious insight: a singleton object is *also* a companion to a class of the same name (if defined). The compiler automatically links them, allowing private access between the two. This permits pattern matching on case classes while keeping construction logic hidden inside the companion’s singleton, blending encapsulation with functional style.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
