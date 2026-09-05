---
qid: ing_316312ad0c__star__local
question: 'Explain: roll at a time yes yes it — System Design of Doordash: Geo-Hashing
  and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 360
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:07:09-05:00'
sources: []
---

**Situation**  
I was on the backend team building a real‑time delivery dashboard for a new DoorDash market in Seattle. The existing polling‑based API caused ~2 s latency and high server load during rush hour, making drivers’ ETA updates stale.

**Task**  
Design an architecture that delivers driver location to dispatchers with <500 ms latency, scales to 50k concurrent riders, and keeps the cost under $10K/month.

**Action**  
I introduced a two‑layer solution. First, I implemented **geo‑hashing**: each driver’s GPS point was converted into an H3 hex at resolution 9 (~100 m). We stored these in Redis as sorted sets keyed by region, allowing O(log N) range queries for nearby riders. Second, I switched from REST polling to a **WebSocket hub** powered by Node.js and Socket.io. The hub subscribed to the Redis keyspace notifications so any geo‑hash update pushed an event directly to all connected dispatcher clients in the same region. We added horizontal scaling with sticky sessions via Nginx and used Redis Cluster for sharding. 

**Result**  
Latency dropped from 2 s to <350 ms, throughput increased by 4×, and server cost fell below $8K/month. The system handled 60k concurrent drivers during a city‑wide promotion without any packet loss. I learned that combining spatial indexing with push‑based protocols can dramatically reduce both latency and infrastructure overhead in location‑centric services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
