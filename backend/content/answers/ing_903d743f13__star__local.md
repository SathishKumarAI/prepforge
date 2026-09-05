---
qid: ing_903d743f13__star__local
question: 'Explain: Example: URL Deduplication — Bloom Filters | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 363
total_tokens: 603
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:21:14-05:00'
sources: []
---

**Situation:**  
At my previous company we had a real‑time ad‑delivery platform that ingested millions of click logs per day. Every click contained a landing‑page URL, and we needed to guarantee each user saw any given campaign only once per session. The raw log stream was too large for an in‑memory hash table; we also couldn’t afford disk writes for every check.

**Task:**  
Design a low‑latency, memory‑efficient deduplication layer that could process 10 M URLs/second and return “duplicate” or “new” within 2 ms per request, while keeping false positives below 1%.

**Action:**  
I chose a Bloom filter because it gives sub‑percent false positive rates with constant time checks. I calculated the optimal bit array size: for 10 M expected inserts per day and a target FPR of 0.5%, the formula gave ~200 MB of memory. I implemented two independent filters (double hashing) to reduce collision impact, rotated them every hour, and stored them in a shared memory segment accessible by all worker processes. Each incoming URL was hashed with Murmur3, then bit positions set/checked. If both filters indicated “present”, we marked the click as duplicate; otherwise we inserted it and forwarded the event downstream.

**Result:**  
The system processed 12 M URLs/s with <1.5 ms average latency, kept false positives under 0.4%, and reduced duplicate ad impressions by 92%. I learned how to balance probabilistic data structures against real‑time constraints and how to design for graceful degradation when memory limits are hit.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
