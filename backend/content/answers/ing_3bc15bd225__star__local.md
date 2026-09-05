---
qid: ing_3bc15bd225__star__local
question: 'Explain: Searches run on a single thread per shard'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 290
total_tokens: 526
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:28:06-05:00'
sources: []
---

**Situation**  
During a quarterly audit of our recommendation engine, we discovered that the real‑time search latency had spiked from 120 ms to 350 ms after adding a new product category. The cluster was sharded across 8 nodes, each handling its own subset of the index.

**Task**  
I needed to pinpoint why the latency increased and bring it back below our SLA of 150 ms without compromising throughput or accuracy.

**Action**  
I profiled each shard’s query path using X-Pack monitoring. The logs revealed that every search request was being executed on a single CPU thread per shard, even when multi‑core nodes were available. I reconfigured the Elasticsearch `index.search.default_field` settings to enable **search thread pool scaling**, and updated the index mapping to use a **doc_values** column for the most frequently queried fields. Then I adjusted the `thread_pool.search.size` to 4 per shard, matching our node’s core count. Finally, I rewrote the query DSL to batch sub‑queries into a single composite aggregation, reducing inter‑shard round trips.

**Result**  
Latency dropped to 110 ms on average across all shards, and throughput increased by ~30%. The exercise taught me that thread pool configuration is often overlooked; tuning it can unlock significant performance gains without changing hardware or data model.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
