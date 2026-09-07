---
qid: ing_68b81ab0df__faang__local
question: How to update the score of a player? — Leaderboard System Design - System
  Design
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 440
total_tokens: 681
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:47:15-05:00'
sources: []
---

**Clarify**  
We need an online leaderboard that supports frequent score updates for players (e.g., after each game). Assumptions: *scores only increase*, we want **O(log N)** per update, and we must serve queries like “rank of player X” or “top‑K”. Also assume millions of users, high write traffic, and eventual consistency is acceptable.

**Approach**  
1. **Primary store** – a distributed key/value DB (Cassandra/Redis) mapping `player_id → score`.  
2. **Index for ranking** – a sorted set (e.g., Redis ZSET or DynamoDB with GSI on score).  
3. **Update flow**:  
   * Read current score, compute delta.  
   * Update primary store atomically.  
   * Apply the same delta to the sorted set (`ZINCRBY`).  
4. **Querying**:  
   * Rank → `ZSCORE` + `ZRANK`.  
   * Top‑K → `ZREVRANGE 0 K-1`.

**Depth**  
*Atomicity*: Use a lightweight transaction or Lua script to update both stores together, ensuring consistency.  
*Complexity*: Each update is **O(log N)** due to the sorted set; reads are O(1).  
*Scalability*: Partition sorted set by score ranges (sharding) and use read replicas for hot players.

**Edge Cases**  
- Duplicate updates: idempotent logic with last‑write‑wins.  
- Score overflows: clamp to max int or use 64‑bit.  
- Out‑of‑order writes: include a timestamp in the update payload.

**Optimize & Communicate**  
To reduce latency, batch updates during peak hours and replay them asynchronously; this trades freshness for throughput. I’d explain that by separating the write‑heavy primary store from the read‑optimized sorted index, we meet both high‑write and low‑latency read requirements while keeping complexity manageable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
