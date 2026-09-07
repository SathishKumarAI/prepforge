---
qid: ing_1d03e53384__faang__local
question: 'Explain: probably a little unnecessary here um a — Amazon System Design
  Interview: Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 470
total_tokens: 711
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:52:36-05:00'
sources: []
---

**Clarify**  
*Problem:* Build an online system that manages a multi‑level parking garage (parking, billing, payment, reservations).  
*Assumptions I’d confirm:*  
1. Capacity per level and total floors.  
2. Vehicle types (car, bike, truck).  
3. Pricing model (hourly vs flat).  
4. Payment methods (card, mobile wallet).  
5. Real‑time availability required for a mobile app.

**Approach**  
1. **Model the domain** – `Vehicle`, `Spot`, `Level`, `ParkingSession`.  
2. **Core services** –  
   * Reservation Service* (book spot, check availability).  
   * Ingress/Egress Service* (scan badge/QR, start/end session).  
   * Billing Service* (calculate fee, process payment).  
3. **Data stores** – NoSQL for spot status (fast read/write), relational DB for billing history.  
4. **Scalability** – Use stateless micro‑services behind a load balancer; cache spot availability with Redis.  
5. **Fault tolerance** – Saga pattern to rollback reservations if payment fails.

**Depth**  
*API:* `POST /reserve?vehicleId=&level=` → returns spot ID and QR.  
*Ingress:* Scan QR → start session (`sessionId`, timestamp).  
*Egress:* Scan exit, compute duration → billing amount → payment gateway.  
Complexity: O(1) for spot lookup (hash map), O(log N) for reservation conflict resolution.

**Edge Cases**  
- Overbooking when many reservations hit same time window.  
- Lost tickets – manual override with ID verification.  
- Payment failure after exit – hold vehicle, notify user.  

**Optimize & Communicate**  
Explain that caching spot status reduces DB load; partition data by level to avoid hotspots. Highlight eventual consistency between cache and DB, and the use of idempotent endpoints for safety. Conclude with a quick demo of how the system scales: adding more levels simply adds another shard in Redis and an extra instance of the services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
