---
qid: ing_54ee276c8b__faang__local
question: 'Explain: We''re telling python interpreter, hey, pass this'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 524
total_tokens: 758
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:01:32-05:00'
sources: []
---

**Clarify**  
The question asks why a Python interpreter sometimes “passes” an object rather than copying it when you call a function. I’ll assume we’re talking about argument‑passing semantics (call‑by‑reference vs. call‑by‑value) and how they affect mutability.

---

**Approach**  

1. Restate the semantics of parameter passing in CPython.  
2. Explain the underlying implementation: reference counting, `PyObject*` pointers.  
3. Discuss implications for mutable vs. immutable objects.  
4. Highlight edge cases (default arguments, keyword arguments).  

---

**Depth**

- **Call‑by‑object-reference**: Python passes a *reference* to the object (`PyObject*`). The interpreter does **not** create a copy unless explicitly requested.
  - For immutable types (`int`, `str`, `tuple`), any “mutation” actually creates a new object; callers see no change.
  - For mutable types (`list`, `dict`, custom objects), in‑place modifications affect the caller’s reference because both names point to the same memory location.
- **Reference counting**: Each time a name refers to an object, its refcount increments. On function entry, arguments receive a new reference; on exit, references are decremented. This is O(1) per argument.
- **Copying**: Only performed when explicitly invoked (`obj.copy()`, `list(obj)`), or implicitly by operations that require a new object (e.g., slicing a list creates a new list).

---

**Edge Cases**

| Case | Behavior | Why |
|------|----------|-----|
| Default arguments (`def f(x=[]): …`) | Same list across calls | Defaults evaluated once at definition time. |
| Keyword-only arguments | Same semantics as positional | Still reference passing. |
| *args/**kwargs | Tuple/dict of references | No copy, but new container created. |

---

**Optimize & Communicate**

- **Optimization**: Use immutable types or defensive copies (`obj[:]`, `copy.deepcopy`) when you need isolation; avoid accidental shared state.
- **Communication**: Emphasize that “passing” in Python is about *references*, not deep copies, and that understanding mutability is key to avoiding bugs. This shows mastery of low‑level implementation while keeping the answer concise for a FAANG interview.

*Word count:* ~210 words.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
