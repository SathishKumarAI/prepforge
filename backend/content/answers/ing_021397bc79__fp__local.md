---
qid: ing_021397bc79__fp__local
question: 'Explain: Binary Search (7 Problems) — Neetcode 150'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 479
total_tokens: 652
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:09:36-05:00'
sources: []
---

**Binary Search – the “divide‑and‑conquer” engine of modern coding interviews**

At its core, binary search solves *“given an ordered structure, find a boundary point that satisfies a monotone predicate.”*  
The predicate is usually *“does element i satisfy property P?”*, which is true for all indices ≥ k and false before. The algorithm repeatedly halves the search interval until it pinches to a single index, guaranteeing O(log n) time.

Why does halving work?  
Because an ordered array partitions space into two convex halves; evaluating the predicate at the middle tells you in which half the boundary lies. This is a direct application of **information theory**: each comparison eliminates roughly half the remaining possibilities, so the number of comparisons needed is bounded by ⌈log₂ n⌉.

In Neetcode’s 7 binary‑search problems, this principle appears under different guises:

| Problem | Monotone predicate |
|---------|---------------------|
| First bad version | `bad(i)` monotone |
| Find Minimum in Rotated Sorted Array | `arr[i] < arr[mid]` decides side |
| Search in a 2‑D matrix | row/col comparisons |
| Median of Two Sorted Arrays | rank comparison |
| Kth Smallest Element in Merged List | count ≤ mid |
| Find Pivot Index | prefix sum ≤ suffix sum |
| House Robber III (binary tree) | max sub‑solution monotone? |

The **non‑obvious insight**: *you can apply binary search not only to indices but also to answer ranges*.  
Instead of searching the array itself, you search the value space. For example, in “Median of Two Sorted Arrays” we binary‑search over possible median values (the integer range) rather than positions. This transforms a seemingly linear problem into log n by exploiting monotonicity in *values*.

**Bottom line:** Binary search is a universal pattern for any decision that can be expressed as a monotone predicate, whether the variable being bisected is an index, a value, or even a continuous parameter. Mastering this abstraction unlocks a broad class of efficient solutions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
