---
qid: ing_93cd5189fa__star__local
question: 'Explain: Week 5 - Dynamic programming ​ — Best practice questions by the
  author of Blind 75 | Tech Interview Handbook'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 312
total_tokens: 562
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:28:27-05:00'
sources: []
---

**Situation:** In my last role at a fintech startup, we had to optimize our credit‑score prediction model. The dataset was 12 M rows and the naive DP solution for computing feature interactions ran in O(n²), which meant a 48‑hour wall time—unacceptable for weekly model retraining.

**Task:** I needed to refactor the DP routine so it would finish under two hours while still delivering the same predictive accuracy, and make it maintainable for future team members.

**Action:** First, I profiled the code with Py-Spy and identified that recomputing overlapping sub‑problems was the bottleneck. I switched from a recursive memoization to an iterative bottom‑up table using NumPy arrays, which cut memory overhead by 70 %. Next, I applied the “divide‑and‑conquer” principle: split the dataset into 4 shards, ran DP in parallel with Python’s multiprocessing Pool, and then merged results. I also added type hints, unit tests for each DP layer, and a small CLI to trigger re‑runs.

**Result:** The refactor reduced runtime from 48 h to 1.5 h—an 87 % improvement—and the model’s AUC stayed at 0.92. I learned that profiling first, then applying iterative DP + sharding, is the best practice for scaling dynamic programming in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
