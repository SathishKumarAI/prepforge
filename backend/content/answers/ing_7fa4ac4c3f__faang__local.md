---
qid: ing_7fa4ac4c3f__faang__local
question: 'Explain: Define abstract classes — LLD-OOPs-Design-Patterns/TipsAndTechniques.md
  at main \u00b7 Anshul619/LLD-OOPs-Design-Patterns \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 271
output_tokens: 436
total_tokens: 707
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:41:47-05:00'
sources: []
---

**Abstract Classes – A Quick FAANG‑Style Overview**

| Section | Key Points |
|---------|------------|
| **Clarify** | *What* is an abstract class? It’s a blueprint that can’t be instantiated directly but may provide shared implementation to subclasses. *Why* ask: Does the language support `abstract` keyword? Are we in Java/C#/Python context? |
| **Approach** | 1️⃣ Identify common behavior among classes.<br>2️⃣ Create an abstract base with concrete helpers and abstract methods.<br>3️⃣ Let concrete subclasses implement the abstract parts. |
| **Depth** | • *Abstract Methods*: declared without body; force override.<br>• *Concrete Methods*: can be reused or overridden.<br>• *Constructors* run in subclass init chain.<br>• In Java/C#, you can have fields, static members, and access modifiers. <br>• In Python, use `abc` module (`@abstractmethod`).<br>• Use abstract classes for **polymorphic** APIs (e.g., `Shape.draw()`), ensuring compile‑time safety. |
| **Edge Cases** | • Forgetting to override an abstract method → compile error.<br>• Mixing static and instance members incorrectly.<br>• Circular inheritance or deep hierarchies that hurt maintainability. Test by creating minimal subclass and calling inherited methods. |
| **Optimize & Communicate** | • Prefer interfaces (Java 8+) when only contracts are needed; use abstract classes for shared state/logic.<br>• Keep the hierarchy shallow—avoid >3 levels to reduce cognitive load.<br>Explain trade‑offs: abstraction vs. code duplication, and how it aids unit testing by allowing mocks of the base class. |

**Bottom line:** Abstract classes strike a balance between **reusability** (shared implementation) and **enforcement** (must‑implement contract), making them a staple in clean OO design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
