---
qid: ing_12bd8c2cbc__faang__local
question: 'Explain: Graphs: — OG CS61B Data Structures and Sorting Cheat Sheet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 652
total_tokens: 891
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:27:14-05:00'
sources: []
---

**Clarify**  
The interviewer asks for a concise cheat‑sheet on *graphs* as covered in CS 61B: representation, traversal, shortest paths, connectivity, and sorting (topological). I’ll assume the audience knows basic data structures but needs quick reference material.

**Approach**  
1. Outline key concepts.  
2. Provide succinct code snippets or pseudocode for each algorithm.  
3. Summarize complexity & pitfalls.  

**Depth**  

| Topic | Representation | Core Algorithm(s) | Complexity |
|-------|----------------|-------------------|------------|
| **Adjacency List** | `ArrayList<ArrayList<Integer>>` (or `Map<Integer, List<Integer>>`) | BFS/DFS – O(V+E). Uses less memory for sparse graphs. | |
| **Adjacency Matrix** | 2‑D array `boolean[][]` or `int[][]` | BFS/DFS – O(V²) worst case; useful when edge look‑ups must be O(1). | |
| **Directed vs Undirected** | Add edges both ways for undirected. | | |
| **BFS (shortest path in unweighted graph)** | Queue + visited array | Returns distance or predecessor. | O(V+E) |
| **DFS (detect cycle, topological sort)** | Stack/recursion + color flags (WHITE, GRAY, BLACK). | Cycle detection: if we revisit GRAY node → cycle. Topo‑sort: post‑order push to stack. | O(V+E) |
| **Dijkstra** | Min‑heap priority queue + distance array | Works on non‑negative weights. | O((V+E) log V) |
| **Bellman–Ford** | Relax all edges V-1 times; detect negative cycle | Handles negative weights. | O(VE) |
| **Union‑Find (Disjoint Set)** | Parent & rank arrays | Connected components, Kruskal’s MST. | α(V) amortized |
| **Topological Sort** | DFS postorder or Kahn’s algorithm (in‑degree queue). | Returns linear order if DAG; else cycle detected. | O(V+E) |

**Edge Cases**  
- Empty graph (`V=0`).  
- Self‑loops & parallel edges – adjacency list handles naturally, matrix needs care.  
- Disconnected components: run BFS/DFS from every unvisited vertex.  
- Negative cycles for Bellman–Ford: one extra relaxation pass.

**Optimize & Communicate**  
- Prefer adjacency lists for sparse graphs; matrices for dense or when edge‑existence queries dominate.  
- Use iterative DFS to avoid stack overflow on deep recursion.  
- For topological sort, Kahn’s algorithm gives deterministic order and early cycle detection.  
- When explaining, start with the “why” (graph model), then show the “how” (code skeleton), finish with complexity trade‑offs. This demonstrates clear reasoning, depth of knowledge, and communication—key signals for FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
