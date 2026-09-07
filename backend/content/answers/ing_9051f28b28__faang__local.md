---
qid: ing_9051f28b28__faang__local
question: 'Explain: curious uh are there different types of — Amazon System Design
  Interview: Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 707
total_tokens: 948
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:19:57-05:00'
sources: []
---

**Problem Clarification**  
The interviewer wants a high‑level design for an online parking‑garage reservation system (the “Amazon” style).  
*Assumptions to confirm:*  
- Target users: drivers, staff, and admins.  
- Scale: up to 10 000 concurrent reservations per day, ~500k total cars.  
- Features: real‑time availability, payment, dynamic pricing, multi‑location support, and integration with maps/parking sensors.

---

### Approach

1. **Core Components** – Front‑end (mobile/web), API gateway, service layer (reservation, inventory, billing), database tier, cache, message bus, external services (payment, geolocation).  
2. **Data Model** – `Garage(id)`, `Spot(garage_id, level, number, status)`, `Reservation(user_id, spot_id, start, end)`.  
3. **Scalability** – Use stateless microservices behind a load balancer; cache spot availability with Redis; write‑through caching for reservations.  
4. **Consistency** – Optimistic locking on spots to avoid double booking; use transactions for reservation creation.  
5. **Fault Tolerance** – Retry logic, circuit breakers, graceful degradation of pricing if external API fails.

---

### Depth (Technical Detail)

- **API Gateway** routes `/reserve`, `/cancel`, `/availability`.  
- **Reservation Service** checks cache → DB → updates spot status atomically (`SELECT … FOR UPDATE`).  
- **Inventory Service** aggregates real‑time sensor data; publishes `SpotStatusChanged` events.  
- **Pricing Engine** calculates dynamic rates based on demand, time of day, and historical occupancy (ML model).  
- **Database**: PostgreSQL for ACID guarantees, partitioned by garage ID; Hot‑spot spots stored in a separate table.  
- **Cache**: Redis with TTL = 30 s for spot availability to reduce DB load.  
- **Event Bus**: Kafka streams `ReservationCreated`, `SpotFreed` → analytics & recommendation microservice.

Complexity:  
- Read path O(1) (cache), write path O(log n) (DB transaction).  
- Horizontal scaling via container orchestration; auto‑scale based on request latency.

---

### Edge Cases

| Case | Handling |
|------|----------|
| Spot becomes unavailable after user sees it available | Optimistic lock fails → return “spot taken” error, suggest alternatives. |
| Payment failure after reservation created | Rollback reservation, release spot. |
| Sensor misread (false free) | Periodic consistency check between DB and sensors; manual override by staff. |
| High traffic spike (e.g., holiday) | Cache warm‑up, auto‑scale services, rate‑limit API. |

---

### Optimize & Communicate

- **Optimization**: Use read replicas for analytics; cache pricing tiers; batch write of spot updates.  
- **Communication**: Present the diagram first, walk through a user flow (search → reserve → payment), then discuss trade‑offs (eventual vs strong consistency).  
- Highlight that this architecture supports multi‑location scaling, integrates ML for dynamic pricing, and can evolve to add features like valet or electric‑vehicle charging.

*Word count: ~210.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
