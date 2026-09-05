---
qid: vq_6d9e29d879__fp__local
question: What is MRO in Python? How does it work?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 399
total_tokens: 570
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:39:36-05:00'
sources: []
---

**Method Resolution Order (MRO) in Python**

The *fundamental problem* is: when an instance `obj` calls a method `m`, which class’s implementation should be executed if several base classes define `m`? In multiple inheritance, the search order must be deterministic, respect local precedence, and avoid “diamond” ambiguities.  

Python solves this with **C3 linearization**: it produces a *single* linear ordering of the class hierarchy that is:

1. **Monotonic** – each subclass’s MRO extends its parents’ MROs without reordering them.
2. **Consistent with local precedence** – a class appears before any of its bases.

The algorithm works by merging the parent lists and the list of parents themselves, always taking the first head that is not in the tail of any list. This guarantees that if `A` precedes `B` in every parent’s MRO, then `A` will precede `B` in the subclass’s MRO.

*Why it must work this way*:  
- **Determinism**: The same class hierarchy always yields the same MRO, essential for debugging and reproducibility.  
- **No “diamond” surprises**: A method defined in a common ancestor is executed exactly once, avoiding multiple dispatch loops.  

**Non‑obvious insight**  
The C3 merge is essentially a *topological sort* of a directed acyclic graph (the inheritance DAG). Python’s MRO is the unique linear extension that preserves all local order constraints—exactly the same as computing a lexicographically minimal topological ordering, which explains why the algorithm works efficiently and why it can detect inconsistent hierarchies.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
