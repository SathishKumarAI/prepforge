---
qid: ing_9b935f9d7a__star__local
question: 'Explain: Remove a node from an Elasticsearch cluster'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 445
total_tokens: 680
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:43:23-05:00'
sources: []
---

**Situation:**  
At my previous company we had an Elasticsearch cluster running on a 12‑node fleet that suddenly became overloaded after a feature rollout that increased the daily index size from 50 GB to 120 GB. One of the nodes, Node‑7, was a hot spot: its heap usage spiked to 90% and it started rejecting shard allocations, causing query latency to jump from <200 ms to >1 s.

**Task:**  
I needed to safely remove Node‑7 from the cluster, reallocate its shards without downtime, and verify that performance returned to baseline—all within a two‑hour maintenance window.

**Action:**  
1. **Drain Node‑7** – ran `POST /_cluster/settings?flat_settings=true` to set `"cluster.routing.allocation.enable":"none"` for the node.  
2. Used Kibana Dev Tools: `GET /_cat/shards?v&h=index,shard,node,prirep,state` to list shards on Node‑7.  
3. Reassigned each shard with `POST /_cluster/reroute` commands, ensuring primary replicas were moved first.  
4. Monitored shard allocation progress via `GET /_cluster/health?level=shards`.  
5. Once all shards were green on other nodes, removed Node‑7 from the discovery list (`DELETE /_nodes/node-7`).  
6. Updated the cluster’s static config and restarted the node to bring it offline.

**Result:**  
The rebalancing completed in 45 minutes with no query failures. Query latency dropped back below 250 ms, and heap usage on remaining nodes stabilized at ~60%. I learned how to orchestrate shard movement while keeping the cluster healthy, and documented a repeatable playbook that now serves as our standard node‑removal procedure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
