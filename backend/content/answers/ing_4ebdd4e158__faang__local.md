---
qid: ing_4ebdd4e158__faang__local
question: 'Explain: Graph — Topleetcodeproblems'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 555
total_tokens: 787
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:47:46-05:00'
sources: []
---

**Clarify**  
You’re asking for a concise overview of *graph‑theory* problems that frequently appear on LeetCode and why they matter in interviews. I’ll assume you want: 1) key problem types, 2) the algorithmic patterns they illustrate, and 3) how to frame your solution during an interview.

**Approach**  
1. List core categories (BFS/DFS traversal, shortest path, cycle detection, connectivity).  
2. For each, pick a canonical LeetCode example that showcases the pattern.  
3. Highlight time/space complexity and edge‑case considerations.  

**Depth**  

| Category | Representative Problem | Core Idea | Complexity |
|----------|------------------------|-----------|------------|
| **BFS traversal** | *547. Number of Provinces* (LeetCode) | Treat adjacency matrix as graph; BFS to count connected components. | O(V²) time, O(V) space |
| **DFS + Backtracking** | *197. Rising Temperature* | DFS over directed edges to find longest increasing path. | O(V+E) time, O(V) recursion stack |
| **Shortest Path (unweighted)** | *1277. Count All Valid Paths in a Grid* | BFS with memoization to count paths without revisiting nodes. | O(V) time, O(V) space |
| **Dijkstra / A\*** | *743. Network Delay Time* | Weighted edges; Dijkstra’s algorithm via priority queue. | O((V+E) log V) time |
| **Cycle Detection** | *207. Course Schedule* | DFS with 3‑color marking to detect cycles in prerequisite graph. | O(V+E) time |
| **Union‑Find (Disjoint Set)** | *684. Redundant Connection* | Maintain connected components; find first edge that creates a cycle. | α(N) amortized per op |

**Edge Cases**  
- Empty or single‑node graphs.  
- Disconnected components.  
- Self‑loops and parallel edges.  
- Large dense matrices (avoid O(V²) when possible).

**Optimize & Communicate**  
Explain why you chose BFS vs DFS (e.g., shortest path needs level order). Mention trade‑offs: adjacency list vs matrix, recursion depth limits. Conclude with a quick “what if” for weighted graphs—switch to Dijkstra or Bellman–Ford. This demonstrates both algorithmic breadth and the ability to adapt solutions during an interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
