---
qid: ing_fd2df442c9__star__local
question: 'Explain: and yes also possibly in the sense — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 370
total_tokens: 624
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:55:02-05:00'
sources: []
---

**Situation:**  
When I joined a product team at a food‑delivery startup, we were tasked with scaling our real‑time order tracking to 200k concurrent users during peak hours while keeping latency under 100 ms.

**Task:**  
I needed to design a location‑based service that could push live driver positions to riders and match orders to the nearest drivers efficiently, all without overloading the database or network.

**Action:**  
We adopted geo‑hashing: each driver’s latitude/longitude was converted into an H3 index at resolution 9 (≈25 m). These hashes were cached in Redis, partitioned by region. For live updates we switched from polling to WebSockets; each rider’s client opened a persistent socket that subscribed to the H3 bucket of their current location. Whenever a driver moved, the backend pushed the new hash and coordinates over the socket, triggering an incremental update on the client. To avoid flooding, we debounced position reports every 500 ms and used delta compression (only sending changed fields). For order matching we performed a nearest‑neighbor query in Redis using the H3 index, then fetched candidate drivers’ details from PostgreSQL with a single JOIN.

**Result:**  
Latency dropped to an average of 45 ms; peak load handled 300k concurrent sockets without any downtime. The system reduced database reads by 70% and cut bandwidth usage per user by 50%. I learned that coupling spatial indexing with event‑driven transport (WebSockets) can deliver low‑latency, scalable real‑time services in high‑traffic environments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
