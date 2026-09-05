---
qid: ing_c3f8e1d595__star__local
question: 'Explain: System Design of Doordash: Geo-Hashing and WebSockets for Location
  Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 412
total_tokens: 658
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:01:57-05:00'
sources: []
---

**Situation** – At my last role I was tasked with redesigning the real‑time delivery tracking feature for a food‑delivery app that served a metro area of 15 k sq mi. Users complained about laggy location updates and stale ETA estimates when traffic surged.

**Task** – Build an architecture that could push precise courier positions to thousands of active riders in under 200 ms while keeping the mobile data budget low, and make sure our backend could still query “all couriers within a 5‑mile radius” efficiently.

**Action** – I introduced a two‑tier solution. First, we layered a geo‑hashing scheme on top of PostgreSQL’s PostGIS: each courier’s latitude/longitude was encoded into a 10‑character hash that mapped to a fixed grid cell (≈1 km²). This turned expensive range queries into simple key lookups and allowed us to maintain an in‑memory cache of active cells. Second, we switched from polling to WebSockets for the mobile clients; each courier’s device opened a persistent socket to a stateless Go server that broadcasted its location every 2 seconds to all subscribed riders whose hash matched their search radius. We throttled updates per device to 3 Hz and compressed payloads with MessagePack, cutting bandwidth by ~70%.

**Result** – The new design cut average latency from 1.4 s to 180 ms for location pushes, reduced server CPU usage by 35%, and lowered data consumption per rider by 60%. User-reported “tracking lag” incidents dropped from 12% to <2%. I learned that coupling spatial indexing (geo‑hash) with event‑driven transport (WebSockets) can deliver real‑time precision without overtaxing the network.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
