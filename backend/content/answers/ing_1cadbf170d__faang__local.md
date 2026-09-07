---
qid: ing_1cadbf170d__faang__local
question: 'Explain: Cache Layer (Redis) — Design URL Shortener | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 593
total_tokens: 836
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:51:37-05:00'
sources: []
---

**1️⃣ Clarify**  
We’re asked to design a URL‑shortening service that uses Redis as a cache layer. Assume: high traffic (10⁶+ requests/day), low latency (<100 ms per lookup), persistence for 30‑day history, and eventual consistency between cache and DB. We need to handle create, read, update, delete, analytics, and graceful cache misses.

**2️⃣ Approach**  
1. **API Layer** – REST/GRPC endpoints: `POST /shorten`, `GET /{code}`, `DELETE /{code}`.  
2. **Data Store** – Primary DB (SQL or NoSQL) for durability; Redis as read‑through cache keyed by short code.  
3. **Cache Strategy** – LRU eviction, TTL ≈ 24 h, write‑back on create/delete, cache‑miss triggers DB fetch and populates Redis.  
4. **URL Generation** – Base‑62 counter or hash with collision check; store mapping `code → longUrl`.  
5. **Analytics** – Increment counters in Redis (`INCR`) and batch flush to DB.

**3️⃣ Depth**  
- **Create**: atomically increment global counter, encode to base‑62 → `code`; write `{code→long}` to DB + set in Redis with TTL.  
- **Read**: try `GET code` from Redis; on miss, fetch from DB, return and cache.  
- **Delete**: delete from DB, then `DEL` in Redis.  
- **Analytics**: `INCR hits:{code}` per click; periodically (e.g., every 5 min) bulk write to analytics table.  

*Complexities*:  
- Write ≈ O(1), read average O(1) with cache hit; worst‑case O(log N) if DB lookup needed.  
- Consistency: eventual; use optimistic locking or versioning to avoid stale reads.

**4️⃣ Edge Cases**  
- Cache stampede on popular URL → use “lock‑pattern” (e.g., Redis `SETNX` + TTL).  
- Collision in code generation → retry with next counter value.  
- High delete churn → ensure cache invalidation before DB commit.  
- Network partitions: fall back to DB if Redis unreachable.

**5️⃣ Optimize & Communicate**  
Explain trade‑offs: higher cache hit rate reduces DB load but increases memory cost; TTL balances freshness vs. memory. Mention monitoring (latency, hit ratio), auto‑scaling of Redis nodes, and using Redis Cluster for sharding. Conclude with a diagram sketch (API → Cache ↔ DB) to show flow. This demonstrates structured reasoning, depth, and communication—key signals in FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
