---
qid: ing_031b43872a__faang__local
question: 'Explain: SQL — Leaderboard System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 467
total_tokens: 701
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:51:10-05:00'
sources: []
---

**Clarify**  
We’re building a *leaderboard* that must support (1) real‑time score updates, (2) fast ranking queries, and (3) horizontal scalability for millions of users.  
Assumptions: scores are integers, no negative deltas, updates arrive via a write API, reads via a read API, latency < 50 ms, and we can use relational + cache.

**Approach**  
1. **Data model** – table `scores(user_id PK, score BIGINT)`.  
2. **Write path** – upsert into the DB; push delta to an in‑memory cache (Redis Sorted Set).  
3. **Read path** – query Redis for rank (`ZREVRANK`) and top N (`ZREVRANGE`).  
4. **Consistency** – run a background job that snapshots the cache to DB every few seconds, reconciling any missed updates.

**Depth**  
*Write*: `INSERT … ON DUPLICATE KEY UPDATE score = score + :delta`.  
*Cache*: Redis `ZADD user_id delta` keeps an up‑to‑date sorted set.  
*Read*: `ZRANGE leaderboard 0 N WITHSCORES` gives top N; `ZREVRANK user_id` yields rank in O(log N).  
Complexity: writes O(log N) on Redis, reads O(log N) for rank, O(N) to fetch a slice.  
Trade‑offs: eventual consistency between DB and cache; acceptable if updates are batched.

**Edge Cases**  
*Simultaneous updates*: Redis handles atomic `ZADD`.  
*Cache miss*: fallback to DB + rebuild sorted set.  
*Large N queries*: stream results, not all in memory.

**Optimize & Communicate**  
Add a sharded Redis cluster for horizontal scaling; use read replicas of the DB for durability. Explain that by decoupling writes (fast cache) from persistence (async batch), we achieve sub‑50 ms latency while keeping data durable. This design balances consistency, performance, and scalability—exactly what FAANG interviewers expect.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
