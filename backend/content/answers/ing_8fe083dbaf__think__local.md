---
qid: ing_8fe083dbaf__think__local
question: 'Explain: Recommended by LinkedIn — System Design of food delivery app (Zomato/Swiggy)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 201
output_tokens: 548
total_tokens: 749
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T10:34:49-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
   - *What* do we need? A high‑level system‑design sketch for a food‑delivery app (e.g., Zomato/Swiggy).  
   - *Assumptions*: millions of users, real‑time orders, multiple restaurants, payment integration, scaling, reliability.  
   - *Scope*: focus on core components—frontend, backend services, data storage, messaging, and delivery logistics.

**2️⃣ Adopt a modular mental model**  
   Use the classic “Layered + Service‑Oriented” framework:  
   1. **Presentation layer** (mobile/web clients).  
   2. **API gateway & load balancer**.  
   3. **Microservices** (auth, catalog, order, inventory, payment, notifications).  
   4. **Data tier** (SQL for transactions, NoSQL/Redis for caching).  
   5. **Message bus / event stream** (Kafka) for async workflows.  
   6. **Delivery orchestration** (fleet management, geofencing).

**3️⃣ Step‑by‑step reasoning**  
   - Start with user flow: browse → cart → checkout → payment → order confirmation.  
   - Map each step to a service; consider data models and APIs.  
   - Identify critical paths: order placement → kitchen notification → delivery assignment.  
   - Design event‑driven updates (e.g., “OrderReady” triggers driver search).  
   - Add scalability knobs: horizontal scaling, read replicas, CDN for static assets.  
   - Plan for fault tolerance: retries, dead‑letter queues, circuit breakers.

**4️⃣ Avoid common traps**  
   - Don’t lump all logic into one monolith; it kills agility.  
   - Beware of over‑engineering “optimistic” features (e.g., real‑time ETA) before proving core reliability.  
   - Don’t ignore data consistency where it matters—payment and inventory must be ACID.

**5️⃣ Sanity‑check & verbalize**  
   - Verify that each user story maps to a clear service endpoint.  
   - Check latency budgets: order placement < 2 s, driver assignment < 1 s.  
   - Speak aloud the data flow for a sample order; if it feels unwieldy, refactor boundaries.

This structured approach ensures you cover all critical dimensions—scalability, reliability, and user experience—while staying focused on the problem at hand.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
