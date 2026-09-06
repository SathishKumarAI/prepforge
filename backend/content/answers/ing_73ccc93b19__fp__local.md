---
qid: ing_73ccc93b19__fp__local
question: 'Explain: Troubleshoot shard-related errors — Size your shards | Elastic
  Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 462
total_tokens: 636
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:11:11-05:00'
sources: []
---

**Why shard size matters**

In Elasticsearch a *shard* is a Lucene index segment that lives on one node.  
The fundamental problem it solves is **parallelism vs. overhead**: each shard can be searched in parallel, but every shard incurs memory (field data cache, thread‑pool queues) and disk‑I/O cost. If shards are too small, you waste resources on many tiny segments; if they’re too large, a single node becomes a bottleneck and queries must read more bytes than necessary.

**Diagnosing the “shard size” error**

1. **Check `cluster.routing.allocation.cluster_concurrent_rebalance`** – too many shards in a rebalance can trigger the *“too many shards for this node”* exception.  
2. **Look at the shard‑size field (`_shards`) and the total index size** – compare against the recommended 50 GB–100 GB per primary.  
3. **Examine allocation explain (`/_cluster/allocation/explain`)** – it shows why a node is rejected (e.g., *“node has insufficient free disk space”*).  
4. **Review JVM heap usage** – each shard consumes ~30 MB of memory for Lucene’s `SegmentReader`. A node with 8 GB heap can safely hold ≈200–250 shards.

**Tuning**

- Re‑index with a lower number of primary shards (e.g., from 40 to 10) and let the cluster re‑balance.  
- Use *shard allocation filtering* (`cluster.routing.allocation.exclude._name`) to keep hot shards on fast SSD nodes.  

**Non‑obvious insight**

The real constraint is not raw disk space but **memory pressure on the thread‑pool**. A node with 200 GB of data can still be slow if it has >300 shards, because each shard adds a `Searcher` instance that occupies both heap and CPU. Balancing *shard count* and *node capacity* yields far better performance than merely fitting more bytes onto a disk.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
