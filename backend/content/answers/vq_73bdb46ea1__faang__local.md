---
qid: vq_73bdb46ea1__faang__local
question: In Python, how are arguments delivered by value or reference?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 417
total_tokens: 651
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:16:52-05:00'
sources: []
---

**Clarify**  
You’re asking whether a function in Python receives its arguments *by value* (a copy) or *by reference* (the original object).  
Assumptions: the caller passes built‑in types (`int`, `list`, `dict`, etc.) and we care about mutability.

**Approach**  
1. Recall that every name in Python refers to an **object** on the heap.  
2. When a function is called, each argument expression is evaluated to produce a reference to an object.  
3. The function’s parameter names are bound to *those references*—no copy of the underlying object is made unless you explicitly clone it.

**Depth**  
- Primitive immutable types (`int`, `float`, `str`, `tuple`) behave “as if by value” because mutating them creates a new object; the original stays unchanged.  
- Mutable objects (`list`, `dict`, custom classes) are *by reference*: operations that mutate the object (e.g., `lst.append(1)`) affect the caller’s instance.  
- If you need isolation, use `copy.copy()` for shallow copies or `copy.deepcopy()` for nested structures.

**Edge Cases**  
- Passing a mutable object and then reassigning the parameter (`param = []`) only changes the local reference; the caller’s object is untouched.  
- Mutating a *shared* immutable object via methods that return new objects (e.g., `s.upper()`) still leaves the original unchanged.

**Optimize & Communicate**  
Explain that Python’s “pass‑by‑object‑reference” guarantees constant‑time argument passing, but developers must be mindful of mutability to avoid side effects. Emphasize testing both immutable and mutable cases to confirm behavior. This concise explanation demonstrates clear reasoning, depth on language semantics, and awareness of practical pitfalls—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
