---
qid: ing_5c2902acee__faang__local
question: 'Explain: sort between two ranges of keys means — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 494
total_tokens: 745
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:17:26-05:00'
sources: []
---

**Clarify**  
We’re asked to design a system that can “sort between two ranges of keys” – essentially, return all deliveries whose geo‑hashes fall between two bounds. In the DoorDash context this is the core of the location‑based service: given a rider’s current position, find nearby restaurants/deliveries and push updates in real time.

**Approach**  
1. **Geo‑Hashing** – encode latitude/longitude into a string (e.g., 10‑bit prefixes) so that spatial proximity maps to lexicographic adjacency.  
2. **Key range query** – the two bounds are simply the lower/upper geo‑hash prefixes for the desired radius; an RDBMS or key‑value store can retrieve all keys in O(log N + K).  
3. **Real‑time updates** – use WebSockets (or Server‑Sent Events) to push new deliveries as they enter the rider’s range, and to receive position pings back from the client.

**Depth**  
- *Geo‑hash granularity*: 12 bits ≈ 1 km; choose based on service level.  
- *Data store*: a distributed key‑value store (e.g., DynamoDB) with composite keys `geoHash#restaurantId`.  
- *Complexity*: range scan O(log N + K); WebSocket throughput bounded by connection limits (~10k per server).  
- *Fault tolerance*: shard the geo‑hash space, replicate across AZs.

**Edge Cases**  
- **Wrapping around**: if range crosses the 180° meridian, split into two queries.  
- **High density**: hotspot areas may exceed scan capacity; apply secondary filters (e.g., distance threshold).  
- **Latency spikes**: back‑pressure on WebSocket connections.

**Optimize & Communicate**  
- Cache recent query results in Redis to reduce DB load.  
- Use exponential backoff for reconnections, and a “long poll” fallback if WebSockets fail.  
- Explain trade‑offs between geo‑hash precision (more keys, less false positives) and storage/latency overhead.  

This design balances efficient range queries with real‑time push guarantees—exactly what DoorDash needs to keep riders and drivers in sync.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
