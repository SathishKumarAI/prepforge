---
qid: vq_26f1fab92c__faang__local
question: What is inheritance in Python?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 428
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:02:49-05:00'
sources: []
---

**Clarify**  
*Question:* “What is inheritance in Python?”  
Assumptions:  
1. The interviewee knows basic OOP concepts.  
2. We’re focusing on *class‑level* inheritance (not mixins or metaclasses).  

**Approach**  
Explain the definition → why it’s useful → how to implement in Python → key nuances → complexity & pitfalls.  

**Depth**  
Inheritance lets a subclass acquire attributes and methods from a parent class (`class Child(Parent):`).  
- **Single vs. multiple inheritance:** Python supports both; the method resolution order (MRO) is computed using C3 linearization.  
- **`super()` usage:** Calls the next class in MRO, essential for cooperative multiple inheritance.  
- **Overriding & extending:** A subclass can override parent methods; to extend behavior use `super().method()`.  
- **Class vs. instance attributes:** Class variables are shared unless shadowed by an instance attribute.  
- **`__init_subclass__`:** Hook invoked when a class is subclassed, useful for validation or registration.  

Complexity:  
- Attribute lookup is O(1) per level; MRO construction is linear in depth of inheritance tree.  
- Memory overhead is minimal—just references to parent classes.

**Edge Cases**  
- Diamond problem without proper `super()` use → method executed twice.  
- Mutating shared class attributes leads to unintended side‑effects across subclasses.  
- Recursive inheritance cycles cause runtime errors during class creation.  

**Optimize & Communicate**  
Emphasize that Python’s dynamic nature allows adding or replacing methods at runtime, but this flexibility can reduce static type safety. In a production setting, prefer composition over deep inheritance hierarchies and document MRO expectations. Conveying the trade‑off between reusability (inheritance) and maintainability (avoiding tight coupling) shows strategic thinking valued by FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
