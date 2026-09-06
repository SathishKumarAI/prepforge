---
qid: ing_66f86911f8__think__local
question: 'Explain: i would like you to design a — Amazon System Design Interview:
  Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 197
output_tokens: 479
total_tokens: 676
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T07:52:01-05:00'
sources: []
---

**1️⃣ Clarify the ask & scope**  
- Confirm whether we need a *high‑level* architecture or a full system spec (data model, APIs, scaling limits).  
- Ask for key non‑functional requirements: expected traffic (cars/min), peak load, persistence needs, cost constraints, geographic spread, and any regulatory constraints.  

**2️⃣ Adopt the classic “SRS → Architecture → Data → Consistency → Scaling” framework**  
- Start with a *System Requirements Specification* (SRF) to list functional (park, exit, payment) & non‑functional (latency < 200 ms, 99.9% uptime).  
- Map out major components: UI/UX, API gateway, business logic layer, persistence, event store, monitoring.  

**3️⃣ Reason step‑by‑step**  
1. **Define user flows** – arrival → spot allocation → payment → exit.  
2. **Choose data model** – spots (id, level, status), reservations, transactions.  
3. **Decide on consistency** – optimistic locking for spot assignment; eventual consistency for analytics.  
4. **Pick storage** – relational DB for ACID guarantees on spot state; NoSQL cache (Redis) for hot spot lookup.  
5. **Scale out** – stateless API servers behind a load balancer, auto‑scaling groups.  
6. **Failover & redundancy** – multi‑AZ deployment, backup jobs, circuit breakers.  

**4️⃣ Common traps to avoid**  
- Over‑engineering the “real‑time” component; remember parking is not as latency‑critical as e‑commerce.  
- Ignoring edge cases: car returns without payment, duplicate scans, sensor failures.  
- Assuming a single data center; multi‑region introduces cross‑zone consistency headaches.  

**5️⃣ Sanity‑check & verbalize**  
- Run through a “worst‑case” scenario (e.g., 10 k cars/min) and confirm each component can handle it.  
- Summarize trade‑offs: ACID vs. scalability, cost vs. availability.  
- Close with open questions for clarification before moving to deeper design or implementation details.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
