---
qid: ing_8b7b694504__star__local
question: 'Explain: customer as opposed to you know having — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 328
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:11:44-05:00'
sources: []
---

**Situation** – At my previous gig I was tasked with revamping the real‑time rider‑customer matching system for a food‑delivery startup that had been struggling to keep latency below 300 ms during peak hours.

**Task** – Build a scalable, low‑latency architecture that could ingest GPS streams from thousands of riders and customers, match them within 2 km, and push live updates without overloading the servers.

**Action** – I introduced **geo‑hashing**: each coordinate was converted to a 10‑character hash (≈1 km resolution). We stored these hashes in Redis as sorted sets keyed by the rider’s current zone. When a customer placed an order, we queried only the nearby buckets, drastically cutting the search space from O(n) to O(1). For live updates I swapped our old polling endpoint for **WebSockets** backed by a lightweight Node.js cluster; each client opened a persistent socket that subscribed to its geo‑hash channel. On every location change, the server emitted a single JSON payload over the socket, keeping bandwidth minimal and guaranteeing sub‑100 ms delivery.

**Result** – Latency dropped from 650 ms to 180 ms during rush hour, while throughput increased by 4× without additional hardware. I learned that combining coarse spatial indexing with push‑based communication can turn a heavy database query problem into an event‑driven microservice that scales horizontally and keeps users engaged.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
