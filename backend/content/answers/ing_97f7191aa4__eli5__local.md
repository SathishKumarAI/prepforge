---
qid: ing_97f7191aa4__eli5__local
question: 'Explain: Sliding Window (6 Problems) — Neetcode 150'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 320
total_tokens: 481
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:38:42-05:00'
sources: []
---

Think of a **sliding window** like a moving magnifying glass over a long string of beads.  
The glass shows only a handful of beads at a time, and as you slide it one bead forward, the leftmost bead leaves the view while a new right‑hand bead enters. In machine learning problems, that “view” is usually a subset of data points or features we’re evaluating together.

**Six common Neetcode 150 sliding‑window tasks**

1. **Maximum subarray sum (Kadane)** – keep a window of current best sum; shrink when it goes negative.  
2. **Longest substring without repeats** – slide the right end, remember last positions to shrink left so no duplicates stay inside.  
3. **Minimum size subarray sum** – grow until the sum meets the target, then contract from the left to keep it minimal.  
4. **Find first unique character** – treat each character as a window; move pointers to locate the first non‑repeating one.  
5. **Longest consecutive sequence in array** – expand while next number is +1, reset when gap appears.  
6. **Max product subarray** – similar to sum but track both max and min products because negatives flip signs.

In each case the window “slides” forward, adjusting its size so that the required property holds, giving an efficient O(n) solution instead of re‑examining everything from scratch.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
