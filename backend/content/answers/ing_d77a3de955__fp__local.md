---
qid: ing_d77a3de955__fp__local
question: What is Database Sharding? — Sharding | System Design
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 410
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:38:20-05:00'
sources: []
---

**Sharding is a geometric partition of data that turns an intractable “one‑table” problem into tractable sub‑problems.**

At its core, a database must answer queries that scan or join millions of rows. In a single table, every query incurs *O(n)* I/O and CPU cost because the engine can’t skip irrelevant data. Sharding solves this by imposing an *indexing manifold*: a function \(f: \text{Row} \rightarrow \text{Shard}\) that deterministically maps each row to one of many storage nodes. The map is chosen so that typical query predicates (e.g., user‑id ranges, geographic zones) localize on a single shard or a small set of shards. Thus the effective search space shrinks from \(n\) to \(n/k\), where \(k\) is the number of shards, yielding linear scalability.

Why must sharding be deterministic? Because any nondeterministic mapping would force cross‑shard coordination for every query, erasing the performance benefit and reintroducing the global consistency bottleneck that sharding seeks to avoid. The determinism also turns sharding into a *distributed hash* or *range* function—both are instances of the same underlying principle: reduce dimensionality by projecting data onto a lower‑dimensional space that preserves query locality.

**Non‑obvious insight:** Sharding is not just horizontal scaling; it is an *information‑theoretic compression*. By partitioning, each shard stores only the entropy relevant to its key space. Queries then read from a compressed subspace, so the total I/O per query can be less than reading the entire table even if replication overhead exists. This explains why sharded systems often outperform monolithic ones not just because of parallelism but because they eliminate irrelevant data before any computation occurs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
