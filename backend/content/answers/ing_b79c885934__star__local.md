---
qid: ing_b79c885934__star__local
question: 'Explain: NoSQL Databases — Scalability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 335
total_tokens: 573
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:38:23-05:00'
sources: []
---

**Situation**  
In my last role I built a recommendation engine that had to serve 1 million active users daily. The training pipeline fed new user-item interactions into a NoSQL store (Cassandra) and the inference layer queried it for real‑time scoring.

**Task**  
I needed to redesign the data model so that read latency stayed under 5 ms while write throughput could handle 10k inserts per second, and ensure horizontal scalability as traffic grew.

**Action**  
First, I restructured the schema into a wide‑row format: each user’s key stored a sorted set of item IDs with timestamps. This allowed batch reads for top‑N recommendations. I enabled Cassandra’s tunable consistency to “QUORUM” for writes and “ONE” for reads, balancing durability and speed. Next, I implemented a token‑aware load balancer that routed requests to the nearest data center using consistent hashing, reducing cross‑DC traffic by 40 %. Finally, I set up automated compaction schedules and TTLs on stale interactions to keep disk usage in check.

**Result**  
Read latency dropped from 12 ms to 3 ms, while write throughput exceeded the target by 25 %. The system scaled seamlessly when we added a new data center, keeping SLA compliance above 99.9 %. I learned that careful key design and consistency tuning are critical in NoSQL systems for ML workloads where both speed and freshness matter.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
