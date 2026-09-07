---
qid: ing_3740aef517__faang__local
question: 'Explain: Dynamic Programming (9 Problems) — Blind 75'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 730
total_tokens: 965
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:52:32-05:00'
sources: []
---

**Dynamic Programming – 9 Classic “Blind 75” Problems**

| # | Problem | Core Idea |
|---|---------|-----------|
|1| **House Robber** | Max sum with no adjacent picks → `dp[i]=max(dp[i-1], dp[i-2]+nums[i])` |
|2| **Climbing Stairs** | Count ways → Fibonacci recurrence: `dp[i]=dp[i‑1]+dp[i‑2]` |
|3| **Coin Change (Min Coins)** | Bottom‑up DP over amount → `dp[x]=min(dp[x], dp[x-coin]+1)` |
|4| **Longest Increasing Subsequence** | O(n²) DP: `dp[i]=max(dp[j])+1` for all `j<i` with `a[j]<a[i]`; LIS length = max `dp`. |
|5| **Edit Distance (Levenshtein)** | 2‑D table: `dp[i][j]=min(dp[i-1][j]+1, dp[i][j-1]+1, dp[i-1][j-1]+cost)` |
|6| **Maximum Subarray (Kadane)** | Greedy DP: keep running max ending at i → `max_ending=max(nums[i], max_ending+nums[i])` |
|7| **Subset Sum / 0‑1 Knapsack** | Boolean table `dp[i][j]`: can we reach sum j using first i items. |
|8| **Longest Common Subsequence** | 2‑D DP: if chars equal, `dp[i][j]=dp[i-1][j-1]+1`; else max of left/up. |
|9| **Word Break** | Boolean DP over string length: `dp[i] = true` if any split yields valid words (`dict.contains(substring)`).

---

### 1️⃣ Clarify  
We’re asked to explain nine representative DP problems from the “Blind 75” list, highlighting their recurrence and typical implementation details.

### 2️⃣ Approach  
For each problem:
- Identify state definition (e.g., `dp[i]` = best solution up to index i).
- Derive transition formula.
- Decide between top‑down memoization or bottom‑up tabulation based on space constraints.

### 3️⃣ Depth  
Provide recurrence, base cases, and complexity:
- **Time**: O(n²) for LIS/LCS; O(n·m) for Edit Distance; O(n·amount) for Coin Change.
- **Space**: Optimize to O(1) or O(min(n,m)) where possible (e.g., Kadane, 1‑D DP for Word Break).

### 4️⃣ Edge Cases  
- Empty inputs → return 0/false.  
- Negative numbers in House Robber → still works because recurrence uses max.  
- Large amount in Coin Change may need `INT_MAX` guard.

### 5️⃣ Optimize & Communicate  
- Use rolling arrays for space‑saving.  
- Memoize expensive substring lookups (Word Break).  
- Highlight that DP transforms overlapping subproblems into linear or quadratic passes, turning exponential brute‑force into polynomial solutions.

---

**Takeaway:** Mastering these nine patterns equips you to tackle any DP interview question—state definition, transition, complexity trade‑offs, and edge‑case robustness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
