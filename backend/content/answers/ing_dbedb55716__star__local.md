---
qid: ing_dbedb55716__star__local
question: 'Explain: Binary — Topleetcodeproblems'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 386
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:47:51-05:00'
sources: []
---

**Situation:**  
At my previous company we were rolling out a new recommendation engine that shipped an API returning the top‑K items per user. The latency on production was creeping above our SLA of 120 ms for 95% of requests, and load testing revealed that the bottleneck lay in the ranking step where we repeatedly performed binary searches over sorted score arrays.

**Task:**  
I needed to reduce the average response time by at least 30% while keeping the recommendation quality unchanged. The goal was to rewrite the ranking routine so it could handle millions of users without exceeding our CPU budget.

**Action:**  
I profiled the code, identified that each binary search ran in O(log n) but was called thousands of times per request. I replaced the naïve linear scan with a custom `bisect_left` implementation using NumPy’s vectorized operations and memoized thresholds for common K values. I also refactored the data structure to a contiguous memory layout, eliminating Python overhead, and added a quick‑path cache for the top 10 scores.

**Result:**  
The new ranking routine cut average latency from 125 ms to 82 ms—an 34% improvement—and reduced CPU usage by 18%. I learned that even simple algorithmic optimizations like binary search, when combined with low‑level data layout tweaks, can deliver measurable performance gains in production ML services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
