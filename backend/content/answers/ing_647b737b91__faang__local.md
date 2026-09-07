---
qid: ing_647b737b91__faang__local
question: 'Explain: Non-Functional Requirements — Leaderboard System Design - System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 522
total_tokens: 759
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:37:52-05:00'
sources: []
---

**Clarify**  
We’re asked to design a *leaderboard* that supports fast reads (display top‑N) and frequent writes (score updates). I’ll assume:  
- Scores are integers; higher is better.  
- Updates come in real time, possibly from millions of users.  
- We need sub‑second latency for both read and write.  
- The system should scale horizontally and tolerate failures.

**Approach**  
1. **Data model** – store `user_id → score` in a key–value store (e.g., Redis or DynamoDB).  
2. **Sorted index** – maintain a sorted set (`score → user_id`) for O(log N) rank queries; use Redis ZSET or a skip‑list/LSM tree in Cassandra.  
3. **Caching tier** – keep the top 10k users in memory to serve hot reads instantly.  
4. **Write path** – on score update, atomically: (a) write to KV store, (b) adjust rank in sorted set via a single operation.  
5. **Background compaction** – periodically rebuild the sorted index from the KV store for consistency and to purge stale entries.

**Depth**  
- Read latency ≈ O(1) for top‑N from cache; fallback to sorted set O(log N + k).  
- Write latency ≈ O(log N) due to sorted‑set update.  
- Partitioning: shard the keyspace by user hash; each shard owns its own sorted set, enabling horizontal scaling.  
- Consistency: use optimistic locking or transactions (Redis MULTI/EXEC) to avoid race conditions.

**Edge Cases**  
- Tie scores: break ties deterministically (e.g., lower `user_id`).  
- User deletion: remove from both KV and sorted set.  
- Hot spot users: if a single user updates too often, throttle updates or use rate limiting.  
- Failure of a shard: replicate data across nodes; fallback to secondary replica.

**Optimize & Communicate**  
- **Batch writes** during peak periods to reduce contention.  
- Use **read‑through caching** for non‑top ranks.  
- Monitor latency and evict stale cache entries.  
- Explain that this design balances *write throughput* (via atomic updates) with *low read latency* (cached top‑N), meeting typical FAANG leaderboard requirements.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
