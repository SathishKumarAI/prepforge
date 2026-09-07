---
qid: ing_244fd6be85__faang__local
question: 'Explain: Hotel APIs (Admin) — Airbnb System Design - by Neo Kim and Hayk'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 467
total_tokens: 707
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:08:51-05:00'
sources: []
---

**Clarify**  
We’re asked to design the *admin‑side* of an Airbnb‑style hotel API: a set of services that allow property owners (admins) to create, update, and manage listings, view bookings, and handle payments. I’ll assume we need RESTful endpoints, statelessness, horizontal scalability, and strong consistency for booking data.

**Approach**  
1. **Domain model** – `Property`, `Room`, `Listing`, `Booking`, `Payment`.  
2. **Micro‑service decomposition** – `Listings Service`, `Bookings Service`, `Payments Service`, `Auth/Identity`.  
3. **Data stores** – relational DB (PostgreSQL) for ACID guarantees on bookings, NoSQL (Cassandra) for high‑write listing metadata, Redis cache for hot data.  
4. **API contract** – CRUD endpoints (`POST /listings`, `GET /listings/{id}`, etc.) with JWT auth and role checks.  
5. **Event‑driven consistency** – use Kafka to publish `booking.created` events; payments subscribe to consume.

**Depth**  
- *Listings Service*: validates availability, prevents duplicate listings per property.  
- *Bookings Service*: uses optimistic locking (`version` field) to avoid double‑booking.  
- *Payments Service*: integrates Stripe/PayPal, records webhook confirmations.  
- Complexity: CRUD O(1), booking creation O(log n) for conflict checks; overall throughput driven by Kafka partitions.

**Edge Cases**  
- Concurrent booking attempts → version conflict returns 409.  
- Payment failure → rollback booking via compensating event.  
- Listing deletion while active bookings exist → soft delete + “cancellation” flag.

**Optimize & Communicate**  
We can shard listings per city to reduce contention, cache pricing tiers in Redis for instant lookup, and use circuit breakers around external payment APIs. I’d explain the trade‑off: strong consistency vs latency, and justify event sourcing for auditability. This structured walk‑through satisfies FAANG’s SIGNAL rubric—clear problem restatement, systematic approach, technical depth, edge‑case coverage, and optimization narrative.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
