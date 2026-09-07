---
qid: ing_b28f950e26__faang__local
question: 'Explain: Polymorphism — The Fundamental Pillars of Object-Oriented Programming'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 419
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:38:59-05:00'
sources: []
---

**Polymorphism – the heart of OOP**

| Step | What to say |
|------|-------------|
| **Clarify** | “You’re asking how polymorphism, one of the four pillars (encapsulation, abstraction, inheritance, polymorphism), enables objects of different classes to be treated uniformly. I’ll assume we’re talking about compile‑time vs runtime polymorphism in a statically typed language like Java/C++.” |
| **Approach** | 1️⃣ Explain static (overloading) vs dynamic (overriding). <br>2️⃣ Show how an interface/abstract class defines a contract, and concrete subclasses provide specific implementations. <br>3️⃣ Illustrate with a simple `Animal` example: `makeSound()` overridden by `Dog`, `Cat`. |
| **Depth** | • **Static polymorphism** – compile‑time binding; method signatures differ (e.g., `print(int)`, `print(String)`). Complexity O(1). <br>• **Dynamic polymorphism** – runtime binding via virtual tables (vtable); a base pointer (`Animal*`) can refer to any subclass. The JVM/CLR handles dispatch in ~O(1). <br>• Enables **open‑closed principle**: add new animal types without modifying client code. |
| **Edge Cases** | • Calling an overridden method on a null reference → `NullPointerException`. <br>• Covariant return types allowed in Java 5+. <br>• Performance hit from virtual dispatch; mitigated by JIT in modern runtimes. |
| **Optimize & Communicate** | “If we had millions of animal objects, consider caching the vtable pointer or using method handles to reduce indirection. In interview terms: I’d note that polymorphism trades a tiny runtime cost for massive flexibility and maintainability—exactly what FAANG teams value when scaling codebases.” |

*Word count: ~200 words.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
