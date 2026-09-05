---
qid: ing_1862df3692__fp__local
question: 'Explain: Interviewer — Real Time Presence Platform System Design - System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 599
total_tokens: 773
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:57:31-05:00'
sources: []
---

**Why a “real‑time presence” service must be built the way it is**

A presence platform tells *who* is online and *when* they change state (online/offline/idle).  
The fundamental problem: deliver every state transition to all interested parties within milliseconds while scaling to millions of users.  

1. **Event sourcing as the backbone** – each state change is an immutable event (`user_id, timestamp, status`).  
   *Why?* Events are append‑only, naturally partitioned by user, and give a single source of truth that can be replayed for any consumer (analytics, recovery).  
2. **Distributed stream processing** – Kafka or Pulsar partitions the event stream by `user_id`. A stateless worker per partition updates an in‑memory cache (`Redis`, `DynamoDB` with TTL) and publishes a *delta* to all subscribed clients via WebSocket/FCM.  
   *Why?* Partitioning guarantees order per user, while horizontal scaling keeps throughput linear.  
3. **Subscription overlay** – each client holds a lightweight “subscription set” (user IDs they care about). The server pushes only deltas that intersect this set; otherwise it stores them in a buffer until the next poll or reconnect.  
   *Why?* Avoids O(N²) fan‑out and keeps bandwidth proportional to actual interest.  

**Non‑obvious insight:**  
Treat “offline” as an event too, not just the absence of one. In real deployments, network partitions or abrupt disconnects cause clients to linger in a stale state; emitting an explicit *offline* event (with a deterministic timeout) lets every consumer converge deterministically, eliminating hidden race conditions that otherwise lead to ghost users.

---

**High‑level architecture**

```
Client  <─── WebSocket / FCM ──────► Presence Service
   ▲                                      │
   │  events: status changes              ▼
   │                                    Kafka Partitioned Stream
   │                                      ▲
   │                                      │
   │  cache + TTL (Redis)                │
   │                                      │
   └───────────────────────► Analytics/DB
```

- **Latency budget** < 50 ms: achieved by in‑memory cache lookups and direct push.  
- **Durability**: Kafka keeps all events; Redis is the primary source for active users, with a fallback to DB on recovery.  
- **Scalability**: Add partitions → add workers; each worker is stateless except its local cache.  

This design satisfies the core constraints—low latency, high throughput, correctness—and leverages deep principles of event sourcing and stream processing that are often overlooked in “quick‑start” presence tutorials.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
