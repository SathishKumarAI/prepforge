---
qid: ing_63933b912e__fp__local
question: 'Explain: Adding master-eligible nodes — Add and Remove Elasticsearch nodes
  | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 515
total_tokens: 691
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:36:46-05:00'
sources: []
---

### Why and How to Add or Remove Master‑Eligible Nodes

When an Elasticsearch cluster runs, **master‑eligible nodes** are the only ones that can elect a master node.  
The core problem they solve is *distributed consensus*: we need a single “truth” about the cluster state (indices, shards, routing) while still allowing any node to join or leave without breaking service.

#### 1. Consensus through majority voting
- A master election uses **Paxos‑like** voting: at least ⌊N/2⌋ + 1 nodes must agree on a candidate.
- Adding a node increases N, thereby raising the quorum threshold.  
  *Why it matters*: If you add a node but leave the cluster with an even number of master‑eligible nodes (e.g., 4), the quorum becomes 3. A network partition that isolates two nodes still leaves 2 nodes unable to elect a master—cluster stalls.

#### 2. Reducing “split brain”
- With an odd number of eligible nodes, a split can never yield two equal halves; one side will always have the majority and keep the cluster alive.
- Removing a node must also preserve an odd count; otherwise you risk an instant split when that node leaves.

#### 3. Operational safety
- **Add**: `elasticsearch.yml` → `node.master: true`; restart → node joins, re‑elects if necessary.  
- **Remove**: First disable master eligibility (`node.master: false`) or shut down the node; the remaining nodes elect a new master automatically.

#### Non‑obvious insight
> **The quorum threshold is *not* a static 50 % of the current cluster size—it’s always “majority of the *current total* master‑eligible nodes.”**  
When you add a node, the required majority jumps from ⌊(N−1)/2⌋+1 to ⌊N/2⌋+1. If you ignore this, a single addition can make an otherwise healthy cluster suddenly unable to elect a master after a transient network glitch. This subtle shift is why Elastic Docs insist on keeping the master‑eligible count odd *and* updating the quorum rule immediately upon topology changes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
