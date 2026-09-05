---
qid: ing_3740aef517__fp__local
question: 'Explain: Dynamic Programming (9 Problems) — Blind 75'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 440
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:01:50-05:00'
sources: []
---

**Dynamic‑Programming “Blind 75” – the core idea**

Every problem in this subset asks *“what is the best way to build a solution step by step?”*  
The state is a subproblem that can be solved independently, and the optimal substructure guarantees that an optimal global solution contains optimal solutions of its parts.  
Formally, if `opt(i)` denotes the optimum for prefix `i`, then  
`opt(i) = min/max{f(opt(j), … , opt(i‑1))}` for some recurrence `f`.  
The **Bellman equation** guarantees that we can compute all `opt(i)` in linear or quadratic time by memoizing intermediate results.  

**Why it must work this way**

- *Optimal substructure* follows from the principle of optimality: a globally optimal solution cannot contain a sub‑solution that is not optimal for its sub‑problem, otherwise swapping would improve the whole.
- *Overlapping subproblems* mean we can reuse computations; if each state were unique, recursion would be exponential.

**Deeper connection**

DP is essentially **dynamic convex hull / shortest path on DAGs**: we’re iteratively relaxing edges (states) until no improvement occurs. It’s an instance of the *Bellman–Ford* algorithm in disguise, and it embodies *information compression*: each state stores a compact summary (e.g., minimal cost) that suffices for all future decisions.

**Non‑obvious insight**

In many Blind 75 DP problems the transition seems “global” (e.g., considering all previous indices), yet the optimality condition often allows a **sliding window** or *monotonic queue* optimization. Recognizing when the cost function is monotone lets you replace an \(O(n^2)\) DP with linear time—this subtlety appears in problems like “Best Time to Buy and Sell Stock IV” and “Longest Increasing Subsequence” variants.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
