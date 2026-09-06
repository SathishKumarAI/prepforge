---
qid: ing_87386b26b5__fp__local
question: 'Explain: 14 Patterns to Ace Any Coding Interview Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 542
total_tokens: 713
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:52:07-05:00'
sources: []
---

**Why “patterns” matter in coding interviews**

A coding interview boils down to a *decision‑making problem*: given an input, you must decide whether there exists a data structure or algorithm that satisfies a property (e.g., “can we sort this list in O(n log n)?”). Every successful solution is essentially a *proof* of existence. The 14 patterns are the canonical proofs that recur across problems because they exploit fundamental principles:

1. **Greedy** – locally optimal choice → global optimum (matroid theory).  
2. **Divide & Conquer** – split problem, solve subproblems, combine (divide‑conquer recurrence).  
3. **Dynamic Programming** – overlapping subproblems + optimal substructure (Bellman equation).  
4. **Backtracking** – exhaustive search with pruning (branch‑and‑bound).  
5. **Sliding Window** – maintain a contiguous subarray with constant updates (two‑pointer invariants).  
6. **Two‑Pointer** – linear scan from both ends, preserving an invariant about the pair’s sum or product.  
7. **Hashing** – O(1) membership test; transforms *existence* into set lookup.  
8. **Sorting + Binary Search** – reduces search to log n after a linear‑time pre‑processing step.  
9. **Graph Traversal (BFS/DFS)** – reachability, connected components, topological order.  
10. **Union–Find** – disjoint sets with near‑constant union/find (inverse Ackermann).  
11. **Tree DP / Tree Traversals** – propagate information up/down a rooted tree.  
12. **Bit Manipulation** – encode multiple boolean flags in a single integer; constant‑time operations.  
13. **Monotonic Stack/Queue** – maintain a sequence that is always increasing or decreasing (next greater element).  
14. **Backtracking with Memoization** – combine exhaustive search with DP to avoid recomputation.

**Non‑obvious insight:**  
Patterns are not *ad‑hoc tricks*; they are *reductions* to well‑studied computational primitives. Recognizing that a problem reduces to, say, “can we find a subarray whose sum equals X?” immediately suggests hashing or two‑pointer, regardless of the original phrasing. Thus, mastering patterns is essentially mastering a *dictionary of reductions*, which turns any new interview question into an instance of a solved problem rather than a fresh puzzle.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
