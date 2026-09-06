---
qid: vq_95b742d145__faang__local
question: Is multiple inheritance possible in Python?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 391
total_tokens: 620
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:23:24-05:00'
sources: []
---

**Clarify**  
The question asks whether a class can inherit from more than one parent class in Python and, if so, how that works. I’ll assume the interviewer wants an understanding of *multiple inheritance* semantics, diamond‑problem resolution, and practical considerations.

**Approach**  
1. State that yes—Python supports multiple inheritance natively.  
2. Explain the method resolution order (MRO) algorithm (`C3 linearization`) used to resolve attribute lookups.  
3. Mention `super()` usage in cooperative inheritance.  
4. Highlight potential pitfalls: ambiguity, tight coupling, and maintenance overhead.

**Depth**  
- A class can list several bases: `class Child(A, B): …`.  
- When an attribute is accessed, Python walks the MRO (e.g., `Child → A → B → object`).  
- The C3 algorithm guarantees a consistent linearization that respects local precedence order and parent hierarchies.  
- `super()` automatically follows this order, enabling each class to call its “next” method without hard‑coding the parent name.

**Edge Cases**  
- *Diamond inheritance*: two parents inherit from the same grandparent; MRO ensures the grandparent’s methods are invoked only once.  
- *Multiple unrelated bases* that define the same attribute or method—resolution follows MRO, but semantic conflicts may arise.  
- Mixing old‑style (`class X:`) and new‑style (`class X(object):`) classes can break MRO.

**Optimize & Communicate**  
In practice, prefer composition over deep inheritance trees to avoid complexity. If multiple inheritance is needed, document the intended hierarchy, use `super()` consistently, and write unit tests that cover attribute resolution paths. This keeps code maintainable while leveraging Python’s powerful inheritance model.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
