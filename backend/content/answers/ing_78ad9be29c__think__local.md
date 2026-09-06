---
qid: ing_78ad9be29c__think__local
question: 'Explain: Dynamic Programming (11/11) — Blind 75'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 487
total_tokens: 679
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T08:59:08-05:00'
sources: []
---

**1️⃣ Clarify the ask & assumptions**  
- *What is “Blind 75”?* – a curated list of interview‑friendly ML problems on LeetCode, known for high interview frequency.  
- *Which DP concepts are relevant?* – classic DP patterns (subproblem overlap, optimal substructure), memoization vs tabulation, state definition.  
- *Assume the audience knows basic ML terminology but may be new to algorithmic DP.*

**2️⃣ Adopt a mental framework**  
1. Map each Blind 75 problem to its underlying DP pattern (e.g., “Longest Increasing Subsequence” → 1‑D DP over prefixes).  
2. Identify state variables, recurrence relation, and base cases.  
3. Distinguish between top‑down (memoized recursion) and bottom‑up (iterative table filling).  

**3️⃣ Step‑by‑step reasoning toward the answer**  
- Start with a representative problem (“House Robber”).  
  - Define state `dp[i]` = max loot up to house `i`.  
  - Write recurrence: `dp[i] = max(dp[i‑1], dp[i‑2] + nums[i])`.  
  - Show base cases (`dp[0]=0`, `dp[1]=nums[0]`).  
- Generalize: for any problem, look for overlapping subproblems → define a state that captures all needed past decisions.  
- Translate the recurrence into code (memoization vs tabulation).  

**4️⃣ Common traps to avoid**  
- *Mis‑defining the state*: forgetting an index or value leads to wrong results.  
- *Omitting base cases*: DP table may contain garbage values.  
- *Choosing the wrong approach*: using recursion for deep states can hit stack limits; prefer iterative where possible.  

**5️⃣ Sanity‑check & verbalize**  
- Verify recurrence on a small example by hand.  
- Check time/space complexity: `O(n)` for 1‑D DP, `O(n²)` when two indices are needed.  
- Communicate clearly: “For each Blind 75 problem, first spot the pattern, then write state + recurrence, finally choose memoization or tabulation based on depth and size.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
