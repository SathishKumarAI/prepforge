---
qid: ing_44efd3cb8c__fp__local
question: 'Explain: Binary (5/5) — Blind 75'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 568
total_tokens: 740
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:32:27-05:00'
sources: []
---

### Why the “Binary” (5/5) trick works

The core problem is *searching a sorted array for a target value* in logarithmic time.  
If we split the array into two halves, we immediately know whether the target lies in the left or right half because all elements in one half are strictly less than all elements in the other.  

Mathematically, let `low` and `high` be indices such that the target is guaranteed to lie between them.  
At each step we compute  

\[
mid = \left\lfloor\frac{low+high}{2}\right\rfloor
\]

and compare `A[mid]` with the target `t`.  
- If `A[mid] == t`, we’re done.  
- If `A[mid] < t`, the target must be in `[mid+1, high]`; otherwise it’s in `[low, mid-1]`.

Each comparison eliminates half of the remaining search space, so after *k* steps at most \(2^k\) elements remain. Setting \(2^k \ge n\) gives \(k = \lceil\log_2 n\rceil\). Thus the algorithm runs in **O(log n)** time.

#### Connection to deeper principles

1. **Information theory**: Each comparison yields one bit of information (target is left or right), and a binary search needs exactly ⌈log₂ n⌉ bits to locate an item among *n* possibilities.
2. **Divide‑and‑conquer geometry**: The algorithm recursively bisects the interval, mirroring how binary trees partition space.

#### Non‑obvious insight

Many people think the “mid” calculation must use `low + (high-low)/2` to avoid overflow. In practice, with 64‑bit integers and modern languages that support arbitrary precision or checked arithmetic, simply using `(low+high)//2` is safe and more readable. The real subtlety lies in **maintaining the invariant** (`target ∈ [low, high]`) after each update; failing to do so (e.g., by setting `mid = low + 1` when `low == mid`) breaks correctness.

---

> **Bottom line:** Binary search is a *log‑scale* decision tree that exploits sorted order to eliminate half the possibilities at every comparison. Its optimality follows from information theory, and its implementation hinges on preserving the interval invariant rather than worrying about integer overflow.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
