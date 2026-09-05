---
qid: ing_5c2902acee__star__local
question: 'Explain: sort between two ranges of keys means — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 412
total_tokens: 666
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:31:42-05:00'
sources: []
---

**Situation** – While leading the real‑time delivery matching module at a startup, we noticed that the latency of assigning drivers to orders spiked during peak hours (around 7–9 pm). The system was pulling driver locations from Redis sorted sets by a single key, but the key space was too coarse; queries had to scan millions of entries.

**Task** – I needed to redesign the location index so that we could efficiently retrieve all drivers within any arbitrary latitude/longitude rectangle and push updates over WebSockets without flooding clients or the broker.

**Action** – I introduced a two‑layer geo‑hashing scheme. First, each driver’s coordinates were converted to an H3 hexagon at resolution 9 (≈ 400 m). Those hex IDs became composite keys in Redis (`driver:<h3>`), storing driver metadata and a timestamp. For range queries I calculated the minimal set of adjacent hexes covering the requested bounding box using the H3 library, then fetched only those shards—reducing scan size from millions to a few dozen. On each location change, a lightweight message was published to a Redis Pub/Sub channel; WebSocket servers subscribed and pushed delta updates to affected clients. I also added a TTL on stale entries to keep the index clean.

**Result** – Query latency dropped from ~120 ms to 15 ms during peak hours, and driver‑to‑order match time fell by 60%. The Pub/Sub/WebSocket pipeline handled 5× more concurrent connections with no degradation. I learned that combining spatial indexing (geo‑hashing) with event‑driven real‑time transport (WebSockets + Redis) can turn a bottleneck into a scalable, low‑latency service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
