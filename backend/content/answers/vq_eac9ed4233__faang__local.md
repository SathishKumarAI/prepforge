---
qid: vq_eac9ed4233__faang__local
question: In Python, how do you make a copy of an object?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 462
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:40:56-05:00'
sources: []
---

**Clarify**  
You want a *copy* of an object in Python—i.e., duplicate its state so that mutating the copy doesn’t affect the original.  
Assumptions:  
1. The object is user‑defined or built‑in (list, dict, set, custom class).  
2. You’re not dealing with pickling/serialization boundaries.  

**Approach**  
1. Decide between *shallow* vs *deep* copy.  
2. Use the standard library: `copy.copy()` for shallow, `copy.deepcopy()` for deep.  
3. For built‑ins that expose a `.copy()` method (e.g., `list`, `dict`), you can call it directly.  

**Depth**  
```python
import copy

# Shallow copy – copies the container; nested objects are shared.
shallow = copy.copy(original)

# Deep copy – recursively clones every referenced object.
deep = copy.deepcopy(original)
```
- **Shallow**: `copy.copy()` uses the object's `__reduce_ex__` or falls back to creating a new instance and copying attributes.  
- **Deep**: `copy.deepcopy()` traverses the graph, handling cycles via an internal memo dict; it respects `__deepcopy__` hooks for custom logic.

Complexity: O(n) where *n* is number of objects referenced (shallow) or all nested objects (deep). Memory overhead proportional to depth.  

**Edge Cases**  
- Objects with non‑picklable resources (file handles, sockets): deep copy may raise `TypeError`.  
- Mutable defaults in classes: shallow copy shares them; deep copy clones.  
- Circular references: only deep copy handles them safely.

**Optimize & Communicate**  
For performance‑critical code, prefer the built‑in `.copy()` when you know the object is a simple container. Use `deepcopy` sparingly, caching results if repeated. Always document the chosen strategy in the API so callers understand mutation behavior. This clarity reduces bugs and aligns with FAANG expectations of clean, maintainable code.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
