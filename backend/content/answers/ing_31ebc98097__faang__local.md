---
qid: ing_31ebc98097__faang__local
question: 'Explain: the idea so i''m a little bit — System Design of Doordash: Geo-Hashing
  and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 533
total_tokens: 784
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:40:15-05:00'
sources: []
---

**Clarify**  
We’re asked how DoorDash could build a scalable, real‑time location system using **Geo‑hashing** (for efficient spatial queries) and **WebSockets** (for low‑latency push). I’ll assume: *a large user base (millions of riders/diners), frequent position updates (~1 Hz per rider, less for drivers), and the need to match orders to nearby couriers.*

---

### Approach  

1. **Geo‑hashing layer**  
   - Convert lat/long into a hierarchical string (e.g., H3 or geohash).  
   - Store each courier’s current bucket in Redis with TTL = 5 s; update on every GPS ping.  
2. **Order routing**  
   - When an order arrives, compute its bucket and query neighboring buckets for active couriers.  
   - Return the nearest N couriers (k‑NN) to the dispatcher API.  
3. **Real‑time updates via WebSockets**  
   - Each courier’s mobile app opens a persistent WS connection to the server.  
   - Server pushes “order‑assigned” or “pickup/finish” events; clients can also send position pings over the same channel (binary payload).  

---

### Depth  

- **Complexity:** O(1) for bucket lookup in Redis, O(k log k) for sorting nearest couriers.  
- **Scalability:** Horizontal sharding of Redis by hash prefix; WebSocket servers behind a load balancer with sticky sessions.  
- **Consistency:** Use optimistic locking on courier status to avoid double‑assignment.  

---

### Edge Cases  

- **GPS dropouts** → fall back to last known bucket, mark as “offline” after TTL.  
- **High churn** (many couriers logging in/out) → batch updates to reduce traffic.  
- **Boundary buckets** → include adjacent cells to avoid missing nearby couriers.  

---

### Optimize & Communicate  

1. **Batch position updates**: send 10 updates per second as a single binary message.  
2. **Back‑pressure handling** on WebSockets (window size).  
3. **Explain trade‑offs**: geohash gives O(1) lookup but less precise; H3 offers uniform cell sizes and better k‑NN performance.  

By combining fast spatial indexing with low‑latency push, DoorDash can deliver near‑real‑time order matching at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
