---
qid: vq_eb88238390__fp__local
question: How do you copy an object in Python?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 419
total_tokens: 587
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:02:28-05:00'
sources: []
---

**Copying an Object in Python – From First Principles**

Python’s objects are *references*. When you write `b = a`, both names point to the same memory cell; mutating through one name mutates the other. The fundamental problem is: **how do we create a new, independent object that looks like the original?**  

The solution comes in two flavors:

| Level | What it copies | Typical use |
|-------|----------------|-------------|
| **Shallow copy** (`copy.copy(obj)`) | The outer container (list, dict, class instance). Nested objects are *shared*. | Duplicate a list of numbers or a simple record. |
| **Deep copy** (`copy.deepcopy(obj)`) | Recursively copies every nested object, breaking all shared references. | Clone a graph of interconnected nodes where mutations must be isolated. |

Why this dichotomy?  
* **Reference semantics** guarantee that mutable elements stay consistent unless explicitly duplicated.  
* **Copying cost** grows with depth: shallow copy is \(O(1)\) for the container; deep copy can be exponential if cycles exist, hence the `memo` dictionary in `deepcopy`.

**Non‑obvious insight:**  
A *deep copy of a class instance* copies only attributes listed in `__dict__`; it ignores slots or properties that compute values on access. Therefore, custom classes often need to implement `__deepcopy__` to ensure all internal state is duplicated correctly.

In practice:

```python
import copy

original = [1, [2, 3]]
shallow = copy.copy(original)      # inner list shared
deep    = copy.deepcopy(original)   # inner list duplicated
```

Thus, copying in Python is a deliberate trade‑off between preserving reference identity and achieving isolation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
