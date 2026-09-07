---
qid: ing_ea4b55382d__faang__local
question: 'Explain: Graph (8 Problems) — Blind 75'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 800
total_tokens: 1034
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:44:41-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise overview of *eight* high‑frequency graph questions that appear on the Blind 75 ML/DSA study list. I’ll assume you’re familiar with basic graph representations (adjacency list, matrix) and standard traversals (DFS/BFS).  

---

### 1. **Number of Islands**  
- **Goal:** Count connected components of `1`s in a binary grid.  
- **Approach:** DFS or BFS from every unvisited land cell; mark visited to avoid recounting.  
- **Complexity:** O(V+E) ≈ O(rows·cols).  

### 2. **Clone Graph**  
- **Goal:** Deep‑copy an undirected graph given a reference node.  
- **Approach:** DFS with a hashmap `original→clone`. For each neighbor, recursively clone if unseen; otherwise reuse the clone from the map.  
- **Complexity:** O(V+E).  

### 3. **Course Schedule / Topological Sort**  
- **Goal:** Determine if all courses can be finished given prerequisites (DAG).  
- **Approach:** Kahn’s algorithm (in‑degree + queue) or DFS cycle detection.  
- **Complexity:** O(V+E); detect cycle → impossible schedule.  

### 4. **Word Ladder**  
- **Goal:** Shortest transformation sequence from `beginWord` to `endWord`.  
- **Approach:** Bidirectional BFS; at each step generate all one‑letter variations, intersect frontiers for early exit.  
- **Complexity:** O(N·L²) where N=words, L=word length (practically linear).  

### 5. **Minimum Spanning Tree (Kruskal / Prim)**  
- **Goal:** Connect all vertices with minimal total edge weight.  
- **Approach:** Kruskal: sort edges, DSU to avoid cycles; Prim: priority queue from a start vertex.  
- **Complexity:** O(E log V).  

### 6. **Detect Cycle in Undirected Graph**  
- **Goal:** Check for any cycle.  
- **Approach:** DFS with parent tracking or Union‑Find (DSU) while adding edges; if two nodes already share a set → cycle.  
- **Complexity:** O(V+E).  

### 7. **Shortest Path in Unweighted Graph**  
- **Goal:** Find minimal hop distance between two nodes.  
- **Approach:** BFS from source, record distances.  
- **Complexity:** O(V+E).  

### 8. **Graph Valid Tree**  
- **Goal:** Determine if a given edge list forms a single connected tree (no cycles).  
- **Approach:** Union‑Find: if any union finds same set → cycle; after processing, ensure exactly V−1 edges and one component.  
- **Complexity:** O(V α(V)).  

---

**Edge Cases & Testing**  
- Empty graph / single node.  
- Disconnected components (Number of Islands, Valid Tree).  
- Self‑loops or parallel edges in cycle detection.  
- Large inputs to confirm linear behavior.  

**Optimize & Communicate**  
- Emphasize early exit strategies: bidirectional BFS for Word Ladder; break on first cycle detection.  
- Discuss trade‑offs: DFS vs BFS for traversal, DSU vs adjacency list for space.  
- When explaining, keep a “why” narrative: *We use BFS because edge weights are uniform; we need to avoid revisiting nodes.*  

This structure shows clear problem framing, systematic solution plans, and depth of technical understanding—exactly what FAANG interviewers expect.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
