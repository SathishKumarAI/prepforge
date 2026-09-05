---
qid: ing_31ebc98097__star__local
question: 'Explain: the idea so i''m a little bit — System Design of Doordash: Geo-Hashing
  and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 361
total_tokens: 615
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:08:08-05:00'
sources: []
---

**Situation:**  
When I joined DoorDash’s operations team, the surge in late‑night orders was causing our delivery ETA predictions to lag by an average of 4 minutes during peak hours. Our existing approach relied on polling GPS coordinates from each rider every 30 seconds, which overloaded our servers and increased latency.

**Task:**  
I needed to design a real‑time location system that could deliver sub‑second updates for riders in high‑traffic zones while keeping infrastructure costs down. The goal was to reduce ETA errors below 1 minute during rush periods.

**Action:**  
I proposed a hybrid solution: first, encode each rider’s latitude/longitude into a geohash of precision 7 (≈153 m × 153 m). This allowed us to bucket riders into grid cells and broadcast updates only within the relevant cell using Redis Pub/Sub. On the client side, we switched from HTTP polling to WebSockets, so the rider app pushed location changes instantly whenever the device crossed a geohash boundary or moved more than 30 m. We added a lightweight in‑memory cache on our edge servers to serve geohash lookups with <5 ms latency and throttled updates during network congestion.

**Result:**  
Within two weeks of deployment, ETA accuracy improved from 4 minutes down to 0.8 minutes on average during peak hours—a 80% reduction. The WebSocket traffic was only 35% higher than polling but cut server CPU usage by 25%. I learned that combining spatial indexing (geohashing) with event‑driven communication (WebSockets) can dramatically improve real‑time service quality while keeping costs in check.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
