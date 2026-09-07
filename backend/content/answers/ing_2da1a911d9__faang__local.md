---
qid: ing_2da1a911d9__faang__local
question: 'Explain: Candidate — Leaderboard System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 501
total_tokens: 735
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:29:26-05:00'
sources: []
---

**Clarify**  
We’re asked to design a *leaderboard* service (think competitive gaming, coding contests, or social‑media “top N” lists).  
Key assumptions I’d confirm:  

1. **Scale** – expected number of users (millions), updates per second, and queries.  
2. **Latency** – read/write SLA (e.g., < 50 ms for a user’s rank, < 200 ms for the top‑100).  
3. **Consistency** – is eventual consistency acceptable or do we need strict ordering?  
4. **Metrics** – what defines “score” (single value, multi‑dimensional, time‑decaying?).  

**Approach**  
1. Model data: `UserScore(user_id, score, ts)`.  
2. Persist in a distributed store (Cassandra/BigTable) for durability.  
3. Maintain an in‑memory sorted index (Redis Sorted Set or Memcached + custom heap) for fast reads.  
4. Use a write‑through cache that batches updates to the DB; on read, fall back to DB if missing.  
5. Periodically recompute global top‑N using MapReduce/Beam to handle “hot” users.

**Depth**  
*Writes*: O(log n) in Redis (ZADD), O(1) append in Cassandra.  
*Reads*: `ZRANK` for rank, `ZREVRANGE` for leaderboard slice – O(log n).  
Batching reduces write amplification; sharding by user hash keeps hot‑spots balanced.  

**Edge Cases**  
- **Tie scores**: include timestamp or secondary key to break ties deterministically.  
- **User churn**: garbage‑collect old entries, but keep history for analytics.  
- **Large score jumps**: guard against a single update moving a user from bottom to top by throttling updates per user.

**Optimize & Communicate**  
Explain trade‑offs: strict consistency vs latency (can use read‑replica lag). Suggest adding a CDN‑edge cache for global reads, and a Kafka pipeline for real‑time analytics. Conclude with a diagram of the layers and stress‑test plan (simulate 10k QPS, 1 M writes/sec) to validate SLA.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
