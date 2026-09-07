---
qid: ing_bc5dbdcd95__faang__local
question: What is a shard? — How many shards should I have in my Elasticsearch cluster?
  | Elastic Blog
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 432
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:00:57-05:00'
sources: []
---

**Clarify**  
A *shard* is a horizontal slice of an index’s data that can be stored and queried independently on any node in the cluster. The question asks how many shards are appropriate for an Elasticsearch deployment.

Key assumptions to confirm:  
1. Total dataset size and growth rate.  
2. Query patterns (search vs. aggregation).  
3. Hardware limits (CPU, memory, disk per node).  
4. Desired resilience (replication factor).  

**Approach**  
1. Estimate the final index size.  
2. Decide on a target shard size (~30–50 GB for SSD‑backed nodes to keep I/O efficient).  
3. Compute `shards = ceil(total_size / target_shard_size)`.  
4. Add a buffer (≈10%) for growth and reindexing.  
5. Keep shards ≤ 2000 per cluster to avoid metadata overhead; each node should hold ≈15–30 shards.

**Depth**  
- **Pros of many small shards**: fine‑grained parallelism, easier balancing.  
- **Cons**: increased memory for shard routing tables (≈30 bytes/shard), higher JVM GC pressure, slower cluster state updates.  
- Typical recommendation: 5–10 primary shards per index on a medium‑size cluster; increase if you have >200 GB data or heavy search traffic.

**Edge Cases**  
- If data is highly dynamic and reindexed often, too many shards can cause frequent splits/merges.  
- On very large clusters (>50 nodes) the routing table may become unwieldy.  

**Optimize & Communicate**  
Start with a conservative shard count (e.g., 10), monitor `cluster.routing.allocation.total_shards_per_node` and JVM heap usage, then scale out shards only if query latency or GC spikes exceed thresholds. Explain that the goal is to balance parallelism against cluster‑state overhead, ensuring smooth scaling as data grows.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
