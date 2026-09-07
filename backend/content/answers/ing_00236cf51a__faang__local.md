---
qid: ing_00236cf51a__faang__local
question: 'Explain: all of those spots are full and — Amazon System Design Interview:
  Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 583
total_tokens: 824
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:44:47-05:00'
sources: []
---

**Clarify**  
You’re asked to design a *parking‑garage system* (e.g., for Amazon’s campus). The goal is to handle millions of vehicles, provide real‑time availability, and support features like reservations, dynamic pricing, and safety alerts. Key assumptions: 1) we have multiple levels and zones; 2) users interact via mobile/web; 3) the system must scale horizontally; 4) latency < 200 ms for spot lookup.

**Approach**  
1. **Data model** – Spot → (level, row, col, status, lastSeen).  
2. **Storage** – Use a distributed key‑value store (e.g., DynamoDB or Bigtable) for ACID updates; cache hot spots in Redis.  
3. **API layer** – REST/GraphQL + gRPC microservices: `GetAvailability`, `ReserveSpot`, `CheckIn`, `CheckOut`.  
4. **Real‑time engine** – Kafka streams ingest sensor data (RFID, camera), update status, trigger alerts.  
5. **Front‑end** – Map UI with WebSocket for live spot changes.

**Depth**  
- *Availability query* reads from cache; fallback to DB if stale > 1s. Complexity: O(1) read.  
- *Reservation* uses optimistic locking (version field). If two users hit the same spot, one transaction fails → retry or suggest alternatives.  
- *Scalability*: Partition by level/zone to avoid hot spots; auto‑scaling for API tier.  
- *Fault tolerance*: Replicate Kafka topics; use leader election for critical services.

**Edge Cases**  
- Spot sensor failure → mark as “unknown” and prompt manual check.  
- High contention on popular spots → queue reservations, show waitlist.  
- Overnight maintenance → bulk update to “unavailable”.  
- Security: prevent SQL injection, enforce authentication/authorization.

**Optimize & Communicate**  
1. **Batching** – aggregate spot updates every 500 ms to reduce write amplification.  
2. **Predictive allocation** – ML model forecasts demand per zone; pre‑allocate spots for high‑probability arrivals.  
3. **Explainability** – expose “why this spot is recommended” via simple rule set (distance, price).  

Narration: I’d start with the user story, then diagram components, discuss trade‑offs between consistency vs. latency, and finally outline monitoring (latency dashboards, error rates) to assure interviewers of a production‑ready design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
