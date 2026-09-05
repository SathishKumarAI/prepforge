---
qid: ing_9419aaa8d4__star__local
question: 'Explain: this point are close by right so — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 365
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:29:19-05:00'
sources: []
---

**Situation:**  
At my previous company I was tasked with redesigning the real‑time rider‑matching system for our food‑delivery app. The user base had grown to 300 k active riders per day, but latency spikes during peak hours were eroding satisfaction scores.

**Task:**  
I needed to build a low‑latency location service that could match customers to nearby drivers within 200 ms while scaling horizontally across multiple regions.

**Action:**  
I introduced a **geo‑hashing** scheme: each rider’s GPS coordinates were converted into a 12‑character geohash, indexed in Redis clusters with TTLs of 30 seconds. This turned high‑dimensional location data into sortable keys, enabling efficient range queries. For real‑time updates I deployed **WebSockets** via an Nginx reverse proxy to a Node.js cluster; each rider’s device maintained a persistent socket that pushed driver proximity alerts as their geohash changed. To avoid flooding, I implemented delta encoding and throttled broadcasts to 5 updates per second per client. Finally, I added a fallback REST endpoint for stale clients.

**Result:**  
The new system cut average matching latency from 1.2 s to **0.18 s** (an 85% reduction) during rush hours, boosted rider‑to‑customer satisfaction scores by 12 points, and reduced server cost by 22% thanks to the efficient Redis cache. I learned that combining spatial indexing with push‑based communication can dramatically improve real‑time service quality at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
