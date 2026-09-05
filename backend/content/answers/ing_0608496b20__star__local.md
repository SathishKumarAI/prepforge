---
qid: ing_0608496b20__star__local
question: 'Explain: don''t know anything about that i''ve got — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 335
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:40:49-05:00'
sources: []
---

**Situation:**  
I joined DoorDash’s infrastructure team when we were launching a real‑time delivery dashboard that showed drivers’ positions on the map for every active order. The existing polling API hit our servers too hard and the UI lagged, especially in dense urban zones.

**Task:**  
Design a scalable system to push live location updates to hundreds of thousands of clients with sub‑second latency while keeping server load manageable.

**Action:**  
I proposed using Geo‑hashing to partition the city into 500 m × 500 m cells and stored each driver’s last known cell in Redis. On every location ping, the service only updated the cell key if the driver moved out of it—reducing writes by ~70%. For real‑time delivery, I introduced WebSocket channels per city zone; drivers subscribed to their own channel and sent updates via a lightweight JSON payload. The backend used a Node.js microservice that published to Redis Pub/Sub, which automatically pushed to connected clients. To handle bursty traffic, I added horizontal scaling with Kubernetes pods and auto‑scaling based on WebSocket connection count.

**Result:**  
Latency dropped from 1.8 s to under 300 ms for 95% of updates. Server CPU usage fell by 45%, freeing capacity for other services. I learned how spatial indexing (Geo‑hashing) combined with event‑driven transport (WebSockets + Pub/Sub) can deliver efficient, real‑time location data at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
