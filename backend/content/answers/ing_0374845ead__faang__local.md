---
qid: ing_0374845ead__faang__local
question: 'Explain: Summary — Pub/Sub | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 524
total_tokens: 756
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:51:53-05:00'
sources: []
---

**Clarify**

You’re asked to design a **Pub/Sub system**—a publish‑subscribe messaging layer that decouples producers (publishers) from consumers (subscribers).  
Assumptions to confirm: throughput needs, message durability vs. latency trade‑offs, ordering guarantees per topic, scale of topics/subscriptions, and whether the system must be globally distributed.

---

**Approach**

1. **Core primitives** – Topics, partitions, subscriptions, offsets.  
2. **Storage layer** – Append‑only log (e.g., segmented files or RocksDB) per partition for durability.  
3. **Metadata service** – ZooKeeper/etcd to manage topics, partitions, leader election, and consumer group state.  
4. **Load balancer / dispatcher** – Route publishers to the correct partition leader; distribute consumers across replicas for scalability.  
5. **Consumer protocol** – Pull‑based fetch with offset commits; optional push via websockets or long polling.

---

**Depth**

- *Partitioning*: Hash key → partition ensures parallelism & ordering per key.  
- *Replication*: Master–slave replication with asynchronous writes; leader election guarantees consistency.  
- *Fault tolerance*: On failure, a follower becomes leader; consumers re‑subscribe to new leader using offsets.  
- *Back‑pressure*: Store‑side flow control (e.g., segment size limits) and consumer side “fetch” window.  

Complexities:  
- **Write** ≈ *O(1)* amortized per log append, plus replication delay.  
- **Read** ≈ *O(log N)* to seek offset + *O(k)* for k messages.  
- **Scalability**: Linear with partitions; horizontal scaling by adding brokers.

---

**Edge Cases**

- Duplicate deliveries on consumer restart → idempotent processing or deduplication.  
- Message size > segment limit → split across segments.  
- Out‑of‑order deletes of topics – require tombstone markers to avoid stale reads.  

Testing: unit tests for log append/seek, integration tests simulating broker failures and partition rebalancing.

---

**Optimize & Communicate**

To reduce latency, use in‑memory caches for hot partitions and batch writes. For global reach, shard metadata by region and replicate logs across data centers with eventual consistency. When explaining to interviewers, emphasize the trade‑offs between durability, throughput, and complexity—key criteria top FAANGs evaluate.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
