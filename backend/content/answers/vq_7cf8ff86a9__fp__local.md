---
qid: vq_7cf8ff86a9__fp__local
question: How do I order a union ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 556
total_tokens: 723
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:42:55-05:00'
sources: []
---

### Why an “ordered” union is essential

When we maintain disjoint sets (the classic *Union‑Find* or *Disjoint Set Union*), the cost of a query `find(x)` depends on the depth of the tree that represents the set containing `x`.  
If we naïvely attach one root to another, a chain can grow linearly and every `find` becomes \(O(n)\).  
The insight is that *we only need to keep the trees shallow*, not necessarily balanced.  
Shallowness guarantees that each element moves up at most \(\log n\) times (amortised), because a node’s rank never decreases.

### The rule from first principles

Let `rank(r)` be an upper bound on the height of the subtree rooted at `r`.  
When uniting two roots \(a,b\):

1. **If** `rank(a) < rank(b)`, make \(a\)’s parent \(b\).  
   The new tree’s rank is still \(\max(rank(a),rank(b)) = rank(b)\); the height of \(b\)’s subtree does not change.
2. **If** `rank(a) > rank(b)`, symmetrically attach \(b\) to \(a\).
3. **If** `rank(a) == rank(b)`, arbitrarily choose one as parent and increment its rank by 1.

Why does this work?  
Because each time we increase a rank, the subtree rooted at that node must have doubled in size (otherwise two subtrees of equal height could not be joined without increasing height). Thus after at most \(\log_2 n\) increments the rank can reach \(O(\log n)\), bounding tree depth.

### Non‑obvious insight

The *rank* we maintain is **not** a true height; it’s an *upper bound on the potential increase in height*.  
This abstraction allows us to avoid recomputing heights after every union, yet still guarantee logarithmic depth.  
People often think “attach the smaller tree under the larger one” (size‑by‑size), but that is equivalent only if we also keep size counts; rank‑based union is simpler and has the same asymptotic guarantees without storing extra data.

In short, an ordered union keeps trees shallow by using a simple rank comparison—an elegant optimisation derived from bounding potential tree height.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
