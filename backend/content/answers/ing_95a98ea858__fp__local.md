---
qid: ing_95a98ea858__fp__local
question: 'Explain: We can look through this range object — Python Full Course for
  Beginners'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 520
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:23:37-05:00'
sources: []
---

### Why `range()` behaves the way it does

At its core, a **range** is just an *infinite arithmetic progression* stored lazily:  
`start + n·step` for all integers \(n\) such that the value lies within the requested bounds.  
Python’s `range(start, stop[, step])` implements this by keeping three immutable fields:

1. **start** – first element to generate.  
2. **stop**  – *exclusive* bound; generation stops before reaching it.  
3. **step**  – difference between consecutive elements (default = 1).

The algorithm for the *i*-th item is simply `start + i·step`.  
This avoids materializing all numbers, which is crucial for large ranges and memory‑constrained environments.  

#### Why “exclusive” stop?

Mathematically, an arithmetic sequence is defined by a closed form; using an exclusive bound keeps the length formula clean:  
\[
\text{len} = \left\lceil \frac{\text{stop}-\text{start}}{\text{step}}\right\rceil
\]
If `stop` were inclusive, the formula would need a conditional to handle exact divisibility, complicating both implementation and reasoning.

#### The deeper principle: *lazy evaluation + functional purity*

`range()` is an **immutable iterator**.  
- *Immutability* guarantees that slicing or iterating from multiple threads never corrupts state.  
- *Lazy evaluation* (no list allocation) turns `range` into a first‑class “generator” that can be used in comprehensions, map/reduce pipelines, and as a basis for infinite streams.

#### One non‑obvious insight

Because `range()` stores only start, stop, step, it is **constant‑space**.  
Consequently, operations like `len(range(...))`, indexing (`r[i]`), or slicing (`r[start:stop:step]`) are all *O(1)*.  
This makes `range` a powerful building block for algorithms that need to iterate over large integer intervals without the overhead of list construction—a subtle advantage many newcomers overlook.

In short, `range()` is a lightweight, mathematically clean abstraction that marries lazy arithmetic sequences with Python’s iterator protocol, enabling efficient iteration in both simple loops and complex functional pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
