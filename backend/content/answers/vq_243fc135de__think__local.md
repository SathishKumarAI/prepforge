---
qid: vq_243fc135de__think__local
question: Is there a simple, elegant way to define Singletons?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 521
total_tokens: 711
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:21:35-05:00'
sources: []
---

**1️⃣ Clarify the goal and assumptions**  
* “Singleton” means *exactly one instance per class* (or module) that is reused everywhere.  
* Assume a typical Python environment (≥3.7), no external libs unless you want to mention them, and that the user wants readability over micro‑optimisation.

**2️⃣ Pick a mental model / design pattern**  
Singletons in Python are usually implemented via one of three idioms:  
1. **Module‑level singleton** – just expose an instance at module import time.  
2. **Metaclass or decorator** that intercepts `__call__` to return the same object.  
3. **Lazy‑initialisation class with a private attribute** (classic pattern).

These models map neatly onto Python’s dynamic features: modules are singletons by nature, metaclasses give fine control, and lazy init keeps the API simple.

**3️⃣ Reason step‑by‑step toward an answer**  
* Start with the simplest: a module that creates `instance = MyClass()`.  
* If you need class‑based syntax (`obj = MySingleton()`), show a small decorator:

```python
def singleton(cls):
    instance = None
    def get(*args, **kwargs):
        nonlocal instance
        if instance is None:
            instance = cls(*args, **kwargs)
        return instance
    return get
```

* For more control, give the metaclass example:

```python
class SingletonMeta(type):
    _instances = {}
    def __call__(cls, *a, **k):
        return cls._instances.setdefault(cls, super().__call__(*a, **k))
```

**4️⃣ Avoid common traps**  
* Forgetting that module imports are cached → multiple instances if re‑imported under different names.  
* Not handling arguments to the constructor in the decorator/metaclass (they’ll be ignored after first call).  
* Over‑engineering with thread safety when not needed; mention `threading.Lock` only if concurrency is a requirement.

**5️⃣ Sanity‑check & communicate**  
* Test by importing the module twice and asserting identity.  
* Explain that while Python doesn’t enforce singletons, these idioms provide clear, maintainable patterns.  
* End with a recommendation: “Use the module‑level approach for most cases; use the decorator or metaclass only if you need class syntax.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
