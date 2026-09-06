---
qid: ing_ac84306227__fp__local
question: 'Explain: Greedy (8 Problems) — Neetcode 150'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 336
total_tokens: 509
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:11:38-05:00'
sources: []
---

**Greedy algorithms on the “8‑problem” set of Neetcode 150**

The core issue is *choosing a local optimum that guarantees a global optimum*.  
All eight tasks (e.g., **Best Time to Buy and Sell Stock IV**, **Minimum Number of Arrows to Burst Balloons**) can be expressed as:  

1. **Identify a “next move”** that maximizes/minimizes some quantity (profit, coverage).  
2. **Commit irrevocably** to this move.  
3. **Reduce the problem size** and repeat.

Why does this work? In each case the objective function is *matroid‑like*: every feasible set of choices can be extended by adding a best element without breaking feasibility. This satisfies the **exchange property**: if an optimal solution contains a suboptimal choice, swapping it with the greedy one never worsens the score. Thus the greedy sequence must belong to some optimal family.

A non‑obvious insight is that *the greedy step often relies on sorting* (by price difference, interval start/end, or profit). Sorting imposes a total order that turns a combinatorial structure into a linear scan—turning an NP‑hard problem into O(n log n) or O(n).

**Bottom line:**  
For each of the eight problems, prove the exchange property for the chosen greedy criterion; then the algorithm is optimal. The subtlety is recognizing when sorting reveals that property.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
