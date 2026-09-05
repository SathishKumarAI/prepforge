---
qid: ing_ebfd7a1ac3__star__local
question: 'Explain: that time is required because we we — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 338
total_tokens: 592
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:21:00-05:00'
sources: []
---

**Situation**  
At my previous company we were building a real‑time delivery dispatch system similar to DoorDash. The app needed to match couriers with nearby orders within a two‑second window, but our initial architecture kept pulling the entire city’s order list every minute and sending full GPS updates over HTTP.

**Task**  
Redesign the location service so that we could deliver courier–order pairings in sub‑second latency while keeping server costs down. I had to pick a spatial indexing scheme and an efficient real‑time transport protocol.

**Action**  
I introduced Geo‑Hashing: each order’s latitude/longitude was converted into a 12‑character hash, partitioned the map into ~1 km² cells, and stored orders in Redis sorted sets keyed by hash. For updates I switched from polling to WebSockets; couriers subscribed to their nearest geo‑hash bucket, receiving incremental delta messages only when an order entered or left their zone. I also added a “stale‑timeout” mechanism so the server would purge inactive sockets after 30 s.

**Result**  
The dispatch latency dropped from ~3 seconds to under 700 ms on average, and Redis memory usage fell by 45 %. The system handled 2× the user load during peak hours without scaling the cluster. I learned that combining spatial hashing with push‑based communication is essential for low‑latency location services at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
