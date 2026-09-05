---
qid: ing_41b6c47f53__star__local
question: 'Explain: offline and you know kind of put — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 333
total_tokens: 587
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:39:57-05:00'
sources: []
---

**Situation:**  
At my last role, we were tasked with revamping DoorDash’s real‑time delivery dashboard so that riders could see nearby orders within seconds of a customer placing an order in a busy downtown corridor.

**Task:**  
I had to design a low‑latency location service that would keep the server load manageable while scaling to thousands of concurrent riders and order events per minute.

**Action:**  
We used **Geo‑Hashing** to bucket every restaurant and rider into 30 m × 30 m cells. Each cell was cached in Redis with a TTL of 10 s, so lookups for nearby orders were just a few hash lookups instead of full‑table scans. For the push layer we chose **WebSockets** over HTTP polling; each rider’s client opened a single persistent socket to our Node.js gateway, which subscribed to Redis keyspace notifications for their cell. When an order entered a cell, the gateway pushed a compact JSON payload (≈ 200 bytes) over the socket. We also added a lightweight priority queue in Go to throttle pushes during traffic spikes, ensuring we never exceeded 100 kB/s per node.

**Result:**  
Latency dropped from ~1.2 s average to <150 ms for 90% of riders. Server CPU usage fell by 35%, and the system comfortably handled a 4× increase in concurrent users during peak hours. I learned that combining spatial indexing with event‑driven push traffic can deliver real‑time UX without overhauling infrastructure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
