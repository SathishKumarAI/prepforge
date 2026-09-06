---
qid: ing_98285f3514__fp__local
question: 'Explain: Minimum Spanning Trees: — OG CS61B Data Structures and Sorting
  Cheat Sheet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 516
total_tokens: 694
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:29:31-05:00'
sources: []
---

**Minimum Spanning Tree (MST) – a problem‑driven derivation**

The *minimum* spanning tree of a weighted graph \(G=(V,E)\) is the cheapest connected subgraph that touches every vertex exactly once (no cycles).  
Why do we care? In network design, we want to interconnect nodes with the least total cost—think of laying cables or building roadways. The objective is a *global* optimum over all spanning trees.

---

### Why an MST must be acyclic
If a connected subgraph contains a cycle, removing the heaviest edge in that cycle strictly reduces total weight while preserving connectivity. Thus any optimal solution cannot contain a cycle; it is a tree.

---

### Cut‑Optimality (Cut Property)
For any cut \((S,\overline S)\) of \(V\), the lightest edge crossing that cut must belong to every MST.  
*Proof sketch*: Suppose the lightest crossing edge \(e=(u,v)\) isn’t in an MST \(T\). Adding \(e\) creates a cycle; removing any heavier edge on that cycle yields another spanning tree no heavier than \(T\), contradicting optimality unless \(e\) was already included.

This local rule is the engine behind two classic algorithms:

| Algorithm | Uses the Cut Property | Complexity |
|-----------|-----------------------|------------|
| **Kruskal** | Greedy: repeatedly pick the globally lightest edge that does not form a cycle. | \(O(E\log E)\) (union‑find) |
| **Prim** | Grow a tree by always attaching the lightest edge from the current tree to an outside vertex. | \(O((V+E)\log V)\) with Fibonacci heap |

Both algorithms build a forest that eventually satisfies all cuts simultaneously, guaranteeing global optimality.

---

### Non‑obvious insight
The MST problem is **equivalent to finding a maximum‑weight *cut* in the complementary graph** (where edge weights are negated). This duality explains why many NP‑hard cut problems reduce to MST when constraints are relaxed. It also underlies algorithms for clustering: cutting an MST at its \(k-1\) heaviest edges yields a natural partition with minimal intra‑cluster variance—an elegant bridge between graph theory and unsupervised learning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
