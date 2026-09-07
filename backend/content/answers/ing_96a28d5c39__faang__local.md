---
qid: ing_96a28d5c39__faang__local
question: 'Explain: Interviewer — Leaderboard System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 476
total_tokens: 711
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:34:38-05:00'
sources: []
---

**Clarify**

> *“Design a leaderboard system.”*  
> I’ll assume we need real‑time rankings for millions of users, support multiple games or contests, and expose read APIs (top N, rank of user) and write APIs (score updates). We’ll ask about latency goals, consistency model, data durability, and whether the leaderboard is per‑day, global, or regional.

**Approach**

1. **Data Model** – store `(userId, score)` in a key‑value store; maintain a sorted set (e.g., Redis ZSET) for each contest/game.  
2. **Write Path** – publish score updates to a message queue → worker processes update the sorted set and optionally persist to HDFS/Parquet for audit.  
3. **Read Path** – read from cache (Redis); fallback to DB if stale. Use pagination or cursor based on rank offset.  
4. **Scaling** – shard by contest ID; use consistent hashing so each node owns a range of contests. Replicate sorted sets for high availability.  
5. **Fault Tolerance** – keep write‑ahead logs; replay in case of node failure.

**Depth**

- **Complexity:** `O(log N)` insert/update in Redis ZSET; read top k is `O(k)`.  
- **Consistency:** eventual consistency between cache and DB; strong consistency can be achieved with distributed locks but hurts latency.  
- **Storage:** 8 bytes for score + key overhead → ~16 MB per million users.

**Edge Cases**

- Duplicate updates, out‑of‑order timestamps, score ties (use secondary field like timestamp).  
- Massive spike of writes (e.g., live tournament) – backpressure via rate limiting or sharding more aggressively.  
- Deleting a user’s score or contest expiration.

**Optimize & Communicate**

Explain trade‑offs: using Redis gives sub‑millisecond reads but limited persistence; adding Kafka/stream processing adds durability at the cost of write latency. Suggest monitoring heap usage, cache hit ratio, and queue depth to auto‑scale workers. Conclude with a diagram sketch and outline next steps for implementation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
