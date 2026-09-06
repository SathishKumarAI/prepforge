---
qid: ing_ea4b55382d__fp__local
question: 'Explain: Graph (8 Problems) — Blind 75'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 560
total_tokens: 731
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:17:17-05:00'
sources: []
---

**Blind 75 – the “Graph” bucket**  
These eight canonical questions are chosen because every one forces you to reason about *reachability, connectivity, and cycles*—the core of graph theory—while keeping the solution within a small, reusable pattern set.

| # | Problem | Core idea | Why the pattern works |
|---|---------|-----------|-----------------------|
| 1 | **Number of Islands** | Flood‑fill (DFS/BFS) over an implicit grid. | Every land cell belongs to exactly one connected component; DFS visits all reachable lands in linear time. |
| 2 | **Word Ladder** | BFS on a virtual graph where nodes are words and edges connect words differing by one letter. | The shortest path equals the minimal number of transformations; BFS guarantees optimality without exploring exponential paths. |
| 3 | **Clone Graph** | DFS with memoization (hash map). | Each node is cloned exactly once, preserving adjacency; recursion naturally follows edges. |
| 4 | **Course Schedule II** | Topological sort via Kahn’s algorithm. | The DAG constraint ensures a linear order exists iff indegree reaches zero for all nodes. |
| 5 | **Alien Dictionary** | Build precedence graph + topological sort. | Order constraints are pairwise; the graph captures transitive closure implicitly, and topological ordering yields a valid alphabet. |
| 6 | **Maximum Flow (Edmonds‑Karp)** | Repeated BFS augmenting paths until none remain. | Each BFS finds the shortest augmenting path, guaranteeing polynomial runtime and optimal flow value. |
| 7 | **Minimum Spanning Tree (Prim/Kruskal)** | Greedy edge selection without cycles. | By always picking the lightest admissible edge, we build a tree of minimal total weight; cycle property guarantees optimality. |
| 8 | **All Pairs Shortest Path (Floyd‑Warshall)** | Dynamic programming over intermediate vertices. | The recurrence `d[i][j] = min(d[i][k]+d[k][j], d[i][j])` systematically considers all possible intermediates, yielding the true shortest paths. |

**Non‑obvious insight:**  
All these problems reduce to *building or traversing a graph that encodes constraints*, then applying a classic linear‑time traversal (DFS/BFS) or greedy/DP strategy. The “Blind 75” selection deliberately covers every fundamental traversal pattern once, so mastering them equips you to recognize and solve **any** new graph problem by mapping it onto one of these proven templates.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
