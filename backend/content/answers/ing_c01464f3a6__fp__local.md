---
qid: ing_c01464f3a6__fp__local
question: 'Explain: Graphs (13 Problems) — Neetcode 150'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 574
total_tokens: 747
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:51:31-05:00'
sources: []
---

### Why Graphs?

A **graph** is the natural abstraction for any “thing‑to‑thing” relation: roads between cities, friendships in a social network, or dependencies among tasks.  
When a problem asks *“can I get from A to B?”* or *“what’s the cheapest way to traverse all nodes?”*, we’re really asking about connectivity or optimal traversal in a network—exactly what graph theory formalises.

#### Core Principle: **Path‑finding as a search over state space**

Every node is a state, every edge a legal move.  
Algorithms like DFS/BFS, Dijkstra, or A* are simply traversals of this state space that respect cost or constraints.  They guarantee optimality (shortest path) when the graph satisfies *non‑negative weights* or *admissible heuristics*, linking to **Dijkstra’s theorem** and **A\* consistency**.

#### One Non‑Obvious Insight

Many problems look like “find a cycle” or “connect components,” but the key is often **transforming the problem into an equivalent graph representation where edges encode constraints, not just relations**.  
Example: In *“minimum vertex cover in bipartite graphs”*, we convert it to a maximum matching via Kőnig’s theorem.  The graph itself stays unchanged, yet we solve a seemingly unrelated optimisation by exploiting this duality.

---

| Problem | Typical Graph Technique | Why It Works |
|---------|------------------------|--------------|
| Connected components | DFS/BFS | Counts reachable nodes – a pure reachability test |
| Shortest path (unweighted) | BFS | Every edge cost = 1 → first visit is optimal |
| Weighted shortest path | Dijkstra / Bellman‑Ford | Maintains minimal tentative distances; relies on non‑negative cycles |
| Minimum spanning tree | Kruskal / Prim | Greedy choice of cheapest edges never forms a cycle – matroid property |
| Bipartite matching | Hopcroft–Karp | Alternating paths increase cardinality until maximal |
| Topological sort | DFS or Kahn’s algorithm | Linear extension exists iff graph is acyclic – DAG property |
| Strongly connected components | Kosaraju / Tarjan | SCCs are condensation of graph into a DAG |

> **Bottom line:** Every “graph problem” in Neetcode 150 boils down to *searching* or *optimising* over a network of states.  By mapping constraints to edges and exploiting properties like acyclicity, non‑negative weights, or matroid structure, we obtain efficient, provably correct algorithms.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
