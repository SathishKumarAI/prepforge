---
qid: ing_badda665bd__faang__local
question: 'Explain: public endpoints um that we''ve sort of — Amazon System Design
  Interview: Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 540
total_tokens: 781
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:57:21-05:00'
sources: []
---

**1️⃣ Clarify**  
> *Goal:* Design a scalable, fault‑tolerant public parking‑garage system that exposes RESTful endpoints for common operations (check‑in, check‑out, spot availability, payment).  
> *Assumptions to confirm:*  
- Size of garage (e.g., 10k spots) and peak concurrency.  
- Types of vehicles (compact, large, electric).  
- Pricing model (time‑based vs. flat).  
- Integration with payment gateways & city traffic APIs.

**2️⃣ Approach**  
1. **API layer** – stateless endpoints: `/spots/available`, `/vehicles/checkin`, `/vehicles/checkout`.  
2. **Service layer** – business logic: allocate spot, compute fee, trigger payment.  
3. **Data tier** – NoSQL (Cassandra) for fast spot‑status writes; relational DB for billing history.  
4. **Cache** – Redis to hold hot spot availability, updated via Kafka events from the service.  
5. **Event bus** – Kafka streams propagate state changes, enabling audit logs and real‑time dashboards.

**3️⃣ Depth**  
- *Check‑in:* Validate vehicle ID → publish `VehicleCheckedIn` event → allocate nearest free spot (hash‑based lookup) → update DB & cache atomically via a transaction or two‑phase commit.  
- *Check‑out:* Consume `VehicleCheckedOut`, calculate duration, call external payment gateway, emit `PaymentCompleted`.  
- **Complexity:** O(log N) for spot allocation with balanced tree index; average O(1) cache read.  
- **Fault tolerance:** Idempotent endpoints, retry logic, dead‑letter queues for failed payments.

**4️⃣ Edge Cases**  
- Simultaneous check‑ins → use optimistic locking on spot status.  
- Payment failure → hold vehicle until payment succeeds or time‑out.  
- Vehicle re‑entry after a short exit (e.g., 5 min) – apply grace period logic.

**5️⃣ Optimize & Communicate**  
- *Scalability:* Horizontal scaling of API nodes behind load balancer; partition Kafka topics by garage zone.  
- *Observability:* OpenTelemetry traces across services, Prometheus metrics for spot occupancy.  
- *Narrative:* “We start with a stateless API that delegates to microservices, ensuring each operation is idempotent and event‑driven. This guarantees eventual consistency even under high churn.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
