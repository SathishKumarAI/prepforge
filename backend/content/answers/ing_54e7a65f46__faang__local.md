---
qid: ing_54e7a65f46__faang__local
question: 'Explain: An Abstract Presence Platform — Real Time Presence Platform System
  Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 539
total_tokens: 779
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:01:32-05:00'
sources: []
---

**1️⃣ Clarify**  
We need to design a *real‑time presence platform* (e.g., “online/offline/typing” status for chat). Assume: millions of users, sub‑second latency, high write/read throughput, eventual consistency acceptable for stale data, and we must handle bursts during peak hours. Confirm: persistence model, retention period, and which clients need push vs polling.

**2️⃣ Approach**  
1. **Data Model** – key: `user_id`, value: `{status, last_updated}`.  
2. **Storage Layer** – use a distributed cache (Redis Cluster) for hot data + write‑through to an append‑only log (Kafka) that feeds a persistent store (Cassandra).  
3. **Event Pipeline** – client → HTTP/WS → microservice → publish status event → Kafka → consumer updates Redis & Cassandra.  
4. **Read Path** – clients read from Redis; fallback to Cassandra if cache miss.  
5. **Push Mechanism** – WebSocket or gRPC streams; on status change, push delta to subscribed peers.  
6. **Scalability** – shard by user hash, horizontal scaling of services and Kafka partitions.

**3️⃣ Depth**  
- **Latency**: Cache hit < 1 ms; write propagation ~50 ms via Kafka.  
- **Throughput**: 10k QPS per node; Kafka can handle >100k QPS with proper partitioning.  
- **Consistency**: Eventual – a status may be stale for <200 ms, acceptable for presence.  
- **Fault Tolerance**: Replicated Redis shards, Kafka mirrors, Cassandra multi‑DC replication.

**4️⃣ Edge Cases**  
- User disconnects abruptly → heartbeat timeout triggers offline event.  
- Network partitions → local cache may show stale status; use version timestamps to resolve conflicts.  
- High churn (millions joining/leaving) → backpressure on Kafka consumers; implement rate limiting.

**5️⃣ Optimize & Communicate**  
- **Batching**: Aggregate multiple status updates per user before writing to Cassandra to reduce write amplification.  
- **Compaction**: Use TTL in Redis and delete old presence entries after inactivity period.  
- **Observability**: Instrument latency, cache hit ratio, Kafka lag; alert on thresholds.  
Explain trade‑offs clearly—e.g., choosing eventual consistency for speed vs strong consistency would double write latency.

*Word count: ~215*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
