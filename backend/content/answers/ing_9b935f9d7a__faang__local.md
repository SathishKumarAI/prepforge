---
qid: ing_9b935f9d7a__faang__local
question: 'Explain: Remove a node from an Elasticsearch cluster'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 430
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:45:53-05:00'
sources: []
---

**Clarify**  
You’re asked how to safely take a single node out of an ES cluster (e.g., for maintenance or decommissioning). I’ll assume the cluster is healthy, uses default shard allocation settings, and you have the necessary permissions.

**Approach**  
1. Drain the node’s shards → prevent new allocations there.  
2. Rebalance remaining nodes to keep quorum.  
3. Shut down the node cleanly once it has no data or tasks.  

**Depth**  
- **Step 1:** `POST /_cluster/settings?include_defaults=true` → set `"cluster.routing.allocation.enable": "none"` for that node’s IP or name.  
  - *Result:* ES stops allocating new primary/replica shards to the target node. Existing replicas stay until they’re moved.  
- **Step 2:** Trigger a re‑allocation: `POST /_cluster/reroute?retry_failed=true` with an explicit `move` command for each shard still on that node, or rely on automatic balancing once allocation is enabled again.  
  - *Monitoring:* Use `_cat/shards` to confirm all shards are relocated and the node shows zero active shards.  
- **Step 3:** Once the node reports no pending tasks (`GET /_cluster/health?wait_for_no_pending_tasks=true`) and no data, safely shut it down: `POST /_nodes/{node_id}/shutdown`.  

**Edge Cases**  
- If the node holds a primary shard with no replica elsewhere (e.g., single‑replica cluster), you must first add another replica or upgrade the cluster.  
- Network partitions may delay reallocation; watch for stale blocks (`cluster.blocks`).  

**Optimize & Communicate**  
For large clusters, automate the drain via scripts that poll shard counts until zero, then trigger a graceful shutdown. Explain to interviewers that this preserves data integrity, keeps quorum, and minimizes downtime—exactly what FAANG teams expect when maintaining production services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
