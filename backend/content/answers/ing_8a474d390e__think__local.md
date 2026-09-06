---
qid: ing_8a474d390e__think__local
question: 'Explain: Use case: User views the home timeline — system-design-primer/solutions/system_design/twitter/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 224
output_tokens: 634
total_tokens: 858
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T10:12:05-05:00'
sources: []
---

**1️⃣ Clarify & Assumptions**  
- *Goal*: Design a system that serves a user’s home timeline (like Twitter).  
- *Assume*: Millions of users, millions of tweets per day, low latency (< 100 ms), eventual consistency is acceptable for timelines.  
- *Scope*: Focus on read‑heavy traffic; writes (tweet creation) are also important but can be handled separately.

**2️⃣ Mental Model / Framework**  
Use the classic **“fan‑out vs fan‑in”** design pattern for social feeds:  
- **Fan‑out‑on‑write** (push model): pre‑compute each user’s timeline when a tweet is posted.  
- **Fan‑in‑on‑read** (pull model): compute timelines on demand from a stream of tweets.

Also apply the **CQRS + Event Sourcing** pattern: separate command side (tweet posting) from query side (timeline serving).

**3️⃣ Step‑by‑Step Reasoning**  

| Step | What to do | Why |
|------|------------|-----|
| 1 | Capture tweet events in an append‑only log (Kafka). | Guarantees order, fault tolerance. |
| 2 | For fan‑out: stream the event to all followers’ “timeline queues” (e.g., Redis Streams or SQS). | Pre‑computes timeline; read is fast. |
| 3 | Store each user’s timeline in a sorted set (Redis ZSET) keyed by timestamp. | Enables efficient range queries (latest N tweets). |
| 4 | On read: fetch the top N elements from the ZSET, then batch‑lookup tweet details from an immutable store (Cassandra or S3). | Keeps reads fast; decouples metadata from content. |
| 5 | For scalability: shard timelines by user ID hash; use CDN caching for popular tweets. | Avoids hotspotting. |
| 6 | Handle edge cases: deleted tweets, retweets, likes – propagate updates via the same event stream to invalidate or update affected timelines. | Keeps consistency without full recompute. |

**4️⃣ Common Traps to Avoid**  
- *Assuming all users have the same follower count*: leads to hot spots; shard properly.  
- *Storing entire tweet objects in Redis*: memory blow‑up—store only IDs, fetch details lazily.  
- *Ignoring eventual consistency*: timeline may show old tweets until event propagation completes; acceptable if you document it.

**5️⃣ Sanity‑Check & Communicate**  
- Verify latency targets: read path should hit cache → Redis → DB within 50 ms.  
- Run a load test with 10k concurrent reads to confirm sharding.  
- Explain trade‑offs: fan‑out gives instant reads but higher write cost; fan‑in saves writes but increases read latency.

By walking through these steps, you can articulate a robust home‑timeline design that balances performance, scalability, and maintainability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
