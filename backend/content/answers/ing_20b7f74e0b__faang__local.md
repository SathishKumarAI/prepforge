---
qid: ing_20b7f74e0b__faang__local
question: How does the Leaderboard work? — Leaderboard System Design - System Design
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 522
total_tokens: 760
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:00:48-05:00'
sources: []
---

**Clarify**  
*Restate:* We need a scalable, real‑time leaderboard that shows top N users (or teams) for one or more metrics (score, rank, time).  
*Assumptions to confirm:*  
1. Frequency of updates – per event vs batch.  
2. Size of the user base (millions?).  
3. Read/write ratio (many reads, few writes).  
4. Consistency required – eventual vs strong?  

**Approach**  
1. **Data model:** Store each user’s aggregate score in a key‑value store (e.g., DynamoDB/Spanner) keyed by user ID.  
2. **Indexing for ranking:** Maintain a sorted set (Redis `ZSET`, Bigtable row key as composite of score+userID).  
3. **Write path:** On event, update aggregate in KV store and incrementally adjust the sorted set (`ZINCRBY` or batch‑update via compaction).  
4. **Read path:** Serve top‑N queries directly from the sorted set; cache hot pages (e.g., Redis or CDN) to reduce latency.  

**Depth**  
- Use *write‑through* caching: event → KV store + ZSET update.  
- For millions of writes, batch updates into micro‑batches and use a stream processor (Kafka → Flink) to rebuild sorted sets asynchronously – gives eventual consistency.  
- Complexity: Write O(log N) per ZSET operation; read O(N).  
- Fault tolerance via replication; persistence in KV store guarantees durability.

**Edge Cases**  
- Tie scores → secondary key (userID or timestamp).  
- Deletions/penalties → need to decrement score or remove entry.  
- Data skew: a few users with huge scores can dominate the sorted set – mitigate by sharding ZSETs per score range.

**Optimize & Communicate**  
- Introduce *leaderboard shards* (e.g., 10k ranges) to parallelize reads/writes, reducing contention.  
- Use *materialized views* for different metrics (daily, weekly).  
- Explain trade‑offs: strong consistency vs latency; batch compaction vs real‑time accuracy.  

By structuring the system around a fast sorted index backed by durable storage and batching heavy writes, we achieve low‑latency top‑N queries at scale while keeping complexity manageable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
