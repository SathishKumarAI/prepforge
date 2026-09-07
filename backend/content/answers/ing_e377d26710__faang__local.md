---
qid: ing_e377d26710__faang__local
question: 'Explain: Connection Load — Design WhatsApp | System Design Interview |
  AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 512
total_tokens: 751
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:27:51-05:00'
sources: []
---

**Clarify**  
The interviewer wants a high‑level design of a *connection load* system for WhatsApp: how many concurrent sockets/long‑polling connections the backend must sustain and how we scale it while keeping latency low. Assume millions of users, real‑time messaging, and eventual consistency for offline delivery.

**Approach**  
1. **Requirements** – define throughput (µs per message), latency (<200 ms), fault tolerance, and data durability.  
2. **Architectural layers** – front‑end proxies → load balancer → connection manager (WebSocket/HTTP‑2) → routing service → message store & queue.  
3. **Connection pool** – each user gets a persistent WebSocket; we shard by device ID, using consistent hashing to route to the same worker.  
4. **Scaling strategy** – horizontal scaling of workers; auto‑scale based on active connections per node (e.g., 50k). Use Kubernetes HPA or custom metrics.

**Depth**  
- *Load balancer* uses sticky sessions via client IP hash to keep a user on one worker.  
- *Connection manager* keeps a map<deviceID, socket> in memory; when a new connection arrives, it checks the shard and updates the map atomically (Redis with Lua or local lock).  
- *Routing service* resolves recipients: if online → push via their socket; else enqueue to Kafka topic for offline delivery.  
- *Complexity*: O(1) per message routing; memory ≈ #connections × socket overhead (~50 MB per 100k connections).  
- *Trade‑offs*: Sticky sessions simplify state but reduce elasticity; use a lightweight session store (Redis) if you need true horizontal scaling.

**Edge Cases**  
- Sudden spikes (e.g., event start) → over‑provisioning, circuit breaker.  
- Device churn (logout/login) → cleanup stale sockets.  
- Network partitions → retry logic and backpressure on Kafka.

**Optimize & Communicate**  
Explain that we’ll monitor connection count per node; if it exceeds 70 % of capacity, spin up a new pod. We’ll also shard Redis across nodes to avoid single‑point bottlenecks. In the interview I’d sketch this on whiteboard, label data flows, and justify each design choice with performance metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
