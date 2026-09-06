---
qid: ing_6f96f247e0__fp__local
question: 'Explain: History - Built by Facebook — Apachecasandra'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 429
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:01:31-05:00'
sources: []
---

**Why Facebook invented Cassandra**

Facebook’s first‑generation infrastructure was a monolithic MySQL cluster that could not keep up with the relentless growth of user data (millions of messages per second). The fundamental problem was *scalability under unpredictable write traffic* while maintaining *low latency* for reads.  

From an optimization point of view, we need a storage system whose cost function

\[
C(n)=\alpha\,n + \beta\,n^{2}
\]

remains linear in the number of nodes \(n\). Traditional relational databases exhibit a quadratic term because every node must coordinate with all others for consistency. The solution is to **relax consistency** (eventual consistency) and adopt a *distributed hash table* (DHT) that shards data across nodes by a consistent hashing ring. This removes the \(\beta\,n^{2}\) component.

Cassandra’s architecture emerged from this insight:

| Requirement | Design choice |
|-------------|---------------|
| **Write‑heavy, append‑only** | Log‑structured merge tree (LSM) with compaction |
| **Decentralized control** | Peer‑to‑peer ring, no master node |
| **High availability** | Replication factor + tunable consistency |
| **Fault tolerance** | Gossip protocol for membership & failure detection |

The non‑obvious insight: *by treating the cluster as a logical “ring” rather than a hierarchy, Cassandra turns the cost of adding nodes from exponential to logarithmic.* Every node only needs to know its immediate neighbors, so when a new machine joins, only a small portion of data is redistributed. This property allowed Facebook to scale its messaging backend from a handful of servers to thousands without rewriting the application layer.

In short, Cassandra was born out of a concrete performance bottleneck and engineered around the principle that *distributed systems should keep coordination local*—a design that has since become the foundation for many modern NoSQL stores.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
