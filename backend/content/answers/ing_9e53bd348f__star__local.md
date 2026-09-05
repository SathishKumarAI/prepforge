---
qid: ing_9e53bd348f__star__local
question: 'Explain: Directory-Based Sharding — Key Concepts to Understand Database
  Sharding'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 295
total_tokens: 535
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:48:44-05:00'
sources: []
---

**Situation:** In my last role at a fintech startup, our user‑growth model hit a bottleneck when the transaction table ballooned to 250 GB; query latency spiked from 50 ms to over 2 s during peak hours.

**Task:** I was tasked with redesigning the database architecture so that read/write performance could scale horizontally while keeping data integrity and minimizing downtime.

**Action:** I chose a directory‑based sharding strategy. First, I built an external metadata service (a lightweight key–value store in Redis) to map user IDs to shard identifiers. Each shard ran on its own PostgreSQL instance with identical schemas. When handling a request, the application consulted the directory cache to resolve the correct shard and routed the query accordingly. To maintain consistency, I implemented cross‑shard transactions using two‑phase commit over a lightweight message queue (Kafka). For read scalability, I introduced read replicas per shard and employed consistent hashing to balance new user registrations across shards.

**Result:** The sharded architecture cut average transaction latency from 2 s to under 80 ms and increased write throughput by 4×. We also reduced our database maintenance window from 12 hours to 30 minutes. This project taught me the importance of an external routing layer for flexibility, and how careful transaction coordination can preserve ACID properties across shards.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
