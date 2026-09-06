---
qid: vq_6d9e29d879__faang__local
question: What is MRO in Python? How does it work?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 476
total_tokens: 710
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:15:16-05:00'
sources: []
---

**Clarify**  
You’re asking about *Method Resolution Order* (MRO) in Python: the deterministic sequence that determines which method is called when a class inherits from multiple parents. I’ll assume we’re working with Python 3’s new-style classes and the C3 linearization algorithm.

**Approach**  
1. Explain what MRO is and why it matters.  
2. Describe how Python builds the order using C3.  
3. Show a concrete example (`class A, B, C` → `class D(A,B,C)`).  
4. Touch on `super()` usage.  
5. Note complexity & trade‑offs.

**Depth**  
MRO is the list of classes that Python consults when looking up an attribute or method. In CPython it’s computed once per class via the *C3 linearization* algorithm, which guarantees a consistent order that respects inheritance hierarchies and local precedence. For `class D(A,B,C)` the MRO becomes `[D, A, B, C, object]`. The algorithm merges the parent lists while preserving the relative order of each parent’s own MRO, ensuring no class appears before one of its parents.

`super()` relies on this list: calling `super().method()` in `D` will invoke `A.method()`, then `B.method()`, etc., following the MRO. If a method is missing or raises an error, Python continues down the chain.

**Edge Cases**  
- *Diamond inheritance*: ensures each class appears only once.  
- *Multiple inheritance conflicts*: algorithm will raise `TypeError` if it can’t linearize (e.g., conflicting orders).  
- *Old‑style classes* (Python 2): no MRO, different resolution.

**Optimize & Communicate**  
Explain that the MRO computation is O(n) per class and cached; runtime lookup is a simple dictionary or attribute scan. Mention that using `super()` correctly avoids hard‑coded parent names and makes refactoring safe. Summarize: “MRO gives Python a predictable, linear path through complex inheritance graphs, enabling clean use of `super()` and preventing ambiguous method resolution.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
