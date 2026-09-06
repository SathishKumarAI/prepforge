---
qid: ing_be9b3c4e6c__fp__local
question: 'Explain: Array (10 Problems) — Blind 75'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 464
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:48:52-05:00'
sources: []
---

### Why “Blind 75” arrays are the *core* of interview ML

In a data‑structure interview, you’re asked to transform a raw sequence into an answer in **O(n)** or **O(n log n)** time while keeping memory at O(1) or O(n).  
Arrays are the simplest linear structure: they expose contiguous indices, so every algorithm that “scans” once (or twice) can be written cleanly.  

The Blind 75 list groups 10 canonical array problems because:

| Problem | Why it’s a *must‑know* |
|---------|-----------------------|
| **Two‑Sum / Three‑Sum** | Demonstrates the trade‑off between hashing (O(n)) and two‑pointer (O(n log n)). |
| **Maximum Subarray (Kadane)** | Shows dynamic programming as “keep best so far” versus “restart if negative”. |
| **Merge Intervals** | Illustrates sorting + linear sweep, a pattern that appears in almost every interval problem. |
| **Product of Array Except Self** | Forces you to compute prefix/suffix products without division—an exercise in space‑time decomposition. |
| **Find Duplicate / Missing Numbers** | Uses array indices as hash buckets; reveals the *Pigeonhole Principle* applied locally. |

> **Non‑obvious insight:**  
> Many of these problems are solved by *reusing the input array itself* as auxiliary storage (e.g., in-place marking, prefix sums). This saves a factor of 2–3 in memory and turns an O(n²) naive algorithm into linear time. The key is to recognize when “data can be overwritten without losing needed information” – that’s what makes arrays uniquely powerful.

Mastering these ten problems gives you the **optimization blueprint**:  
1. Sort if order matters (O(n log n)).  
2. Scan once while maintaining a running state (Kadane, two‑pointer).  
3. Reuse input for constant‑space hashing or prefix/suffix tricks.  

These patterns recur in ML preprocessing (feature engineering), so the array toolkit is your first step toward efficient algorithmic thinking.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
