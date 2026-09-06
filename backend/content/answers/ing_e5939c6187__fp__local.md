---
qid: ing_e5939c6187__fp__local
question: 'Explain: 2-D Dynamic Programming (11 Problems) — Neetcode 150'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 626
total_tokens: 802
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:06:57-05:00'
sources: []
---

**Two‑dimensional dynamic programming (DP)** solves optimization or counting tasks where a state depends on two indices—often *position* and an auxiliary resource (time, cost, moves).  
The core insight is that the optimal substructure of many grid‑based problems can be captured by a recurrence  
\[
dp[i][j] = \operatorname{combine}\bigl(dp[i-1][j], dp[i][j-1], …\bigr)
\]
where `combine` reflects the problem’s objective (max, min, count).  
This works because any optimal solution that ends at `(i,j)` must have come from a neighboring cell; by storing all possibilities for smaller sub‑problems we avoid recomputation and guarantee optimality via Bellman’s principle.

Neetcode’s **11 2‑D DP problems** illustrate this pattern across diverse domains:

| Problem | State | Recurrence idea |
|---------|-------|-----------------|
| Longest Increasing Path | `dp[i][j]` = longest path starting at `(i,j)` | DFS + memoization |
| Unique Paths II | `dp[i][j]` = ways to reach `(i,j)` avoiding obstacles | `dp[i-1][j]+dp[i][j-1]` |
| Surrounded Regions | `dp` as visited frontier | BFS from border, mark safe |
| Trapping Rain Water II | `dp[i][j]` = water level at cell | Priority queue + neighbor heights |
| Minimum Path Sum | `dp[i][j]` = min cost to `(i,j)` | `min(dp[i-1][j], dp[i][j-1]) + cost[i][j]` |
| Edit Distance | `dp[i][j]` = ops for prefixes | Levenshtein recurrence |
| House Robber III (binary tree) | 2‑D DP on nodes: *rob* / *not rob* | Tree DP, not grid |
| Word Search II | DP with trie + visited matrix | Backtracking + memoized pruning |
| Max Sum Rectangle | Prefix sums over rows → 1‑D max subarray | Kadane on compressed columns |
| Paint House III | `dp[i][c]` = cost to paint house i color c | Transition from previous colors |
| Word Ladder II | BFS levels + DP for path reconstruction | Level‑by‑level exploration |

**Non‑obvious insight:** *When the recurrence involves a min/max over many neighbors, you can often transform the 2‑D problem into a series of 1‑D problems (e.g., compress rows to columns in Max Sum Rectangle). This reduces space and time while preserving optimality.*  

By viewing each DP as “choose the best predecessor,” we unify seemingly unrelated tasks under a single optimization framework.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
