---
qid: ing_4f0142e91f__star__local
question: 'Explain: Sharding — Design Instagram | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 352
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:06:30-05:00'
sources: []
---

**Situation:**  
When I joined a fast‑growth social media startup, the photo upload service was hitting a throughput of 12 k requests per second and latency had climbed to 250 ms on our single PostgreSQL cluster. The engineering team needed a scalable solution before the next quarterly launch.

**Task:**  
I was tasked with designing a sharding strategy that would keep read/write latency under 80 ms, support horizontal scaling, and preserve user data consistency across partitions.

**Action:**  
First I profiled traffic: 70% of reads were profile‑page loads, 20% were feed fetches, and 10% were image uploads. I chose a hash‑based key sharding scheme on `user_id` for profile data, while implementing range sharding on the timestamp field for the global feed to allow efficient time‑window queries. Each shard ran on its own PostgreSQL instance behind a connection pooler (pgbouncer). To handle cross‑shard joins for stories, I introduced a lightweight caching layer in Redis that stored pre‑joined results and refreshed them via a background worker. We also added a replication factor of 3 to guard against node failures.

**Result:**  
After deployment, read latency dropped to 45 ms on average, write throughput increased to 25 k rps, and we eliminated the 250 ms spikes. The system comfortably handled a 4× traffic increase during peak events without additional engineering effort. I learned that careful partitioning of data by access pattern, combined with an efficient cache layer, can dramatically improve performance while keeping complexity manageable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
