---
qid: ing_da805ba588__think__local
question: 'Explain: we have a i don''t know web — Amazon System Design Interview:
  Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 197
output_tokens: 457
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T15:22:23-05:00'
sources: []
---

**1️⃣ Clarify the ask & assumptions**  
- First confirm whether the interview question is *design a parking‑garage system* or *build an “I don’t know” web service for Amazon*.  
- Assume they want a high‑level, scalable architecture that handles parking spots, payments, user accounts, and real‑time availability.  
- Note constraints: large city, 10k+ cars/day, low latency, fault tolerance.

**2️⃣ Pick a mental model**  
Use the *SRE + Microservices* framework:  
- **Service boundaries** (parking‑spot allocator, payment gateway, user service).  
- **Data stores** (relational for reservations, NoSQL for real‑time spot status).  
- **Event‑driven communication** (Kafka/Kinesis) to decouple services.

**3️⃣ Step‑by‑step reasoning**  
1. Define entities: `Spot`, `Vehicle`, `Reservation`, `User`.  
2. Sketch user flows: search → reserve → pay → enter/exit.  
3. Design APIs for each flow, considering idempotency and retry safety.  
4. Choose load‑balancing strategy (round‑robin + sticky sessions).  
5. Plan scaling: horizontal autoscaling of API servers; read replicas for status DB.  
6. Add monitoring & alerts (latency, error rates).  
7. Discuss disaster recovery (multi‑AZ, backups).

**4️⃣ Avoid common traps**  
- Don’t over‑optimize early; focus on functional requirements first.  
- Resist the urge to “design the parking sensor hardware” unless asked.  
- Beware of tight coupling—use async events for spot allocation.

**5️⃣ Sanity‑check & verbalize**  
- Re‑run a quick use case: user books, system updates spot status, payment succeeds → ensure no race conditions.  
- Explain trade‑offs (e.g., eventual consistency vs. strict consistency).  
- Summarize the architecture diagram in words before drawing it, to confirm all components are justified.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
