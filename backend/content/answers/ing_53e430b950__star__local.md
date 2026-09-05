---
qid: ing_53e430b950__star__local
question: 'Explain: the on the consistent hashing um on — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 359
total_tokens: 613
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:16:04-05:00'
sources: []
---

**Situation:**  
While leading the backend redesign for a new DoorDash delivery feature, we had to push real‑time driver locations from thousands of mobile devices to nearby restaurants and riders without overloading our servers or breaking latency guarantees.

**Task:**  
Build a scalable architecture that could ingest millions of GPS pings per second, route them to the correct geographic region, and broadcast updates via WebSockets with <200 ms end‑to‑end delay.

**Action:**  
I proposed a two‑layer sharding scheme. First, we used **geo‑hashing** (S2 cells) to partition the world into 10 km² buckets; each bucket maps to a shard of our location service cluster. Second, within each shard we applied **consistent hashing** over worker nodes so that adding or removing a node caused only ~1/N rebalancing. For real‑time delivery, each device opened a persistent WebSocket connection to its nearest shard; the server pushed updates only for drivers in overlapping S2 cells, minimizing bandwidth. We used Redis Streams for reliable message ordering and Kafka for back‑pressure handling during peak events.

**Result:**  
The new system handled 3 M location updates per minute with <180 ms latency, a 40% reduction compared to the legacy polling approach. It also supported seamless scaling; when we added two more nodes, only ~5% of drivers’ routing tables needed refresh. I learned that combining spatial partitioning (geo‑hash) with load‑balanced sharding (consistent hashing) can deliver both high availability and low latency for geo‑centric services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
