---
qid: vq_aab326a7d5__fp__local
question: How to implement parallel copies in ADF using partitioning ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 377
total_tokens: 549
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:50:36-05:00'
sources: []
---

**Why “parallel copies” matter**  
In a data‑movement pipeline the cost is dominated by I/O bandwidth and CPU time of the source/target engines. If we treat the copy as a single monolithic stream, the engine saturates its sockets or the target’s ingestion rate; latency spikes, throughput collapses. The fundamental principle is *concurrency* in distributed systems: split the logical data set into independent shards that can be processed in parallel without contention.

**From the partitioning problem to ADF parallelism**  
1. **Define a deterministic key** (e.g., hash of a primary key or row‑id).  
2. **Map each key to a shard id**: `shard = HASH(key) mod N`.  
3. **Create N separate copy activities**, each with a source query that filters on its shard (`WHERE HASH(id) % N = i`).  
4. **Schedule them concurrently** in ADF (use “Parallel” trigger or set *Degree of parallelism*).  

Because each activity touches disjoint rows, the underlying data store can serve all shards simultaneously; network links are fully utilized and the target receives a balanced stream.

**Non‑obvious insight**  
The optimal number of shards is not simply the number of CPU cores. It depends on *data skew* and *network contention*. If one shard contains 90 % of rows, it will dominate I/O regardless of core count. Therefore perform an **entropy analysis**: compute cardinality per hash bucket; choose `N` so that each bucket’s size is roughly equal to the target throughput budget. This guarantees that parallelism yields linear speed‑up rather than a bottleneck on a single hot shard.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
