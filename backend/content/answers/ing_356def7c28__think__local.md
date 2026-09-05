---
qid: ing_356def7c28__think__local
question: 'Explain: Amazon Dynamic Programming — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 463
total_tokens: 652
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:32:15-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
   - Identify what “Amazon Dynamic Programming” actually means (DP interview questions Amazon asked).  
   - Assume the user wants a high‑level overview, not code for every problem.  
   - Note that FAANG covers classic DP topics: knapsack, edit distance, longest common subsequence, interval DP, etc.

**2️⃣ Adopt a mental model**  
   - *Problem → State definition → Recurrence → Memoization/Tabulation → Complexity.*  
   - Map each Amazon question to this template.  
   - Remember that interviewers often tweak constraints (e.g., array size, cost limits) to test edge cases.

**3️⃣ Step‑by‑step reasoning**  
   1. List recent Amazon DP questions I’ve seen (e.g., “Minimum Cost Path with Obstacles”, “Maximize Profit from Stock Prices with Cooldown”).  
   2. For each, write a concise state definition (e.g., `dp[i][j] = min cost to reach cell i,j`).  
   3. Derive the recurrence by considering allowed moves or decisions.  
   4. Discuss memoization vs iterative DP and when each is preferable.  
   5. Highlight common pitfalls: off‑by‑one errors, forgetting base cases, overlooking overlapping subproblems.

**4️⃣ Common traps to avoid**  
   - Mixing up *subproblem* and *state*.  
   - Over‑optimizing space before confirming the recurrence.  
   - Assuming a greedy solution works for DP problems.  
   - Neglecting to explain why the DP state captures all necessary history (e.g., cooldown days).

**5️⃣ Sanity‑check & verbalize**  
   - Verify that each recurrence reduces problem size and leads to an optimal substructure.  
   - Test with a tiny example in my head (3‑row grid, 2‑day stock).  
   - Explain the intuition: “We’re essentially exploring all feasible paths and remembering the best cost so far.”  
   - Conclude by summarizing how Amazon’s DP questions probe both algorithmic depth and ability to articulate reasoning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
