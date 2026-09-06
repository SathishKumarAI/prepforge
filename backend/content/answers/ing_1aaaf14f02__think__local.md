---
qid: ing_1aaaf14f02__think__local
question: 'Explain: Best practices — Size your shards | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 509
total_tokens: 699
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T04:29:38-05:00'
sources: []
---

**1. Clarify the question and assumptions**  
   - Identify that “shards” refers to Elasticsearch index partitions.  
   - Assume we’re dealing with typical document‑store use cases (search, analytics).  
   - Note constraints: hardware limits, query patterns, growth expectations.

**2. Adopt a mental model**  
   - Think of shards as horizontal partitions: each holds a contiguous subset of documents.  
   - Use the “size vs. number” trade‑off framework: fewer large shards → less overhead but higher recovery cost; many small shards → easier recovery but more metadata traffic.

**3. Step‑by‑step reasoning**  
   1. Estimate daily ingest volume and total data lifetime to set a target size (e.g., 50–200 GB per shard).  
   2. Check the cluster’s RAM: each shard consumes ~40 MB of JVM heap + memory for segment caches; keep open shards < 30% of available heap.  
   3. Consider query patterns: high‑cardinality filters benefit from fewer shards (less coordination); heavy analytics may tolerate more shards if they reduce CPU per node.  
   4. Plan for growth: add a few “warm” nodes to handle older data, but keep hot nodes with optimal shard count.  
   5. Validate by running small test indices and measuring GC pause times, search latency, and recovery duration.

**4. Common traps to avoid**  
   - **Over‑sharding**: more shards than nodes → each node handles many tiny shards, increasing metadata load.  
   - **Under‑sharding**: a single shard per index can become a bottleneck during rebalancing or failover.  
   - Ignoring JVM heap limits → frequent garbage collection stalls.  
   - Assuming “more shards = faster searches” – coordination overhead often outweighs parallelism benefits.

**5. Sanity‑check & communicate**  
   - Cross‑verify shard count with cluster health: `/_cluster/health` should show all nodes “green”.  
   - Explain the logic in plain terms: “We pick a shard size that fits comfortably into RAM, keeps recovery fast, and matches our read/write mix.”  
   - Offer a quick rule of thumb: aim for 50–200 GB per primary shard on hot nodes; adjust based on observed GC and latency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
