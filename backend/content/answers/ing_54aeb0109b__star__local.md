---
qid: ing_54aeb0109b__star__local
question: 'Explain: thing going on but as far as — System Design of Doordash: Geo-Hashing
  and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 332
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:17:24-05:00'
sources: []
---

**Situation:**  
When I joined the growth team at a food‑delivery startup, we were struggling with real‑time driver‑customer matching. Our latency was 1.8 s on average, and the match rate dropped to 68% during peak hours because our geospatial queries were hitting the database too hard.

**Task:**  
I had to design a low‑latency location service that could push driver positions to customers instantly while scaling to millions of concurrent users without overloading the backend.

**Action:**  
I introduced a two‑layer solution: first, I implemented Geo‑Hashing on each driver’s GPS coordinate. By encoding lat/long into a 10‑character hash and storing it in Redis with an LRU eviction policy, we could do prefix lookups to find nearby drivers in O(1) time. Second, I swapped our polling API for WebSockets. Each driver opened a lightweight socket that pushed their position every second; customers subscribed to a room keyed by the same Geo‑Hash prefix. The server used a publish/subscribe pattern with Redis Streams to fan out updates only to relevant rooms, drastically cutting network traffic.

**Result:**  
Latency dropped from 1.8 s to under 200 ms, match rate jumped to 92%, and our infrastructure cost fell by 35% because we eliminated heavy database scans. I learned that combining spatial indexing (Geo‑Hash) with event‑driven transport (WebSockets + Redis Streams) can turn a bottleneck into an elastic, real‑time system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
