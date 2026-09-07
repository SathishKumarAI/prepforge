---
qid: ing_51f7269b25__faang__local
question: 'Explain: Master-eligible node considerations — Add and Remove Elasticsearch
  nodes | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 591
total_tokens: 830
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:55:09-05:00'
sources: []
---

**Clarify**

You’re asked to explain how a *master‑eligible* node in an Elasticsearch cluster handles adding or removing nodes—i.e., why master‑eligibility matters, and what steps the cluster takes when nodes join or leave.

Key assumptions:  
- The cluster uses the default 3‑node quorum.  
- Nodes can be master‑eligible or data/ingest only.  
- We’re focusing on the master’s view of state changes, not low‑level networking details.

**Approach**

1. Review the role of a master node in cluster coordination.  
2. Outline the sequence when a node is added (join) or removed (leave).  
3. Highlight consistency guarantees and failure handling.  

**Depth**

A *master‑eligible* node runs the **Cluster State Service**, which holds the authoritative view of indices, shards, and node membership. When a new node connects:

1. The node sends a `cluster_state` request to any master‑eligible peer.  
2. The current master replies with the latest cluster state (including shard allocations).  
3. The new node updates its local copy, then registers itself in the master’s list of nodes.  
4. If it is also master‑eligible, it participates in elections; otherwise it remains a data/ingest worker.

When a node leaves (gracefully or due to failure):

1. The departing node notifies the master via `node_left`.  
2. The master removes its entry and triggers a new cluster state, re‑allocating shards that were assigned to that node.  
3. If the departed node was master‑eligible and it was the current master, an election is triggered: alive master‑eligible nodes vote; the one with the highest term becomes the new master.

The cluster guarantees **majority (quorum)** agreement: at least ⌊N/2⌋ + 1 master‑eligible nodes must be present to elect a master and commit state changes. This prevents split‑brain scenarios.

**Edge Cases**

- *Split brain*: two masters claim leadership → resolved by the higher term; older master steps down.  
- *Network partition*: one side may lose quorum, becoming read‑only or unable to allocate shards until connectivity restores.  
- *Over‑provisioned data nodes without master eligibility*: safe, but cannot become master if all eligible fail.

**Optimize & Communicate**

Emphasize that master‑eligibility is a safety property: only a majority of such nodes can change cluster state, ensuring consistency while allowing the rest to scale horizontally. In an interview, I’d finish by noting trade‑offs—adding more master‑eligible nodes increases fault tolerance but adds coordination overhead—and how Elasticsearch balances this with its default 3‑node quorum.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
