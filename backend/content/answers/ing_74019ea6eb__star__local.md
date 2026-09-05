---
qid: ing_74019ea6eb__star__local
question: 'Explain: road over here might be all twisty — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 255
output_tokens: 383
total_tokens: 638
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:26:21-05:00'
sources: []
---

**Situation** – When I joined DoorDash’s real‑time ops team, the driver‑dispatch system was struggling with latency spikes on peak nights. Our location feed would lag by 2–3 seconds, causing missed pickups and unhappy riders.

**Task** – I needed to design a scalable, low‑latency architecture that could push driver coordinates to nearby restaurants in real time while keeping costs under control.

**Action** – First, I mapped the city into 30‑meter H3 geo‑hashes so we could bucket drivers by location and reduce query scope. Each driver’s app streamed GPS updates over WebSockets (Socket.IO) to a lightweight Node.js gateway. The gateway wrote each update to Redis Streams keyed by its hash, then published a “location‑updated” event on a pub/sub channel. Restaurant services subscribed to the relevant channels and pulled only the hashes within their service radius, caching results in Memcached for 5 seconds. I added exponential backoff for failed writes and throttled updates to 1 per second during congestion.

**Result** – The new pipeline cut dispatch latency from ~2.4 s to under 300 ms on average, a 75% improvement. Server costs dropped 35% because we only processed the handful of drivers in each hash bucket. I learned how spatial indexing and real‑time messaging can turn a noisy GPS stream into a lean, responsive service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
