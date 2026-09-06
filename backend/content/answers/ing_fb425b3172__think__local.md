---
qid: ing_fb425b3172__think__local
question: 'Explain: BOOKMYSHOW System Design, FANDANGO System Design | Software architecture
  for online ticket booking'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 199
output_tokens: 499
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T17:36:14-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
- Identify which system you’re asked about (e.g., “BookMyShow” vs “Fandango”).  
- Decide if you need a *high‑level* design or a detailed micro‑service diagram.  
- Note constraints: traffic volume, latency goals, data consistency needs, payment flow, third‑party integrations (payment gateways, venue APIs).  

**2️⃣ Adopt a modular mental model**  
- Break the system into core layers:  
  1. **Client layer** (web/mobile UI)  
  2. **API gateway / load balancer**  
  3. **Service layer** (catalog, search, booking, payment, notifications)  
  4. **Data layer** (SQL/NoSQL, cache, message queues)  
- For each service think of its *responsibilities*, *state* (session vs immutable), and *scalability* patterns.

**3️⃣ Step‑by‑step reasoning**  
1. Start with the user journey: discover event → seat selection → payment → confirmation.  
2. Map each step to a micro‑service or component.  
3. Choose data stores per access pattern (e.g., events in a relational DB, seats in a Redis cache).  
4. Add resiliency: retries for payment, circuit breakers, eventual consistency via event sourcing.  
5. Consider cross‑cutting concerns: authentication/authorization, logging, monitoring, rate limiting.

**4️⃣ Common traps to avoid**  
- *Over‑engineering*: don’t pre‑build a full micro‑service stack if the traffic is modest.  
- *Neglecting data consistency*: seat locking must be atomic; use distributed locks or transactional outbox patterns.  
- *Ignoring third‑party latency*: cache venue responses, handle timeouts gracefully.  
- *Skipping security*: always enforce HTTPS, token validation, PCI compliance for payments.

**5️⃣ Sanity‑check & communicate**  
- Verify each requirement is addressed: e.g., “does the design support 10k concurrent bookings?”  
- Walk through a failure scenario (payment gateway down) and show fallback.  
- Present the architecture diagram in layers, annotate key trade‑offs, and conclude with open questions you’d ask stakeholders to refine the design further.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
