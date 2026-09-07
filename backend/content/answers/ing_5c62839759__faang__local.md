---
qid: ing_5c62839759__faang__local
question: 'Explain: Personalization at Spotify using Cassandra'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 469
total_tokens: 700
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:17:58-05:00'
sources: []
---

**Clarify**

Spotify wants to serve personalized playlists, recommendations, and listening histories in real‑time for millions of users.  
Key assumptions:  

1. Data is highly write‑heavy (song plays, likes, skips).  
2. Reads are also heavy – a user’s “Now Playing” feed needs sub‑second latency.  
3. The system must scale horizontally across many shards and tolerate node failures.

**Approach**

Use Cassandra as the primary store for per‑user event streams and aggregated recommendation vectors.  

1. **Schema design** – partition by `user_id` (or a hashed bucket) to co‑locate all of a user’s events; clustering columns (`timestamp`, `song_id`) give fast range queries for recent activity.  
2. **Write path** – each play or like is appended as an immutable row; writes are cheap and can be batched via Kafka → Cassandra pipelines.  
3. **Read path** – the recommendation service reads the last N events, aggregates them locally, then merges with a pre‑computed model vector stored in a lightweight “user_profile” table.  

**Depth**

- *Consistency*: use `QUORUM` for writes to guarantee at least one replica sees each event; `ONE` for fast reads.  
- *TTL* is set on raw events (e.g., 30 days) to keep storage bounded.  
- *Compaction strategy* (`LeveledCompactionStrategy`) keeps hot data in memory for low latency.  

**Edge Cases**

- Hot users: shard re‑balancing may be required if one node receives a disproportionate write load.  
- Network partitions: read‑repair ensures eventual consistency but can temporarily serve stale recommendations.  
- Schema evolution: adding new clustering columns (e.g., device_type) without downtime.

**Optimize & Communicate**

Future improvements include materialized views for “top songs per user” and integrating Spark/MLlib to refresh the `user_profile` vectors nightly. I’d explain that Cassandra’s write‑amplified architecture is ideal for event ingestion, while its tunable consistency lets us balance latency against accuracy—exactly what Spotify needs for a global personalization engine.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
