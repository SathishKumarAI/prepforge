---
qid: ing_105843766c__faang__local
question: 'Explain: later but okay you have these nodes — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 493
total_tokens: 744
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:21:14-05:00'
sources: []
---

**Clarify**  
We’re designing DoorDash’s real‑time location service: (1) **Geo‑hashing** to bucket rider/driver coordinates for fast proximity queries, and (2) **WebSockets** to stream live updates between clients and the server. Key assumptions: we need sub‑second latency, support millions of concurrent users, tolerate node failures, and scale horizontally.

**Approach**  
1. Build a distributed key/value store keyed by GeoHash prefixes; each prefix maps to a shard.  
2. Use a publish/subscribe layer (e.g., Redis Pub/Sub or Kafka) backed by WebSocket gateways.  
3. Clients open a single persistent WebSocket to the nearest gateway, subscribe to their own and nearby GeoHash buckets.  
4. When a driver’s location changes, update the store and emit a message on the driver’s bucket channel; all subscribers receive it instantly.

**Depth**  
- **GeoHash precision:** 12‑char (≈5 m) for fine granularity near restaurants; fallback to 6‑char (≈1 km) for long‑range search.  
- **Sharding:** hash of prefix → shard ID; consistent hashing ensures minimal data movement on scaling.  
- **WebSocket handling:** use stateless gateway nodes behind a load balancer; each gateway holds session metadata in an in‑memory cache (e.g., Redis).  
- **Complexity:** O(1) lookup for nearby drivers, O(log N) for shard routing. Latency dominated by network hops (~20 ms).  

**Edge Cases**  
- Drivers crossing GeoHash boundaries: double‑publish to both old and new buckets; dedupe on client side.  
- Network partitions: fallback to HTTP polling for critical updates.  
- High churn: implement graceful WebSocket reconnection with exponential backoff.

**Optimize & Communicate**  
Future improvements include adaptive GeoHash sizing based on density, using a vector‑search index (e.g., HNSW) for non‑grid proximity, and leveraging edge computing to host WebSocket gateways closer to users. I’d explain this flow diagrammatically in the interview, emphasizing how each component guarantees scalability, fault tolerance, and low latency—exactly what FAANG teams expect.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
