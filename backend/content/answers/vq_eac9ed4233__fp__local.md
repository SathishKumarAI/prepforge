---
qid: vq_eac9ed4233__fp__local
question: In Python, how do you make a copy of an object?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 384
total_tokens: 556
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:02:13-05:00'
sources: []
---

**Copying objects in Python is a two‑step optimization problem:**

1. **Identify the *copy semantics* required.**  
   *Shallow copy* replicates only the outer container; nested references stay shared.  
   *Deep copy* recursively duplicates every sub‑object, guaranteeing full independence.

2. **Choose the implementation that preserves reference counting and identity invariants.**  
   - For immutable built‑ins (`int`, `str`) no copy is needed; assignment simply rebinds a name to the same object.  
   - For mutable containers, Python offers two canonical paths:

| Method | Mechanism | When to use |
|--------|-----------|-------------|
| `obj.copy()` (list/set/dict) | Calls the container’s own `__copy__` protocol | Shallow copy of that specific type |
| `copy.deepcopy(obj)` | Traverses the object graph, respecting `__deepcopy__` hooks and a memo dictionary to avoid cycles | Full deep copy |

The *memo* dictionary is the hidden key: it guarantees that if two references point to the same sub‑object in the original, they will also reference the same new sub‑object after copying. Without this, recursion would create duplicate sub‑objects, breaking identity semantics.

**Non‑obvious insight:**  
Deep copying is *not* simply a recursive `copy.copy()`; it must handle **self‑referential structures** (e.g., a list containing itself). The memo dictionary turns the naive recursion into a linear‑time traversal that preserves cycles and shared substructures—essential for correct behavior in complex data models.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
