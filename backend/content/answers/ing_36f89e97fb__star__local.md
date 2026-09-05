---
qid: ing_36f89e97fb__star__local
question: 'Explain: hey guys this is gkcs today we''ll — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 256
output_tokens: 333
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:18:09-05:00'
sources: []
---

**Situation**  
I was leading the backend redesign for a regional food‑delivery app that had to support real‑time order routing across 15 cities. Our last iteration used simple REST polling; latency hit the 300 ms threshold and we were losing ~12% of orders during peak hours.

**Task**  
Redesign the location service so drivers, customers, and restaurants could see each other’s positions with <50 ms round‑trip, while keeping data consistency and scaling to 200k concurrent users.

**Action**  
I introduced a two‑layer solution. First, I implemented **geohashing** on every GPS coordinate (precision=9 bits) stored in Redis Streams; this let us perform prefix queries for nearby drivers in O(log N). Second, I swapped the polling endpoint with a **WebSocket hub** using Node.js and Socket.io, multiplexing driver/restaurant connections. The server pushed geohash updates only when a vehicle crossed a 50‑meter threshold, drastically reducing bandwidth. I added an exponential backoff reconnection strategy and integrated Redis pub/sub to keep multiple worker nodes in sync.

**Result**  
Latency dropped from 300 ms to 35 ms on average; order match rate rose by 18%, translating into $350k extra revenue per month. The system now supports 400k concurrent connections with linear scaling, and I learned that combining spatial indexing (geohash) with event‑driven transport (WebSockets) is key for high‑throughput location services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
