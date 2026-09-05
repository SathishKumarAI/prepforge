---
qid: ing_a3435acb4a__star__local
question: 'Explain: Sharding Algorithm — A Crash Course on Database Sharding'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 321
total_tokens: 560
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:59:15-05:00'
sources: []
---

**Situation:**  
While leading a recommendation‑engine team at an e‑commerce startup, our user‑profile table ballooned to 45 GB and read latency hit 350 ms during peak traffic. The product manager demanded sub‑100 ms responses for the next campaign launch.

**Task:**  
Design a sharding strategy that partitions the profile data horizontally, keeps query performance within limits, and preserves data locality for our ML pipelines that compute personalized embeddings on the fly.

**Action:**  
I mapped user IDs to hash buckets using Murmur3, then applied range‑based rebalancing: every 10 % growth triggered a “split‑and‑merge” cycle. Each shard lived on its own PostgreSQL instance behind a connection pooler (PgBouncer) and was replicated asynchronously for fault tolerance. To keep embeddings in sync, I added a Kafka topic that streamed delta updates to a Spark job which refreshed the vector cache in Redis. We also introduced a lightweight sharding key lookup service written in Go, reducing cross‑shard joins by 80 %.

**Result:**  
Read latency dropped from 350 ms to 65 ms, and the system handled a 4× traffic surge with zero downtime. The shard‑rebalancing logic cut manual maintenance hours from 12 per week to 1.5. I learned that combining deterministic hashing with dynamic range splits gives predictable scalability while keeping ML pipelines efficient.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
