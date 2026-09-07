---
qid: ing_c354265d79__faang__local
question: 'Explain: Message Throughput — Design WhatsApp | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 496
total_tokens: 736
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:15:06-05:00'
sources: []
---

**Clarify**  
You’re asked to design a *message‑throughput* system for a chat app like WhatsApp. The goal is to support millions of users sending thousands of messages per second while guaranteeing at‑least‑once delivery, ordering per conversation, and low latency (<200 ms). Clarify: do we need offline sync? What persistence model (append‑only log vs relational)? Assume we want horizontal scalability and eventual consistency for cross‑region replication.

**Approach**  
1. **Client → Gateway**: TLS/TCP or WebSocket with connection pooling.  
2. **Message ingestion layer**: Use a partitioned message queue (Kafka/RabbitMQ). Partition by *conversation ID* to preserve order.  
3. **Storage**: Append‑only log per conversation in distributed storage (Cassandra/Scylla) for durability and efficient range scans.  
4. **Delivery service**: Workers consume from Kafka, write to storage, then push to recipients via push notifications or long‑polling sockets.  
5. **Presence & read receipts**: Separate lightweight store (Redis) keyed by user → active socket.  

**Depth**  
- *Throughput*: Each Kafka partition can handle ~50 k msg/s; with 100 partitions we reach >5 M msg/s.  
- *Latency*: Ingestion <10 ms, storage write <5 ms, push delivery <50 ms (depending on device).  
- *Ordering*: Partitioning by conversation guarantees FIFO per chat.  
- *Reliability*: Kafka’s replication factor 3 + idempotent producers ensures at‑least‑once; consumers track offsets to avoid duplicates.

**Edge Cases**  
- High burst traffic → auto‑scale partitions and brokers.  
- Offline users → store unsent messages until presence is detected.  
- Message size spikes (media) → route through separate media pipeline, store URLs in the log.

**Optimize & Communicate**  
Start with a minimal viable design: single Kafka cluster + Cassandra, then iteratively add geo‑replication and CDN for media. Explain trade‑offs: Kafka gives ordering but adds latency; Cassandra offers fast writes but eventual consistency. Conclude that this architecture scales linearly, meets throughput requirements, and is maintainable by leveraging proven open‑source components.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
