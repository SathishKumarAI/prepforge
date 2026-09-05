---
qid: ing_26154d5f8a__star__local
question: 'Explain: you refresh um yeah i don''t know — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 369
total_tokens: 623
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:45:05-05:00'
sources: []
---

**Situation:**  
While working on a new delivery‑optimization feature at DoorDash, the engineering team noticed that our real‑time location updates were lagging during peak hours—latency spiked above 300 ms and the driver‑app UI flickered.

**Task:**  
I was tasked with redesigning the geospatial routing pipeline so that every driver’s position could be refreshed within 100 ms, even under a 10× load increase, while keeping server costs under budget.

**Action:**  
First, I introduced **geo‑hashing**: we partitioned the city into 500 m² tiles using a base‑32 hash. Each tile became a Redis key with a sorted set of driver IDs keyed by timestamp. For movement detection, drivers sent lightweight WebSocket pings (≈15 bytes) whenever they crossed a tile boundary; otherwise, the server only updated their last seen slot. On the backend, I built a microservice that listened to these WebSocket events and performed batched Redis updates via pipelining, reducing round‑trips from 4 to 1 per driver. For client side, I leveraged **WebSockets** for push notifications of nearby restaurants, so drivers received instant proximity alerts without polling.

**Result:**  
Latency dropped from 300 ms to 80 ms under simulated peak traffic (5k concurrent drivers). The Redis memory footprint shrank by 60% due to tile aggregation. We cut server costs by $12K/month and reduced driver churn by 7%. I learned that combining spatial indexing with event‑driven transport can turn a sluggish, poll‑heavy system into a low‑latency, cost‑efficient service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
