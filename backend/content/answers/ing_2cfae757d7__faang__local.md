---
qid: ing_2cfae757d7__faang__local
question: 'Explain: Functional Requirements — Leaderboard System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 645
total_tokens: 880
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:27:35-05:00'
sources: []
---

**Functional Requirements – Leaderboard System Design**

| # | Requirement | Why it matters |
|---|-------------|----------------|
| 1 | **Real‑time ranking** | Users expect instant score updates; latency < 200 ms for 90% of writes. |
| 2 | **Global & regional scopes** | Different games or regions need isolated leaderboards while sharing common infrastructure. |
| 3 | **Efficient read/write throughput** | Peak load: millions of scores per minute, reads ≈ 10× writes. |
| 4 | **Consistent ordering** | Ties must be broken deterministically (e.g., by timestamp or user ID). |
| 5 | **Pagination & “top‑N” queries** | Clients request page k with size m; need O(log n) access to arbitrary rank. |
| 6 | **Historical snapshots** | Auditing and replay require immutable historical data per epoch (e.g., daily, weekly). |
| 7 | **Fault tolerance & scalability** | Auto‑scale on spikes; no single point of failure. |

---

### Clarify  
- Is the leaderboard purely in‑memory or persistent?  
- What latency window is acceptable for writes vs reads?  
- Do we need to support multiple score metrics per user (e.g., kills, accuracy)?

### Approach  
1. **Data model**: Store `(user_id, score, ts)` in a sorted set (Redis ZSET) per leaderboard shard.  
2. **Write pipeline**: Append to an ingestion stream (Kafka), batch into the ZSET with `ZADD`.  
3. **Read path**: Use `ZRANGE`/`ZREVRANGE` for top‑N, `ZSCORE` + `ZREVRANK` for specific rank.  
4. **Sharding**: Partition by hash of `(leaderboard_id, region)`; use consistent hashing to rebalance.  
5. **Historical snapshots**: Periodically snapshot ZSETs into immutable storage (S3) and replay into a new set when needed.

### Depth  
- **Complexity**: Writes O(log n), reads O(log n + m).  
- **Trade‑offs**: Redis gives speed but limited persistence; Kafka provides durability at cost of eventual consistency.  
- **Consistency**: Use optimistic locking on updates to avoid race conditions.

### Edge Cases  
- Duplicate scores → tie‑breaking by timestamp/user_id.  
- Leaderboard overflow → cap size, evict lowest.  
- Network partitions → read‑only mode with stale data flag.

### Optimize & Communicate  
- Cache hot ranks in Memcached for ultra‑fast reads.  
- Use async batch writes to reduce latency spikes.  
- Present the design as a layered diagram: ingestion → stream → sorted set → cache → API.  

This structure satisfies FAANG interview expectations: clear problem restatement, methodical plan, technical depth with complexity analysis, edge‑case awareness, and optimization narrative.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
