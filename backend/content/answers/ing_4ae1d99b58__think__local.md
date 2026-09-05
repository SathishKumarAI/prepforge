---
qid: ing_4ae1d99b58__think__local
question: 'Explain: Candidate — Real Time Presence Platform System Design - System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 510
total_tokens: 702
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:19:45-05:00'
sources: []
---

**1️⃣ Clarify & Assume**  
- Ask whether “Real‑Time Presence” means user status (online/offline) or location tracking.  
- Assume we need low latency, high throughput, fault tolerance, and a scalable data model.  
- Note constraints: millions of concurrent users, strict 50 ms update window, eventual consistency acceptable for some aggregates.

**2️⃣ Mental Model / Framework**  
Use the classic *system‑design* structure:  
- **Requirements & Constraints** → Functional (presence updates, queries) + Non‑functional (latency, scale).  
- **High‑level Architecture** → Frontend → API gateway → Presence service.  
- **Data Flow & State Management** → In‑memory store, message queue, persistent DB.  
- **Scalability / Reliability** → Horizontal scaling, sharding, replication, failover.  

**3️⃣ Step‑by‑Step Reasoning**  
1. Define APIs: `updatePresence(userId, status)`, `getStatus(userIds)`.  
2. Choose data store: Redis for hot cache (fast reads/writes), PostgreSQL/NoSQL for durable logs.  
3. Use a publish/subscribe bus (Kafka/RabbitMQ) to propagate updates to interested clients via WebSocket or long‑polling.  
4. Partition users by hash of `userId` → shard Redis clusters, ensure even load.  
5. Implement “watch” service that pushes changes to connected clients; use connection pooling & heartbeats.  
6. Add monitoring: latency dashboards, request counters, error rates.  

**4️⃣ Common Traps**  
- Ignoring **client churn**: stale connections can flood the system.  
- Over‑optimizing for read at expense of write consistency.  
- Forgetting to handle **failover** in Redis (master–replica).  
- Underestimating **message duplication** if using Kafka without idempotence.

**5️⃣ Sanity Check & Communicate**  
- Verify latency: 50 ms end‑to‑end → test with simulated traffic.  
- Ensure data consistency: eventual sync between cache and DB.  
- Explain trade‑offs: e.g., using Redis gives speed but needs persistence layer for audit.  

By following this structured, step‑wise approach you can confidently design a robust Real‑Time Presence Platform that meets both functional and performance goals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
