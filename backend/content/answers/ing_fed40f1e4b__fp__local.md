---
qid: ing_fed40f1e4b__fp__local
question: 'Explain: Combine smaller indices — Size your shards | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 460
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:01:46-05:00'
sources: []
---

### Why “Combine smaller indices – Size your shards” matters in Elastic

**The fundamental problem**  
An index is a *shard* (or a set of shards). Every shard incurs overhead: file handles, memory‑mapped buffers, and an entry in the cluster’s routing table. When you create many tiny indices (say 10 B each), you still pay this overhead for each one, but the amount of data per shard is negligible.

**Why it must work this way**  
Elasticsearch spreads shards across nodes to parallelize search. If a node holds thousands of minuscule shards, the scheduler spends most time moving tiny pieces of metadata rather than actual document payloads. The *effective* I/O bandwidth collapses because each request triggers a context switch and lock acquisition for a shard that contains almost no data.

**Optimization insight**  
Treat shards as *bins* in a bin‑packing problem: you want to pack documents into bins such that each bin’s size is close to an optimal target (≈ 30–50 GB). Packing too tightly forces the cluster to reallocate shards more often; packing too loosely wastes disk space and memory. The sweet spot balances two competing costs:
1. **Per‑shard overhead** – linear in shard count.
2. **Query parallelism & locality** – logarithmic with the number of active shards.

**Non‑obvious takeaway**  
Merging small indices *before* they reach the cluster (e.g., at ingestion time) reduces not just memory pressure but also *future reindexing cost*. Once a shard has been merged, its data is stored in a contiguous block on disk; later bulk updates or deletes can be applied more efficiently because they touch fewer files and less metadata. Thus, “combine smaller indices” isn’t merely about current performance—it shapes the long‑term maintenance budget of your Elastic cluster.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
