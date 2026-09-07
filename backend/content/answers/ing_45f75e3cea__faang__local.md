---
qid: ing_45f75e3cea__faang__local
question: How Does the Real-Time Presence Platform Work?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 524
total_tokens: 757
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:26:34-05:00'
sources: []
---

**Clarify**

You’re asking how a *real‑time presence platform* (e.g., for instant messaging or collaboration tools) tracks “online/offline/typing” status in real time.  
Assumptions:  
1. Clients connect via WebSocket or long‑polling.  
2. Presence is per user, possibly per device/session.  
3. System must scale to millions of concurrent users with low latency (< 200 ms).

**Approach**

1. **Event ingestion** – each client emits events (`connect`, `disconnect`, `typing_start`, `typing_stop`).  
2. **State store** – a fast, distributed key‑value store (Redis/Memcached) keyed by user/session to hold current status and timestamps.  
3. **Publish–subscribe** – use a message broker (Kafka or Redis Pub/Sub) so that all servers know when a user’s state changes.  
4. **Expiration logic** – set TTLs on presence keys; if no heartbeat within interval, mark offline automatically.  
5. **Broadcast** – downstream services (notification microservice, UI) subscribe to the channel and push updates via WebSocket or FCM/APNs.

**Depth**

- *Latency*: Event → broker → store update → subscriber ≈ 30–50 ms.  
- *Scalability*: Partition keys by hash ring; each shard handles a subset of users.  
- *Consistency*: Use optimistic locking (e.g., Redis WATCH/MULTI) to avoid race conditions when multiple devices ping simultaneously.  
- *Fault tolerance*: Replicate the store and broker; fall back to polling if WebSocket drops.

**Edge Cases**

- User disconnects abruptly → rely on TTL instead of explicit `disconnect`.  
- Multiple devices: merge states (online if any device online).  
- Network partitions: eventual consistency acceptable for presence.  
- DoS: rate‑limit heartbeat events per IP/user.

**Optimize & Communicate**

To improve, switch from Redis Pub/Sub to Kafka Streams for durability and backpressure handling. Explain trade‑offs: Redis offers sub‑ms latency but no replay; Kafka gives persistence but higher overhead. Highlight that real‑time presence is a classic event‑driven pattern—clear event flow, fast in‑memory state, and publish/subscribe ensures low latency across shards. This structured explanation demonstrates problem understanding, design choices, complexity analysis, and edge‑case handling—all key FAANG interview signals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
