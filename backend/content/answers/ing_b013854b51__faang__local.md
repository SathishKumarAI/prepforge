---
qid: ing_b013854b51__faang__local
question: 'Explain: Functional Requirements — Real Time Presence Platform System Design
  - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 554
total_tokens: 791
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:32:47-05:00'
sources: []
---

**1️⃣ Clarify**  
We’re asked to design a *real‑time presence platform* (think “online/offline” status for users, like in Slack or Discord).  
Assumptions:  
- 100 M+ concurrent users, each with up to 10 k active connections.  
- Status updates are low‑latency (< 50 ms) and highly durable (persisted).  
- Clients need push notifications when a peer’s status changes.  

**2️⃣ Approach**  
1. **Client ↔︎ Gateway** – HTTP/WebSocket for handshake, token auth.  
2. **Presence Service** – stateless microservice that receives updates, writes to fast store & publishes events.  
3. **State Store** – in‑memory distributed cache (Redis Cluster or Memcached) with replication for 99.999% availability; fall back to durable DB (Cassandra/Spanner).  
4. **Event Bus** – Kafka/RocketMQ to fan‑out status changes to subscribers.  
5. **Subscription Service** – keeps per‑user “watch list” in the cache, pushes via WebSocket or FCM/APNs.  

**3️⃣ Depth**  
- *Update flow*: Client → Gateway → Presence API → Redis (SET key: user_id → status+ts) + Kafka publish.  
- *Read flow*: Gateway queries Redis for current state; if missing, fetches from DB and caches.  
- *Push flow*: Consumer subscribes to Kafka topics “status‑updates”; on event, looks up watchers in Redis set and pushes via open connections.  
- **Complexity**: O(1) write/read in cache; eventual consistency between cache & DB (read‑through).  
- **Fault tolerance**: Redis Cluster with automatic failover; Kafka replication factor 3 ensures no message loss.  

**4️⃣ Edge Cases**  
- *Network partitions*: Use two‑phase commit on DB writes to avoid stale reads.  
- *High churn*: Rate‑limit updates per user, back‑pressure on Kafka.  
- *Client disconnects*: Heartbeat mechanism; cleanup expired connections in Redis sets.  

**5️⃣ Optimize & Communicate**  
- Add CDN‑edge WebSocket proxies for global latency reduction.  
- Use Bloom filters to avoid unnecessary DB hits when status is unchanged.  
- Present the diagram, then walk through a sample “Alice comes online” scenario, highlighting each component’s role and failure recovery path.  

This plan balances low latency, high throughput, and durability—key metrics for a FAANG‑grade real‑time presence system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
