---
qid: ing_3326d702a6__star__local
question: 'Explain: i guess i''ll call it like the — System Design of Doordash: Geo-Hashing
  and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 355
total_tokens: 609
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:10:51-05:00'
sources: []
---

**Situation:**  
When I joined DoorDash’s growth team, the rider‑matching latency had spiked from 300 ms to nearly 1 s during peak hours, hurting our “delivery in under 30 min” SLA. The core issue was that we were broadcasting every rider’s GPS coordinates to all nearby restaurants via a monolithic REST endpoint.

**Task:**  
I needed to design a scalable location‑based service that could deliver real‑time rider positions to restaurants with sub‑200 ms latency, while keeping the data store cost under 10% of the existing architecture.

**Action:**  
I introduced a geo‑hashing layer using H3 to bucket coordinates into hexagonal cells at 200 m resolution. Each rider’s updates were pushed to an in‑memory Redis cluster keyed by their cell hash. For real‑time push, I swapped REST for WebSocket endpoints: restaurants subscribe to the hash they’re interested in, and a lightweight Go microservice broadcasts any change within that cell over the socket. To avoid over‑subscription, I added a TTL on sockets so inactive clients disconnect automatically. I also implemented backpressure handling by batching updates every 50 ms.

**Result:**  
Latency dropped from ~1 s to <180 ms under peak load (20k concurrent riders). The Redis cluster cost was only 6% of the previous backend, and we reduced network traffic by 35%. I learned that combining spatial indexing with push‑based communication can dramatically improve real‑time service performance without a full rewrite.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
