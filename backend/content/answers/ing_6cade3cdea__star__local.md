---
qid: ing_6cade3cdea__star__local
question: 'Explain: Leaderboard database schema design — Leaderboard System Design
  - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 406
total_tokens: 648
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:04:23-05:00'
sources: []
---

**Situation:**  
At my previous startup we launched a real‑time gaming leaderboard that had to rank 10 million players worldwide, update scores every second, and serve 200 k concurrent page views with sub‑second latency.

**Task:**  
I was tasked with designing the database schema for the leaderboard so it could handle high write throughput, support efficient range queries (top‑N), and allow fast reads for individual player ranks without locking the entire table.

**Action:**  
I chose a hybrid approach:  
1. **Primary table (`player_scores`)** – a wide‑row NoSQL store (Cassandra) with `player_id` as partition key and composite clustering columns `game_id`, `timestamp`. This gave us linear write scaling and eventual consistency for rapid score updates.  
2. **Secondary index table (`leaderboard_by_game`)** – an in‑memory Redis sorted set per game, keyed by `(score, player_id)`. On every write to Cassandra we pushed the new score into Redis with a TTL of 24 h, ensuring instant top‑N retrievals via `ZRANGE` and constant‑time rank lookups (`ZREVRANK`).  
3. **Audit table** – a PostgreSQL table capturing each raw event for compliance, using logical replication from Cassandra to keep the analytics pipeline in sync.  
I also implemented optimistic concurrency control by storing a version number in Cassandra rows to prevent lost updates during bursts.

**Result:**  
The new schema reduced leaderboard query latency from 250 ms to under 20 ms for top‑10 queries and handled peak write loads of 5 k scores/sec without throttling. We maintained >99.9% uptime during a global tournament with 3× the expected traffic. From this, I learned that combining a write‑optimized NoSQL store with an in‑memory sorted set often yields the best balance between consistency and performance for leaderboard workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
