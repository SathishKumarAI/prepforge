---
qid: ing_42ced45766__faang__local
question: 'Explain: here which it actually may be because — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 499
total_tokens: 750
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:19:31-05:00'
sources: []
---

**Clarify**

You’re asking how DoorDash could architect a real‑time location service that scales to millions of users:  
* **What** – broadcast driver/restaurant locations to nearby riders with low latency.  
* **Assumptions** – high write volume from drivers, read bursts from riders, 10 km radius relevance, and eventual consistency is acceptable.

**Approach**

1. **Geo‑hash the world into a quadtree (S2) cells** → each cell holds a list of active drivers.  
2. **Persist in a distributed key‑value store (e.g., DynamoDB / Bigtable)** with TTL for stale entries.  
3. **Publish/Subscribe via WebSockets**: riders open a socket, subscribe to the cells covering their viewport; servers push updates when a driver enters/exits a cell.

**Depth**

*Geo‑hashing*: use S2’s `CellId` at level 12 (~10 m resolution) for precise proximity.  
*Write path*: driver reports GPS every 1–2 s → upsert into its current cell, delete from previous; cost ≈ O(1).  
*Read path*: rider queries neighboring cells (≤9) → fetch lists, merge, and stream changes.  
*WebSocket server*: horizontally scaled workers maintain a mapping of socket→cells; on driver update, all sockets in affected cells receive a diff payload.

Complexity: writes O(log N) to KV store, reads O(k log N) where *k* is neighboring cells. Latency < 100 ms achievable with CDN‑edge WebSocket nodes.

**Edge Cases**

* Cell boundary crossing → double‑write handling.  
* Network partitions → eventual consistency acceptable; stale driver may appear briefly.  
* Sudden surge (e.g., event) → auto‑scale WebSocket workers based on connection count.

**Optimize & Communicate**

- Cache cell memberships in Redis for hot spots, reducing KV hits.  
- Use backpressure on sockets to avoid flooding during spikes.  
- Explain trade‑off: higher resolution cells increase precision but more keys; lower resolution reduces key count but may push irrelevant drivers.  

This design balances real‑time accuracy with horizontal scalability, a pattern DoorDash could adopt for its location services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
