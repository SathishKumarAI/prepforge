---
qid: ing_a82c53ff92__fp__local
question: 'Explain: Aim for shards of up to 200M documents, or with sizes between
  10GB and 50GB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 371
total_tokens: 555
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:03:10-05:00'
sources: []
---

**Why 200 M docs (≈10–50 GB) per shard?**

The core problem is *indexing throughput vs. query latency*.  
- **Indexing speed** grows with parallelism: each shard can be written to independently. If a shard holds too many documents, the write queue stalls and the CPU‑bound merge phase becomes a bottleneck. Empirically, a 200 M‑doc shard balances the cost of writing a single large block (≈10–50 GB) with the ability to keep merges in memory.  
- **Query latency** is bounded by the *number of shards that must be consulted*. A search touches every shard unless an exact match filter reduces the set. With 200 M docs, even a 1‑billion‑doc index splits into ~5–10 shards; the overhead of orchestrating those few shards is negligible compared to touching hundreds or thousands.

**Deeper principle: diminishing returns on parallelism**

Parallelism scales linearly only until the *latency per shard* (I/O + merge) dominates. Beyond that point, adding more shards merely increases coordination cost. The 10–50 GB window is where CPU and disk throughput for merges hit a sweet spot—enough data to amortize I/O latency but small enough that a single merge fits comfortably in RAM.

**Non‑obvious insight**

Many practitioners focus on “more shards = better parallelism”. In practice, the *merge schedule* is the hidden cost: each shard’s background merge can stall all writers if it exceeds the available merge memory. Keeping shards within 200 M docs guarantees that merges stay bounded, preventing write amplification and ensuring consistent indexing performance across very large collections.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
