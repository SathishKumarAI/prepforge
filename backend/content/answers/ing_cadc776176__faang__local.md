---
qid: ing_cadc776176__faang__local
question: 'Explain: Database Replication — System Design Resources'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 477
total_tokens: 709
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:31:13-05:00'
sources: []
---

**Clarify**  
You’re asking how to design a system that keeps multiple database replicas in sync—so each node can read/write and the data remains consistent across clusters. I’ll assume we need *low latency reads*, *eventual consistency* for writes, and support for geographically distributed sites.

**Approach**  
1. Pick a replication model (master‑only, multi‑master, or quorum).  
2. Design the change‑propagation layer (log shipping, change data capture, or gossip).  
3. Handle conflict resolution and failure detection.  
4. Expose a client API that abstracts location‑aware routing.

**Depth**  
- **Master‑slave**: single writer; replicas pull from a WAL. *Read latency* ≈ network + disk seek; write latency = log commit time. Consistency is strong at the master, eventual elsewhere.  
- **Multi‑master** (e.g., Dynamo): each node accepts writes, propagates via vector clocks. Uses *last‑write-wins* or application‑level merges. Replication lag bounded by network and batch size; consistency tuned by read/write quorum `R` & `W`. Complexity: O(log N) for conflict resolution, but high write latency under partition.  
- **Quorum**: a hybrid that guarantees strong consistency if `R + W > N`.  

Use *gossip* for membership and *anti‑entropy* (Merkle trees) to reconcile divergent replicas. For geo‑distribution, add a *global namespace* with per‑region leaders and *stale‑read windows*.

**Edge Cases**  
- Network partitions: nodes may diverge; need CAP trade‑off discussion.  
- Clock skew in vector clocks: resolve via Lamport timestamps or hybrid logical clocks.  
- Large binary blobs: store separately (object store) and replicate metadata only.

**Optimize & Communicate**  
Improve throughput by batching writes, compressing WALs, and using SSDs for replica logs. Explain trade‑offs to stakeholders: stronger consistency → higher latency; weaker → faster reads but potential conflicts. Conclude with a diagram of the replication topology and a brief performance table to illustrate expected latencies under different quorum settings.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
