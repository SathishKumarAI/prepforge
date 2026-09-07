---
qid: ing_c348230eba__faang__local
question: 'Explain: finding a person who is near enough — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 484
total_tokens: 735
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:14:58-05:00'
sources: []
---

**Clarify**  
We need a real‑time service that, given a rider’s location, finds the nearest available driver within a radius *R* (e.g., 5 km). The system must scale to millions of concurrent users and support rapid updates as drivers move.

Assumptions to confirm:  
- Driver locations are updated at ~1 s intervals.  
- Latency < 200 ms for rider‑to‑driver match.  
- We have a global fleet; we’ll shard by region.

**Approach**  
1. **Geohash grid partitioning** – encode lat/long into hierarchical strings (e.g., 7‑char precision ≈ 153 m × 153 m).  
2. **Distributed in‑memory store** – Redis or Memcached per shard, keyed by geohash to list active drivers.  
3. **WebSocket push** – each driver maintains a persistent socket; on location change we update the grid entry and emit an event to interested riders.  
4. **Rider query** – client sends current location → server resolves its geohash, queries neighboring cells (±1 in each axis) to gather candidates, filters by distance, picks nearest.

**Depth**  
- *Complexity*: O(1) grid lookup + O(k log k) for sorting *k* nearby drivers.  
- *Scalability*: Sharding by region keeps data local; Redis clustering handles millions of keys.  
- *Fault tolerance*: Use Redis persistence (RDB/AOF) and replication.

**Edge Cases**  
- Drivers at cell boundaries: include all 8 neighbors to avoid missing matches.  
- Rapid movement: debounce updates to reduce churn.  
- Offline drivers: heartbeat timeouts remove stale entries.

**Optimize & Communicate**  
We can cache the nearest driver per cell for a short TTL to amortize lookups. For very dense urban areas, we may switch to a H3 hexagonal grid for better shape regularity. In interviews, I’d explain how geohash granularity trades latency vs. memory, and how WebSockets enable instant push without polling. This design balances real‑time responsiveness with horizontal scalability—exactly what FAANG teams look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
