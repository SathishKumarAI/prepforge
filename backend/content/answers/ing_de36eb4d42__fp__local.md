---
qid: ing_de36eb4d42__fp__local
question: 'Explain: Shard distribution guidelines — Size your shards | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 457
total_tokens: 630
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:52:12-05:00'
sources: []
---

**Why shard size matters**

Elasticsearch stores each index as a set of *shards*, logical partitions that run on JVM processes. A shard is the unit of parallelism, replication, and recovery. If a shard is too small, you waste RAM for thread‑pools and overhead; if it’s too large, a single node becomes a bottleneck during query aggregation or index time, and recovery slows because one JVM must read/write gigabytes at once.

**Derive the guideline**

1. **Memory budget per node** – A JVM can safely keep about 60 % of heap in the *metaspace* (for indices) and the rest for data structures.  
2. **Per‑shard overhead** – Each shard consumes ~10–20 MB of memory for index caches, term dictionaries, etc., regardless of size.  
3. **Throughput vs latency** – Query latency scales with how many shards a node must merge results from; more shards → more merging work.

Putting these together:  
- Keep the *average* shard size between **10–50 GB**.  
- Aim for **≤ 1,000 shards per cluster** so that even in worst‑case recovery you’re not reading > 5 TB per node.  
- If your workload is write‑heavy, lean toward larger shards (≈ 30 GB) to amortize indexing overhead; if read‑intensive with many small queries, lean smaller (≈ 15 GB) so that each shard’s inverted index fits in RAM.

**Non‑obvious insight**

A single “tiny” shard can dominate CPU during *sort* or *facets*: the query engine must load a whole posting list into memory to sort it. Thus, even if your total data is 1 TB, having thousands of 1 GB shards will make queries slower than a few 50 GB shards—because each tiny shard forces a full‑memory scan for every request. This subtle trade‑off between parallelism and per‑shard memory cost often surprises practitioners.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
