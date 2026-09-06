---
qid: ing_80d82589e4__fp__local
question: 'Explain: Database Scalability Techniques'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 383
total_tokens: 549
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:39:20-05:00'
sources: []
---

**Database scalability in ML pipelines** is a response to the *information‑budget* problem: as training data grows, the cost of retrieving and transforming records must not eclipse model learning time. The fundamental requirement is that each data shard be **independently queryable** while still supporting global analytics.

1. **Horizontal partitioning (sharding)** splits the table by key (e.g., user ID). Each shard runs on a separate node, so read/write load scales linearly with added nodes. This relies on the *law of large numbers*: local statistics approximate global ones when shards are sufficiently uniform.

2. **Index sharding**—building per‑shard indexes—reduces query latency from \(O(n)\) to \(O(\log n)\). It trades storage for speed but preserves consistency because each index only covers its shard’s rows.

3. **Materialized views and pre‑aggregation** exploit *information bottlenecks*: many ML jobs need aggregated statistics (means, variances). By caching these aggregates in a separate distributed store (e.g., ClickHouse), the system turns an \(O(n)\) scan into constant‑time lookup, trading freshness for throughput.

4. **Cache‑then‑fetch**: use an LRU cache of recent feature vectors to hide network latency; the underlying assumption is *temporal locality* in training batches.

5. **Consistent hashing** ensures minimal data movement when nodes join/leave, preserving load balance without costly reshuffling.

A non‑obvious insight: **feature importance can dictate shard keys**. If a model heavily weighs “region” or “device type,” aligning shards on those columns reduces cross‑node joins, turning a seemingly simple horizontal split into an *information‑preserving* partition that accelerates both retrieval and feature engineering.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
