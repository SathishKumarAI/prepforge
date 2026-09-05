---
qid: ing_d3cfc17c71__star__local
question: 'Explain: and then you also said about 500 — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 255
output_tokens: 369
total_tokens: 624
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:33:11-05:00'
sources: []
---

**Situation:** While leading the backend team at a food‑delivery startup, we noticed that our real‑time driver‑customer matching lagged during peak hours—latency spiked to 1.5 s and orders were delayed by up to 30 seconds.

**Task:** I had to redesign the location‑based matchmaking layer so it could handle 10× traffic while keeping latency under 200 ms, using only open‑source components we already had.

**Action:** I introduced a two‑layer approach: first, we partitioned the city into Geo‑Hash tiles (precision level 7) and stored driver coordinates in Redis sorted sets keyed by tile. When a customer placed an order, the service queried the surrounding tiles via a pipelined Lua script, returning only nearby drivers. Second, to push instant updates, I replaced our polling API with WebSocket connections per driver; each driver’s client subscribed to its own tile channel. On location change, the mobile app emitted a lightweight message (lat/lng + timestamp), which our edge server broadcasted to all sockets in that tile, triggering an immediate re‑ranking of drivers.

**Result:** Latency dropped from 1.5 s to <150 ms under peak load, and order‑to‑pickup time improved by 35 %. The system now scales horizontally; adding a new node simply adds more Redis shards and WebSocket workers. I learned that coupling spatial indexing (Geo‑Hash) with event‑driven real‑time channels can dramatically reduce perceived delay in location services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
