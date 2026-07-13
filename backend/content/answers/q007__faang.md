---
qid: q007
question: "How does the A* search algorithm work?"
topic: "AI"
model: "Claude Code (authored)"
sources: []
---

**Clarify** — I'll confirm we want the mechanics, the evaluation function, and the optimality conditions—A* as the canonical informed shortest-path search on weighted graphs.

**Approach** — Give the f = g + h formula, walk the priority-queue loop, then state guarantees and complexity.

**Depth** — A* expands nodes in order of **f(n) = g(n) + h(n)**, where g(n) is the known cost from the start to n and h(n) is the heuristic estimate from n to the goal. It maintains a priority queue (open set) keyed by f, plus a closed set. Each step: pop the lowest-f node, and if it's the goal, return the path; otherwise generate successors, compute their g and f, and add or relax them. It balances greedy best-first (h only) with uniform-cost/Dijkstra (g only). A* is **complete and optimal** when h is admissible (tree search) or consistent (graph search). Worst-case time and space are exponential, O(b^d), and memory is usually the bottleneck.

**Edge cases** — With h=0 it degenerates to Dijkstra. Inadmissible h loses optimality. Ties and updated shorter paths require re-opening closed nodes if h is not consistent. Large state spaces exhaust memory.

**Optimize & communicate** — For memory limits I'd mention IDA* or weighted A* (trading optimality for speed). I'd narrate f = g + h as "cost so far plus estimated cost to go," which is the intuition interviewers listen for.
