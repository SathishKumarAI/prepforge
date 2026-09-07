---
qid: ing_78ad9be29c__faang__local
question: 'Explain: Dynamic Programming (11/11) — Blind 75'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 501
total_tokens: 737
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:24:33-05:00'
sources: []
---

**Clarify**  
The question asks for a concise explanation of *Dynamic Programming* (DP) as it appears in the “Blind 75” list of interview‑style problems—those that are common, non‑trivial, and frequently recur across FAANG interviews. We’ll assume the audience knows basic recursion but not DP’s memoization or tabulation patterns.

**Approach**  
1. Define DP: solving a problem by breaking it into overlapping subproblems, storing intermediate results to avoid recomputation.  
2. Highlight two flavors: *top‑down* (memoized recursion) and *bottom‑up* (iterative table).  
3. Relate to “Blind 75” examples (e.g., Fibonacci, Longest Increasing Subsequence, Edit Distance).  

**Depth**  
- **Overlapping subproblems**: If a recursive call recomputes the same state multiple times, DP saves it in an array or hash map.  
- **Optimal substructure**: The optimal solution to the whole problem can be built from optimal solutions of its parts (e.g., `dp[i] = max(dp[i‑1], dp[i‑2])` for Fibonacci).  
- **Complexity**: Top‑down DP runs in O(n) time and space for linear recurrences; bottom‑up often reduces memory to O(1) by rolling arrays.  
- **Implementation pattern**: `dp[0] = base`; loop i from 1..n, compute dp[i] using previous dp values; return dp[n].

**Edge Cases**  
- Empty inputs → base case returns 0 or identity element.  
- Very large n → use iterative DP to avoid stack overflow.  
- Negative indices or constraints → validate before indexing.

**Optimize & Communicate**  
Explain why memoization eliminates exponential blow‑up (from O(2ⁿ) to O(n)). Show how bottom‑up can be further optimized by noticing that only a fixed window of previous states is needed, reducing space from O(n) to O(k). In an interview, I’d narrate: “We first detect overlapping subproblems, then choose memoization for clarity, and finally compress the table because we only need the last two Fibonacci numbers.” This demonstrates structured thinking, clear communication, and depth—exactly what FAANG interviewers reward.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
