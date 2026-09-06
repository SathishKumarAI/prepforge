---
qid: ing_12bd8c2cbc__think__local
question: 'Explain: Graphs: — OG CS61B Data Structures and Sorting Cheat Sheet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 489
total_tokens: 684
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T03:58:29-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
- Identify what “Graph” means in this context (directed/undirected, weighted/unweighted).  
- Assume the reader is familiar with CS61B fundamentals: adjacency lists, DFS/BFS, and basic graph theory terminology.

**2️⃣ Choose a mental model / framework**  
- Use a *hierarchical outline*: start with high‑level concepts → core algorithms → implementation details → edge cases.  
- Adopt the “problem‑→data structure→algorithm” flow common in CS61B: think of the problem you’re solving, pick the graph representation that fits, then apply the right traversal or path algorithm.

**3️⃣ Step‑by‑step reasoning toward a cheat sheet**  
1. **Definitions & notation** – vertices, edges, adjacency list/matrix, degree, directed vs undirected.  
2. **Core operations** – insert/delete vertex/edge, query neighbors, check connectivity.  
3. **Traversals** – BFS (queue) for shortest unweighted paths; DFS (stack or recursion) for component detection and topological sort.  
4. **Algorithms** – Dijkstra, Bellman‑Ford, Floyd‑Warshall, Prim/Kruskal for MSTs.  
5. **Complexity table** – list time/space for each representation and algorithm.  
6. **Common pitfalls** – off‑by‑one errors in indexing, forgetting to mark visited nodes, handling negative cycles.

**4️⃣ Common traps & wrong turns**  
- Mixing up adjacency *list* vs *matrix* assumptions; they swap the O(V²) vs O(E) trade‑off.  
- Forgetting that BFS gives shortest paths only on unweighted graphs.  
- Overlooking that Dijkstra requires non‑negative weights; use Bellman‑Ford otherwise.  
- Assuming DFS recursion depth won’t overflow for large V; iterative stack version is safer.

**5️⃣ Sanity‑check & verbalize**  
- Cross‑reference each algorithm’s preconditions (e.g., graph must be connected for MST).  
- Ask: “If I had a directed acyclic graph, which traversal yields a topological order?”  
- Summarize in one sentence per section to ensure the cheat sheet remains concise yet complete.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
