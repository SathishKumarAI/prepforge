---
qid: ing_15466f98fc__faang__local
question: 'Explain: Capacity Planning — Leaderboard System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 465
total_tokens: 700
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:32:34-05:00'
sources: []
---

**Clarify**

> *What is the goal?*  
We must design a real‑time leaderboard that can ingest millions of score updates per second, support fast rank queries for any user, and expose a public API for top‑N lists.  
Assumptions to confirm:  
- User IDs are numeric, scores are monotonically increasing.  
- Latency target < 50 ms for read/write.  
- Data is eventually consistent across replicas.

**Approach**

1. **Data model** – store `(user_id, score)` in a sorted set (e.g., Redis ZSET).  
2. **Write path** – publish to a Kafka topic → consumer updates the sorted set and an on‑disk RDB for durability.  
3. **Read path** –  
   - `GET /leaderboard/top?n` → `ZRANGE 0 n-1 WITHSCORES`.  
   - `GET /rank/{user}` → `ZREVRANK user_id`.  
4. **Scaling** – shard the sorted set by score ranges (e.g., 100 k users per shard) and use a consistent hash to route queries.

**Depth**

*Complexity*:  
- Write: O(log N) in Redis; Kafka append is O(1).  
- Read: O(log N) for rank, O(n) for top‑n.  
*Trade‑offs*: In‑memory sorted set gives speed but limited size; persistent RDB backs up data and allows recovery.

**Edge Cases**

- Duplicate score updates → use `ZADD NX` then `ZINCRBY`.  
- Score overflow or negative values → clamp to allowed range.  
- Shard splits/merges need re‑balancing without downtime.

**Optimize & Communicate**

Explain that sharding reduces contention, while Kafka guarantees at‑least‑once delivery; we can replay to recover. Mention monitoring (latency, queue depth) and auto‑scaling rules. Conclude by highlighting how this design meets the key metrics: high write throughput, sub‑50 ms reads, and linear scalability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
