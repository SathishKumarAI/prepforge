---
qid: ing_322f1500f3__star__local
question: 'Explain: jio indexing um if this wouldn''t work — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 255
output_tokens: 363
total_tokens: 618
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:08:45-05:00'
sources: []
---

**Situation:**  
When I joined the new Eats‑on‑Demand team, our first launch had a target of <1 s latency for driver–customer proximity updates. The pilot region was dense downtown with ~12k restaurants and 8k active drivers.

**Task:**  
I needed to design a scalable location service that would push real‑time “nearby” alerts to mobile clients without overloading the backend or the network, while keeping data costs low for the app.

**Action:**  
I chose Geo‑Hashing: each driver’s latitude/longitude was encoded into a 12‑character string (≈100 m precision). These hashes were stored in a Redis Cluster with secondary indexes on grid cells. For live updates I set up a lightweight WebSocket gateway using Node.js and Socket.io, routing messages by hash prefix. When a driver moved, the server emitted only to clients whose subscribed hash prefixes matched the new location. To avoid “index blow‑up” when drivers hovered in a hotspot, we capped each cell’s subscriber list at 200, offloading excess traffic to a fallback HTTP poll for the last 10 % of users.

**Result:**  
Latency dropped from an average of 2.8 s (polling) to 0.7 s (WebSocket), and server CPU usage fell by 35%. The pilot exceeded the 1‑second SLA, and we saved ~15 GB/month in mobile data traffic. I learned how careful spatial indexing coupled with event‑driven protocols can turn a complex real‑time requirement into an efficient, maintainable system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
