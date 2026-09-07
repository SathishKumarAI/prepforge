---
qid: ing_cd40f4796d__faang__local
question: 'Explain: able to have something that already has — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 460
total_tokens: 711
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:37:40-05:00'
sources: []
---

**Clarify**  
You’re asked how DoorDash could expose real‑time, location‑based data (e.g., nearby drivers or restaurants) to many clients.  Key assumptions: *hundreds of thousands of concurrent users*, *low latency (<200 ms)*, and *high write throughput* as drivers move every few seconds.

**Approach**  
1. Partition the world into a grid using Geo‑Hashing (or H3).  
2. Store driver/restaurant coordinates in a distributed key–value store keyed by cell id.  
3. Use WebSockets to push updates from the server to each client whenever an entity enters/leaves their viewport.

**Depth**  
*Geo‑Hash*: encode lat/lon into a string; neighboring cells can be derived by prefix changes.  Each cell holds a list of active entities (sharded by region).  
*Data store*: Cassandra/Redis‑Cluster – fast writes, eventual consistency; each driver update writes to its current cell key.  
*WebSocket layer*: Clients maintain a persistent socket and subscribe to the cells that intersect their map view. The server pushes a lightweight delta (entity id + new lat/lon) when any entity’s location changes or a new one enters a subscribed cell.  
Complexity: *O(1)* write per update; *O(k)* message per client where k = number of entities in the viewport.  Horizontal scaling via sharding on geographic zones.

**Edge cases**  
- Drivers crossing cell boundaries → double‑write to old and new cells, then publish “leave”/“enter” events.  
- Network partitions → eventual consistency may show stale positions; mitigate with short TTLs.  
- High churn (many drivers moving) can overload sockets – apply backpressure or batch updates.

**Optimize & Communicate**  
Batch multiple position changes per second to reduce network chatter, compress payloads, and use delta‑encoding.  For very dense areas, switch to a publish/subscribe system (Kafka) feeding the WebSocket layer.  Explain that this design keeps latency low while scaling horizontally, which aligns with DoorDash’s need for real‑time visibility across millions of users.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
