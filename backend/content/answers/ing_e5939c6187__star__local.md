---
qid: ing_e5939c6187__star__local
question: 'Explain: 2-D Dynamic Programming (11 Problems) — Neetcode 150'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 346
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:06:59-05:00'
sources: []
---

**Situation:**  
At my previous company we were building a recommendation engine for an e‑commerce site. The sales team noticed that our click‑through rate dropped by ~12% after adding new product categories, so we needed to re‑rank items in real time based on user intent and inventory constraints.

**Task:**  
I had to design a fast algorithm that could compute the optimal ranking of up to 200 products for each user query while respecting stock limits and promotional rules—essentially solving a weighted assignment problem with constraints.

**Action:**  
I turned to a 2‑D dynamic programming approach. I built a matrix `dp[i][j]` where `i` indexed products and `j` represented the remaining inventory slots. For each product I computed two options: include it (adding its score and subtracting one slot) or skip it. The recurrence was  
`dp[i][j] = max(dp[i‑1][j], dp[i‑1][j‑1] + score_i)` if stock allowed.  
I optimized memory by rolling the array to O(n) space, used a priority queue to handle promotional discounts, and profiled with `cProfile` to keep the runtime under 15 ms per query.

**Result:**  
The new ranking algorithm boosted click‑through rate by 9% and increased revenue by $1.3M in Q4. I learned that a well‑structured 2‑D DP can turn an apparently combinatorial problem into an efficient, production‑ready solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
