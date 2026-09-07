---
qid: ing_f0d4369463__faang__local
question: 'Explain: Message — Pub/Sub | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 511
total_tokens: 743
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:59:27-05:00'
sources: []
---

**Clarify**  
We’re asked to design a publish‑subscribe messaging system (Pub/Sub). I’d confirm the key requirements: message durability, ordering guarantees, at‑least‑once vs exactly‑once delivery, scale (millions of topics/msgs), latency targets, and failure handling. Also whether we need a global multi‑region deployment or a single data center.

**Approach**  
1. **Core entities** – Topics, Subscriptions, Publishers, Subscribers.  
2. **Storage layer** – Distributed log (e.g., Raft/Kafka style) per topic partition for durability and ordering.  
3. **Metadata service** – Central registry (ZooKeeper/etcd) to track topics, partitions, and subscription offsets.  
4. **Load balancing** – Partitioned topics; each partition handled by a broker; round‑robin or hash‑based assignment of subscribers.  
5. **Delivery guarantees** – Store offset per subscriber; on reconnect, replay from last committed offset (at‑least‑once). Exactly‑once can be added via idempotent processing.  
6. **Scalability** – Horizontal scaling by adding brokers and partitions; use consistent hashing for topic assignment.

**Depth**  
- **Write path:** Publisher → broker partition → append to log (O(1)), ack to publisher.  
- **Read path:** Subscriber pulls from its offset; broker streams messages in order.  
- **Complexity:** O(log N) for metadata lookups, O(1) for appends, O(P) for parallel pulls where P is partition count.  
- **Fault tolerance:** Replicate log segments across 3 replicas (Raft). On broker failure, a follower promotes to leader.

**Edge Cases**  
- Back‑pressure when subscribers lag → use flow control or message expiry.  
- Partition splits/merges during scaling – need rebalancing logic.  
- Network partitions causing duplicate delivery; handle with deduplication tokens.

**Optimize & Communicate**  
I’d iterate on the log compaction strategy to reduce storage, add configurable QoS levels, and expose a REST/GRPC API for topic management. In an interview I would sketch these components on a whiteboard, explain trade‑offs (e.g., replication vs latency), and conclude with how this design meets FAANG scalability and reliability standards.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
