---
qid: ing_2823e3061c__fp__local
question: 'Explain: Size your shards — Size your shards | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 365
total_tokens: 537
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:30:32-05:00'
sources: []
---

**Why shard size matters – a first‑principles view**

At its core, an index is a *distributed hash table*. Each document’s key (the `_id` or a routing field) hashes to a shard; the shard holds the corresponding Lucene segment. Two competing constraints govern shard size:

1. **Memory pressure** – every open shard loads its *segment cache*, *norms*, and *term dictionary* into RAM. If a shard exceeds ~5 GB, JVM garbage‑collection pauses become frequent, because each GC cycle must sweep all in‑memory structures.
2. **Parallelism limits** – the more shards, the greater the overhead of coordinating search across them (network hops, thread pool contention). When a single node hosts >20 shards, the *searcher* threads saturate and query latency rises.

Thus, optimal shard size is the sweet spot where each shard’s memory footprint stays below the GC threshold while the total number of shards does not exceed the node’s thread‑pool capacity. Empirically this translates to 10–30 GB per node for read‑heavy workloads, with a *shard* size of ~2–4 GB.

**Non‑obvious insight:**  
The “right” shard size is *not* a static number; it shifts as the index’s schema changes. Adding a high‑cardinality field (e.g., a `keyword` array) inflates term dictionaries, effectively shrinking the usable RAM per shard even if document count stays constant. Therefore, whenever you add or drop fields, recompute the shard size rather than relying on a fixed rule of thumb.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
