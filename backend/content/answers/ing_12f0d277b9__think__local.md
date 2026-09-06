---
qid: ing_12f0d277b9__think__local
question: 'Explain: a parking garage type system so i — Amazon System Design Interview:
  Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 197
output_tokens: 497
total_tokens: 694
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T03:59:10-05:00'
sources: []
---

**1️⃣ Clarify the problem & scope**

- Ask whether we’re designing a *software* platform, *hardware* architecture, or both.
- Define key metrics: cars per hour, capacity, peak times, revenue model, safety, scalability.
- Note constraints (budget, location, legal regulations).

**2️⃣ Adopt a layered mental model**

1. **User‑Facing Layer** – drivers, payment terminals, mobile app.  
2. **Parking Management Core** – spot allocation, fee calculation, gate control.  
3. **Infrastructure & Data Layer** – sensors, cameras, database, analytics.  
4. **Operations & Maintenance** – monitoring dashboards, alerts, reporting.

Treat each layer like a micro‑service; think of API contracts between them.

**3️⃣ Reason step‑by‑step**

- *Capacity planning*: estimate peak flow → number of spots per floor → vertical vs horizontal layout.
- *Spot allocation algorithm*: greedy nearest‑spot, zoned allocation, dynamic pricing.  
- *Sensor placement*: weight sensors + cameras for entry/exit; RFID tags or license‑plate OCR for tracking.  
- *Payment flow*: pre‑payment, on‑spot, subscription; integrate with payment gateway and fraud checks.  
- *Scalability*: use stateless services behind load balancers; database sharding by floor or region.  
- *Reliability*: redundant gate controllers, failover parking guidance, graceful degradation.

**4️⃣ Common traps to avoid**

- Over‑optimizing for “perfect” real‑time tracking – sensor errors happen.
- Ignoring edge cases: lost tickets, stolen cars, power outages.
- Mixing business logic (pricing) with low‑level hardware control – leads to tight coupling.
- Assuming all drivers are tech‑savvy; provide multiple entry options.

**5️⃣ Sanity‑check & communicate**

- Walk through a *use case*: driver enters → spot assigned → pays → exits.  
- Verify each step meets the defined metrics (latency < 2 s, accuracy > 99%).  
- Present trade‑offs: more sensors = higher cost but better data; simpler UI = faster adoption.  
- End with a high‑level diagram and key decisions so interviewers see your structured thinking.

This framework lets you systematically tackle any parking‑garage‑style system design question.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
