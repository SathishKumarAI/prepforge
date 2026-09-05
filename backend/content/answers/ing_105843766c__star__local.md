---
qid: ing_105843766c__star__local
question: 'Explain: later but okay you have these nodes — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 306
total_tokens: 560
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:00:49-05:00'
sources: []
---

**Situation:**  
At my last role I was tasked with revamping DoorDash’s real‑time delivery dashboard. The existing polling‑based location updates caused a 25 % lag and high API cost during peak hours.

**Task:**  
I needed to design a low‑latency, scalable system that would push accurate driver locations to restaurants and riders while keeping infrastructure costs under budget.

**Action:**  
I introduced a two‑layer solution:  
1. **Geo‑Hashing** – I partitioned the city into 10 m² cells using H3 indices, storing driver coordinates in Redis sorted sets keyed by hash. This reduced lookup time from O(n) to O(1) and allowed efficient proximity queries for surge pricing.  
2. **WebSockets with Socket.IO** – I built a publish/subscribe layer where each driver’s client subscribed to its own geo‑hash channel. When a location update hit the server, it pushed only the delta through WebSocket, eliminating redundant polling. I also implemented exponential backoff and message deduplication to handle flaky connections.

**Result:**  
Latency dropped from 1.8 s to under 200 ms on average, API calls fell by 40 %, and we cut hosting costs by 15 %. The experience taught me how proper spatial indexing combined with event‑driven transport can dramatically improve real‑time services at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
