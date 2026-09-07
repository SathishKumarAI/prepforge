---
qid: ing_327ed00f33__faang__local
question: 'Explain: Expert gets Interviewed! @gkcs does IRCTC System Design!! It’s
  a hard question 🤯🤯'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 627
total_tokens: 877
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:41:49-05:00'
sources: []
---

**1️⃣ Clarify**  
We’re asked how an *expert* would handle a “hard” interview where they must **design the IRCTC ticket‑booking system**. The goal: a scalable, highly available, low‑latency platform that supports millions of concurrent users, real‑time seat inventory, dynamic pricing, and secure payments.

Assumptions to confirm:
- Target traffic (e.g., 10 M daily active users).
- SLA for booking confirmation (< 2 s).
- Data sensitivity: personal info + payment data.
- Regulatory constraints (PCI DSS, GDPR).

**2️⃣ Approach**  
1. **Requirements & Constraints** – functional vs non‑functional.  
2. **High‑level architecture** – microservices, API gateway, event bus.  
3. **Data layer** – relational DB for core entities, Redis for seat cache, Kafka for audit logs.  
4. **Concurrency control** – optimistic locking + distributed lock (Redlock).  
5. **Scalability & Resilience** – autoscaling, circuit breakers, graceful degradation.  
6. **Observability** – metrics, tracing, alerting.

**3️⃣ Depth**  
- **Service decomposition:** User Service, Train Service, Seat Inventory Service, Pricing Service, Payment Service, Notification Service.  
- **Seat inventory algorithm:** Use a *token bucket* per train segment; each token = available seat. Tokens stored in Redis with TTL to prevent stale counts. On booking, atomically decrement via Lua script → guarantees no over‑booking.  
- **Dynamic pricing:** PriceService pulls demand metrics from Kafka stream; applies ML model (e.g., gradient boosting) to adjust fares in real time.  
- **Database schema:** PostgreSQL for ACID compliance on bookings; NoSQL (Cassandra) for high‑write seat availability logs.  
- **Fault tolerance:** Each service runs 3 replicas per AZ, uses Kubernetes with pod disruption budgets. API gateway retries failed calls up to 2 times with exponential backoff.

**4️⃣ Edge Cases**  
- *Concurrent booking* on the last seat → Lua script ensures atomicity.  
- *Network partition*: fallback to read‑only replica for seat availability (eventual consistency).  
- *Payment failure*: rollback transaction via Saga pattern.  
- *Denial‑of‑service attacks*: rate limiting, WAF rules.

**5️⃣ Optimize & Communicate**  
After prototype, profile latency hotspots; shift hot paths to in‑memory cache, batch DB writes. Use feature flags to roll out pricing model gradually. In the interview, narrate each decision: why microservices? why Redis for seat tokens? tie back to SLAs and user experience. This structured, data‑driven approach demonstrates depth, communication, and alignment with FAANG expectations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
