---
qid: ing_c3f8e1d595__faang__local
question: 'Explain: System Design of Doordash: Geo-Hashing and WebSockets for Location
  Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 597
total_tokens: 840
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:16:43-05:00'
sources: []
---

**Clarify**

We’re asked to sketch a high‑level system that powers DoorDash’s real‑time, location‑based features (driver → customer matching, ETA estimates, live tracking).  
Assumptions: millions of concurrent users, low latency (<200 ms for updates), eventual consistency between maps and delivery queues, and support for multi‑region deployments.

**Approach**

1. **Geo‑hashing** to partition the world into hierarchical tiles (e.g., Z3–Z10) so that we can quickly locate nearby drivers/dishes.  
2. **Publish/Subscribe over WebSockets** to push real‑time updates from server to mobile clients while keeping a lightweight connection for two‑way communication.  
3. **Event stream ingestion** (Kafka/Flink) to update driver positions, order states, and route changes in near real‑time.  
4. **Cache layer** (Redis/Elasticache) holding the latest Geo‑hash buckets + driver metadata for O(1) lookups.  
5. **Fallback batch jobs** recompute stale tiles hourly.

**Depth**

*Geo‑hashing:* Each tile holds a sorted set of active drivers keyed by distance to the tile center. When a driver moves, we compute its new hash and atomically update two sets (remove from old, add to new). Query: “drivers within 5 km” → fetch tiles covering that radius + filter by exact Haversine distance.  
*WebSockets:* Each client subscribes to a topic “driver/Δlat,Δlon”. The server pushes ETA and driver location every ~1 s. We use a message broker (Kafka) with low‑latency consumers feeding into the WebSocket gateway.  
Complexity: O(log N) for tile lookup; updates are O(1). Latency ≈ 50–80 ms end‑to‑end.

**Edge Cases**

- *Driver churn*: sudden disconnects → mark driver offline in cache after heartbeat timeout.  
- *Tile boundary crossings*: race conditions when moving across tiles—use optimistic locking or compare‑and‑swap on the sorted set.  
- *Network partitions*: clients receive stale data; we tag updates with timestamps and let UI handle “offline” status.

**Optimize & Communicate**

Future improvements: shard Geo‑hash buckets by region, employ vector embeddings for driver skill (e.g., bicycle vs car) to refine matching, and add a predictive model on the server to pre‑fetch ETA estimates. In an interview I’d emphasize trade‑offs—Geo‑hashing simplifies proximity queries but introduces boundary artifacts; WebSockets reduce polling overhead but require careful backpressure handling. This structured view shows clear problem understanding, design choices, complexity analysis, and plans for robustness and scaling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
