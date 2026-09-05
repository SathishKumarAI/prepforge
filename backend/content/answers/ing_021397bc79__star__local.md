---
qid: ing_021397bc79__star__local
question: 'Explain: Binary Search (7 Problems) — Neetcode 150'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 347
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:32:32-05:00'
sources: []
---

**Situation** – In my last internship I was tasked with tuning the threshold for a fraud‑detection model that outputs a probability score between 0 and 1. The company had set a target false‑positive rate of 2 %, but our initial cutoff at 0.5 yielded a 4 % FP rate, costing us roughly $300k per month in unnecessary holds.

**Task** – I needed to find the exact threshold that would bring the FP down to the target while keeping true positives above 90 %. The search space was continuous and expensive to evaluate because each candidate threshold required running the model on a 1‑million transaction batch.

**Action** – I implemented a binary search over the sorted list of predicted scores. First, I pre‑sorted the predictions (O(n log n)). Then I used two pointers to iteratively test midpoints: if the FP at a midpoint exceeded 2 %, I moved the lower bound up; otherwise I lowered the upper bound. Each iteration recomputed precision/recall using vectorized NumPy ops, reducing evaluation time from seconds to milliseconds. The algorithm converged in just six steps instead of scanning every possible threshold.

**Result** – The optimal cutoff was 0.37, dropping the FP rate to 1.9 % while maintaining a 91 % true‑positive rate. This saved the company an estimated $250k per month and taught me how binary search can turn a seemingly continuous optimization problem into a fast, deterministic routine.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
