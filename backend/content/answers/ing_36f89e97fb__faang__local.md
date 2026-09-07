---
qid: ing_36f89e97fb__faang__local
question: 'Explain: hey guys this is gkcs today we''ll — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 493
total_tokens: 746
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:51:47-05:00'
sources: []
---

**1️⃣ Clarify**  
We’re designing a real‑time location service for DoorDash: riders, restaurants, and customers must see each other on a map with minimal latency. Key assumptions:  
- Geospatial data is updated at most every few seconds.  
- We need sub‑second delivery to the client.  
- Scale: millions of concurrent users worldwide.

**2️⃣ Approach**  
1. **Geo‑hashing**: Convert lat/long to a string (e.g., S2 cells) that preserves locality.  
2. **Spatial index store**: A distributed key‑value store (Redis or DynamoDB with TTL) keyed by geo‑cell, holding sets of active entities.  
3. **Subscription model**: Clients open a WebSocket and send their current cell; the server pushes updates for cells within a radius.  
4. **Back‑pressure & batching**: Bundle multiple events into one frame to keep traffic low.

**3️⃣ Depth**  
- *Geo‑hashing*: Use 12‑level S2 cells (~10 m²) for fine granularity; neighbors fetched via cell adjacency API.  
- *Store*: Redis SETs per cell with TTL (5 s). On entity move, remove from old set and add to new. Complexity: O(1) per update.  
- *WebSocket server*: Stateless workers behind a load balancer; each maintains connection state in memory. Push logic: on an update, compute affected cells, query Redis, and broadcast to subscribed sockets. Latency < 200 ms end‑to‑end.  

**4️⃣ Edge Cases**  
- Cell boundary crossings cause duplicate pushes → dedupe by entity ID.  
- High churn (drivers entering/leaving) → use TTL to auto‑clean stale entries.  
- Network partitions → fallback to polling every 5 s.

**5️⃣ Optimize & Communicate**  
- Cache neighbor lists per cell to avoid recomputation.  
- Use sharding on Redis by cell hash for horizontal scale.  
- Profile message sizes; compress payloads with protobuf.  
I’d explain this flow in a diagram, highlight the trade‑off between cell size (accuracy vs. traffic), and outline monitoring metrics: update latency, WebSocket disconnect rate, and cache hit ratio.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
