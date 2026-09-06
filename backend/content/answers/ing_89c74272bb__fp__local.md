---
qid: ing_89c74272bb__fp__local
question: 'Explain: High Availability — Apache Kafka'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 346
total_tokens: 513
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:57:59-05:00'
sources: []
---

**High Availability in Apache Kafka**

At its core, Kafka is a distributed commit‑log: it must guarantee that every producer’s record survives crashes and network partitions while remaining available for consumption. The fundamental problem is *fault tolerance under concurrency*. If a broker dies, the system should still accept writes, preserve order, and keep consumers online.

Kafka solves this by **replicating each partition** across multiple brokers (the replication factor). One replica is elected leader; all producers write to it. Followers stream from the leader and apply records locally. The *leader election* algorithm uses ZooKeeper (or KRaft) to maintain a consistent view of cluster state, ensuring that at least one broker remains reachable. If the leader fails, an in‑sync follower automatically takes over—this is the *in‑sync replica* (ISR) set. Only ISRs can become leaders, guaranteeing that data has already been durably stored on disk.

The deeper principle here is **consistency‑availability trade‑off** under CAP: Kafka opts for CP with tunable consistency via `min.insync.replicas`. By requiring a minimum number of replicas to acknowledge writes, it preserves durability while still allowing the system to continue operating if some nodes are down.

*Non‑obvious insight*: The ISR set acts as a **dynamic quorum**. Even when network partitions occur, Kafka can keep portions of the cluster live and serve consumers locally, yet prevent split‑brain writes by rejecting producer traffic until the partition heals. This subtle use of quorums is what lets Kafka achieve true high availability without sacrificing order or durability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
