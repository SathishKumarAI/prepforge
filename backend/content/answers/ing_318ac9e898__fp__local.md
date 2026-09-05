---
qid: ing_318ac9e898__fp__local
question: Are indices and shards not free? — How many shards should I have in my Elasticsearch
  cluster? | Elastic Blog
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 461
total_tokens: 643
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:50:12-05:00'
sources: []
---

**Why “shards” are not a free lunch**

At the heart of Elasticsearch is the *Lucene* index engine: each Lucene segment (a shard in ES parlance) is an on‑disk data structure that must be kept in memory for fast look‑ups, and it carries its own copy of metadata and thread pools.  
When you split a logical dataset into many shards:

1. **Memory overhead** – every node keeps a *routing table* (≈ 32 bytes per shard) and opens file handles; too many shards exhaust OS limits before data does.
2. **Search latency** – a query is executed in parallel across all relevant shards, then the results are merged on the coordinating node. The merge step grows linearly with shard count: more shards → more round‑trips, more GC pressure, and higher CPU load.
3. **Indexing throughput** – each shard runs its own write pipeline; small shards mean many concurrent pipelines that compete for I/O, hurting overall indexing speed.

Thus the optimal shard size is a *constrained optimization*: maximize query performance while keeping per‑node resource usage below thresholds.  

### Practical rule of thumb  
For an average node with 32 GB RAM and SSD storage:

```
max_shards_per_node ≈ (RAM - 4 GB) / (shard_size_in_GB + 1)
```

Where `shard_size_in_GB` is the expected size after compression.  
A non‑obvious insight: **shard count matters more for *search* than for *storage*.** If you only need to store a few terabytes and never query them, you can afford far fewer shards; but if you must search every millisecond, each extra shard adds a measurable latency penalty.

In short, shards are not free because they introduce independent memory, I/O, and CPU costs that scale linearly with count. Choosing the right number is an optimization problem grounded in resource budgeting rather than just “more shards = more parallelism.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
