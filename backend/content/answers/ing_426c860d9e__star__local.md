---
qid: ing_426c860d9e__star__local
question: 'Explain: Counting Bloom Filter — Bloom Filters | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 359
total_tokens: 596
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:41:35-05:00'
sources: []
---

**Situation:**  
In a real‑time ad‑tech platform, we had to detect duplicate click events across millions of users while keeping memory usage under 2 GB and ensuring sub‑millisecond latency for each lookup.

**Task:**  
Implement a scalable deduplication layer that could handle high write throughput (≈10 M clicks/s), support deletions when ads expired, and return accurate counts for analytics dashboards.

**Action:**  
I chose a Counting Bloom Filter over a classic Bloom filter because we needed to decrement counters on ad expiry. I used 4 hash functions derived from Murmur3 seeds and mapped each to a 32‑bit counter array of size 200 M (≈800 MB). To avoid overflow, I capped counters at 255 and added a secondary “overflow” bitmap that flags when a counter reaches the cap; this allowed us to redirect heavy hitters to a Redis set for exact counting. For write paths, we performed bulk hashing in SIMD‑accelerated kernels, reducing CPU cycles per click by ~30 %. Reads were single memory fetches plus a conditional check on the overflow bit, keeping latency below 200 µs.

**Result:**  
The system processed 12 M clicks/s with <0.5 % false positive rate and <1 % miss rate for deletions. Memory usage stayed within the 2 GB budget, and dashboards reflected accurate counts with a margin of error <0.2 %. I learned that hybrid data structures—Bloom filters plus fallbacks—often give the best trade‑off between speed, memory, and accuracy in production ML pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
