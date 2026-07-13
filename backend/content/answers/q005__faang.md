---
qid: q005
question: "What is the difference between Breadth-First Search (BFS) and Depth-First Search (DFS)?"
topic: "AI"
model: "Claude Code (authored)"
sources: []
---

**Clarify** — I'll confirm scope: unweighted graph/tree traversal, and that the interviewer wants data structures, complexity, and when to pick each.

**Approach** — Contrast frontier data structure, then completeness/optimality, then complexity.

**Depth** — BFS explores level by level using a **queue** (FIFO), visiting all nodes at depth d before depth d+1. DFS goes as deep as possible along a branch using a **stack** (or recursion) before backtracking. On a graph with branching factor b and depth d: BFS time is O(b^d) and, critically, space is O(b^d) because it stores the whole frontier. DFS time is O(b^m) for max depth m but space is only O(b·m)—far cheaper. BFS is *complete* and finds the *shortest path* in edge count on unweighted graphs; DFS is complete on finite graphs but not optimal and can plunge down deep/infinite branches.

**Edge cases** — Must track visited nodes or cycles cause infinite loops. DFS recursion can stack-overflow on deep graphs—use an explicit stack or iterative deepening. BFS memory blows up on wide graphs.

**Optimize & communicate** — Pick BFS for shortest paths and shallow solutions; DFS for memory-constrained, deep, or exhaustive searches (topological sort, connectivity). Iterative deepening DFS gets BFS optimality with DFS memory. I'd narrate the queue-vs-stack intuition as the anchor.
