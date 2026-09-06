---
qid: ing_85dfa4bc7d__fp__local
question: 'Explain: Backtracking (9 Problems) — Neetcode 150'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 380
total_tokens: 553
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:49:34-05:00'
sources: []
---

**Backtracking in the “9 Problems” set – why it is the right tool**

At its core, backtracking solves *constraint‑satisfaction* questions: we have a partial solution that must be extended to a full one while obeying rules (e.g., no repeated numbers in Sudoku). The algorithm explores the search tree depth‑first, pruning branches as soon as they violate constraints.  

Why does this work?  
- **Exhaustiveness** – every feasible assignment is eventually considered.  
- **Pruning power** – a constraint can be checked locally; if it fails we immediately abandon that sub‑tree, saving exponential time.  
- **State symmetry** – many problems (N‑Queens, Sudoku) have interchangeable positions; backtracking treats each placement as a node in the tree, ensuring no duplicate work.

In Neetcode’s nine examples—*Sudoku*, *N‑Queens*, *Word Search*, etc.—each problem reduces to “place X objects on Y slots without conflict.” The deeper principle is **search with early failure detection**, a special case of branch‑and‑bound where the bound is zero (i.e., we stop when constraints are violated).  

**Non‑obvious insight:**  
The *ordering* of choices dramatically changes performance. For Sudoku, choosing the cell with the fewest legal digits first (minimum‑remaining‑values heuristic) often turns an exponential search into a practically linear one. This is because it maximizes early pruning and keeps the branching factor low—an idea that general backtracking solvers should adopt by default.

Thus, backtracking isn’t just a brute force trick; it’s a principled way to explore combinatorial spaces efficiently when constraints can be detected incrementally.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
