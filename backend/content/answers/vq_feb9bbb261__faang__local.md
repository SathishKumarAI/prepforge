---
qid: vq_feb9bbb261__faang__local
question: In Python, how do you abstract data?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 513
total_tokens: 744
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:44:06-05:00'
sources: []
---

**Clarify**

> “Abstract data” in Python usually means *encapsulating* state so that consumers interact only through well‑defined interfaces (methods/attributes).  
> I’ll assume you want a clean object‑oriented design: hide internal representation, expose getters/setters or properties, and possibly use ABCs for contracts.

**Approach**

1. Use **classes** to bundle data + behavior.  
2. Make attributes *private* (`_attr` or `__attr`).  
3. Provide access via **properties** (or `@property`) to enforce invariants.  
4. For reusable contracts, create an **abstract base class** (`abc.ABC`).  

**Depth**

```python
from abc import ABC, abstractmethod

class Shape(ABC):
    @property
    @abstractmethod
    def area(self) -> float:  # contract
        pass

class Circle(Shape):
    def __init__(self, radius: float):
        self._radius = radius          # private field

    @property
    def radius(self) -> float:
        return self._radius

    @radius.setter
    def radius(self, value: float):
        if value <= 0:
            raise ValueError("Radius must be positive")
        self._radius = value

    @property
    def area(self) -> float:
        import math
        return math.pi * self._radius ** 2
```

- **Encapsulation**: `_radius` hidden; only validated via setter.  
- **Polymorphism**: `Shape.area` enforces all shapes expose an `area`.  
- **Complexity**: O(1) for getters/setters; memory overhead minimal.

**Edge Cases**

- Mutating internal state directly (`circle._radius = -5`) bypasses validation → document “private” convention.  
- Thread‑safety: not handled here; use locks if shared across threads.  

**Optimize & Communicate**

- For large collections, consider `__slots__` to reduce per‑instance memory.  
- If many subclasses share logic, extract mixins or utility functions.  
- Explain trade‑offs: properties add a method call overhead vs direct attribute access; ABCs provide static contract enforcement but require subclassing.

This pattern keeps data abstracted while remaining idiomatic and testable in Python.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
