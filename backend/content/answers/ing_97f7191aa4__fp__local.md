---
qid: ing_97f7191aa4__fp__local
question: 'Explain: Sliding Window (6 Problems) — Neetcode 150'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 575
total_tokens: 748
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:29:16-05:00'
sources: []
---

### Why the “sliding‑window” trick works

At its core a sliding window reduces a **global** optimization over all subarrays of an array to a sequence of **local updates**.  
Suppose we need the maximum sum of any contiguous subarray of length `k`.  
Let  

```
S(i) = A[i] + … + A[i+k-1]
```

be that sum for window starting at `i`.  
Observe

```
S(i+1) = S(i) – A[i] + A[i+k].
```

Thus, once we know `S(0)` we can compute every subsequent `S(i)` in **O(1)** by discarding the left‑most element and adding the new right‑most one.  
This recurrence is a direct consequence of linearity (additivity) and locality: moving the window changes only two elements.

Extending this idea gives the six classic Neetcode problems:

| Problem | Core objective | Sliding‑window role |
|---------|----------------|---------------------|
| 1️⃣ *Longest Substring Without Repeating Characters* | Maximize length of a substring with unique chars | Maintain a set; when a repeat appears, shift left until uniqueness restored. |
| 2️⃣ *Minimum Size Subarray Sum* | Find smallest subarray whose sum ≥ `S` | Shrink from the left while the sum stays large enough. |
| 3️⃣ *Sliding Window Maximum* | For each window of size `k`, output max | Use a deque that keeps indices of potential maxima in decreasing order. |
| 4️⃣ *Max Consecutive Ones II* | Max run of 1’s after flipping at most one 0 | Two pointers tracking the last zero; expand right, shrink left when >1 zero. |
| 5️⃣ *Longest Substring with At Most K Distinct Characters* | Longest substring with ≤ K distinct | Map counts; shrink left until unique count ≤ K. |
| 6️⃣ *Check Inclusion (Permutation in String)* | Does `s2` contain a permutation of `s1`? | Frequency diff array; slide window and keep track of zeros. |

### One non‑obvious insight

The sliding window is not merely an optimization trick—it’s a **conservation law** for the quantity you’re tracking (sum, max, frequency counts).  
By expressing that quantity as a function of its previous state plus two local changes, you turn a potentially quadratic scan into linear time.  
Recognizing this conservation structure is often the key to spotting a sliding‑window solution where the obvious brute force seems inevitable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
