---
qid: ing_6964fa2e4c__star__local
question: 'Explain: could either do some sort of dynamic — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 358
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:57:47-05:00'
sources: []
---

**Situation:**  
When I joined a startup building a food‑delivery platform, our live‑tracking feature was lagging—customers saw updates every 30 seconds, and drivers were often routed through congested streets because the system couldn’t process real‑time location changes at scale.

**Task:**  
I had to redesign the geospatial indexing and communication layer so that driver positions could be streamed to customers with < 5 second latency while keeping server costs low for millions of concurrent users.

**Action:**  
I introduced a two‑tier solution: first, I replaced our naive latitude/longitude lookup with **geohashing**—encoding coordinates into short alphanumeric strings that cluster nearby points. This allowed us to query “all drivers in the same geohash cell” using Redis sorted sets, cutting lookups from O(n) to O(1). Second, I swapped REST polling for a **WebSocket** hub; each driver’s app opened a persistent socket to our Node.js broker, pushing location updates as they moved. The broker routed messages only to clients whose geohash intersected the driver’s cell, dramatically reducing traffic. We also implemented exponential backoff and message batching during network hiccups.

**Result:**  
Latency dropped from 30 seconds to ~3 seconds for 95% of users, and real‑time routing accuracy improved by 18%, cutting delivery times by an average of 4 minutes per order. The system handled 200k concurrent connections on a single EC2 instance, saving us ~$25k/month in infrastructure costs. I learned that combining spatial hashing with event‑driven communication is key for scalable location services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
