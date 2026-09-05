---
qid: ing_013330c353__star__local
question: 'Explain: Hash Indexes — Indexing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 348
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:30:58-05:00'
sources: []
---

**Situation:** While redesigning the recommendation engine for a video‑streaming startup, our search latency on user watch history jumped from 120 ms to over 1 s after adding new metadata fields. The team needed a faster way to look up a user's last watched item by its unique ID.

**Task:** I was tasked with implementing an efficient lookup mechanism that could handle millions of users and deliver sub‑100 ms responses under peak load, without blowing up memory or compromising consistency.

**Action:** I introduced a **hash index** in Redis. Each user’s watch history list is stored as a hash where the key is the video ID and the value is the timestamp. Using `HGET` provides O(1) access time. To keep memory usage low, I set an LRU eviction policy and compressed timestamps with 32‑bit integers. For durability, I mirrored the Redis cache to Postgres using logical replication, so the primary store remains ACID compliant. I also added a TTL of 30 days to automatically purge stale entries.

**Result:** Query latency dropped from 1 s to **45 ms on average**, and CPU usage fell by 35%. The system now scales to 10 M active users with predictable performance, and I learned the importance of choosing the right index structure—hashes give constant‑time lookups when you need direct key access, but require careful eviction strategy for large data sets.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
