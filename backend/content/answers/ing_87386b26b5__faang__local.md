---
qid: ing_87386b26b5__faang__local
question: 'Explain: 14 Patterns to Ace Any Coding Interview Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 876
total_tokens: 1110
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:58:33-05:00'
sources: []
---

## 1️⃣ Clarify  
The interview asks for the **14 coding‑interview patterns** that help solve any problem.  
Assumptions:  
* “Patterns” means reusable solution strategies (e.g., two‑pointer, sliding window).  
* Audience is a senior engineer; they expect concise explanations and complexity notes.

## 2️⃣ Approach  
1. List the 14 patterns alphabetically or by theme.  
2. For each: give a short definition + typical use case.  
3. Mention time/space trade‑offs where relevant.  
4. End with a quick recap of how to pick a pattern in an interview.

## 3️⃣ Depth  

| Pattern | Definition | Typical Use Case | Complexity |
|---------|------------|------------------|------------|
| **Two‑Pointer / Fast‑Slow** | Maintain two indices moving at different speeds or directions. | Palindrome, merge intervals, cycle detection. | O(n) time, O(1) space |
| **Sliding Window** | Fixed/variable window over array/string to maintain a property. | Subarray sum, longest substring without repeats. | O(n) time, O(k) space |
| **Hash Map / Set (Two‑Sum)** | Store elements for O(1) lookup of complements. | 2‑sum, 3‑sum, duplicates detection. | O(n) time, O(n) space |
| **Binary Search** | Divide‑and‑conquer on sorted data. | Find target, lower/upper bounds, search in rotated array. | O(log n) time, O(1) space |
| **Depth‑First Search (DFS)** | Recursively explore graph/tree nodes. | Maze solving, connected components, backtracking. | O(V+E) time, O(h) stack |
| **Breadth‑First Search (BFS)** | Level‑order traversal using queue. | Shortest path in unweighted graph, level order tree print. | O(V+E) time, O(V) space |
| **Dynamic Programming (DP)** | Store subproblem results to avoid recomputation. | Fibonacci, edit distance, knapsack. | Depends on state; often O(n²) or better |
| **Memoization** | Top‑down DP with cache. | Recursive problems like climbing stairs. | Same as DP but with lazy evaluation |
| **Backtracking** | Explore all possibilities, prune early. | N‑Queens, Sudoku solver. | Exponential worst‑case, pruned in practice |
| **Divide & Conquer (Merge Sort)** | Split problem, solve recursively, merge results. | Sorting, closest pair of points. | O(n log n) time, O(log n) stack |
| **Kruskal / Prim (Minimum Spanning Tree)** | Build MST by sorting edges or using priority queue. | Network design, clustering. | O(E log E) time |
| **Dijkstra’s Algorithm** | Single‑source shortest path in weighted graph. | Routing, map services. | O((V+E) log V) with binary heap |
| **Union–Find (Disjoint Set)** | Manage connectivity of components. | Cycle detection in undirected graph, Kruskal. | Near‑O(1) amortized per op |

## 4️⃣ Edge Cases  
* Empty or single‑element inputs → return base values.  
* Duplicate keys in hash‑based patterns must be handled (e.g., count >1 for two‑sum).  
* Graphs with cycles → ensure visited set to avoid infinite loops.  

## 5️⃣ Optimize & Communicate  
When choosing a pattern:  
1. **Ask clarifying questions** about input size, constraints, and whether the data is sorted.  
2. **Explain your choice** (e.g., “I’ll use two‑pointer because we only need linear passes”).  
3. **State complexity upfront**, then walk through a small example to show reasoning.  

This structured approach demonstrates problem‑solving clarity, deep knowledge of core algorithms, and effective communication—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
