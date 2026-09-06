---
qid: ing_eba6901acf__fp__local
question: 'Explain: Apple Arrays and Strings — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 487
total_tokens: 658
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:20:31-05:00'
sources: []
---

**Why the “Apple Array” problem is a test of *prefix‑summing* with constraints**

You are given an array `A[0…n‑1]`.  
For every pair `(i , j)` you can *replace* `A[i]` and `A[j]` by
`max(A[i], A[j]) + min(A[i], A[j])`, i.e. their sum, but only if
the two indices differ by at most *k*.  
The goal is to maximise the final array’s sum.

At first glance it looks like a greedy “take the biggest pair” trick,
but that fails because you may sacrifice a large element for a much
larger gain later. The correct view is:

1. **Locality = Sliding Window** – each index can only interact with
   its neighbours in a window of size *k+1`.  
2. **Monotone Queue = Max‑Prefix** – within that window the best move
   is always to pair the *current* element with the largest one seen so
   far (a classic max‑queue trick).  
3. **Dynamic Programming over Prefixes** – define `dp[i]` as the
   maximum sum achievable for the first `i+1` elements.  
   The recurrence  
   ```
   dp[i] = max(dp[i-1],  // skip i
               dp[j-1] + A[i]+A[j])   // pair j<i within window
   ```  
   is a standard *interval DP* where the transition cost is simply
   the sum of two numbers.

The non‑obvious insight: **the optimal strategy never pairs an element
with a smaller one that has already been “locked” into a previous pair**.
Because sums are additive, any such lock can be undone by swapping
partners without decreasing total value. This reduces the state space to
just the last `k` elements, yielding an O(n log k) solution with a
priority queue.

Thus the Apple Arrays question is fundamentally about *efficiently
maintaining prefix maxima in a sliding window*—a classic DP‑plus‑data‑structure blend.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
