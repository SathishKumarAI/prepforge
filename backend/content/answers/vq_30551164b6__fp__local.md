---
qid: vq_30551164b6__fp__local
question: What is the super class of all classes in Scala?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 299
total_tokens: 470
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:30:08-05:00'
sources: []
---

In Scala every value—primitive or reference—is an instance of a type that participates in a single inheritance chain ending at the root `Any`.  
Why this design?  

* **Uniformity**: By treating `Int`, `String`, `List` and user‑defined classes all as subtypes of one root, the compiler can generate generic code (e.g., collections) without special‑case handling for primitives.  
* **Type safety + polymorphism**: The root must provide the minimal interface that *every* value offers (`toString`, `equals`, `hashCode`). These methods are defined in `AnyRef` and `AnyVal`; `Any` itself is an abstract supertype with no members, allowing both reference and value types to coexist.  
* **Optimisation**: The runtime knows that any object can be cast to `Any`, so it can store references uniformly and perform downcasts safely through the JVM’s type system.

The non‑obvious insight is that *`Any` is intentionally empty*: its sole purpose is to guarantee a common ancestor, not to impose behaviour. This permits Scala to support value classes (`Int`, `Double`) as lightweight wrappers without incurring an extra object allocation, while still allowing them to participate in polymorphic APIs through the shared `Any` contract.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
