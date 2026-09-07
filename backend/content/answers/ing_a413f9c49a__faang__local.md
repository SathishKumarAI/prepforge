---
qid: ing_a413f9c49a__faang__local
question: 'Explain: no person nearby basically yeah i mean — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 524
total_tokens: 775
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:06:55-05:00'
sources: []
---

**Clarify**  
You’re asking how DoorDash could design a real‑time location service that lets drivers “see” nearby customers (and vice‑versa) with minimal latency and cost. I’ll assume we need: *geo‑partitioning of the map*, *low‑latency updates*, *scalable subscription model*, and *high availability*.

**Approach**  
1. **Spatial indexing** – use Geo‑hash or S2 cells to bucket coordinates into sharded regions.  
2. **Subscription engine** – each client opens a WebSocket tied to its current cell; the server pushes updates only for that cell (and adjacent ones).  
3. **Change propagation** – when a driver/customer moves, publish to a message bus (Kafka) keyed by cell; workers compute delta and push via WebSockets.  
4. **Scaling** – horizontally scale WebSocket servers behind a load balancer using sticky sessions or a distributed pub/sub layer.

**Depth**  
*Geo‑hash*: 10‑digit hash gives ~100 m resolution—good for urban areas. Store (cell → list of active clients) in Redis with TTL to auto‑expire stale sockets.  
When a client moves, compute new cell; if changed, remove from old bucket and add to new one. Publish “enter/exit” events to Kafka.  
WebSocket workers subscribe to their assigned cells; on receiving an event they broadcast the payload to all sockets in that cell. Complexity: O(1) per movement (hash lookup + set ops); memory ~O(#active clients). Latency < 100 ms if Redis and WebSocket cluster are local.

**Edge Cases**  
- Rapid movement across many cells → batched updates to avoid flooding.  
- Cell boundary “holes” – send adjacent cell data on join.  
- Failure of a worker – use leader election or Redis pub/sub fallback.  
- High churn in rural areas – adjust hash granularity.

**Optimize & Communicate**  
We can switch from Geo‑hash to S2 for irregular shapes, reducing false positives. Use a CDN‑edge WebSocket layer (e.g., Cloudflare Workers) to lower RTT globally. In production, instrument cell hit rates and auto‑shrink or expand buckets based on density. I’d present this flow diagrammatically, highlight the O(1) ops, and explain trade‑offs between hash resolution, memory, and accuracy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
