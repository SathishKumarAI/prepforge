---
qid: ing_732b69542f__fp__local
question: 'Explain: Aggregations | Elasticsearch: The Definitive Guide [2.x] | Elastic'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 352
total_tokens: 529
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:09:29-05:00'
sources: []
---

**Aggregations in Elasticsearch – a principled view**

At its core, an aggregation is *statistics over a set of documents*.  
When you query, you retrieve raw hits; when you aggregate, you ask the
index to compute summaries (counts, averages, histograms) without pulling
every document into user space.  

Why must it be distributed?  
Elasticsearch shards hold disjoint subsets of the index. An aggregation
must therefore:

1. **Local reduce** – each shard computes its own partial result from
   only the documents it stores.
2. **Global reduce** – a coordinating node merges these partials into the
   final answer.

This two‑stage reduction is exactly what MapReduce and Spark do, but
elaborated for inverted indexes: local term frequencies become histogram
bins; local sums become partial sums; local top‑k lists become candidate
candidates.  The merge step is *commutative* and *associative*, enabling
parallelism and fault tolerance.

A non‑obvious insight: **aggregations are *lazy* by design**.  
When you issue an aggregation query, the engine does not materialise
intermediate buckets unless necessary. For example, a `terms` aggregation
first scans the posting lists to count term frequencies; only when the
top‑k are needed does it sort and return them.  This laziness keeps CPU
usage proportional to *selectivity*, not to index size.

In short, aggregations are distributed, associative reductions that turn
document collections into concise statistics while preserving scalability
and fault tolerance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
