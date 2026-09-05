---
qid: ing_48ea603d77__star__local
question: 'Explain: place order which is going to be — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 403
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:54:29-05:00'
sources: []
---

**Situation**  
At my previous gig we were building a real‑time food delivery platform similar to DoorDash. Our order‑matching latency was hovering around 1.8 s, and the UI lagged when users moved on the map; customers complained that restaurants appeared out of range or disappeared mid‑navigation.

**Task**  
I had to redesign the location service so that orders were matched within 400 ms and the client received instant updates about nearby drivers and restaurant availability while they were moving around the city.

**Action**  
First, I implemented a geo‑hashing scheme: each driver’s GPS coordinate was converted into an H3 index at resolution 9 (≈50 m). We stored these indices in Redis as sorted sets keyed by the zone ID. When a rider placed an order, we queried only the relevant H3 buckets instead of scanning all drivers—cutting the lookup time from O(n) to O(1).  
Second, I added a WebSocket layer using Socket.IO on top of our Node.js backend. Every driver’s client published its current geo‑hash and status to a channel named after that bucket. The rider’s app subscribed to the same channels; when a new driver entered or left a zone, the server pushed a lightweight JSON payload (≈30 bytes) instantly, allowing the map UI to refresh in real time without polling.

**Result**  
The order‑matching latency dropped from 1.8 s to 350 ms, and the average number of “missing” driver markers fell by 85%. The WebSocket push reduced bandwidth usage by ~70% compared to our previous long‑polling approach. I learned that combining spatial indexing (geo‑hashing) with event‑driven transport (WebSockets) can deliver sub‑second responsiveness in a highly distributed system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
