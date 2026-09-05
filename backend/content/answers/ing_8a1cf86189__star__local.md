---
qid: ing_8a1cf86189__star__local
question: 'Explain: point is that basically we want to — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 277
total_tokens: 531
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:08:57-05:00'
sources: []
---

**Situation:**  
When I joined the delivery platform team, our real‑time rider tracking was lagging—latency over 300 ms caused customers to see stale locations and increased cancellations by 12%.

**Task:**  
I had to redesign the location pipeline so that every rider’s GPS update reached the frontend within 80 ms while keeping server costs down.

**Action:**  
First, I replaced the naïve latitude/longitude lookup with a geohash index: each rider’s coordinates were encoded into an 8‑character geohash and stored in Redis as a hash set keyed by that geohash. This reduced the search space for nearby riders from millions to a handful of cells.  
Second, I introduced WebSocket channels per geohash zone. Whenever a rider sent an update, the server pushed it only to sockets subscribed to that cell, eliminating broadcast overhead.  
I tuned Redis read/write pipelines with pipelining and batch updates, and used Node.js clustering to scale horizontally.

**Result:**  
Latency dropped from 300 ms to under 70 ms on average; delivery ETA accuracy improved by 18%, cutting cancellations to 3%. I learned that spatial indexing + focused pub/sub can drastically cut real‑time latency while keeping infrastructure lean.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
