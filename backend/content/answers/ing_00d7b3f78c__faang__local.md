---
qid: ing_00d7b3f78c__faang__local
question: 'Explain: Real-Time Presence Platform API — Real Time Presence Platform
  System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 462
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:46:20-05:00'
sources: []
---

**1️⃣ Clarify**  
We’re asked to design a *Real‑Time Presence API* (e.g., “online/idle/offline” for users). Key assumptions:  

- Millions of concurrent users, each can change state every few seconds.  
- Clients query presence via REST/WebSocket and receive push updates.  
- Strong consistency is not required; eventual visibility is fine.  

**2️⃣ Approach**  

1. **Event ingestion** – WebSocket or long‑poll endpoint writes “state_change” events to a message broker (Kafka).  
2. **State store** – A distributed cache (Redis Cluster) holds the latest state per user, TTL = 30 s for “idle”.  
3. **Push service** – Consumes Kafka stream, updates Redis, then pushes via push‑gateway (FCM/APNs/WebSocket) to online clients.  
4. **Read API** – Simple GET that reads from Redis; fallback to DB if miss.  

**3️⃣ Depth**  

- *Scalability*: Kafka partitions per shard → linear scaling; Redis Cluster shards by user hash.  
- *Latency*: <50 ms for state change propagation (broker + cache).  
- *Fault tolerance*: Replicated Kafka, Redis Sentinel.  
- *Consistency trade‑off*: Accept minor staleness (~100 ms) to avoid distributed locks.  

**4️⃣ Edge Cases**  

- **User disconnects abruptly**: no event → TTL expires → state becomes “offline”.  
- **Burst of changes** (e.g., game lobby): Kafka backpressure + rate limiting.  
- **Large fan‑out**: limit push per user to 1 kB, batch messages when many subscribers.

**5️⃣ Optimize & Communicate**  

- Use *Read‑Through* cache for infrequent queries to reduce DB load.  
- Monitor “stale” metrics; if latency > threshold, auto‑scale Kafka brokers.  
- Explain that the design balances consistency vs. speed, satisfies millions of users, and can grow horizontally by adding more partitions and Redis shards.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
