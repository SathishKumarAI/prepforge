---
qid: ing_2077278fe9__fp__local
question: 'Explain: Arrays (10/10) — Blind 75'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 510
total_tokens: 682
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:15:16-05:00'
sources: []
---

### Arrays (10/10) – The “Blind 75” Core

When a data‑structure question is reduced to an *array*, the algorithmic heart is always **index arithmetic** and **linear traversal**.  
Why? Because an array gives O(1) random access; any sub‑problem that can be expressed as “pick element i, look at element j = f(i)” is solvable in a single pass or two passes without auxiliary structures.

#### 1. The Fundamental Pattern
- **Two pointers (sliding window)**: `l` and `r` move monotonically.  
  *Why it works*: each index is visited O(1) times; the invariant keeps track of a contiguous sub‑array that satisfies a property (sum, product, distinctness).  
  Example: “Longest sub‑array with sum ≤ k” or “Maximum sub‑array sum” (Kadane).

- **Hash map for complements**: store seen values → O(1) lookup.  
  *Why it works*: we encode the set of all prefixes; a target value is found by checking if `prefix - target` exists.

- **Binary search on sorted array**: reduce to log n by exploiting monotonicity (e.g., “Find first bad version”).  

#### 2. Deeper Principle – *Monotone Sub‑problems*
A blind‑75 array problem often hides a monotone property: once a condition fails, it never holds again for larger indices. Sliding windows and two pointers are just linear manifestations of binary search on this implicit order.

#### 3. Non‑Obvious Insight
**Space–time trade‑off via in‑place reordering**: many array questions can be solved *in O(1) space* by permuting elements to their “target” indices (e.g., find the smallest missing positive number). The key is that an element’s value directly encodes its desired position; swapping brings it closer, and the process converges in linear time.

> **Bottom line**: Arrays are a playground for *index‑based invariants*. Mastering the two‑pointer invariant, complement lookup, and in‑place permutation gives you 10 of the 10 essential blind‑75 array tricks—each a direct consequence of linear traversal and O(1) random access.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
