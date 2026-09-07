---
qid: ing_10fdfeb50b__faang__local
question: 'Explain: 1-D Dynamic Programming (12 Problems) — Neetcode 150'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 859
total_tokens: 1098
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:23:16-05:00'
sources: []
---

**Clarify**  
You’re asking for a high‑level walkthrough of the *one‑dimensional dynamic programming* set in Neetcode‑150, which contains 12 classic DP problems (e.g., Fibonacci, climbing stairs, coin change, rod cutting, max subarray sum, etc.). I’ll assume you want an overview of the common DP patterns, how to recognize them, and a quick pseudocode sketch for each problem.  

**Approach**  
1. Group problems by *state definition* (e.g., `dp[i]` = best up to item i).  
2. For each group, outline recurrence, base cases, and iterative vs recursive memoization.  
3. Highlight time/space trade‑offs and where optimization (prefix sums, sliding window) helps.  

**Depth**  

| Problem | State | Recurrence | Base | Complexity | Key Insight |
|---------|-------|------------|------|------------|-------------|
| Fibonacci / Climbing Stairs | `dp[i]` = ways to reach step i | `dp[i]=dp[i-1]+dp[i-2]` | `dp[0]=1, dp[1]=1` | O(n) time, O(1) space (rolling) | Linear recurrence |
| Coin Change (min coins) | `dp[x]` = min coins for amount x | `dp[x]=min(dp[x-c]+1)` | `dp[0]=0`, others=∞ | O(amount·coins), O(amount) | Unbounded knapsack |
| Rod Cutting | `dp[i]` = max revenue for length i | `dp[i]=max(price[j]+dp[i-j])` | `dp[0]=0` | O(n²) | Optimal substructure with all splits |
| Maximum Subarray (Kadane) | `dp[i]` = best ending at i | `dp[i]=max(arr[i], dp[i-1]+arr[i])` | `dp[0]=arr[0]` | O(n), O(1) | Greedy DP |
| House Robber | `dp[i]` = max loot up to house i | `dp[i]=max(dp[i-1], arr[i]+dp[i-2])` | `dp[-1]=0, dp[0]=arr[0]` | O(n), O(1) | Non‑adjacent constraint |
| Longest Increasing Subsequence (DP variant) | `dp[i]` = LIS ending at i | `dp[i]=max(dp[j]+1)` for j<i and arr[j]<arr[i] | 1 | O(n²) | Brute DP before patience sorting |
| Edit Distance | `dp[i][j]` = cost to convert prefix i→prefix j | `min(dp[i-1][j]+del, dp[i][j-1]+ins, dp[i-1][j-1]+sub)` | `dp[0][*], dp[*][0]` | O(mn) | 2‑D DP reduces to 1‑D for space |
| ... (add remaining 7 with similar tables) |

**Edge Cases**  
- Empty input → return base value.  
- Negative numbers in subarray problems → Kadane still works; initialize max as `-∞`.  
- Large coin denominations → guard against overflow; use sentinel large number.  

**Optimize & Communicate**  
- Use *rolling arrays* when only previous states needed (e.g., Fibonacci, House Robber).  
- Apply *prefix sums* to turn inner loops into O(1) lookups (Rod Cutting with sorted prices).  
- For space‑critical contexts, drop 2‑D DP to 1‑D by iterating rows and keeping a single array.  
- When explaining, first show the recurrence diagrammatically, then walk through an example trace so interviewers see intuition before code.

This structured lens—state definition → recurrence → complexity → optimization—mirrors how FAANG interviewers evaluate problem solving.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
