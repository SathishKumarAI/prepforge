---
qid: vq_037be5fcd6__fp__local
question: What is the difference between a normal class and a case class in Scala?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 401
total_tokens: 576
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:20:44-05:00'
sources: []
---

In Scala a *class* is an ordinary constructor that creates mutable objects with fields, methods and a default `equals`/`hashCode` based on reference identity.  
A *case class* is a lightweight data holder that **derives** several key properties from the compiler:

| Feature | Normal class | Case class |
|---------|--------------|------------|
| Constructor arguments become immutable `val`s automatically. | None – you must declare them. | Implicit `val` parameters. |
| `equals`/`hashCode` are reference‑based unless overridden. | Manual implementation needed for value semantics. | Auto‑generated value‑semantics (field-wise). |
| No automatic `toString`. | User‑defined. | Pretty `toString` showing fields. |
| Pattern matching support (`unapply`). | Requires manual extractor. | Built‑in extractor via companion object. |
| Companion object with `apply/unapply`. | None unless written manually. | Auto‑generated for convenient construction and deconstruction. |

Why does this matter?  
The compiler turns a case class into an **immutable data value** that behaves like a *tuple* in functional programming: it can be used as a key in maps, safely shared across threads, and pattern‑matched without boilerplate. This aligns with the principle of *referential transparency*: two objects with identical fields are indistinguishable, enabling optimisations such as structural sharing.

**Non‑obvious insight:** Because case classes generate an `unapply` extractor automatically, you can pattern‑match on nested structures in a single expression (`case Person(name, age) => …`). This eliminates the need for explicit getters or manual tuple handling, making complex data pipelines more expressive and less error‑prone.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
