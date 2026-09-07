---
qid: ing_12f0d277b9__faang__local
question: 'Explain: a parking garage type system so i — Amazon System Design Interview:
  Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 556
total_tokens: 797
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:27:46-05:00'
sources: []
---

**Clarify**

> “Design a parking‑garage system” –  
> *Assumptions:* unlimited cars, multiple levels, real‑time availability, payment, security, scalability (10⁶ cars/day), low latency for entry/exit, high reliability, minimal manual intervention.

**Approach**

1. **Architecture overview** – microservices: *Ingress*, *Egress*, *Parking‑Lot*, *Auth*, *Billing*, *Analytics*.  
2. **Data model** – `Car(id, licensePlate)`, `Spot(level, number, status)`, `Ticket(id, spotId, startTime)`.  
3. **Storage** – distributed key‑value store (e.g., DynamoDB) for quick spot lookup; relational DB for billing.  
4. **Event‑driven flow** – sensors → Kafka → Ingress service → Ticket creation + spot allocation.  
5. **Load balancing** – Nginx or ALB per level, auto‑scaling groups.  
6. **Fault tolerance** – replica sets, graceful degradation (e.g., “full” mode if DB down).  

**Depth**

- *Spot allocation* uses a priority queue per level; O(log n) for assignment/return.  
- *Payment* handled by payment gateway microservice; idempotent transactions guarantee no double charges.  
- *Security* – RFID badges + camera‑based license‑plate OCR, all logs stored immutably in S3 with Glacier backup.  
- *Analytics* streams to Spark for occupancy trends and revenue forecasting.

**Edge Cases**

| Scenario | Handling |
|----------|----------|
| Spot sensor failure | Fallback to manual scan; mark spot as “unknown” until confirmed. |
| Concurrent entry requests | Use distributed lock (RedLock) on level queue. |
| Payment timeout | Auto‑cancel ticket after 5 min, release spot. |
| Power outage | UPS + battery‑backed sensors; system switches to offline mode. |

**Optimize & Communicate**

- **Performance**: Caching hot spots in Redis reduces DB hits.  
- **Cost**: Spot instances for analytics batch jobs, pay‑as‑you‑go for idle levels.  
- **Scalability**: Horizontal scaling of Ingress/Egress services; sharding by level.  

Narrate the trade‑offs (e.g., consistency vs latency in spot allocation), justify choices with real‑world constraints, and conclude with a quick walk‑through of a user journey to demonstrate end‑to‑end reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
