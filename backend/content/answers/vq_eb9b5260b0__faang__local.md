---
qid: vq_eb9b5260b0__faang__local
question: What does an object() do?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 472
total_tokens: 701
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:41:11-05:00'
sources: []
---

**Clarify**

> *“What does `object()` do in Python?”*  
> Assume the interviewer means the built‑in type `object`, not a custom class, and wants you to explain its purpose, how it’s used as a base, and what happens when you instantiate it.

---

**Approach**

1. Define `object` as the root of Python’s class hierarchy.  
2. Explain that calling `object()` creates an instance of this minimal object.  
3. Highlight the attributes/methods (`__repr__`, `__hash__`, etc.) and why they’re useful.  
4. Note common use cases (empty base classes, type checking).  

---

**Depth**

`object` is a *built‑in* class defined in C; every user‑defined class implicitly inherits from it if no other base is given:

```python
class MyClass:          # == class MyClass(object):
    pass
```

Calling `obj = object()` produces an instance that:

- Has no attributes of its own (empty `__dict__`).  
- Provides the default implementations of *object* protocol methods:  
  - `__repr__` → `<object object at 0x...>`  
  - `__hash__` → based on identity (`id(obj)`)  
  - Comparison operators (`==`, `!=`) compare identities.  

Because it has no data, the instance is lightweight (≈16 bytes). It’s often used as a sentinel or to create “empty” base classes:

```python
class Marker(object): pass   # zero‑overhead marker type
```

---

**Edge Cases**

- Trying to add attributes after creation will raise `AttributeError` unless you modify the class.  
- Subclassing `object` directly is rarely useful; Python automatically does it for you.

---

**Optimize & Communicate**

Explain that using `object()` gives a guaranteed, minimal object with identity semantics—ideal when you only need a placeholder or marker without state. Mention that in tight loops creating many such objects can be wasteful; consider using `None` or a singleton instead.  

*Result: 184 words.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
