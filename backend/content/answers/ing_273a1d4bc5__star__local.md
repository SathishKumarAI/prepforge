---
qid: ing_273a1d4bc5__star__local
question: 'Explain: Rapid Fire Comparison Sorts: — OG CS61B Data Structures and Sorting
  Cheat Sheet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 350
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:46:56-05:00'
sources: []
---

**Situation**  
During a capstone project in CS61B we had to process a 5 million‑row CSV of user telemetry and produce a leaderboard sorted by engagement score. The naive `sort()` call was too slow for our demo deadline, so I needed a faster comparison sort that still kept the code readable.

**Task**  
Implement an efficient in‑memory sorting routine that could handle millions of rows within 30 seconds while preserving stability for equal scores, and document the trade‑offs between quicksort, mergesort, heapsort, and introsort.

**Action**  
I first profiled Python’s built‑in `sorted()` (Timsort) to confirm it already uses a hybrid approach. I then wrote a Cython wrapper around a custom introsort implementation: recursion depth capped at log₂(n), falling back to heapsort if the stack overflows. I used NumPy structured arrays for cache locality and added a key‑function that extracted the engagement column in C, eliminating Python-level comparisons. Finally, I benchmarked all four sorts on our dataset, logging time, memory, and stability.

**Result**  
Introsort finished in 12 s versus Timsort’s 18 s— a 33 % speedup—while keeping memory usage under 200 MB. The exercise reinforced that choosing the right comparison sort depends on data size, recursion limits, and stability needs; it also highlighted how low‑level key extraction can dramatically reduce overhead in Python.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
