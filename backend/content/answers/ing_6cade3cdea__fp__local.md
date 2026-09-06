---
qid: ing_6cade3cdea__fp__local
question: 'Explain: Leaderboard database schema design — Leaderboard System Design
  - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 535
total_tokens: 711
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:55:25-05:00'
sources: []
---

**Why a leaderboard needs its own schema**

The core problem is *real‑time ranking*: we must answer “who is in the top k right now?” for millions of users with sub‑second latency while ingesting tens of thousands of updates per second. A naïve scan over a single “scores” table blows up because ranking requires sorting, which is \(O(n \log n)\). Instead we treat the leaderboard as an *ordered set* that can be queried in constant or logarithmic time.

**Fundamental design principles**

1. **Ordering as first‑class** – store each entry with a composite key `(score DESC, timestamp ASC)`. This turns ranking into a range query over a B‑tree index; retrieving the top k is simply “seek to the start of the index and fetch k rows.”  
2. **Partition by scope** – separate global, regional, or game‑specific leaderboards into distinct tables or key prefixes. This bounds the size of each ordered set, keeping queries fast even when total users are billions.  
3. **Write‑heavy partitioning** – use a write‑optimized log (e.g., Kafka) to batch score updates and replay them into the read model. The log guarantees durability without locking the read index.  

**Non‑obvious insight**

A single composite key is *not* enough for “stale‑but‑fast” reads. By coupling the key with a **version vector** (e.g., `(score, timestamp, version)`) we can implement *eventual consistency*: readers can serve cached top k from a fast in‑memory store and only refresh when a new version appears. This avoids the classic “read‑after‑write” bottleneck while still delivering accurate rankings to most users.

**Schema sketch**

| Column | Type | Notes |
|--------|------|-------|
| `user_id` | bigint | PK part 1 |
| `score` | bigint | PK part 2 (DESC) |
| `ts` | timestamp | PK part 3 (ASC) |
| `ver` | int | For eventual consistency |
| `scope` | varchar | Global / region / game |

Indexes on `(scope, score DESC, ts ASC)` give \(O(\log n + k)\) top‑k queries; updates touch only the log and a single index row. This minimal, principled design scales to millions of concurrent users while keeping latency under 10 ms.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
