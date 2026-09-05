---
qid: ing_e5939c6187__eli5__local
question: 'Explain: 2-D Dynamic Programming (11 Problems) — Neetcode 150'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 280
total_tokens: 444
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:38:37-05:00'
sources: []
---

**Think of a city map that’s a grid of streets and alleys.**  
Each square on the map is a *state* – it tells you where you are, and what you can do next (move right or down). A **2‑D dynamic programming (DP)** table keeps the best answer for every square, just like a traveler would keep a notebook of the cheapest price to reach each intersection.

For example, in the “unique paths” problem, the DP cell `dp[i][j]` stores how many ways you can get from the start to that square. You fill the grid row by row:  
- The first row and column are special because there’s only one way to reach them (keep going straight).  
- For any other cell, you add the numbers from the cell above (`dp[i‑1][j]`) and the cell left (`dp[i][j‑1]`), just like adding the two possible routes that could have led you there.

After the whole table is filled, the bottom‑right corner holds the final answer.  
So 2‑D DP is simply a systematic way to record and reuse results for every point on a grid, turning many overlapping subproblems into one quick lookup.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
