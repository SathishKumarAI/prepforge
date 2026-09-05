---
qid: vq_bc878316de__fp__local
question: What is the difference between a trait and an abstract class in Scala?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 437
total_tokens: 611
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:53:46-05:00'
sources: []
---

In Scala, **a trait** and **an abstract class** are both ways to express *partial abstraction*, but they differ in how they address the *composition vs inheritance* trade‑off.

### The fundamental problem
You want a type that can be mixed into many classes without forcing a single‑inheritance chain.  
- An **abstract class** provides an *inherited implementation*; every concrete subclass must inherit it.  
- A **trait** offers a *composable contract*: any class can mix in zero or more traits, and the compiler weaves their bytecode into that class.

### Why composition works better
Traits are implemented as *interfaces with fields*. They avoid the “diamond” problem because each trait’s state is stored separately. An abstract class would need to allocate its own fields, leading to multiple copies if mixed in through different paths. Thus traits guarantee a *single copy* of each field per concrete instance.

### Deeper principle: *Linearization*
Scala linearizes the inheritance chain so that method resolution follows a deterministic order. For an abstract class, the linearization is trivial (just its superclass). For traits, Scala must interleave multiple trait hierarchies; this is why `abstract override` methods exist—to express “I depend on the concrete implementation of my super”. This reflects *co‑effects* in functional programming: a trait can only rely on behavior that will be supplied later.

### Non‑obvious insight
A trait can **hold concrete values** (via lazy vals or defaults) and still participate in linearization. Because these fields are part of the class layout, they cannot be overridden by subclasses, unlike `val` in abstract classes. This subtle difference means traits are safer for *immutable mixins*; you can’t accidentally change a trait’s state through subclassing.

**Bottom line:** Use an abstract class when you need single inheritance and shared mutable state; use a trait when you want reusable, composable behavior that plays nicely with multiple inheritance and avoids the diamond problem.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
