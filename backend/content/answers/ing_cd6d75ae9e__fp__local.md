---
qid: ing_cd6d75ae9e__fp__local
question: 'Explain: Range-Based Sharding — Sharding | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 367
total_tokens: 539
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:17:20-05:00'
sources: []
---

**Range‑based sharding (system design)**  
When a distributed system stores a huge key–value table, the *fundamental problem* is to keep read/write latency low while avoiding hotspots.  The optimal solution must preserve locality: queries that ask for “keys in the interval [a,b]” should touch only one shard, and updates should hit just one node.  

A *range‑based shard* partitions the key space into contiguous intervals  
\[
S_i=\{k \mid L_{i-1}\le k < L_i\},
\]
with boundaries \(L_0<L_1<\dots<L_n\).  The partitioning is chosen so that each shard receives roughly equal load; this follows from the *law of large numbers*: if key distribution is unknown, we can approximate by sampling or use a *consistent hashing* variant that maps keys to intervals.  

Why must it be contiguous? Because any non‑contiguous assignment would force range queries to perform multiple lookups, violating the locality guarantee.  Moreover, contiguity aligns with **geometric intuition**: keys are points on a line; sharding is equivalent to cutting that line into segments—an optimal partitioning problem solved by *k‑means* in one dimension.

A non‑obvious insight: **range boundaries themselves become metadata that can be used for query planning.**  If the application frequently requests “top‑N” or “windowed” results, knowing the exact boundary positions lets a coordinator estimate shard cardinality without probing each node, yielding *predictive load balancing* and reducing inter‑shard traffic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
