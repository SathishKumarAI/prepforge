---
qid: ing_0ed1c67150__star__local
question: 'Explain: area and converting it into all of — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 345
total_tokens: 599
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:58:08-05:00'
sources: []
---

**Situation** – In my last role at a food‑delivery startup, we were launching a new “real‑time order status” feature. Our existing system could’t reliably push location updates to drivers and customers without flooding the network or exceeding our latency budget.

**Task** – I had to design a lightweight architecture that would deliver sub‑second location updates to millions of users while keeping bandwidth consumption under 30 % of our baseline.

**Action** – First, I implemented **Geo‑Hashing**: we partitioned the service area into hierarchical grid cells (using H3) and stored each driver’s current cell in a Redis cache. When a rider requested an update, the server matched the rider’s cell to nearby drivers by querying only a handful of neighboring keys—cutting lookup time from 200 ms to 12 ms. Next, I introduced **WebSockets** for push notifications. Instead of polling every 5 seconds, we opened persistent connections per client and broadcasted updates only when a driver moved into a new hash cell. To avoid burst traffic during peak hours, I added a rate‑limit layer that coalesced multiple position changes within a 2‑second window.

**Result** – The new system reduced average latency from 350 ms to 42 ms and cut network usage by 45 %. We saw a 25 % increase in on‑time deliveries during our beta, and the architecture scaled smoothly as we added 30 k active drivers. I learned that combining spatial indexing with event‑driven communication can deliver both performance and cost efficiency at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
