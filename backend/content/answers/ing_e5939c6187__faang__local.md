---
qid: ing_e5939c6187__faang__local
question: 'Explain: 2-D Dynamic Programming (11 Problems) — Neetcode 150'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 558
total_tokens: 797
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:32:05-05:00'
sources: []
---

**Clarify**  
We’re asked to explain *“2‑D Dynamic Programming (11 Problems)”* from the Neetcode 150 curriculum—essentially a curated set of classic two‑dimensional DP problems (e.g., Edit Distance, Longest Common Subsequence, Maximal Square, Matrix Chain Multiplication). I’ll assume the interviewee needs an overview: why 2‑D DP is useful, common patterns, and how to tackle each problem.

**Approach**  
1. **Identify sub‑problems** that depend on two indices (i,j).  
2. **Define a recurrence** that expresses the optimal solution in terms of smaller sub‑problems.  
3. **Choose an order of evaluation** (row‑major, diagonal sweep) to ensure dependencies are resolved.  
4. **Implement memoization or tabulation**, and finally extract the answer.

**Depth**  
- *Edit Distance*: `dp[i][j] = min(dp[i‑1][j]+1, dp[i][j‑1]+1, dp[i‑1][j‑1]+cost)`; O(mn) time/space.  
- *Longest Common Subsequence*: similar recurrence but `+1` when chars match.  
- *Maximal Square*: `dp[i][j] = min(dp[i‑1][j], dp[i][j‑1], dp[i‑1][j‑1]) + 1` if cell is ‘1’.  
- *Matrix Chain Multiplication*: `dp[i][j] = min_{k} (dp[i][k]+dp[k+1][j]+cost)`; O(n³).  
All share the pattern of filling a 2‑D table where each entry depends on already computed neighbors.

**Edge Cases**  
- Empty strings or matrices → return 0.  
- Large inputs can hit O(n²) memory; compress to two rows if only previous row needed.  
- For problems like Edit Distance, ensure cost for substitution is correctly handled (0 when chars equal).

**Optimize & Communicate**  
- Discuss space reduction (rolling arrays).  
- Mention time/space trade‑offs: e.g., Matrix Chain Multiplication is cubic but unavoidable unless we use heuristics.  
- When explaining, start with the simplest DP (Edit Distance), show how to generalize the pattern, then map each of the 11 problems onto that template.  

This structured walkthrough demonstrates clear reasoning, familiarity with common DP patterns, and readiness to handle variations—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
