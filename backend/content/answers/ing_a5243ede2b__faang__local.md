---
qid: ing_a5243ede2b__faang__local
question: 'Explain: with here in the same thing um — Amazon System Design Interview:
  Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 542
total_tokens: 783
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:08:56-05:00'
sources: []
---

**Clarify**

We’re asked to design a *parking‑garage management platform* (like an Amazon product).  
Key questions:  
- What users need? (drivers, staff, admins)  
- Scale? (cars per hour, daily capacity, multiple locations?)  
- Features? (reservation, dynamic pricing, real‑time availability, payment, analytics).  
- Constraints? (latency < 200 ms for lookup, high throughput, fault tolerance).

**Approach**

1. **High‑level architecture** – client → API gateway → microservices (Reservation, Availability, Billing, Analytics) → DBs + cache.  
2. **Data model** – `ParkingSpot(id, level, status, rate)`; `Reservation(id, spotId, userId, start, end)`; `Vehicle(id, plate, owner)`.  
3. **Scalability** – use sharded NoSQL for spots, Redis for hot availability data; async Kafka streams for billing/analytics.  
4. **Fault tolerance** – idempotent requests, circuit breakers, multi‑AZ deployment.

**Depth**

- **Reservation Service**: optimistic locking on spot status; if two users book same slot, second fails fast.  
- **Availability Service**: maintain a *bitmap* per level in Redis for O(1) lookup; background job syncs to DB every 5 min.  
- **Billing**: event‑driven (start/stop events → calculate duration × rate).  
- **Analytics**: stream occupancy, revenue, peak times into Snowflake or BigQuery.

Complexity:  
- Reservation write: *O(1)* lock + DB write; read availability: *O(1)* cache hit.  
- Scaling: horizontal add of microservices; sharding by level keeps hotspots low.

**Edge Cases**

- Spot already occupied at check‑in → return nearest free spot.  
- Power loss → fall back to local cache with TTL; after recovery, reconcile DB.  
- Payment failure → hold reservation for 5 min, then cancel.  

**Optimize & Communicate**

We can introduce *dynamic pricing* (time‑of‑day) by adding a rate engine; we might replace Redis bitmap with a segment tree if we need range queries. In an interview, I’d sketch the diagram on a whiteboard, explain trade‑offs, and finish by summarizing how each component meets latency, scalability, and reliability goals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
