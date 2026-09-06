---
qid: ing_e21c11af9e__fp__local
question: 'Explain: Define interfaces — LLD-OOPs-Design-Patterns/TipsAndTechniques.md
  at main \u00b7 Anshul619/LLD-OOPs-Design-Patterns \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 207
output_tokens: 466
total_tokens: 673
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:00:39-05:00'
sources: []
---

### What the *interfaces* section actually does

At its core, an interface is a contract: “I promise to expose these operations, and I won’t say anything about how they are implemented.”  
In **low‑level design (LLD)** this guarantees that:

1. **Clients see only what matters** – callers depend on the abstract type, not on concrete classes.
2. **Implementations can evolve independently** – a new storage backend or algorithm can be swapped in without touching client code.

The file *Design‑Patterns/TipsAndTechniques.md* distills this principle into three design patterns that routinely surface in object‑oriented systems:

| Pattern | Why it’s needed | Core idea |
|---------|-----------------|-----------|
| **Strategy** | Different algorithms for the same task (e.g., sorting, compression) need to be interchangeable. | Each algorithm implements a common interface; the client holds a reference to that interface and can change strategy at runtime. |
| **Template Method** | A skeleton of an operation is fixed, but some steps vary by subclass. | The base class defines the template method (the “when”) while abstract methods (the “what”) are implemented in concrete subclasses. |
| **Adapter** | Legacy or third‑party classes don’t match the interface your code expects. | Wraps the legacy object and translates its API to the target interface, enabling composition without modification. |

---

#### A non‑obvious insight

Most people treat interfaces as *just* a way to hide implementation.  
The deeper point is that **interfaces enforce a separation of concerns that mirrors information theory**: each interface encodes exactly the *information* that callers need, no more, no less. This minimality reduces coupling and makes static analysis (e.g., type‑checking, dependency injection) tractable—something that can be lost if you over‑expose methods or bundle unrelated responsibilities into a single class.

In practice, think of an interface as a *black‑box spec* that guarantees the same input–output behavior regardless of internal changes. That guarantee is what lets teams iterate rapidly while keeping the system robust.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
