---
qid: ing_98b3a62b78__fp__local
question: 'Explain: General guidelines — Size your shards | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 415
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:30:42-05:00'
sources: []
---

**Why shard size matters**

In a distributed search engine each *shard* is an isolated Lucene index that runs on one node.  
When a query arrives the cluster splits it into sub‑queries, one per shard, and aggregates the results.  
Thus two performance knobs emerge:

| Shard size | Query speed | Indexing throughput | Failure impact |
|------------|-------------|---------------------|----------------|
| Tiny (≤ 1 GB) | Many shards → high network overhead; CPU bound on aggregation | Lots of small writes → many I/O requests, higher latency | Small loss per shard |
| Huge (> 5 GB) | Fewer shards → less aggregation cost | Each write touches a larger index → more disk seeks and GC pauses | Large loss if a node dies |

The optimal size balances **network traffic** (≈ #shards × query‑size), **CPU/GC pressure** (≈ index‑size × write‑rate) and **resilience** (fraction of data lost).  

**Rule of thumb**

1. Aim for 50–200 GB per primary shard on SSDs, 100–300 GB on spinning disks.  
2. Keep the total number of shards < 10 000 to avoid cluster‑wide metadata bloat.  
3. Monitor `search_throttle` and GC pause times; if either spikes, shrink a shard or increase node count.

**Non‑obvious insight**

A *single* large shard can outperform many tiny ones even on the same hardware because the Lucene merge scheduler amortizes its cost over a larger segment set. By letting a few shards grow to ~200 GB before splitting, you reduce the frequency of costly segment merges and GC pauses—something most practitioners overlook when they focus solely on “more shards = more parallelism.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
