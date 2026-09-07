---
qid: ing_8039e01117__faang__local
question: 'Explain: Although inheritance is a popular OOPs concept, it is less advantageous
  than composition. Explain.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 552
total_tokens: 795
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:43:25-05:00'
sources: []
---

**Clarify**

We’re comparing two ways to reuse behavior in object‑oriented design: *inheritance* (class A extends B) vs *composition* (class C contains an instance of D).  
Assumptions:  
- “Inheritance” means a static type hierarchy; “composition” means delegating through interfaces/objects.  
- We care about maintainability, flexibility, and testability in large codebases.

**Approach**

1. List the benefits of inheritance (code reuse, polymorphism).  
2. Highlight its drawbacks relative to composition: tight coupling, fragile base‑class changes, hidden dependencies.  
3. Show how composition addresses these issues.  

**Depth**

| Aspect | Inheritance | Composition |
|--------|-------------|--------------|
| **Coupling** | Subclass tightly coupled to parent’s implementation; any change ripples. | Child uses an interface; only the component’s contract matters. |
| **Extensibility** | Adding new behavior often requires creating deep hierarchies or breaking encapsulation (e.g., “Template Method”). | Behaviors can be swapped at runtime by injecting different implementations. |
| **Testability** | Hard to mock parent state; unit tests must instantiate real superclasses. | Easy to inject mocks/stubs; each component is isolated. |
| **Polymorphism** | Provides compile‑time polymorphism via overridden methods. | Provides run‑time polymorphism through interfaces/strategies. |
| **Maintenance** | A bug in a base class can break many subclasses (“fragile base” problem). | Changes to one component don’t affect unrelated parts. |

**Edge Cases**

- *Deep inheritance trees* (≥3 levels) often indicate design smell.  
- If the hierarchy is truly “is‑a” and stable, inheritance may still be acceptable.  
- Composition can introduce boilerplate delegation code unless language features (delegation, traits) help.

**Optimize & Communicate**

In practice, start with composition: define clear interfaces, inject collaborators via constructors or setters. Use inheritance only for *behavioral* reuse that is unlikely to change (e.g., a `Serializable` marker). This keeps the system modular, easier to refactor, and aligns with FAANG’s emphasis on test‑driven, maintainable codebases.  

> **TL;DR:** Inheritance couples classes tightly and propagates changes through the hierarchy, making large systems brittle. Composition offers loose coupling, clearer contracts, better testability, and runtime flexibility—qualities that scale to the complex codebases typical at FAANG companies.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
