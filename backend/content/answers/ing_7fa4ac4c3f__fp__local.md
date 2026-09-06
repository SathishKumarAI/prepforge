---
qid: ing_7fa4ac4c3f__fp__local
question: 'Explain: Define abstract classes — LLD-OOPs-Design-Patterns/TipsAndTechniques.md
  at main \u00b7 Anshul619/LLD-OOPs-Design-Patterns \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 208
output_tokens: 357
total_tokens: 565
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:36:44-05:00'
sources: []
---

**Abstract classes – the “incomplete blueprint” of OOP**

The core problem they solve is *partial abstraction*: you want a common interface and shared implementation for several subclasses, yet you know that some methods cannot be meaningfully implemented at the base level. An abstract class lets you declare those methods as **abstract**, forcing concrete subclasses to supply the body while still inheriting any non‑abstract behaviour.

Why must it work this way?  
1. **Compile‑time safety** – The compiler guarantees that every concrete subclass implements all abstract members, preventing accidental omissions that would otherwise surface only at runtime.  
2. **Polymorphic contracts** – Clients can refer to the abstract type without caring about the actual implementation, enabling substitution and extensibility.

From an optimization viewpoint, abstract classes enforce a *single responsibility* for the shared logic: it lives once in the base, avoiding code duplication (space). The abstract methods become *virtual slots*, which the runtime resolves via vtables—an OOP analogue of dispatch tables that keep the call graph flat and cache‑friendly.

**Non‑obvious insight:**  
An abstract class is not just a “must‑implement” contract; it also serves as a **factory for type‑dependent defaults**. By providing default, non‑abstract methods that rely on the abstract ones, you can give subclasses sensible behaviour out of the box while still permitting full customization. This pattern—*template method*—is often hidden behind the “abstract class” label but is the real engine behind many design patterns (e.g., Iterator, Strategy).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
