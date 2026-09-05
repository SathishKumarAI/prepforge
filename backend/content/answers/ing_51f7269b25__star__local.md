---
qid: ing_51f7269b25__star__local
question: 'Explain: Master-eligible node considerations — Add and Remove Elasticsearch
  nodes | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 397
total_tokens: 639
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:12:24-05:00'
sources: []
---

**Situation**  
In the spring of 2024 I was leading a migration of our e‑commerce search stack from an on‑premise cluster to Elastic Cloud. The production cluster had 12 data nodes and only two master‑eligible nodes, but the new environment required scaling to 20 data nodes while keeping high availability.

**Task**  
I needed to design a strategy for adding and removing master‑eligible nodes that would avoid split brain, minimize downtime, and keep cluster health above 95 % during the transition.

**Action**  
First, I reviewed the cluster’s quorum rules: with an odd number of master‑eligible nodes (5 after the change) the minimum quorum is 3. I added a new master‑eligible node on a separate availability zone to reduce single‑point failure risk. Before removal, I verified that `cluster.routing.allocation.cluster_concurrent_rebalance` was set to 4 and that all shards were fully allocated. I used the Cluster State API to confirm that the cluster had 5 masters elected and that no master elections were in progress. When removing an old master‑eligible node, I ran a rolling drain via the `Cluster Reroute API`, moved its shards off it, and set `node.master: false` on the target node to prevent accidental election during rebalancing.

**Result**  
The migration completed with zero service interruption; cluster health stayed at 100 % throughout. We reduced master‑eligible nodes from 2 to 5 without increasing latency (average query time remained 12 ms). I learned that balancing the number of master nodes against the total node count is critical, and that pre‑emptive shard draining combined with proper API usage can keep the cluster stable during topology changes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
