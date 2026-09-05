---
qid: ing_9ee014b125__star__local
question: 'Explain: Caches — Bloom Filters | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 321
total_tokens: 557
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:49:52-05:00'
sources: []
---

**Situation**  
At my last company we were building a real‑time recommendation engine that pulled user profiles from a distributed cache. During load testing the cache hit rate dropped to 68 % and latency spiked because many requests were going straight to the database.

**Task**  
I needed to reduce unnecessary cache lookups for non‑existent keys while keeping the system highly available and low‑cost.

**Action**  
I introduced a Bloom filter per cache shard. Using `pybloom_live`, I pre‑seeded each filter with all active user IDs from our nightly data sync. On every request, the service first queried the Bloom filter; if it reported “definitely not present” we bypassed the cache and returned a default response. If it might exist, we hit Redis as usual. To keep memory overhead minimal I tuned the false‑positive rate to 0.1 % with 2 MB per shard. We also refreshed the filters every 12 hours to stay in sync with new users.

**Result**  
Cache hit rates climbed from 68 % to 92 %, cutting average latency from 320 ms to 140 ms and reducing database traffic by 60 %. I learned how probabilistic data structures can be seamlessly integrated into a high‑throughput system, trading a tiny false‑positive risk for substantial performance gains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
