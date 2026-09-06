---
qid: vq_6d9e29d879__think__local
question: What is MRO in Python? How does it work?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 513
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:44:46-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
*Assume the reader knows basic OOP in Python.*  
Ask: “What is MRO?” → *Method Resolution Order, the algorithm that decides which method to call when a class inherits from multiple parents.*  
Also anticipate the follow‑up: “How does it work?” → we need to explain C3 linearization and its properties (consistency, monotonicity).

**2️⃣ Adopt the mental model of “linearized inheritance tree”**  
Think of every class as a node. MRO produces a single list (a *linearization*) that respects:  
- The order given in `class Child(ParentA, ParentB):`  
- Each parent’s own MRO  
- No class appears twice.

C3 linearization is the algorithm used; it merges these lists while preserving the above constraints.  

**3️⃣ Step‑by‑step reasoning**  
1. Start with the child’s direct parents in declaration order.  
2. Recursively compute each parent’s MRO.  
3. Merge: take the first head of any list that is not in the tail of any other list; otherwise raise an error (inconsistent).  
4. Append the chosen class to the result and remove it from all lists, repeat until all lists are empty.

Explain that Python’s `super()` follows this MRO, so calling `super().method()` walks through the linearization.

**4️⃣ Common traps to avoid**  
- Confusing “inheritance order” with *MRO* itself.  
- Forgetting that `object` is always last in the list.  
- Thinking MRO can be arbitrarily changed; it’s deterministic once the class hierarchy is defined.  
- Mixing up *method resolution* with *attribute lookup* (they follow the same order but may differ if descriptors are involved).

**5️⃣ Sanity‑check & communicate clearly**  
Use a small diagram:  

```
class A: pass
class B(A): pass
class C(A): pass
class D(B, C): pass
```

Show `D.__mro__` → `(D, B, C, A, object)` and walk through the merge steps.  
Conclude with a note: “MRO guarantees that each method is called at most once and in a predictable order, making multiple inheritance safe.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
