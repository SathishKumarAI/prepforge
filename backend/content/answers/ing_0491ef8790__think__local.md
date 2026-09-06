---
qid: ing_0491ef8790__think__local
question: 'Explain: Amazon System Design Interview: Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 445
total_tokens: 634
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T03:02:09-05:00'
sources: []
---

**1️⃣ Clarify the scope & constraints**  
Ask whether we’re designing a *software‑centric* system (e.g., entry/exit gates, payment, space allocation) or also hardware (sensors, cameras). Assume: high traffic volume, real‑time updates, fault tolerance, scalability, and privacy concerns.

**2️⃣ Adopt a layered framework**  
- **Presentation layer:** mobile/web UI for drivers.  
- **API gateway & routing:** handle authentication, rate‑limit, failover.  
- **Business logic layer:** space allocation algorithm, pricing engine, payment processing.  
- **Data persistence:** relational DB for reservations, NoSQL for real‑time occupancy.  
- **Infrastructure layer:** microservices, container orchestration (K8s), load balancer, CDN.

**3️⃣ Step‑by‑step reasoning**  
1. Model entities: Garage, Level, Spot, Ticket, Vehicle.  
2. Design API contracts: `reserveSpot`, `enterGarage`, `exitGarage`.  
3. Choose a space‑allocation strategy (e.g., first‑fit, nearest‑spot).  
4. Implement event sourcing for audit trails and rollback.  
5. Add caching of occupancy per level to reduce DB load.  
6. Plan for eventual consistency between sensors and backend.

**4️⃣ Avoid common pitfalls**  
- Don’t over‑optimize early; keep the system simple and extensible.  
- Beware of “magic numbers” (e.g., hard‑coded spot counts).  
- Don’t ignore edge cases: power loss, sensor failure, multiple vehicles per ticket.  

**5️⃣ Sanity‑check & verbalize**  
Run through a user story: driver scans QR → system checks availability → allocates nearest spot → updates DB and cache; upon exit, payment is processed. Verify latency targets (≤ 200 ms), uptime (> 99.9 %), and data consistency. If any step feels shaky, iterate the design or clarify assumptions before proceeding.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
