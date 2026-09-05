---
qid: vq_eb9b5260b0__fp__local
question: What does an object() do?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 321
total_tokens: 487
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:02:27-05:00'
sources: []
---

In CPython, every value is a *PyObject* that carries a pointer to a type descriptor and a reference count.  
`object()` is the most primitive constructor: it asks the interpreter to allocate a new `PyObject` with its type set to `type(object)`, i.e. the built‑in base class.  

Why this matters?  
- **Identity**: Two calls to `object()` produce distinct, hashable entities that are equal only by identity (`is`). This gives us a *unique marker* that can be used as a sentinel or default value without risking accidental clashes with user data.  
- **Minimality**: The resulting object has no attributes and no slots; it merely satisfies the type system’s requirement that every instance belong to some class. Thus it is the lightest possible Python object, useful for memory‑critical containers (e.g., `dict` keys where only identity matters).  

A subtle point most overlook: because `object()` returns a *new* immutable instance each time, it can serve as a reliable **null object** in APIs that need to distinguish “no value supplied” from `None`. Unlike `None`, which is a singleton, successive `object()` calls give fresh objects that cannot be mistaken for any user‑created value. This property underpins many idioms in Python’s standard library (e.g., the default argument sentinel in `functools.lru_cache`).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
