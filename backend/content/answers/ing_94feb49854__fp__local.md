---
qid: ing_94feb49854__fp__local
question: 'Explain: Distributed — Apache Cassandra | Apache Cassandra Documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 397
total_tokens: 567
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:22:02-05:00'
sources: []
---

### Why Cassandra is *Distributed* – a first‑principles view

The core problem a database must solve in the cloud era is **consistent availability at scale**: we want every node to answer any query instantly, even if some nodes fail or network partitions occur.  
Cassandra tackles this with **Paxos‑inspired quorum replication** and **consistent hashing**.

1. **Consistent hashing** distributes keys across a ring of nodes, giving each node only a *local* responsibility (≈ 1/N of the data). This guarantees that adding or removing machines costs O(1) data movement—an optimization principle: keep changes local to preserve throughput.  
2. **Replication factor r** ensures r replicas per key. When a write arrives, it is sent to its *primary* and the next r‑1 nodes on the ring. The client chooses `w` replicas that must acknowledge (write quorum). Similarly, reads use `r` replicas and merge results by timestamp (last‑write‑wins).  
3. **Quorum intersection** (`w + r > N`) guarantees at least one replica is common to any read/write pair, thus preserving *eventual consistency* without a global lock—an embodiment of the CAP trade‑off.

#### Non‑obvious insight
The ring’s *virtual nodes* (vnodes) are key: they let each physical node host multiple logical partitions. This decouples physical capacity from logical ownership, enabling seamless rebalancing and reducing hotspot formation—something most tutorials gloss over but is essential for the “always on” promise.

In short, Cassandra’s distributed design is a pragmatic application of quorum logic, consistent hashing, and vnode indirection to satisfy the scalability‑availability consistency trilemma.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
