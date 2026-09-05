---
qid: ing_322dfaa591__star__local
question: 'Explain: now what that might necessarily mean so — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 355
total_tokens: 609
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:08:45-05:00'
sources: []
---

**Situation:**  
At my last role I was tasked with redesigning the real‑time order‑tracking feature for a food‑delivery app that had just launched in a new city. The existing polling‑based approach caused latency spikes and inflated server costs when the user base grew beyond 30 k concurrent users.

**Task:**  
I needed to build a scalable, low‑latency system that could push live location updates from drivers to customers while keeping database reads minimal and ensuring cost control.

**Action:**  
First, I introduced **geo‑hashing**: each driver’s GPS coordinate was converted into a 10‑character geohash, which we stored in Redis. This allowed us to perform prefix queries that returned only nearby drivers without scanning the entire table. Next, I swapped the polling loop for **WebSocket connections** using Node.js + socket.io. Each client subscribed to a “zone” channel based on its current geohash; whenever a driver’s position changed enough to cross a zone boundary, we emitted a lightweight JSON event only to the affected clients. To handle burst traffic, I added a rate‑limit middleware and used Redis Pub/Sub for cross‑instance message distribution.

**Result:**  
The new design cut average latency from 1.8 s to 300 ms, reduced server CPU usage by 45%, and lowered operational cost by $12k/month. I learned that combining spatial indexing with event‑driven real‑time messaging can dramatically improve both performance and scalability in location‑based services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
