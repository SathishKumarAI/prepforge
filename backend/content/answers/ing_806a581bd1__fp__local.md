---
qid: ing_806a581bd1__fp__local
question: 'Explain: Conclusions — How many shards should I have in my Elasticsearch
  cluster? | Elastic Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 430
total_tokens: 608
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:38:24-05:00'
sources: []
---

### Why the shard count matters

An **Elasticsearch shard** is a single Lucene index that runs on one JVM process.  
When you ingest data it gets split into *N* shards so that each node can hold
a subset of the documents and queries can be parallelised across nodes.

#### The trade‑off

| Too few shards | Too many shards |
|----------------|-----------------|
| Each shard is large → single‑node bottlenecks, slow refreshes, high GC. | Many small shards → more open file descriptors, higher CPU overhead for coordination, larger cluster metadata. |

The optimal number of shards balances two constraints:

1. **Memory & I/O per node** – each shard consumes ~30 MB JVM heap + file handles.  
2. **Parallelism** – you want enough shards to saturate all data nodes’ cores but not so many that the coordinator spends most time routing.

#### The rule of thumb

```
shards ≈ (cluster‑size × 1–3) / (nodes per shard)
```

A practical heuristic is to keep **≤ 50 GB of raw data per shard** and ensure at least **one shard per node**.  
If a node has 8 cores, start with ~8 shards; if it has 32 cores, go up to ~32.

#### Non‑obvious insight

Shards are *immutable* once created (except for forced merges).  
Therefore, over‑sharding early leads to **unnecessary merge traffic** later when you re‑index or change mappings.  
It’s cheaper to start with a modest shard count and increase it via the `split` API if needed, rather than shrink shards after the fact.

By grounding shard choice in memory limits, core counts, and immutability costs, you avoid both under‑utilisation and costly rebalancing—ensuring queries run fast and the cluster stays healthy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
