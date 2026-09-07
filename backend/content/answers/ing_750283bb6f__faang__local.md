---
qid: ing_750283bb6f__faang__local
question: 'Explain: incorrect assumptions so to start off i — Amazon System Design
  Interview: Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 637
total_tokens: 878
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:16:49-05:00'
sources: []
---

**1️⃣ Clarify**  
The interviewer asks us to design an *Amazon‑scale parking garage* system (e.g., for a large campus or city).  
Assumptions I’d confirm:  
- Expected daily vehicle volume and peak concurrency.  
- Types of vehicles (compact, SUV, electric with charging).  
- Desired user experience (mobile app, kiosk, RFID).  
- Integration points (payment gateway, fleet management, security cameras).  
- Constraints: cost per square foot, latency for spot assignment, real‑time occupancy updates.

**2️⃣ Approach**  
1. **High‑level components** – Frontend (app/kiosk), API Gateway, Service Layer (Parking Service, Billing Service, Notification Service), Data Store (SQL + NoSQL), Cache, Messaging, Analytics, Security.  
2. **Data model** – `Spot(id, level, type, status)`, `Vehicle(id, license, type, owner)`, `Session(start, end, spotId, vehicleId, paymentStatus)`.  
3. **Algorithm** – Greedy nearest‑spot allocation with priority for electric charging spots; fallback to reservation queue.  
4. **Scalability** – Use sharded NoSQL for spot status (fast read/write), Redis cache for real‑time occupancy, Kafka for event sourcing.

**3️⃣ Depth**  
- **API**: REST/GraphQL endpoints (`reserveSpot`, `checkIn`, `checkOut`, `getAvailability`).  
- **Latency**: Spot assignment < 200 ms; achieved via in‑memory cache + eventual consistency to DB.  
- **Fault tolerance**: Dual data centers, active‑active Redis cluster, circuit breakers for external services.  
- **Cost**: Approx. $0.02 per spot per hour for compute+storage (based on AWS estimates).  
- **Security**: OAuth2 for user auth, TLS everywhere, RBAC for admin ops.

**4️⃣ Edge Cases**  
- Simultaneous reservations → use optimistic locking or a “lock‑spot” queue.  
- Vehicle re‑entry without proper check‑out → detect via RFID/vision and auto‑charge.  
- Power outage at charging stations → fallback to manual payment, log event for maintenance.  
- High traffic surge (e.g., event) → scale cache nodes horizontally, use CDN for static assets.

**5️⃣ Optimize & Communicate**  
- **Performance**: Move spot status to in‑memory store; batch DB writes every 10 s.  
- **Observability**: Centralized logging (ELK), metrics via Prometheus, alerts on occupancy spikes.  
- **Future extensions**: Dynamic pricing algorithm, integration with autonomous vehicle routing, predictive analytics for peak times.

By structuring the solution—clarifying scope, outlining a layered architecture, detailing core components and trade‑offs, anticipating edge cases, and explaining optimizations—I demonstrate the signal interviewers look for: clear communication, deep technical insight, and practical scalability considerations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
