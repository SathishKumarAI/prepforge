---
qid: ing_12bd8c2cbc__fp__local
question: 'Explain: Graphs: — OG CS61B Data Structures and Sorting Cheat Sheet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 497
total_tokens: 673
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:45:34-05:00'
sources: []
---

**Graphs – a first‑principles view**

A *graph* is the minimal combinatorial structure that captures pairwise relationships while remaining amenable to algorithmic manipulation.  
From the **optimization** perspective, many problems (shortest path, minimum spanning tree, maximum flow) ask for an optimal substructure that can be expressed as a walk through vertices connected by edges.  The graph formalism abstracts away the underlying data: each vertex is a *state* and each edge a *transition* with an associated cost or capacity.

**Why directed/undirected?**  
Direction encodes asymmetry in transitions—critical for modeling processes like traffic flow, precedence constraints, or communication protocols.  Undirected graphs are simply symmetric directed pairs; they arise when the underlying relation is inherently bidirectional (e.g., friendship).

**Adjacency list vs matrix**  
An adjacency *list* stores only present edges: space \(O(V+E)\).  An adjacency *matrix* gives constant‑time edge lookup but costs \(O(V^2)\) memory.  The choice follows from the **sparsity principle**: if \(E \ll V^2\), lists dominate; otherwise matrices avoid repeated scans.

**Traversal (BFS/DFS)**  
Both are depth–first or breadth–first explorations of a *tree* embedded in the graph.  Their correctness derives from the fact that every edge is examined at most once, guaranteeing linear time \(O(V+E)\).  BFS yields shortest‑path distances in unweighted graphs because it expands vertices in increasing hop count; DFS exposes connectivity and topological order.

**One non‑obvious insight**  
A graph’s *Eulerian* or *Hamiltonian* property is not merely a combinatorial curiosity—it directly translates to the existence of optimal tours for logistics (TSP) or circuit design.  Recognizing that a simple degree condition (\(\forall v: \deg(v)\) even) guarantees an Euler tour provides a linear‑time check that bypasses exponential search, illustrating how structural graph theory yields algorithmic shortcuts.

*In short*, graphs are the abstraction that lets us reduce diverse real‑world problems to traversals and optimizations on a network of states, with each representation choice grounded in fundamental trade‑offs between time, space, and sparsity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
