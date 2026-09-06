---
qid: ing_f46e20dbbb__fp__local
question: 'Explain: Avoid node hotspots — Size your shards | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 398
total_tokens: 570
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:38:49-05:00'
sources: []
---

**Why “Avoid node hotspots – size your shards” is essential**

In a distributed index, each shard is an independent Lucene segment that a single data node owns.  
When queries or indexing traffic hit one shard more than the others, that node becomes a *hotspot*: CPU, disk‑IO and memory saturate there while other nodes sit idle.  

From an optimization perspective, we want **load balance**—the same amount of work per node.  
Let \(S\) be the total number of shards, \(N\) the number of nodes, and \(W_i\) the workload on shard *i*.  
The ideal is \(\sum_{i=1}^{S} W_i / S = \sum_{j=1}^{N} W_j / N\).  
If a single shard carries a disproportionately large \(W_k\), its node’s effective throughput drops to \(W_k / (S/N)\), breaking the equality.

The *deep principle* is that **shard size ≈ average document size × documents per shard** must be tuned so that each shard’s I/O footprint matches the hardware limits of a node.  
If shards are too small, you create many of them; query routing overhead and merge traffic explode.  
If they’re too large, a single shard monopolizes disk bandwidth.

A non‑obvious insight: **shard size should be set *before* indexing starts**. During bulk ingest the cluster can temporarily rebalance, but once shards are created their sizes lock in. Changing them later requires costly reindexing or force merge operations that can cripple performance for hours.  

So, to avoid hotspots, pick a shard count that yields roughly equal I/O per node and keep that size constant throughout the index’s life.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
