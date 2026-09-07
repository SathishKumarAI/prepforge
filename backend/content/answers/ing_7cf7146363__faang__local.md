---
qid: ing_7cf7146363__faang__local
question: 'Explain: point looking at the distance in the — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 474
total_tokens: 725
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:34:42-05:00'
sources: []
---

**Clarify**

The question asks how DoorDash can design a scalable location‑based service that quickly finds nearby couriers/orders using *Geo‑hashing* and *WebSocket* streams.  
Assumptions: we need real‑time updates, low latency, high throughput, and efficient spatial queries across millions of users.

**Approach**

1. Partition the world into Geo‑hash buckets (e.g., 12‑bit prefix).  
2. Store each courier’s current bucket in a distributed key/value store (Redis or DynamoDB).  
3. On client connect, open a WebSocket to receive live updates for the courier’s bucket and neighboring buckets.  
4. When a new order arrives, hash its location, find overlapping buckets, and push an event through the same WebSocket channel.

**Depth**

- *Geo‑hashing*: 12‑bit gives ~5 km granularity; can increase to 15‑bit (~1 km) for finer resolution.  
- *Data store*: Use a partition key of bucket ID + region to keep hot spots balanced.  
- *WebSocket routing*: A message broker (Kafka → WebSocket gateway) ensures at‑least‑once delivery.  
- *Latency*: Bucket lookup is O(1); push over WS is <10 ms.  
- *Consistency*: Optimistic concurrency with version numbers; stale data acceptable within a few seconds.

**Edge Cases**

- Couriers crossing bucket boundaries (handle boundary refresh).  
- Sparse regions (no couriers) → fallback to nearest non‑empty bucket.  
- High churn (many connect/disconnects) → rate‑limit WS traffic.

**Optimize & Communicate**

- Use *reverse geocoding* only for display; keep all ops on hashed keys.  
- Cache popular buckets in memory to reduce DB reads.  
- Gradually increase hash precision during peak hours to improve matching accuracy.  

Explain trade‑offs: finer hashing improves match quality but raises hot‑spot risk; WebSockets give low latency but require careful scaling of connection pools. This structured plan demonstrates clear problem framing, a scalable solution, and awareness of real‑world constraints—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
