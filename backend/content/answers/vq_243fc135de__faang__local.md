---
qid: vq_243fc135de__faang__local
question: Is there a simple, elegant way to define Singletons?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 476
total_tokens: 710
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:01:59-05:00'
sources: []
---

**Clarify**  
You want an idiomatic, minimal‑boilerplate pattern in Python that guarantees only one instance of a class exists (a *singleton*). Assume you’re not constrained by metaclass gymnastics and you can use the standard library.

**Approach**  
Use a module‑level private variable to hold the instance, expose a factory function, and optionally wrap the class so it can’t be instantiated directly. This keeps the API simple: `get_instance()`.

**Depth**  
```python
# singleton.py
class _Singleton:
    def __init__(self):
        self.value = 0          # whatever state you need

_singleton_instance = None

def get_instance() -> _Singleton:
    global _singleton_instance
    if _singleton_instance is None:           # first call creates it
        _singleton_instance = _Singleton()
    return _singleton_instance
```

- **Thread safety**: In CPython the GIL protects the simple check‑then‑create pattern, but for true multi‑threaded use wrap the creation in a `threading.Lock`.  
- **Pickling**: If instances need to be pickled, implement `__new__` or add a `__reduce__` that returns `get_instance()`.  
- **Subclassing**: Keep the class private (`_Singleton`) so callers can’t bypass `get_instance()`.

Complexity is O(1) for retrieval; memory cost is just one object. The pattern avoids metaclasses, keeps imports clean, and is test‑friendly (you can monkey‑patch `_singleton_instance`).

**Edge Cases**  
- Multiple imports: module caching ensures a single instance per interpreter process.  
- Reloading modules (`importlib.reload`) creates a new instance; guard against this if needed.  
- Pickle/JSON serialization may create new objects unless handled explicitly.

**Optimize & Communicate**  
If you need lazy‑loading of heavy resources, move the instantiation into `get_instance()` (as shown). For stricter control, expose only the factory and document that direct construction is disallowed. This solution balances elegance, performance, and Pythonic simplicity—exactly what FAANG interviewers look for in a clean design pattern.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
