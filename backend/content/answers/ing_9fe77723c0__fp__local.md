---
qid: ing_9fe77723c0__fp__local
question: 'Explain: Dynamic Programming — Topleetcodeproblems'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 409
total_tokens: 579
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:45:19-05:00'
sources: []
---

**Dynamic programming (DP)** tackles *optimal substructure* and *overlap*: a problem can be split into smaller sub‑problems that recur many times.  
At first principles, DP is **memorized recursion**: we solve a state once, store its value, and reuse it whenever the same state appears again. The recurrence relation comes from *Bellman’s principle of optimality*—the best solution to a problem contains an optimal solution to every sub‑problem.  

For a typical LeetCode DP challenge (e.g., **Climbing Stairs**, **House Robber**, **Longest Increasing Subsequence**), we:

1. **Define the state**: e.g., `dp[i]` = number of ways to reach step `i`.  
2. **Derive transitions** by examining how a solution for `i` can be built from solutions of smaller indices (the *overlap*).  
3. **Initialize base cases** (often trivial, like `dp[0]=1`).  

The algorithm’s correctness follows because every optimal path is constructed by repeatedly applying the transition; memoization guarantees we never recompute a state, so total work equals the number of distinct states.

### Non‑obvious insight  
Many solvers focus on *time* (reducing complexity) and ignore **space–time trade‑off**. In LeetCode problems where only the last `k` states influence the next one (e.g., Fibonacci, sliding window DP), we can compress `dp` to a constant number of variables without losing optimality—turning an O(n) space solution into O(1). Recognizing this pattern early turns a seemingly “DP‑heavy” problem into a linear‑time, constant‑space trick.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
