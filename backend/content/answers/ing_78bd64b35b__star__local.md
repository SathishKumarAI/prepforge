---
qid: ing_78bd64b35b__star__local
question: What Is a Bloom Filter? — Bloom Filters | System Design
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 292
total_tokens: 530
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:35:29-05:00'
sources: []
---

**Situation:**  
When I joined the data‑pipeline team at a fintech startup, we had to deduplicate millions of transaction records per day before loading them into our analytics warehouse. A naïve hash table would consume too much memory and slow down ingestion.

**Task:**  
I was tasked with designing a lightweight, high‑throughput filter that could quickly flag probable duplicates while keeping false positives under 1%.

**Action:**  
I chose a Bloom filter: I selected a bit array of 10 MB and 7 hash functions (using Murmur3 variants). Each incoming transaction ID was hashed into the array; if all bits were set, we treated it as a duplicate. To handle the daily data volume (~50 M records), I implemented the filter in Redis Streams with Lua scripts for atomic bit operations. I also added periodic re‑initialization during low‑traffic windows to keep false positives from accumulating.

**Result:**  
The Bloom filter reduced memory usage by 85% compared to a hash set and cut duplicate-check latency from ~15 ms to <1 ms per record, boosting overall ingestion throughput by 40%. I learned that carefully tuning bit array size and hash count is critical for balancing false‑positive rates against resource constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
