---
qid: ing_a7dd67b6b6__faang__local
question: 'Explain: Trees and Graphs — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 589
total_tokens: 823
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:15:00-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise overview of the most recent FAANG‑style questions that test knowledge of **trees** (binary/segment/Trie) and **graphs** (BFS/DFS, shortest paths, SCCs). I’ll assume we’re focusing on algorithmic challenges rather than production‑grade systems.

---

**Approach**  
1. List 3–4 representative problems for each data structure.  
2. For each: state the core idea, typical constraints, and why it’s “FAANG‑ready.”  
3. Highlight key techniques (e.g., memoization on trees, topological sort on DAGs).  

---

**Depth**

| Data Structure | Recent FAANG Question | Core Idea & Constraints |
|-----------------|----------------------|--------------------------|
| **Binary Tree** | *Lowest Common Ancestor in a BST with parent pointers* | O(log n) using upward traversal; tests understanding of BST properties and pointer usage. |
| **Segment Tree** | *Range sum queries with lazy propagation on dynamic arrays* | O(log n) per update/query; checks ability to handle range updates efficiently. |
| **Trie** | *Longest common prefix among a list of strings under memory limits* | Builds compressed Trie in O(total chars); tests space optimization and traversal. |
| **Graph – BFS** | *Shortest path in an unweighted graph with teleport edges* | O(V+E) using 0‑1 BFS; evaluates handling of special edge weights. |
| **Graph – DFS & SCC** | *Detect cycles in a directed graph with node deletion constraints* | Kosaraju/Tarjan + rollback; shows depth in algorithmic reasoning. |
| **DAG** | *Count number of distinct paths from source to sink modulo 10⁹+7* | DP on topological order; tests modular arithmetic and DAG properties. |

---

**Edge Cases**

- Empty or single‑node trees/graphs.  
- Disconnected components or isolated nodes.  
- Extremely skewed trees (depth = n).  
- Cycles introduced by dynamic edge updates.

Testing should cover these extremes plus random large inputs to validate time complexity.

---

**Optimize & Communicate**

- Emphasize that most FAANG problems accept *O(V+E)* solutions; sub‑optimal approaches often get a “time limit exceeded” flag.  
- Explain trade‑offs: e.g., using recursion on deep trees may hit stack limits—iterative DFS/BFS is safer.  
- When narrating, map the interviewer’s problem to one of the above templates, then outline your chosen algorithm, its complexity, and why it meets FAANG expectations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
