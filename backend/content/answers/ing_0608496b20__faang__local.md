---
qid: ing_0608496b20__faang__local
question: 'Explain: don''t know anything about that i''ve got — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 555
total_tokens: 806
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:58:11-05:00'
sources: []
---

**Clarify**

We’re asked to design a location‑based service similar to DoorDash’s “driver/restaurant → customer” flow.  
Key requirements:  
1. Quickly locate nearby drivers or restaurants for a given user location.  
2. Keep all parties’ positions updated in real time (order status, ETA).  
3. Scale to millions of concurrent users and low latency.  
Assumptions: GPS accuracy ~10 m, 1‑second update rate, data center proximity, and no strict privacy constraints.

**Approach**

*Geohashing*: Partition Earth into a quadtree grid (e.g., 12‑bit precision ≈ ≈ ≈ ~100 m).  
- Store each entity in a key/value store keyed by geohash bucket.  
- For a query, compute the user’s hash and fetch that bucket plus adjacent buckets to cover a radius R.

*WebSockets*: Persistent bi‑directional channel for real‑time push of location/ETA updates.  
- Each client maintains one socket; server pushes delta messages only when state changes.

**Depth**

1. **Data ingestion**: GPS points → geohash → append to bucket in Redis (or Cassandra).  
2. **Query flow**:  
   - Client sends current lat/lng → server computes hash, retrieves ~9 buckets from cache.  
   - Compute distances using Haversine; filter within R.  
3. **Real‑time sync**:  
   - On each GPS ping, server updates bucket and broadcasts to subscribed sockets (e.g., customers watching a driver).  
4. Complexity: O(k) for k nearby points; geohash lookup is O(1). WebSocket broadcast amortized over all subscribers.

**Edge Cases**

- Geohash boundary crossing → need to fetch neighbor buckets.  
- High‑density areas → bucket size too coarse; increase precision or switch to grid cell + R-tree.  
- Network dropouts → implement heartbeat and reconnection logic.

**Optimize & Communicate**

- **Batch updates**: Aggregate GPS pings (e.g., 5 s window) before publishing to reduce traffic.  
- **Cache eviction**: TTL on stale locations to free memory.  
- **Explain trade‑offs**: higher geohash precision gives finer search but increases bucket count and storage; WebSockets give low latency but require server scaling (use clustering or edge servers).  

This design balances speed, scalability, and real‑time fidelity—core qualities for a DoorDash‑style system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
