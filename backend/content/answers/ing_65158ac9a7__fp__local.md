---
qid: ing_65158ac9a7__fp__local
question: 'Explain: General sizing guidelines — Size your shards | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 475
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:39:51-05:00'
sources: []
---

## Why shard size matters

When you index *N* documents into an Elasticsearch cluster you are really building **N independent inverted‑index segments** that must be searched in parallel.  
If a shard is too small, you create thousands of tiny segments; each query has to open and merge them, wasting CPU and disk I/O.  
If it is too large, a single segment becomes the bottleneck for both indexing (merge cost ∝ size²) and searching (search time ∝ log size).  

The optimal shard size is therefore the one that balances **three costs**:

| Cost | Origin | Scaling |
|------|--------|---------|
| Merge | Background merges rewrite many small segments into fewer large ones | ∝ segment\_count² |
| Search | Each query touches every segment; log‑search cost per doc | ∝ log segment\_size |
| Memory | In‑memory bitmap/term dictionary; RAM grows roughly linearly with size | ∝ segment\_size |

Minimising the sum of these three gives a convex function whose minimum is around **30–50 GB** per shard on commodity hardware.  
This range keeps segment counts low (≈ 2–3 merges per day) while keeping search latencies below 10 ms for typical workloads.

## A non‑obvious insight

Most people tune shards by “make it big” or “make it small”. The subtle point is that **shard size should be set *before* you load data, not after**.  
Elasticsearch’s merge scheduler assumes a target segment size; if you change the shard size later, the cluster will perform a huge re‑merge to reach the new optimum, causing an outage.  
Therefore, estimate your final index size and choose the shard count up front:

```
shard_count = ceil(total_expected_docs / docs_per_shard)
```

and keep that constant; only adjust when you change the underlying data model or storage tier. This proactive approach avoids expensive resharding and preserves query performance throughout the lifecycle of the index.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
