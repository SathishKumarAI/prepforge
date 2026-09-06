---
qid: ing_f21b06c884__fp__local
question: 'Explain: Math & Geometry (8 Problems) — Neetcode 150'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 514
total_tokens: 688
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:34:00-05:00'
sources: []
---

**Neetcode 150: Math & Geometry (8 Problems)**  

The eight problems test a core idea that many “coding‑math” questions hide behind simple wording: **transform the geometry or arithmetic into a linear recurrence, combinatorial identity, or invariant that can be evaluated in \(O(1)\) or \(O(\log n)\).**  
1. *Unique Binary Search Trees* → Catalan numbers; derived via recursion \(C_n=\sum_{i=0}^{n-1}C_iC_{n-1-i}\), solved with the closed form \(\frac{1}{n+1}\binom{2n}{n}\).  
2. *Maximum Path Sum in a Binary Tree* → dynamic programming on subtrees; each node’s best path is either through one child or both, a classic “maximum subarray” on trees.  
3. *Minimum Number of Coins to Make Change* → greedy works only for canonical coin systems; prove via exchange argument that any optimal solution can be transformed into the greedy one.  
4. *Find Median in a Stream* → two heaps maintain lower/upper halves; the median is either top of one heap or average, showing how order statistics can be kept in \(O(\log n)\).  
5. *Longest Increasing Subsequence* → patience sorting maps to LIS length = number of piles; the non‑obvious insight: replacing each element by the smallest possible pile top gives an optimal greedy strategy.  
6. *Largest Rectangle in Histogram* → stack stores indices of increasing heights; the key invariant is that every popped bar is the shortest in its maximal rectangle, giving linear time.  
7. *Number of Islands* → union‑find on a grid treats each land cell as a node; merging neighbors preserves connectivity efficiently.  
8. *Circle Intersection Count* → sweep line over angular intervals; the insight: converting 2D geometry to 1D events lets us count overlaps in \(O(n\log n)\).  

**Non‑obvious takeaway:** In every case, reduce the problem to a structure with a single monotonic property (Catalan recursion, heap order, stack invariants) and you instantly unlock an optimal algorithm.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
