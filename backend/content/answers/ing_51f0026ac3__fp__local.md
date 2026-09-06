---
qid: ing_51f0026ac3__fp__local
question: 'Explain: Disjoint Sets: — OG CS61B Data Structures and Sorting Cheat Sheet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 450
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:59:24-05:00'
sources: []
---

**Disjoint‑Set Union (Union–Find)**  
At its core the problem is: *given a collection of elements, support two operations efficiently*  

1. **`find(x)`** – return an identifier for the set containing `x`.  
2. **`union(x,y)`** – merge the sets that contain `x` and `y`.

The naïve solution keeps each set as a linked list or vector; `find` is \(O(1)\) but `union` can be linear in the size of the smaller set. The trick is to view each set as a rooted tree: every element points to its parent, and the root is the representative.  

**Why trees?**  
*A union operation only needs to attach one root under another; no re‑linking of interior nodes is required.*  
To keep depths small we use **union by rank/size**: always attach the smaller tree’s root beneath the larger’s.  
However, repeated unions can still produce tall trees. **Path compression** solves this: during `find(x)`, we recursively set each visited node’s parent directly to the root. This “flattens” the tree, guaranteeing that subsequent finds touch only a few nodes.

The combination of *union by rank* and *path compression* yields an amortized time per operation bounded by the inverse Ackermann function \(\alpha(n)\), practically constant for all realistic \(n\).  

**Non‑obvious insight:**  
The two heuristics are *independent*: union by rank alone gives \(O(\log n)\) depth, while path compression alone gives \(O(n)\) total cost. It is the **interaction**—compression applied after a rank‑guided merge—that collapses the structure to near‑flatness. Without both, you lose the almost‑constant guarantee.

Thus, disjoint sets are not just clever data structures; they embody an optimal balance between local decisions (rank) and global restructuring (compression), a theme that recurs in many optimization problems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
