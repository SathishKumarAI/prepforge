---
qid: ing_f02c676805__star__local
question: 'Explain: Two Pointers (5 Problems) — Neetcode 150'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 314
total_tokens: 554
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:28:33-05:00'
sources: []
---

**Situation:**  
During my senior capstone project I had to optimize the recommendation engine for a streaming service. The dataset was a massive list of user watch histories, and we needed real‑time suggestions while keeping latency below 50 ms.

**Task:**  
I decided to implement several classic “two pointers” algorithms—reverse pair counting, palindrome partitioning, longest valid parentheses, two sum with sorted array, and subarray sum equals k—to precompute features that would feed the model. Each problem required linear or near‑linear time over large arrays.

**Action:**  
Using Python + NumPy I wrote a reusable `TwoPointer` class that handled left/right indices, advanced them based on comparisons, and captured results in O(n). For example, for subarray sum equals k I maintained a hash map of prefix sums while sliding the window. I benchmarked each routine against naive O(n²) implementations, ensuring they ran under 30 ms on 1 M‑element arrays.

**Result:**  
The feature extraction phase dropped from ~3 s to <50 ms per request, boosting overall recommendation throughput by 250%. The experience taught me how a simple pointer technique can turn quadratic bottlenecks into linear solutions, and reinforced the value of profiling and micro‑optimizations in ML pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
