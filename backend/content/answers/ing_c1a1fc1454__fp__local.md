---
qid: ing_c1a1fc1454__fp__local
question: 'Explain: Cost optimization — MongoDB Sharding | MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 324
total_tokens: 496
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:53:41-05:00'
sources: []
---

**Cost optimisation with MongoDB sharding**

At its core, a database is an *information‑theoretic* system: each query must read enough data to answer the question while discarding the rest. In a single‑node deployment, every node reads the entire collection (or large indexes) for even small predicates, so I/O and CPU scale linearly with data size—an expensive linear growth in cost.

Sharding solves this by *partitioning* the key space into disjoint shards. Each shard holds only a slice of the total cardinality, so a query that predicates on the shard key touches at most one node. This reduces disk I/O from \(O(N)\) to \(O(1)\), and CPU/memory usage becomes proportional to the requested slice rather than the whole dataset. The deeper principle is **locality of reference**: data that is co‑used (via a common key) should reside together, minimizing cross‑node traffic.

A non‑obvious insight: sharding does not merely parallelise writes; it *reduces contention* on shared indexes. Because each shard builds its own index trees, the probability of write conflicts drops dramatically, enabling higher throughput without extra licensing or hardware. Thus, sharding is a cost optimisation that leverages both data locality and reduced contention to lower operational spend while preserving consistency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
