---
qid: ing_8b7b694504__faang__local
question: 'Explain: customer as opposed to you know having — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 491
total_tokens: 742
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:08:37-05:00'
sources: []
---

**Clarify**  
We’re asked to design a location‑based service (e.g., DoorDash’s driver‑customer matching). Key assumptions:  

* Real‑time updates (lat/lon) from thousands of drivers and customers.  
* Near‑real‑time matchmaking within a radius (say 5 km).  
* High read/write throughput, low latency, eventual consistency acceptable for UI.

**Approach**  
1. **Geo‑hashing** to spatially partition the world into buckets (e.g., H3 or S2).  
2. Store each driver/customer’s current bucket in a distributed key‑value store (Redis, DynamoDB).  
3. Use **WebSockets** (or MQTT) for bi‑directional streams: clients push location updates; server pushes nearby driver matches or ETA changes.  
4. Periodic background job to recompute proximity lists based on buckets.

**Depth**  
*Geo‑hashing:* Each update → compute hash, write to bucket key (`bucket:<hash>`). Write latency < 5 ms.  
*Matching:* Query neighboring buckets (±1 in each dimension) → fetch candidate IDs → compute haversine distance server‑side. Complexity ≈ O(k log k) where *k* is candidates per bucket (~10–20).  
*WebSockets:* Use a message broker (Kafka + Redis pub/sub) to scale horizontally. Push events: `driver_moved`, `order_updated`. Clients maintain local cache of visible drivers, update UI on messages.  

**Edge Cases**  
*Drivers moving fast across many buckets → burst writes.* Mitigate with batched updates or rate‑limiting.  
*High churn near bucket boundaries:* Ensure neighbor buckets are queried to avoid missing nearby drivers.  
*Network partitions:* Clients fall back to polling every 30 s.

**Optimize & Communicate**  
- **Cache hot buckets** in memory for faster reads.  
- Use **adaptive granularity**: finer hashes where density is high, coarser elsewhere.  
- Measure latency via synthetic traffic; iterate on bucket size and WebSocket heartbeats.  

Narrate by walking interviewers through the trade‑offs (hash granularity vs. query cost), how we guarantee low latency, and how we would monitor/scale the system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
