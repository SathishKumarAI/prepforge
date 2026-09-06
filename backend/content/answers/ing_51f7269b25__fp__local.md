---
qid: ing_51f7269b25__fp__local
question: 'Explain: Master-eligible node considerations — Add and Remove Elasticsearch
  nodes | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 516
total_tokens: 692
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:59:34-05:00'
sources: []
---

### Why “master‑eligible” matters

Elasticsearch is a **distributed consensus system** built on the Raft‑like *election* protocol of the underlying Lucene cluster.  
A *master* node holds cluster metadata (index mappings, shard allocations, etc.). If more than one master could exist at once, two masters would diverge, leading to split‑brain and inconsistent indices. Therefore **exactly one** node must be elected as master at any time.

### Adding a master‑eligible node

When you bring up a new node with the `node.master: true` flag (or the default), it joins the cluster as a *candidate*.  
1. **Discovery** – the node learns about existing masters through multicast/ping.  
2. **Election** – if no current master is reachable or the cluster is in an *unassigned* state, the new node may become master.  
3. **State sync** – once elected, it pulls the latest metadata from the former master and propagates its own state to others.

The system tolerates adding masters because the election algorithm guarantees that only one will win: the one with the highest ID that can reach a majority of current master‑eligible nodes.

### Removing a master‑eligible node

If you shut down or demote a master‑eligible node, the cluster must still have a *majority* (⌊N/2⌋ + 1) of remaining masters to continue operating.  
- **Safe removal**: first ensure at least that many masters remain reachable.  
- **Rebalance** – shards previously allocated to the departing node are re‑allocated by the new master, which requires a short period of “recovery” where writes may be throttled.

If you remove too many master nodes (leaving < ⌊N/2⌋ + 1), the cluster becomes *unavailable* until another master is added or the remaining nodes are re‑configured to form a new majority.

### Non‑obvious insight

Most people think “master‑eligible” is just a flag. In reality it is the **gatekeeper of consistency**: every write must be acknowledged by a majority of masters. Thus, even if you add dozens of data nodes that never become master, you still need enough master‑eligible nodes to satisfy the quorum requirement. Forgetting this can silently cripple writes after a network partition or hardware failure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
