---
qid: ing_476e33580d__star__local
question: 'Explain: Table Schemas — How Uber Serves Over 40 Million Reads Per Second
  from Online Storage Using an Integrated Cache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 365
total_tokens: 615
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:51:37-05:00'
sources: []
---

**Situation**  
At my previous company we were building a real‑time ride‑matching service for a city with over 40 M daily active users. The backend stored all driver and rider data in a sharded PostgreSQL cluster, but our analytics layer needed to pull trip histories at the same time as live queries, causing read contention and latency spikes.

**Task**  
I had to design a system that could serve those heavy reads without degrading transactional performance, while keeping the data fresh for real‑time matching.

**Action**  
I introduced an integrated cache layer using Redis Streams. First, I defined a normalized table schema with composite keys (user_id, timestamp) and added GIN indexes on location columns to accelerate geospatial lookups. Every write to PostgreSQL triggered a Kafka event that pushed the new row into a Redis Stream. The stream consumers maintained a sliding window of the last 24 hours in memory, keeping only the most recent 10 M rows per shard. I also implemented cache invalidation via TTL and an LRU policy for older data. To keep consistency, the read API first checked Redis; on a miss it fell back to PostgreSQL with a “read‑through” cache populate.

**Result**  
Read latency dropped from 350 ms to under 30 ms during peak hours, and we handled >40 M reads per second across all shards. The system reduced PostgreSQL load by ~70 %, freeing resources for transaction processing. I learned the importance of aligning schema design with caching strategy and that a small, well‑tuned in‑memory store can dramatically scale read throughput without sacrificing consistency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
