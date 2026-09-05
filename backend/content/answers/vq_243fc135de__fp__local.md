---
qid: vq_243fc135de__fp__local
question: Is there a simple, elegant way to define Singletons?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 378
total_tokens: 549
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:26:48-05:00'
sources: []
---

In the *fundamental* problem a Singleton solves, we want **exactly one shared instance** of a class while still keeping the class’s interface unchanged.  
From an optimization point of view this is a “resource‑pool” that never needs more than one object; from an information‑theoretic angle it guarantees that all callers see a single state, so there is no need to synchronize or serialize state changes across multiple objects.

The simplest way in Python is to let the class itself **manage its own instance cache**.  
```python
class SingletonMeta(type):
    _instance = None          # shared slot

    def __call__(cls, *a, **k):   # invoked when cls() is called
        if cls._instance is None:
            cls._instance = super().__call__(*a, **k)
        return cls._instance
```
```python
class Config(metaclass=SingletonMeta):
    pass
```

*Why this works:*  
`__call__` is the *factory* for the class; by intercepting it we can decide whether to create a new object or return the cached one. The meta‑level guarantees that every subclass shares its own `_instance`, so no global variables are needed.

**Non‑obvious insight:**  
The Singleton pattern in Python does not require any special syntax beyond a metaclass because *classes themselves are objects*. By treating the class as an object that can hold state (`_instance`), we avoid external registries or module‑level globals. This keeps the pattern **purely declarative**: you just change the metaclass, and the rest of your code remains untouched.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
