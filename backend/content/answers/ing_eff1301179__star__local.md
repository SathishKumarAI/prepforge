---
qid: ing_eff1301179__star__local
question: 'Explain: a mile and uh in that time — System Design of Doordash: Geo-Hashing
  and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 362
total_tokens: 616
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:27:53-05:00'
sources: []
---

**Situation:**  
When I joined the product team at a food‑delivery startup, we were hitting a bottleneck: drivers’ live locations lagged behind by 5–10 seconds, causing mismatched orders and unhappy customers. Our existing GPS feed was too noisy for real‑time matching.

**Task:**  
I needed to build a low‑latency location service that could ingest thousands of driver updates per second, map them to nearby restaurants instantly, and push order assignments with sub‑second delay—all while keeping costs under our CDN budget.

**Action:**  
I introduced **geo‑hashing**: each driver’s latitude/longitude was encoded into a 12‑character hash (using H3), which I stored in a Redis cluster keyed by the hash bucket. This reduced lookup time from O(n) to O(1) for proximity searches. For real‑time updates, I swapped the polling API for **WebSockets**: drivers opened a persistent socket that pushed position changes to our server, eliminating round‑trip latency. The backend then broadcasted new positions to all clients subscribed to the same geo‑hash bucket via Redis Pub/Sub, and finally forwarded relevant order events over a lightweight JSON payload.

**Result:**  
Latency dropped from 7 seconds to under 200 ms for driver–restaurant matching. Order acceptance rates climbed by 18%, and we cut server costs by 12% thanks to the efficient cache strategy. I learned that combining spatial indexing with persistent connections can turn a data‑heavy service into a near‑real‑time experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
