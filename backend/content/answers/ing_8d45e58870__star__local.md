---
qid: ing_8d45e58870__star__local
question: 'Explain: itself out uh in this question um — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 337
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:15:14-05:00'
sources: []
---

**Situation:**  
At my last startup we built a food‑delivery app that needed to push real‑time driver locations to customers while keeping the backend scalable under millions of concurrent users.

**Task:**  
I was tasked with designing the location pipeline so that each rider’s position could be queried in sub‑second latency and broadcasted to nearby customers without overloading our servers or database.

**Action:**  
I introduced a geo‑hashing scheme (geohash 7 precision) to index drivers into grid cells, storing them in Redis as sorted sets keyed by cell ID. When a driver moved, we updated their geohash key and pushed the change through a RabbitMQ queue that fed an async worker updating the cache. For customer updates I leveraged WebSockets via Socket.io: each client subscribed to a set of neighboring geohashes; the server streamed only new positions for those cells. To keep the message size low, we batched updates every 200 ms and used delta compression. We also implemented rate‑limiting on the client side to avoid flooding.

**Result:**  
The system handled 3 M concurrent connections with an average latency of 45 ms for location lookups and a 25% reduction in database load compared to polling. The feature increased user engagement by 18% and earned us a “Best Delivery Experience” award at the industry conference. I learned that combining spatial indexing with push‑based communication can deliver sub‑second, highly scalable real‑time services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
