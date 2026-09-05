---
qid: vq_6badc63f74__fp__local
question: Difference between Traits and abstract class in scala?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 510
total_tokens: 679
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:39:22-05:00'
sources: []
---

In Scala, both **traits** and **abstract classes** are ways to express “a contract” that concrete types must satisfy, but they differ in how they model *behaviour* versus *state*, and in the mechanics of multiple inheritance.

| Aspect | Abstract Class | Trait |
|--------|----------------|-------|
| **State** | Can declare fields (concrete or abstract) → each subclass owns a single copy. | Only `val`/`lazy val`; no concrete fields; any state must be expressed via abstract methods, so all mixins share the same “view” of state. |
| **Inheritance** | Single‑inheritance only – one parent class per child. | Multiple‑inheritance (mix‑in) – a type can extend many traits, allowing composition of orthogonal concerns. |
| **Constructor Parameters** | Can take constructor arguments; subclasses must pass them. | No primary constructor parameters (only `self` annotations). |
| **Early Initialization** | Requires early initializers or auxiliary constructors to set fields before super calls. | Trait constructors run after the class body, so they cannot depend on subclass state that is not yet initialized. |
| **Binary Compatibility** | Adding a new method forces recompilation of subclasses (unless it’s `final`). | Traits are compiled into interfaces with default methods; adding an abstract method requires only re‑implementing in mixins. |

**Why the distinction matters**

Traits embody *behavioural abstraction*—they describe “I can do X” without owning data. Abstract classes blend behaviour and state, modeling a single conceptual entity that may have its own identity (e.g., `Exception`, `List`). Because traits are interface‑like, they enable *multiple orthogonal dimensions of behaviour* to be composed without the “diamond problem”; Scala resolves this via linearization.

**Non‑obvious insight**

A trait’s lack of concrete fields means it cannot maintain per‑instance state unless that state is stored in a companion object or passed as an implicit parameter. Consequently, when you mix a trait into a class that already has mutable fields, the trait sees those fields only through abstract accessors. This subtlety often leads developers to inadvertently introduce *field duplication* or *unintended coupling*, which can be avoided by designing traits purely in terms of functions and leaving state to the concrete class.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
