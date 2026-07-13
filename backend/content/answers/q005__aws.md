---
qid: q005
question: "What is the difference between Breadth-First Search (BFS) and Depth-First Search (DFS)?"
topic: "AI"
model: "Claude Code (authored)"
sources: []
---

I'd contrast them on frontier and guarantees. BFS explores level by level using a queue, finds the shortest path in unweighted graphs, but its memory grows with the frontier, O(b^d). DFS uses a stack or recursion, goes deep first, is memory-light at O(bd), but can wander down long or infinite branches and isn't optimal without extra bookkeeping.

To show **Dive Deep** I'd tie it to a real decision. Building a dependency resolver for a deployment tool, I chose DFS with cycle detection because I cared about detecting cyclic dependencies and producing a topological order, not shortest paths, and the graph was deep but narrow, so memory stayed tiny. When I later needed the fewest hops between two service nodes for a latency map, I switched to BFS precisely for its shortest-path guarantee.

The trade-off I'd name explicitly: BFS trades memory for optimality; DFS trades optimality for a small footprint, and iterative deepening blends both. That memory reality matters at scale, where a wide frontier can exhaust a container's RAM.

A bar-raiser wants to hear that I pick the traversal from the problem's actual guarantee needs, shortest path versus cycle detection versus memory limits, and can reason about the complexity, not just recite the definitions.
