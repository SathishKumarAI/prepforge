---
qid: ing_93cd5189fa__faang__local
question: 'Explain: Week 5 - Dynamic programming ​ — Best practice questions by the
  author of Blind 75 | Tech Interview Handbook'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 603
total_tokens: 850
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:27:49-05:00'
sources: []
---

**Clarify**

The interviewer wants a concise explanation of *Week 5 – Dynamic Programming* from the “Blind 75” book, focusing on the best‑practice problems listed for that week.  
Assumptions to confirm:  
- Audience knows DP fundamentals (memoization vs tabulation).  
- They expect concrete problem names and why they’re chosen as “best practice.”  

**Approach**

1. Summarize the theme of Week 5.  
2. List each problem with its core DP idea.  
3. Highlight key patterns (e.g., “coin change” → unbounded knapsack, “longest increasing subsequence” → LIS).  
4. Note typical time/space complexities and any common pitfalls.  

**Depth**

| Problem | Core DP Idea | Complexity |
|---------|--------------|------------|
| **Climbing Stairs** | Recurrence `dp[i]=dp[i-1]+dp[i-2]` (Fibonacci) | O(n) time, O(1) space |
| **House Robber** | `dp[i]=max(dp[i‑1], dp[i‑2]+nums[i])` (no adjacent picks) | O(n), O(1) |
| **Maximum Subarray** | Kadane’s algorithm (`current = max(nums[i], current+nums[i])`) | O(n), O(1) |
| **Coin Change – 2** | `dp[amount] = min(dp[amount-coin]+1)` (unbounded knapsack) | O(amount × coins) |
| **Longest Increasing Subsequence** | `dp[i]=max(dp[j])+1` for all j<i with nums[j]<nums[i] | O(n²), can be optimized to O(n log n) |
| **Edit Distance** | 2‑D DP over prefixes: `dp[i][j]=min(...)` | O(m × n) |
| **Word Break** | `dp[i]=true if any dp[j] && wordSet.contains(s[0:i])` | O(n²) |

These are “best practice” because each problem encapsulates a distinct DP pattern that appears across interview questions (recurrence with overlapping subproblems, state transition optimization, 1‑D vs 2‑D arrays).

**Edge Cases**

- Empty input / single element.  
- Negative numbers for LIS/maximum subarray.  
- Large `amount` in coin change may hit integer overflow if not careful.

**Optimize & Communicate**

I would emphasize how each problem teaches a reusable DP template: “define state → find recurrence → iterate” and discuss trade‑offs (space vs time). I’d also mention that mastering these patterns lets you adapt to variants, which is what interviewers test. This narrative demonstrates structured thinking and depth in line with FAANG expectations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
