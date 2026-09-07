---
qid: ing_93f9a9eeee__faang__local
question: 'Explain: million orders turns out to be roughly — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 501
total_tokens: 752
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:28:21-05:00'
sources: []
---

**Clarify**  
You’re asked to sketch a high‑level system that can handle ~1 M daily orders for a delivery service (e.g., DoorDash). We need real‑time location tracking, matching drivers to riders, and low latency updates. Assumptions:  

- Orders arrive uniformly over 24 h.  
- Each driver/restaurant has a GPS tag streaming every few seconds.  
- Latency target <200 ms for order confirmation.  

**Approach**  
1. **Geo‑hashing** to partition the city into tiles (e.g., H3 or S2).  
2. Store driver/location data in a distributed key–value store keyed by tile.  
3. Use WebSocket connections from mobile clients to push real‑time updates and receive server‑initiated events.  
4. Matching logic runs per‑tile, reducing search space.  

**Depth**  
- **Geo‑hashing**: Each location → 7‑digit hash (~1 km²). Driver locations are inserted into a Redis cluster with TTL to auto‑expire stale data.  
- **WebSocket layer**: Nginx + `ws` upgrade, backed by a Node.js/Go service that multiplexes sockets per user ID. Messages are JSON‑encoded events (`order_created`, `driver_update`).  
- **Matching engine**: A scheduler polls each tile’s driver list, scores candidates (distance, ETA, rating), and pushes assignment via WebSocket. Complexity O(k log n) per tile where k is number of nearby drivers.  

**Edge cases**  
- Network partitions → fallback to HTTP polling.  
- Driver churn during matching → re‑enqueue order after a timeout.  
- Hot tiles (downtown) → shard into sub‑tiles or use priority queues.  

**Optimize & communicate**  
- Use read replicas for analytics, write‑through caching for real‑time data.  
- Cache driver positions in memory; evict after 30 s of inactivity.  
- Profile WebSocket latency; add CDN edge nodes if needed.  

Explain that this design scales linearly with orders: each order triggers a constant‑time lookup in its tile, and WebSockets keep bandwidth low by pushing only deltas. This meets the 1 M orders/day requirement while maintaining sub‑200 ms latency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
