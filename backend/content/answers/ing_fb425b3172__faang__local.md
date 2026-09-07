---
qid: ing_fb425b3172__faang__local
question: 'Explain: BOOKMYSHOW System Design, FANDANGO System Design | Software architecture
  for online ticket booking'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 584
total_tokens: 827
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:24:32-05:00'
sources: []
---

**Clarify**  
We need a scalable, highly‑available architecture that supports millions of concurrent users, real‑time seat availability, and secure payments—essentially the core of “BookMyShow” or “Fandango.” Key assumptions:  

* Users → mobile/desktop clients.  
* Events (movies, concerts) have many shows per day.  
* Seats are unique; overbooking must be prevented.  
* We require low latency (< 200 ms) for seat selection and purchase.

**Approach**  
1. **Micro‑services**: separate services for Catalog, Seat Map, Booking, Payment, Notification.  
2. **Event‑driven consistency**: use Kafka to publish “SeatReserved” / “BookingConfirmed” events; read‑side replicas keep UI fast.  
3. **Distributed locking** on seats (e.g., RedLock with Redis) during the short hold window.  
4. **Database tiering**: NoSQL (Cassandra) for seat maps, relational DB (PostgreSQL) for transactional booking data.  
5. **CDN + edge caching** for static catalog content; global load balancers for geo‑distribution.  
6. **Circuit breakers & retries** around payment gateway calls.

**Depth**  
*Seat reservation window*: client requests a seat → service acquires a lock in Redis (TTL = 2 min). If lock succeeds, publish “SeatReserved” event; UI shows seat as held. After user confirms, booking service writes to PostgreSQL and publishes “BookingConfirmed.” If the user aborts or TTL expires, lock is released automatically.  
*Payments*: integrate Stripe/PayPal via webhooks; idempotency keys prevent duplicate charges.  
*Scalability*: each micro‑service runs in Kubernetes pods with horizontal autoscaling based on CPU/RAM metrics. Kafka partitions per venue keep throughput high.

**Edge Cases**  
*Race conditions when many users request the same seat simultaneously—handled by Redis lock.*  
*Payment failures: retry logic, graceful rollback of seat reservation.*  
*Network partition between services: eventual consistency via event replay.*

**Optimize & Communicate**  
- Use **gRPC** for inter‑service calls to reduce latency.  
- Cache frequently accessed seat maps in Memcached to cut DB reads.  
- Implement a **CQRS pattern**: separate read models (e.g., DynamoDB) from write side for instant UI updates.  
- Explain trade‑offs: stricter consistency → more locking overhead; relaxed consistency → risk of double booking but higher throughput.

This architecture balances real‑time responsiveness, data integrity, and horizontal scalability—exactly what a FAANG ticketing system demands.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
