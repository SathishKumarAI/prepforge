---
qid: q007
question: "How does the A* search algorithm work?"
topic: "AI"
model: "Claude Code (authored)"
sources: []
---

I'd explain A* as best-first search that ranks nodes by f(n) = g(n) + h(n), where g is the known cost from the start and h is an admissible heuristic estimate to the goal. It expands the frontier node with the lowest f, using a priority queue, so it balances cost already paid against estimated cost remaining. With an admissible and consistent heuristic, A* is both complete and optimal.

To show **Dive Deep** I'd anchor it to a pathfinding service I owned. I used A* with a Euclidean heuristic and profiled it: node expansions dropped dramatically versus Dijkstra because the heuristic focused the search, cutting p99 planning latency from about 220ms to 60ms.

I'd be honest about the trade-off: A* keeps the whole open set in memory, so on huge maps it can blow up. I mitigated with a coarser heuristic weight and precomputed region hierarchies, accepting slightly suboptimal paths for bounded memory, a deliberate cost decision. On AWS I'd run this in a Lambda or ECS service, caching graph data in ElastiCache.

A bar-raiser listens for whether I can state the optimality condition precisely, reason about the memory cost, and show I profiled and tuned it against real latency targets rather than reciting pseudocode.
