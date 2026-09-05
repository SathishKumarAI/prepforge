---
qid: ing_16b8ae00f5__fp__local
question: 'Explain: Advanced Graphs (6 Problems) — Neetcode 150'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 576
total_tokens: 750
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:54:07-05:00'
sources: []
---

### Why “Advanced Graphs” Matter  
In the *NeetCode‑150* set, six problems push a learner beyond basic DFS/BFS into **graph‑theoretic optimization**. They all share a core challenge: *extract a global property (shortest path, cycle, connectivity) while respecting constraints that force us to combine multiple graph primitives*.  

| Problem | Core Idea | Why it works |
|---------|-----------|--------------|
| 1️⃣ **Shortest Path with Obstacles** | Dijkstra + state‑augmented nodes | The weight stays non‑negative; augmenting the state (e.g., remaining “bombs”) preserves optimal substructure. |
| 2️⃣ **Maximum Flow with Vertex Capacities** | Transform vertices to edges (`v_in → v_out`) | This turns a vertex‑capacity problem into a standard edge‑flow instance, enabling flow‑conservation proofs. |
| 3️⃣ **Graph Bipartiteness under Edge Deletion** | BFS coloring + rollback stack | Each deletion only invalidates the current component; rollback keeps earlier partitions intact. |
| 4️⃣ **Shortest Cycle in Weighted Graph** | Dijkstra from each vertex | The cycle’s length equals the shortest path between two neighbors plus the connecting edge—directly follows from triangle inequality in weighted graphs. |
| 5️⃣ **Maximum Matching in General Graphs (Edmonds)** | Blossom contraction | Contracting odd‑length blossoms preserves augmenting paths, ensuring polynomial time while keeping matching size invariant. |
| 6️⃣ **Minimum Spanning Tree with Forbidden Edges** | Kruskal + DSU with “skip” list | Disjoint sets guarantee no cycles; skipping forbidden edges still yields a tree because any skipped edge would create a cycle in the partial forest. |

#### Deeper Principle  
All six exploit **local-to-global invariants**: local operations (relaxation, contraction, coloring) preserve a global optimality condition (shortest path, flow conservation, bipartite structure). This mirrors *dynamic programming* over graph states and underpins modern algorithms like Dijkstra, Edmonds’ blossom, and flow‑circuit duality.

#### Non‑obvious Insight  
A common misconception is that “state augmentation” always blows up complexity. In fact, for problems 1️⃣–3 the augmented graph’s size is *linear* in the original (e.g., at most `k+1` layers where `k` is a small constraint). This keeps algorithms tractable and demonstrates how **parameterized** graph extensions can be polynomial despite an exponential‑looking state space.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
