---
qid: q006
question: "What is a heuristic in AI search, and what makes one admissible?"
topic: "AI"
model: "Claude Code (authored)"
sources: []
---

**Situation** I was building a routing engine for a delivery-dispatch product, and our pathfinding was exploring far too many nodes on a city-scale road graph, making route computation slow during peak hours.

**Task** I had to speed up the search without ever returning a suboptimal route, since dispatchers depended on true shortest paths.

**Action** I introduced a heuristic, an estimate of the remaining cost from a node to the goal, to guide the search toward promising directions. The key constraint I enforced was admissibility: the heuristic must never overestimate the true remaining cost. I used straight-line Euclidean distance as the heuristic, which is admissible because a straight line is always shorter than or equal to the actual road distance. I explicitly checked it never exceeded the real cost so A* would stay optimal, and I avoided a tempting "scaled" heuristic that would have broken admissibility.

**Result** We cut nodes expanded by about 70% while still returning provably optimal routes, dropping average compute from 900ms to under 300ms. Lesson: an admissible heuristic buys speed for free without sacrificing optimality.
