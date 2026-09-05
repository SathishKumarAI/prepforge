---
qid: ing_680a51a276__star__local
question: 'Explain: Indexes — Design URL Shortener | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 368
total_tokens: 611
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:55:35-05:00'
sources: []
---

**Situation:**  
I was leading a sprint at my startup where we had to redesign our URL‑shortening service after user traffic spiked from 500k to 2M requests per day. The existing design stored every shortened URL in a single SQL table and performed a full scan for lookups, which caused latency to balloon past 200 ms during peak hours.

**Task:**  
I needed to reduce lookup latency below 20 ms while keeping write throughput high and ensuring the system could scale horizontally without becoming a bottleneck.

**Action:**  
1. Analyzed query patterns: reads dominated (≈90%) with only occasional writes for new short URLs.  
2. Added a composite index on (`hash`, `created_at`) to accelerate lookups by hash value, eliminating full table scans.  
3. Introduced a separate in‑memory cache (Redis) keyed by the hash; cache warm‑up was driven by write events.  
4. Implemented sharding by hashing the short code into 256 partitions, each with its own index, to distribute load and keep index sizes manageable.  
5. Monitored query plans with EXPLAIN ANALYZE, tuning index columns until read latency hit sub‑10 ms.

**Result:**  
Lookup latency dropped from ~200 ms to ~12 ms on average, and the system handled 4× traffic without additional hardware. The cache hit rate rose to 95%, reducing database load by 70%. I learned that a well‑chosen composite index coupled with sharding can transform a bottleneck into a scalable microservice.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
