---
qid: ing_0d980a57c7__fp__local
question: 'Explain: Entities vs. Value Objects — 8 Key Concepts in Domain-Driven Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 515
total_tokens: 692
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:34:42-05:00'
sources: []
---

### From the problem to the pattern

When a system models *real‑world* facts, it must decide **what stays the same** and **what changes only in appearance**.  
If two records can be swapped without affecting business logic, they are *indistinguishable*; otherwise they are *distinguishable*.  

- **Entities** carry an identity that survives across all state changes.  
  They answer: *“Does this object have a unique life‑story?”*  
- **Value Objects** are defined solely by their attributes.  
  They answer: *“Do two instances look the same?”*

### Eight key concepts

| # | Concept | Why it matters |
|---|---------|----------------|
|1️⃣|Identity vs. Equality|Entities use identity equality; value objects use attribute equality—aligns with mathematical sets vs. classes.|
|2️⃣|Immutability|Value objects are immutable to guarantee referential transparency, reducing side‑effects.|
|3️⃣|Lifecycle|Entity lifetime is managed by the persistence layer; value objects live only within the entity’s scope.|
|4️⃣|Encapsulation|Entities expose behaviour that mutates state; value objects encapsulate invariant checks.|
|5️⃣|Serialization|Value objects can be serialized as plain data; entities need identity mapping (e.g., ORM keys).|
|6️⃣|Domain semantics|Identity signals a *thing* (Customer), attributes signal *properties* (Address).|
|7️⃣|Testing|Value objects are trivially unit‑tested; entities require fixture setup.|
|8️⃣|Performance|Storing value objects inline reduces join overhead; entities may incur lazy loading costs.|

### Non‑obvious insight

**Identity is a *conceptual contract*, not just a database key.**  
If two `Customer` instances share the same UUID but have diverging state, they are still one entity; the system’s guarantees hinge on that contract.  
Treating identity as an invariant lets you refactor persistence (switch from SQL to NoSQL) without touching domain logic—because the *meaning* of “same customer” never changes.

In short: Entities answer *who*, value objects answer *what*. Recognizing this split turns a messy data model into a clear, testable, and resilient design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
