---
qid: ing_e84853c90a__star__local
question: 'Explain: or less with the lat long that — System Design of Doordash: Geo-Hashing
  and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 387
total_tokens: 641
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:12:51-05:00'
sources: []
---

**Situation**  
When I joined the Delivery Ops team at a fast‑growing food delivery startup, we had a spike of users in a new city. The app’s “current location” feature was lagging—latency over 2 s—and our drivers were missing real‑time updates on nearby orders, causing cancellations and revenue loss.

**Task**  
I needed to design an end‑to‑end system that would provide sub‑second delivery status updates for both riders and customers, while keeping infrastructure costs in check as the user base grew from 10 k to 100 k daily active users.

**Action**  
I introduced a two‑layer approach. First, we used **geohashing** (precision level 7) to bucket GPS coordinates into 1 km cells and stored them in a Redis cluster keyed by hash. This reduced the lookup space for nearby drivers to a handful of keys instead of scanning all locations. Second, I swapped the polling API with **WebSocket** connections: each rider’s device maintained a persistent socket that subscribed to its geohash cell. When an order entered or left a cell, we pushed a lightweight JSON payload over the socket, allowing instant UI updates. To handle scale, we deployed a Kafka stream that fed into a stateless worker pool to update Redis and emit events.

**Result**  
Latency dropped from 2 s to <200 ms for status updates, and driver‑to‑customer acceptance rates rose by 18%. The system handled a 10× user increase with only a 30% rise in compute spend. I learned the importance of spatial indexing and persistent connections for real‑time location services, and how to balance performance against operational cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
