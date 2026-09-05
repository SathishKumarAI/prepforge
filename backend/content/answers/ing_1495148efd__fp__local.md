---
qid: ing_1495148efd__fp__local
question: 'Explain: Heaps and Priority Queues: — OG CS61B Data Structures and Sorting
  Cheat Sheet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 394
total_tokens: 574
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:48:57-05:00'
sources: []
---

**Heaps as Optimal “First‑In‑Last‑Out” Compressors**

At its core a *heap* solves the problem of **extracting the minimum (or maximum) element in \(O(\log n)\)** while supporting insertions in the same time.  
Why can’t we just keep an unsorted array and scan for the min? Because each extraction would be linear, giving \(O(n^2)\) for a sequence of \(n\) operations—unacceptable when \(n\) is large.

A binary heap stores elements in an implicit complete tree (array indices satisfy parent‑child relations). The *heap property* (“min‑heap”: every node ≤ its children) guarantees that the global minimum sits at the root.  
When we delete the root, we replace it with the last element and **“sift‑down”**: repeatedly swap it with the smaller child until the property restores. Each sift step moves one level down, thus \(\log n\) steps.

The deeper principle is **greedy optimality of a partial order**: the heap enforces that all “potential minima” are at the top; any other element cannot be smaller than those already compared. This mirrors the *exchange argument* in proofs of correctness for algorithms like Dijkstra’s and Prim’s—local decisions (heapify) lead to global optimality.

A non‑obvious insight: **heaps are not just priority queues; they implicitly represent a sorted sequence** if you repeatedly extract-min. The cost of each extraction is the same as building a balanced BST, but heaps avoid pointer overhead and cache misses because their layout is contiguous. Thus, in practice, heaps win for high‑frequency priority‑queue workloads where memory locality matters more than asymptotic constants.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
