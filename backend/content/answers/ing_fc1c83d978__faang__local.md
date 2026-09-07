---
qid: ing_fc1c83d978__faang__local
question: 'Explain: Terminology — Real Time Presence Platform System Design - System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 510
total_tokens: 747
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:26:00-05:00'
sources: []
---

**Clarify**  
We’re asked to design a *Real‑Time Presence Platform*—a system that tracks user status (online/offline/idle) and exposes it instantly to clients. I’ll assume:  

- High cardinality (millions of users).  
- Sub‑second freshness is required.  
- Clients consume updates via WebSocket or push APIs.  
- We need durability, horizontal scalability, and low latency.

**Approach**  
1. **Data model** – store `user_id → status + timestamp` in a distributed key‑value store (e.g., Redis Cluster).  
2. **State ingestion** – each client sends a “heartbeat” or state change; an API gateway routes to a stateless microservice that writes the new state and publishes a message on a pub/sub topic.  
3. **Event propagation** – use Kafka (or Pulsar) as the backbone: services subscribe to user‑state topics, filter by interested parties, and forward updates via WebSocket or push.  
4. **Client subscription** – maintain a per‑client “subscription set” in Redis; when an update arrives, look up all subscribers and push.  
5. **Resilience** – keep a write‑through cache + persistent store (Cassandra/Spanner) for audit/history.

**Depth**  
- *Write path*: O(1) Redis `SET` + Kafka `PUBLISH`.  
- *Read path*: clients read from local cache; updates via pub/sub.  
- *Scalability*: sharding by user hash; hot keys handled by sticky routing or dedicated shards.  
- *Consistency*: eventual consistency is acceptable; we use optimistic updates and idempotent messages.

**Edge Cases**  
- Network partitions: fallback to last known state in cache.  
- Rapid churn (many status flips): backpressure on Kafka, use compression & batching.  
- Offline clients: store pending events until reconnection or TTL expires.

**Optimize & Communicate**  
We can improve latency by using a *direct‑to‑client* push via WebSocket multiplexing, reduce hops. For cost, we’d monitor hot shards and auto‑scale Redis nodes. In an interview I’d walk through these trade‑offs, justify each component, and highlight how the design meets FAANG expectations for scale, reliability, and clarity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
