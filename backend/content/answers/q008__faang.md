---
qid: q008
question: "Explain the minimax algorithm and alpha-beta pruning."
topic: "AI"
model: "Claude Code (authored)"
sources: []
---

**Clarify** — I'll assume a two-player, zero-sum, perfect-information game (chess, tic-tac-toe) and confirm the interviewer wants both the base algorithm and how pruning speeds it up.

**Approach** — Explain minimax's recursive value propagation, then layer alpha-beta as an optimization that prunes provably irrelevant branches.

**Depth** — **Minimax** models two players: MAX tries to maximize the score, MIN to minimize it. It recurses the game tree to terminal (or depth-limited) states, evaluates leaves, then propagates values upward—MAX nodes take the max of children, MIN nodes the min—yielding MAX's optimal move under optimal opponent play. Complexity is O(b^d) for branching factor b and depth d. **Alpha-beta pruning** keeps two bounds: α (best MAX can guarantee so far) and β (best MIN can guarantee). When a node's value proves it can't affect the parent's choice (α ≥ β), the remaining children are pruned. Result is identical to minimax but with far fewer evaluations—best case O(b^(d/2)) with good move ordering, effectively doubling searchable depth.

**Edge cases** — Deep games can't be searched fully, so we use a depth cutoff plus a heuristic evaluation function. Poor move ordering degrades pruning back toward O(b^d). Non-zero-sum or chance games need expectiminimax.

**Optimize & communicate** — I'd add move ordering, transposition tables, and iterative deepening. Narrating "pruning never changes the answer, only the work" signals I understand it's a sound optimization.
