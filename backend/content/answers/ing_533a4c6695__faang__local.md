---
qid: ing_533a4c6695__faang__local
question: 'Explain: Topic — Pub/Sub | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 533
total_tokens: 765
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:57:44-05:00'
sources: []
---

**Clarify**  
*Problem:* Design a scalable publish/subscribe (Pub/Sub) messaging system that supports many producers and consumers with low latency, high throughput, and fault‑tolerance.  
*Assumptions to confirm:* 1) Messages are fire‑and‑forget; 2) Topics can have thousands of partitions; 3) Consumers require at-least‑once delivery; 4) System must handle dynamic scaling and graceful shutdown.

**Approach**  
1. **Topic → Partitioning:** Hash message key → partition to ensure ordering per key while parallelizing load.  
2. **Broker Layer:** Each broker owns a subset of partitions, stores logs on disk (append‑only).  
3. **Replication & Leader Election:** Use Raft/Paxos for leader/follower roles per partition; replicas guarantee durability and high availability.  
4. **Producer API:** Batch writes → write to local log then async replication to followers.  
5. **Consumer API:** Maintain offset per partition; fetch from broker in batches, commit offsets to a separate metadata store (e.g., ZooKeeper or Kafka’s __consumer_offsets).  
6. **Load Balancing & Scaling:** Brokers register with a cluster manager; topics can be re‑partitioned by adding brokers and moving replicas.

**Depth**  
- *Throughput:* Append‑only logs + batching → ~10k msg/s per broker.  
- *Latency:* Producer write latency ≈ 1 ms (local sync) + replication lag.  
- *Fault tolerance:* If leader fails, follower takes over within <100 ms; consumers continue reading from new leader.  
- *Complexity:* Storage O(N); network O(P·R) for replication.

**Edge Cases**  
- **Hot partitions:** throttle producers or add more replicas.  
- **Consumer lag spikes:** back‑pressure via “max.poll.records”.  
- **Topic deletion while in use:** ensure all consumers finish current batch before removal.

**Optimize & Communicate**  
- Introduce a *topic‑level compaction* for key/value streams to reduce storage.  
- Use *exactly‑once semantics* by idempotent producers and transactional logs if required.  
- Explain trade‑offs: stronger consistency (strict leader quorum) increases latency; relaxed quorum improves throughput but risks data loss.

This design balances scalability, reliability, and simplicity—core attributes for a production Pub/Sub service in a FAANG environment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
