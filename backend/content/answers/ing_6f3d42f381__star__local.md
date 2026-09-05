---
qid: ing_6f3d42f381__star__local
question: 'Explain: wonder you''re working thanks i gotta i — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 365
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:09:42-05:00'
sources: []
---

**Situation** – At a previous startup, we were tasked with building a real‑time rider‑delivery matching system for a food‑delivery app similar to DoorDash. Our existing database was too slow to return nearby drivers within 3 seconds when customers placed orders in busy downtown areas.

**Task** – I had to design an architecture that could ingest GPS coordinates from thousands of drivers, index them efficiently, and push location updates to clients via WebSockets so the UI would show live driver positions without polling.

**Action** – I introduced geohashing: each latitude/longitude pair was converted into a 12‑character geohash. This turned continuous space into discrete grid cells, enabling us to store drivers in Redis hash tables keyed by their current geohash. When a new order came in, we queried only the neighboring hashes (±1 cell) and computed exact distances with Haversine to filter the top N nearest drivers. For real‑time pushes, I set up an event‑driven WebSocket layer using Node.js + socket.io that subscribed each client to its own geohash bucket; whenever a driver moved into a new bucket, the server emitted a “driver‑moved” event only to relevant clients.

**Result** – The average lookup time dropped from 1.2 s to 0.25 s, and we reduced database load by ~70 %. Rider app latency improved, leading to a 12 % increase in completed orders during peak hours. I learned that combining spatial indexing with publish/subscribe patterns can turn a sluggish polling system into a responsive real‑time service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
