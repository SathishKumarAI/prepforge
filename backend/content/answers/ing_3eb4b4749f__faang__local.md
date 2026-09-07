---
qid: ing_3eb4b4749f__faang__local
question: 'Explain: into this a little later um when — Amazon System Design Interview:
  Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 593
total_tokens: 834
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:09:52-05:00'
sources: []
---

**1️⃣ Clarify**  
We’re asked to *design a parking‑garage system*—think of the whole stack (user flows, data model, scalability).  
Assumptions I’d confirm:  
- Target capacity (e.g., 5k cars) and growth rate.  
- Key features: reservation, real‑time spot availability, payment, security, analytics.  
- Operational constraints: latency < 200 ms, uptime > 99.9 %.  

**2️⃣ Approach**  
1. **Define use cases & actors** (drivers, attendants, admins).  
2. **Sketch core components**: API gateway, auth, spot‑service, reservation service, payment gateway, analytics pipeline.  
3. **Data modeling**: Spot table (id, level, status, last_seen), Reservation table, Transaction log.  
4. **Scalability plan**: stateless services + caching (Redis) for hot spots; sharding by level or zone.  
5. **Failure handling**: circuit breakers, retries, dead‑letter queues.  

**3️⃣ Depth**  
- **Spot Service**: RESTful CRUD + WebSocket for real‑time updates. Use a *CQRS* pattern—write side updates DB & publishes to Kafka; read side materialized view in DynamoDB with global secondary index on status.  
- **Reservation Service**: Optimistic locking (row version) to avoid double booking; fallback to “waitlist” queue.  
- **Payment**: Integrate Stripe, store tokenized card info; idempotent endpoint.  
- **Analytics**: Stream spot usage via Kinesis → Lambda → Redshift for dashboards.  

*Complexity*: API calls O(1) with caching; DB writes O(log N). Latency stays <200 ms with CDN + edge caches.  

**4️⃣ Edge Cases**  
- Spot lost due to sensor failure → fallback “manual override” flag.  
- High‑concurrency reservation race → test 10k simultaneous requests, ensure ACID via optimistic locking.  
- Payment failures → retry with exponential backoff, notify driver via SMS/Push.  

**5️⃣ Optimize & Communicate**  
- **Batch writes** for spot status changes to reduce DB round‑trips.  
- Use *serverless* (Lambda) for low‑traffic ops to cut costs.  
- Document API contracts; provide mock server for front‑end devs.  
- Narrate trade‑offs: e.g., consistency vs availability—opted for eventual consistency on read side to keep latency low, while writes are strongly consistent.  

This structure showcases problem decomposition, technical depth, and clear communication—key signals for FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
