---
qid: ing_c5599b84ef__faang__local
question: 'Explain: Week 3 - Non-linear data structures ​ — Best practice questions
  by the author of Blind 75 | Tech Interview Handbook'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 484
total_tokens: 733
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:19:39-05:00'
sources: []
---

**Clarify**  
The interview asks you to explain how you would handle *non‑linear* (e.g., graph or tree) data structures in ML contexts and what best‑practice questions a candidate might expect from the Blind 75 author for week 3 of his “Tech Interview Handbook.” I’ll assume we’re focusing on classic algorithmic problems that involve traversing, searching, or optimizing over such structures.

**Approach**  
1. Outline typical non‑linear structures (binary trees, general graphs).  
2. Map common ML tasks to graph algorithms (feature propagation, clustering).  
3. Enumerate key Blind 75 questions that touch on these topics.  
4. Highlight best‑practice tips: think in terms of traversal order, complexity, and edge cases.

**Depth**  

| Structure | Typical ML mapping | Blind 75 questions |
|-----------|--------------------|---------------------|
| Binary tree (BST) | Decision trees, hierarchical clustering | “Binary Tree Inorder Traversal,” “Lowest Common Ancestor” |
| General graph | Graph‑based recommender systems, GNNs | “Graph Valid Bipartite?” (“BFS/DFS”), “Clone Graph” |
| DAG | Feature pipelines, causal inference | “Topological Sort,” “Course Schedule” |

**Key takeaways**  
- **Traversal matters:** BFS vs DFS determines time/space trade‑offs.  
- **Cycle detection** is essential for graph ML (e.g., detecting feedback loops).  
- **Memoization / DP on trees** speeds up sub‑problem recomputation.

**Edge cases**  
Empty or single‑node graphs, disconnected components, self‑loops, and large depth causing stack overflow in recursion. Test with skewed trees and dense graphs.

**Optimize & communicate**  
Explain that for production ML pipelines you’d convert the graph to adjacency lists (O(V+E) memory) and use iterative DFS/BFS to avoid recursion limits. When discussing a Blind 75 problem, first restate constraints, then walk through your algorithm in pseudocode, highlighting complexity O(N) or O(V+E). Finish by noting how this pattern scales to real‑world ML problems like graph neural nets or feature propagation.

*Word count: ~190 words.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
