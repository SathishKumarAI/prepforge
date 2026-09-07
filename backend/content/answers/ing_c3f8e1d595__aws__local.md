---
qid: ing_c3f8e1d595__aws__local
question: 'Explain: System Design of Doordash: Geo-Hashing and WebSockets for Location
  Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 448
total_tokens: 688
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:46:13-05:00'
sources: []
---

**Situation / Task**  
At DoorDash I led a cross‑team effort to redesign the real‑time rider‑customer matching layer so that drivers could see nearby orders in milliseconds while keeping latency < 200 ms for 80% of requests.

**Action (Design)**  
1. **Geo‑hashing** – partitioned the city into 10 m × 10 m cells, stored each cell’s active riders in a DynamoDB Global Secondary Index keyed by `geoHash`. This gives *O(1)* lookup for “riders near X”.  
2. **WebSockets via API Gateway + Lambda@Edge** – every rider opens a persistent socket; the server pushes new order events to only the relevant geo‑hash bucket, reducing bandwidth by ~70%.  
3. **Caching with ElastiCache Redis** – hot cells cached for 30 s, cutting DynamoDB reads by 60% and keeping cost low.  
4. **Auto‑scaling** – Lambda concurrency scales with request spikes; API Gateway throttles to protect downstream services.

**Result**  
- Latency dropped from 650 ms to <200 ms (80th percentile).  
- Rider engagement rose 15%, leading to a $3M lift in weekly revenue.  
- Operational cost fell 30% due to reduced DynamoDB traffic and efficient WebSocket usage.

**Reflection (Leadership Principles)**  
*Customer Obsession*: We iterated until the rider’s waiting time hit the target, directly improving their experience.  
*Ownership & Dive Deep*: I owned the end‑to‑end pipeline, debugged cold starts in Lambda@Edge, and tuned Redis eviction policies—learning that “one bad cache key can hurt all drivers.”  

**Bar‑raiser cues** – Demonstrated ownership of metrics, deep dive into system trade‑offs (latency vs cost), quantified impact, and lessons from a failed caching strategy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
