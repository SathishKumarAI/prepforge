---
qid: ing_63933b912e__faang__local
question: 'Explain: Adding master-eligible nodes — Add and Remove Elasticsearch nodes
  | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 466
total_tokens: 705
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:35:02-05:00'
sources: []
---

**Clarify**  
We’re asked how adding or removing *master‑eligible* nodes affects an Elasticsearch cluster. I’d confirm the cluster is using a single‑zone or multi‑AZ setup, that all nodes run the same version, and we want to keep data availability during the change.

**Approach**  
1. Identify current master‑eligible count & quorum.  
2. For *adding*: bring up a new node, wait for it to join, then trigger a cluster re‑balance if needed.  
3. For *removing*: decommission the target node (e.g., `DELETE /_cluster/voting_config_exclusions/<id>`), let the cluster elect a new master, and optionally delete its data.

**Depth**  
- **Quorum**: Master election requires >50 % of master‑eligible nodes. Adding a node increases quorum, making elections more robust but can delay them slightly due to extra heartbeats. Removing a node reduces quorum; if it drops below 50 %, the cluster will lose master and become read‑only until a new master is elected.  
- **Rebalancing**: After adding, shards may not redistribute automatically unless `cluster.routing.allocation.enable` is set to “all” or a manual re‑balance is triggered (`POST /_cluster/reroute`). Removing can trigger shard relocation from the departing node’s data.  
- **Failure domain**: Place new master nodes in different availability zones for resilience.

**Edge Cases**  
- Adding when the cluster is already at max nodes may cause resource contention.  
- Removing a master while it is currently elected will pause writes until a new master is chosen.  
- Network partitions can lead to split‑brain if quorum isn’t maintained.

**Optimize & Communicate**  
Explain that adding master nodes improves fault tolerance but slightly increases election latency; removing should be done during low traffic windows and with careful monitoring of cluster health (`/_cluster/health`). Emphasize using rolling upgrades and snapshots to safeguard data. This structured narrative shows clear problem understanding, methodical solution steps, technical depth, and awareness of operational risks—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
