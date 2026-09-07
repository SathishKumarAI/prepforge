---
qid: ing_5587325039__faang__local
question: 'Explain: Presence Platform With Pub-Sub Server — Real Time Presence Platform
  System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 548
total_tokens: 791
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:02:50-05:00'
sources: []
---

**1️⃣ Clarify**  
We’re asked to design a *real‑time presence platform* (think “who’s online?”) that uses a publish–subscribe server so clients can subscribe to presence updates of other users.  
Assumptions:  
- Scale: millions of concurrent users, tens of thousands of active presence changes per second.  
- Latency target < 200 ms for update propagation.  
- Strong consistency for “online” status is desirable; eventual consistency acceptable for offline.  
- Clients connect via WebSocket or long‑polling.

**2️⃣ Approach**  
1. **Presence Store** – fast key/value DB (Redis, DynamoDB) mapping `user_id → state` with TTLs.  
2. **Event Bus** – Kafka/NSQ topic “presence-changes”. Producers (auth/logout services) publish events; consumers are subscription workers.  
3. **Subscription Service** – a cluster of stateless workers that keep open WebSocket connections to clients and forward relevant messages from the bus.  
4. **Shard & Partitioning** – partition by user hash so each worker handles a subset, enabling horizontal scaling.  
5. **Cache** – in‑memory per‑worker cache for quick lookups; invalidated on events.

**3️⃣ Depth**  
- **Write path:** Auth service writes to Redis (set TTL 60 s), publishes event → Kafka.  
- **Read path:** Client subscribes → worker registers interest, reads current state from Redis and sends it. Subsequent changes are pushed via Kafka consumer streams.  
- **Complexity:** O(1) for store ops; event propagation is linear in number of interested clients (handled by partitioning).  
- **Fault tolerance:** Replicated Kafka partitions; Redis Sentinel/Cluster; stateless workers.

**4️⃣ Edge Cases**  
- Client disconnects: cleanup subscription mapping.  
- Network partitions: stale TTL may keep user “online”; mitigate with heartbeats.  
- Sudden spikes: auto‑scale worker pool; backpressure on Kafka.

**5️⃣ Optimize & Communicate**  
- **Back‑pressure handling:** flow control in workers, batching messages.  
- **Security:** JWT auth per WebSocket handshake; rate‑limit subscription requests.  
- Explain trade‑offs (Redis vs. DynamoDB for latency), and how partitioning keeps the system horizontally scalable while maintaining low‑latency updates.  

This design balances real‑time guarantees with high scalability, mirroring patterns used by Meta’s presence services or Google’s real‑time APIs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
