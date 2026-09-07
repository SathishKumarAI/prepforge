---
qid: ing_ade7e0c2dc__faang__local
question: 'Explain: Bandwidth — Leaderboard System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 454
total_tokens: 689
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:27:51-05:00'
sources: []
---

**1️⃣ Clarify**  
We’re designing a *leaderboard* that ranks users by bandwidth usage (e.g., total data transferred).  
Assumptions:  
- Up to millions of concurrent users, each reporting usage every minute.  
- Rankings need near‑real‑time updates and queries for top‑N or user rank.  
- Data is append‑only; deletions are rare.

**2️⃣ Approach**  
1. **Ingest layer** – Kafka streams ingest per‑user bandwidth deltas.  
2. **Aggregation service** – A stateful stream processor (Kafka Streams / Flink) updates a key‑value store (`user_id → total_bandwidth`).  
3. **Ranking store** – Use Redis sorted sets (ZSET) for fast rank queries; update the ZSET on every aggregate change.  
4. **API layer** – REST/GRPC endpoints to fetch top‑N or a specific user’s rank, backed by the Redis cache.  

**3️⃣ Depth**  
- *Complexity*: Ingest O(1), aggregation O(log U) (Redis ZSET update).  
- *Consistency*: Use optimistic concurrency; tolerate eventual consistency for ranking queries—acceptable in most leaderboard use‑cases.  
- *Fault tolerance*: Kafka provides durability; Redis cluster with persistence (`RDB/AppendOnlyFile`) ensures recovery.

**4️⃣ Edge Cases**  
- **Burst traffic**: Buffer deltas and batch updates to avoid Redis overload.  
- **Data skew**: Heavy users can dominate ZSET growth; periodically rebalance or shard by user hash.  
- **Time‑windowed rankings** (e.g., daily): Maintain separate sorted sets per window.

**5️⃣ Optimize & Communicate**  
Explain trade‑offs: using Redis gives sub‑millisecond rank queries vs. a relational DB which would be slower for frequent updates. Mention potential micro‑optimizations—batch ZADD, pipelining, and monitoring latency spikes. Conclude with a clear diagram (Kafka → Stream → KV store → Redis → API) to visualize data flow.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
