---
qid: ing_bdc84b66fd__faang__local
question: 'Explain: Leaderboard data storage — Leaderboard System Design - System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 510
total_tokens: 748
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:03:45-05:00'
sources: []
---

**Clarify**  
You want a scalable system that stores, updates, and serves player scores in real‑time for a leaderboard (e.g., gaming, fitness). Key assumptions: high write traffic (scores coming in), low read latency (<100 ms), eventual consistency is acceptable, data may span millions of users, and we need to support pagination and time‑based queries.

**Approach**  
1. **Data model** – `PlayerScore(userId, score, timestamp)`.  
2. **Storage layers** – write‑heavy layer (e.g., Redis or Cassandra) for quick updates; cold layer (S3/Parquet) for long‑term persistence and analytics.  
3. **Indexing** – maintain a sorted set per game in Redis (`ZADD`), capped to top N entries, with `ZREVRANGE` for reads.  
4. **Batch compaction** – every few minutes flush Redis into a columnar store; use incremental snapshots.  
5. **Cache tier** – CDN or edge cache for hot pages (top 10–100).  
6. **API** – REST/GRPC with pagination, support `global`, `friend`, and `time‑window` queries.

**Depth**  
- Write path: client → API → Redis (`ZADD`) → async write to Cassandra → batch to S3.  
- Read path: check cache → if miss, query Redis → fallback to DB for older data.  
- Complexity: O(log N) for insert/update in sorted set; reads are O(k).  
- Consistency: eventual; a new score may not appear instantly on the leaderboard but is updated within seconds.

**Edge Cases**  
- Score ties → secondary sort by timestamp or userId.  
- Massive concurrent updates → use sharding by hash(userId) to avoid hot spots.  
- Data deletion or rollback → maintain immutable logs in S3, rebuild state if needed.

**Optimize & Communicate**  
We can improve write throughput with a *write‑backlog queue* (Kafka) and batch Redis updates. For read amplification, precompute “next‑rank” pointers. In an interview I’d present this diagrammatically: layers → API → cache → store, highlighting latency budgets and trade‑offs between consistency and speed. This shows structured thinking, technical depth, and a clear communication plan.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
