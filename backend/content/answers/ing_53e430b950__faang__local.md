---
qid: ing_53e430b950__faang__local
question: 'Explain: the on the consistent hashing um on — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 510
total_tokens: 761
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:59:24-05:00'
sources: []
---

**Clarify**  
We’re asked to design DoorDash’s location‑based service stack—specifically how to use geo‑hashing, consistent hashing, and WebSockets to keep riders, drivers, and restaurants in sync globally. Key assumptions:  

- Real‑time updates (lat/lon) arrive at ~10 Hz per client.  
- Latency budget < 200 ms for UI refreshes.  
- System must scale to millions of concurrent users with minimal cross‑region traffic.  

**Approach**  

1. **Geohash indexing**: encode each coordinate into a string (e.g., 12‑char precision → ~100 m).  
2. **Consistent hashing over geohash buckets**: distribute buckets across a cluster of location services so that adding/removing nodes causes minimal remapping.  
3. **WebSocket hub per shard**: clients subscribe to the bucket(s) covering their viewport; the hub pushes delta updates only for relevant entities.  

**Depth**  

- *Consistent hashing*: use virtual nodes (e.g., 100 per physical server) and a stable hash function (Murmur3).  
- *Bucket assignment*: on client connect, compute geohash of current location, map to shard via consistent hash; open WS connection to that shard.  
- *Delta propagation*: each service maintains in‑memory state for entities in its bucket; upon movement, emit only changes. Complexity: O(1) per update; memory ~O(#entities in bucket).  

**Edge Cases**  

- Boundary crossings: a driver moving across geohash borders must reconnect to the new shard; mitigate with “ghost” nodes that temporarily hold neighbors’ data.  
- Network partitions: fallback to HTTP polling for critical updates.  
- High churn zones (e.g., downtown) → increase bucket granularity or add extra replicas.  

**Optimize & Communicate**  

- Cache geohash‑to‑shard mapping in clients to reduce lookup latency.  
- Use backpressure on WebSockets to avoid flooding.  
- Explain trade‑offs: finer geohashes give lower traffic but higher state per node; consistent hashing keeps churn low at the cost of occasional rebalance overhead.  

This design satisfies real‑time constraints, scales horizontally via consistent hashing, and delivers targeted updates through WebSocket hubs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
