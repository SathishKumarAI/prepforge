---
qid: ing_42ced45766__star__local
question: 'Explain: here which it actually may be because — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 329
total_tokens: 583
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:42:19-05:00'
sources: []
---

**Situation**  
When I joined the DoorDash ops team, our real‑time delivery dashboard was lagging during peak hours—drivers’ locations were updated only every 10 seconds, causing a 15 % increase in missed pickups and driver frustration.

**Task**  
I needed to redesign the location service so that each driver’s position could be pushed instantly to the dispatcher console with minimal latency while keeping bandwidth and server costs under control.

**Action**  
I introduced a two‑layer solution: first, I replaced the naive lat/long streaming with geohashing. By encoding coordinates into 12‑character geohashes, we reduced the payload from 30 bytes to about 10 bytes and could bucket nearby drivers for quick proximity queries in Redis. Second, I swapped the polling API for a bi‑directional WebSocket channel using Socket.IO. The server now pushes every 2‑second update directly to connected clients; on the client side we used a lightweight debounce to avoid UI jitter. To keep cost low, I configured Redis key expirations at 30 s and added a fallback REST endpoint for legacy integrations.

**Result**  
Latency dropped from ~1.2 s to under 200 ms average, and real‑time accuracy improved by 40 %. The dashboard now handles 5× the concurrent drivers without extra infrastructure. I learned that combining spatial indexing (geohash) with event‑driven transport (WebSockets) can deliver near‑real‑time performance at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
