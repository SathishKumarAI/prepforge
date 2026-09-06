---
qid: ing_f20faf5222__fp__local
question: 'Explain: Scalable — Apache Cassandra | Apache Cassandra Documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 360
total_tokens: 531
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:33:47-05:00'
sources: []
---

**Why Cassandra is “scalable”**

At its core, a distributed database must solve *the coordination problem*: how to keep data consistent while allowing every node to accept writes and reads without bottlenecks.  
Cassandra tackles this by **decoupling storage from consistency**:

1. **Consistent hashing + virtual nodes** – Each key is mapped to a token on a ring; partitions are evenly distributed, so adding a new node only reshuffles a small fraction of data (≈ 1/N).  
2. **Eventual consistency with tunable quorums** – A write can be acknowledged after *N* replicas receive it; reads can wait for *M* replicas. The trade‑off between latency and freshness is explicit, so throughput scales linearly: more nodes → more parallel writes.  
3. **Peer‑to‑peer gossip + Merkle trees** – Nodes learn each other’s state without a master; inconsistencies are detected locally and repaired lazily, keeping the system free of single points of failure.

The deeper principle is *information locality*: by ensuring every node owns a contiguous token range, data movement during rebalancing is bounded, and network traffic stays local.  

**Non‑obvious insight:**  
Because Cassandra writes are **append‑only** to immutable SSTables, the system never needs to lock or block during compaction. Compactions run in the background and do not interfere with live traffic, allowing sustained high write throughput even under heavy read load—an architectural choice that is often overlooked when judging scalability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
