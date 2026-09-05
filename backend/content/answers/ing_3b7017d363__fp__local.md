---
qid: ing_3b7017d363__fp__local
question: 'Explain: rules like if a rook moves then — Coding Adventure: Chess'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 401
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:11:12-05:00'
sources: []
---

**Why the Rook’s “no‑jump” rule is essential**

The board can be seen as an undirected grid graph \(G=(V,E)\) where each square is a vertex and edges connect orthogonally adjacent squares. A rook’s legal move corresponds to traversing a *simple path* in this graph that lies entirely on one of its two orthogonal directions. The “no‑jump” rule—*the rook cannot leap over pieces*—is precisely the requirement that the chosen path be **induced**: all intermediate vertices must belong to \(V\) and no edge may skip a vertex.

If we relaxed this rule, the graph would effectively become complete along rows/columns, collapsing the spatial structure into a clique. The combinatorial explosion of possible moves would break many invariant properties:

1. **State space size** – With jumps, each rook could reach any square in one move, making the game trivial to solve but losing depth.
2. **Transposition symmetry** – The rook’s movement is defined by *distance* along a line; allowing jumps destroys this metric and invalidates many algebraic tools (e.g., parity arguments).
3. **Computational complexity** – Move generation would become \(O(n^2)\) per piece instead of linear, harming search efficiency.

A non‑obvious insight: the rule is not merely about “leaps”; it enforces *graph connectivity* that preserves the **planar embedding** of the board. This planar structure underlies many pruning heuristics (e.g., king‑distance heuristics) and ensures that algorithms like minimax with alpha‑beta still operate within manageable branching factors.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
