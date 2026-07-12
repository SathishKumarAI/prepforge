---
qid: q007
question: "How does the A* search algorithm work?"
topic: "AI"
model: "Claude Code (authored)"
sources: []
---

**Situation** On a game-studio contract, the NPC pathfinding used plain Dijkstra and was chewing up too much CPU per frame on large maps, causing frame drops during crowd scenes.

**Task** I was asked to make pathfinding fast enough to run for dozens of agents at 60fps without sacrificing correct paths.

**Action** I replaced Dijkstra with A*. I explained the core to the team as the evaluation function f(n) = g(n) + h(n), where g is the actual cost from the start to node n and h is the admissible heuristic estimate to the goal. A* uses a priority queue ordered by f, always expanding the most promising node first, which focuses the search toward the goal instead of exploring uniformly in all directions. I used octile distance as the heuristic on our grid and kept a closed set to avoid re-expansion.

**Result** Nodes explored dropped by roughly 65% versus Dijkstra, and we held a stable 60fps with 40 agents pathing at once. What clicked for the team: A* is Dijkstra plus a heuristic that pulls the search toward the goal.
