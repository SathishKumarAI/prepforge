---
qid: q006
question: "What is a heuristic in AI search, and what makes one admissible?"
topic: "AI"
model: "Claude Code (authored)"
sources: []
---

I'd define a heuristic as a function h(n) estimating the cost from a node to the goal, used to steer search toward promising paths instead of exploring blindly. A heuristic is admissible if it never overestimates the true remaining cost, so h(n) is always less than or equal to the actual cost. That property is what guarantees A* returns an optimal path. A stronger condition, consistency, additionally guarantees we never need to reopen nodes.

To show **Invent and Simplify** I'd give a concrete case. Routing delivery vehicles on a grid, I used straight-line Euclidean distance as the heuristic. It's admissible because the real road path can only be as long or longer than the straight line, so optimality held while the heuristic pruned most of the search space and cut planning time by roughly 70% versus uninformed search.

The trade-off I'd name: a heuristic closer to the true cost expands fewer nodes and runs faster, but if it overestimates even slightly, you lose the optimality guarantee. So I deliberately stayed on the admissible side and measured node expansions.

A bar-raiser listens for whether I understand why admissibility matters, that it's the precise condition protecting optimality, and that I validated it rather than assuming it.
