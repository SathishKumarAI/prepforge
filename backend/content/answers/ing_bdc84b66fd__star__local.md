---
qid: ing_bdc84b66fd__star__local
question: 'Explain: Leaderboard data storage — Leaderboard System Design - System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 367
total_tokens: 608
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:50:25-05:00'
sources: []
---

**Situation**  
At my last startup we launched a competitive gaming platform with over 1 M daily active users. The existing leaderboard was a flat file; it lagged by minutes, caused cache misses during peak tournaments, and couldn’t scale to the 10⁶ concurrent ranking updates per day.

**Task**  
I had to design a low‑latency, horizontally scalable leaderboard storage that could handle real‑time score pushes, support global leaderboards and per‑region slices, and guarantee eventual consistency for display while keeping memory usage bounded.

**Action**  
1. Chose Redis Streams + Lua scripts for atomic score updates.  
2. Implemented a sharded sorted set architecture: each shard stores a 10 k user slice; we used consistent hashing on user ID to route writes.  
3. Added a background Kafka consumer that aggregates per‑shard top‑N into a global “hot” cache in Redis, refreshed every 30 s.  
4. Employed TTL and LRU eviction for stale users, and persisted snapshots nightly to S3 with DynamoDB as the durable source of truth.  
5. Built health checks and auto‑scaling policies; integrated Prometheus metrics (latency, queue depth) into Grafana dashboards.

**Result**  
Latency dropped from 250 ms to <20 ms for score updates during peak hours. The system handled 15× the previous throughput without errors, and leaderboard accuracy improved to <5 s staleness. I learned that combining Redis streams for real‑time ops with a durable async pipeline gives both speed and reliability in high‑volume ranking systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
