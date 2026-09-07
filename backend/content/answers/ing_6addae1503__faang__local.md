---
qid: ing_6addae1503__faang__local
question: 'Explain: the risk of finding some points that — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 467
total_tokens: 718
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:52:17-05:00'
sources: []
---

**Clarify**  
We’re asked how a system like DoorDash can expose real‑time location data (drivers, orders) while keeping latency low and scaling globally. Key assumptions: *we need sub‑second updates for many concurrent users*, *data must be geospatially indexed*, and *communication should be push‑based to avoid polling overhead*.  

**Approach**  
1. **Geo‑hashing** – encode latitude/longitude into a string (e.g., 10‑bit Z‑order or H3) that preserves locality.  
2. **Sharding by hash prefix** – each server owns a range of hashes, allowing horizontal scaling.  
3. **Publish–subscribe via WebSockets** – clients maintain a long‑lived TCP connection to receive updates only for the region they’re in.  

**Depth**  
- *Geo‑hashing*: choose cell size (~50 m) balancing granularity and index size; store `driver_id → hash` in Redis or Cassandra.  
- *Sharding*: use consistent hashing so that rebalancing moves minimal keys.  
- *WebSockets*: each client subscribes to its current hash prefix; servers broadcast position updates to all sockets tied to a cell. Complexity: O(1) lookup for driver location, O(k) for broadcasting where k is number of clients in the cell.  

**Edge Cases**  
- **Rapid movement across cells** → debounce or send “move” events only when crossing a threshold.  
- **High churn (drivers disconnecting)** → heartbeats to detect stale sockets.  
- **Load spikes in dense urban areas** → auto‑scale WebSocket workers per shard.  

**Optimize & Communicate**  
- Use a CDN‑edge caching layer for static map tiles; keep real‑time data at origin servers.  
- Profile latency: aim <200 ms end‑to‑end, trade off by reducing cell size if needed.  
- Explain to interviewers that this design keeps the system horizontally scalable, preserves locality (critical for geo‑queries), and uses push communication to minimize bandwidth, aligning with DoorDash’s real‑time delivery requirements.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
