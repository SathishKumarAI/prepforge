---
qid: q006
question: "What is a heuristic in AI search, and what makes one admissible?"
topic: "AI"
model: "Claude Code (authored)"
sources: []
---

**Clarify** — I'll confirm we're discussing informed search (A*/greedy) where a heuristic h(n) estimates cost-to-goal, and that the interviewer wants both the definition and the admissibility guarantee.

**Approach** — Define heuristic, define admissibility precisely, then connect it to optimality and mention the stronger consistency property.

**Depth** — A heuristic h(n) is a problem-specific estimate of the cheapest cost from node n to a goal. It guides search toward promising nodes so we expand far fewer states than uninformed search. A heuristic is **admissible** if it *never overestimates* the true cost: for every node, h(n) ≤ h*(n), where h*(n) is the actual optimal remaining cost. Admissibility guarantees A* with tree search returns an optimal solution, because it never prunes a truly cheaper path. A stronger property, **consistency** (h(n) ≤ cost(n,n') + h(n')), guarantees optimality for graph search and implies admissibility.

**Edge cases** — h(n)=0 is trivially admissible but uninformative (reduces A* to Dijkstra). Overestimating heuristics can be faster but sacrifice optimality. Non-consistent-but-admissible heuristics need re-expansion of closed nodes in graph search.

**Optimize & communicate** — Concrete example: straight-line (Euclidean) distance for road navigation, or Manhattan distance for a grid/8-puzzle—both never exceed real cost. I'd emphasize the design goal: an admissible heuristic as *close as possible* to h* maximizes pruning while preserving optimality.
