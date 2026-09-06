---
qid: ing_68b81ab0df__fp__local
question: How to update the score of a player? — Leaderboard System Design - System
  Design
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 438
total_tokens: 616
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:47:09-05:00'
sources: []
---

**Why a leaderboard needs an *exact* score‑update rule**

A leaderboard is essentially a **ranked multiset** of player scores.  
When a player earns or loses points, the system must

1. **Persist the new total** (for audit and replay).
2. **Re‑order only those players affected** (to keep latency low).
3. **Serve reads that are consistent enough for UI** (players see their rank change in < 200 ms).

If we treat the leaderboard as a single table, every update forces a full re‑scan—O(n).  
The deeper principle is *locality of updates*: a player’s score change only influences his own position and those immediately above/below him. This locality allows us to model the leaderboard as a **sorted list** (e.g., Redis `ZSET` or a B‑tree) where each entry stores the cumulative score.

**Design pattern**

1. **Atomic update + append‑only log**  
   * Write the delta (`+Δ`) to a write‑ahead log (Kafka topic).  
   * Update the sorted set in one transaction: `INCRBY` the key and adjust rank via `ZADD`.  
2. **Eventual consistency for reads**  
   * Serve from the cache; background workers replay the log to rebuild the sorted set after failures.  
3. **Partition by score range** (sharding) to keep each node’s size manageable.

**Non‑obvious insight**

Because updates are *incremental*, you can maintain a **“delta bloom filter” per shard** that records which scores have changed in the last N minutes. When a read request comes, the system only needs to check shards whose filters indicate recent activity, dramatically reducing latency on hot regions of the leaderboard while still guaranteeing eventual correctness.

---  

*Word count: 192*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
