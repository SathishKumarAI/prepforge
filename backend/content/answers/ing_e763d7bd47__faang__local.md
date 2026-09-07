---
qid: ing_e763d7bd47__faang__local
question: 'Explain: Tree & Graph Traversals (DFS/BFS) — System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 474
total_tokens: 713
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:38:03-05:00'
sources: []
---

**Clarify**

> *Problem:*  
> We need to explain how depth‑first search (DFS) and breadth‑first search (BFS) work on trees/graphs, why they’re useful in ML pipelines (e.g., feature extraction, graph neural nets), and how we’d design a scalable system that runs these traversals.

*Assumptions I’d confirm:*  
1. Graphs are directed/undirected?  
2. Size: millions of nodes, sparse adjacency lists.  
3. Real‑time vs batch processing requirements.  

---

**Approach**

1. **Algorithmic core:** BFS uses a queue; DFS uses recursion or a stack.  
2. **Data structures:** Adjacency list + visited set.  
3. **Scalability:** Partition graph, use distributed frameworks (Spark GraphX/GraphFrames).  
4. **Fault tolerance:** Checkpointing intermediate states.  

---

**Depth**

- **BFS** explores nodes level‑by‑level, ideal for shortest‑path or layer‑wise feature propagation in GNNs. Complexity: O(V+E) time, O(V) memory.  
- **DFS** dives deep first; useful for topological sorting or detecting cycles (e.g., DAG constraints). Same asymptotic complexity but stack usage differs.  
- In a distributed system, we shard adjacency lists and broadcast frontier nodes. We use iterative MapReduce jobs where each node emits its neighbors if unvisited.

---

**Edge Cases**

- Disconnected components → run traversal from every unseen vertex.  
- Cycles → maintain visited set to avoid infinite loops.  
- Skewed degree distribution → load‑balancing by hashing high‑degree nodes across workers.

---

**Optimize & Communicate**

- **Optimization:** Use Bloom filters for probabilistic “visited” checks in massive graphs; compress adjacency lists with CSR format.  
- **Communication:** I’d present a diagram of the distributed BFS pipeline, highlight fault‑tolerance checkpoints, and quantify latency improvements from graph partitioning. This demonstrates clear reasoning, technical depth, and design foresight—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
