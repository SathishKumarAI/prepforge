---
qid: ing_870c5df3d4__faang__local
question: 'Explain: have the exact data we want exact — Amazon System Design Interview:
  Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 635
total_tokens: 876
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:57:55-05:00'
sources: []
---

**1️⃣ Clarify**  
The interviewee wants a **Parking Garage System Design** that guarantees *exact* knowledge of every vehicle’s location and availability at all times.  
Key assumptions to confirm:  

- Scale (number of bays, floors, peak traffic).  
- Persistence requirements (real‑time vs batch).  
- Failure model (network partitions, hardware crashes).  
- Integration points (payment gateway, mobile app, external sensors).

---

**2️⃣ Approach**  
1. **High‑level architecture**:  
   - Front‑end web/mobile → API Gateway → Service Layer (Reservation, Billing, Analytics).  
   - Backend datastore with strong consistency (e.g., CockroachDB or PostgreSQL + Redis cache).  
   - Event sourcing for audit trail.  
2. **Data model**:  
   - `ParkingSpot(id, floor, level, occupied_by, timestamp)` – primary key on `id`.  
   - `Vehicle(vin, owner_id, current_spot_id)`.  
3. **Consistency strategy**: optimistic locking + two‑phase commit for spot allocation.  
4. **Scalability**: partition by floor; use read replicas for reporting.

---

**3️⃣ Depth**  
- **Allocation algorithm**: nearest‑available search using spatial index (R‑tree). Complexity O(log n) per query.  
- **Reservation flow**: client requests spot → API checks availability, locks row (`SELECT … FOR UPDATE`), returns confirmation.  
- **Failure handling**: If a car exits without updating DB, a timeout job scans `occupied_by` timestamps > X minutes and frees the spot.  
- **Analytics**: Kafka streams of entry/exit events feed into Snowflake for BI.  

Complexity: write operations O(log n); reads O(1) with cache. Trade‑off between strict consistency (no double booking) and latency.

---

**4️⃣ Edge Cases**  
- Simultaneous reservations → row lock contention → back‑off & retry.  
- Power loss during transaction → ACID guarantees prevent orphaned spots.  
- Multiple entry gates → need global unique spot ID to avoid clashes.  

Testing: simulate 10,000 concurrent users; verify no double bookings; run chaos tests (node failures).

---

**5️⃣ Optimize & Communicate**  
- **Cache warm‑up**: prepopulate Redis with free spots per floor for instant allocation.  
- **Batching**: group exit updates to reduce DB load during peak off‑peak.  
- **Monitoring**: Prometheus alerts on lock wait times > 200 ms.  

Explain reasoning as: “We choose a strongly consistent store because the business rule demands no two cars in one spot, even under high concurrency. The cost is a slight latency increase, which we mitigate with caching and sharding.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
