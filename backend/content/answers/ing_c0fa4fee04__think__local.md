---
qid: ing_c0fa4fee04__think__local
question: 'Explain: Design Requirements — Airbnb System Design - by Neo Kim and Hayk'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 593
total_tokens: 786
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T13:40:54-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**

- *What exactly is “Airbnb System Design”?*  
  Assume we’re building a scalable, highly‑available web service that lets users list, search, book, and review accommodations worldwide.
- *Who are the stakeholders?* (Guests, hosts, admins, payment processors)  
- *What performance targets?* (e.g., < 200 ms latency for search, 99.9% uptime).  
- *Which constraints?* (Cost, regulatory compliance, multi‑region deployment).

**2️⃣ Adopt a layered design framework**

1. **Requirements Layer** – functional (listing CRUD, booking workflow) + non‑functional (scalability, availability, security).  
2. **Service Architecture** – microservices vs monolith; API gateway, auth service, search service, payment integration, notification service.  
3. **Data Model & Storage** – relational DB for core entities, NoSQL for search indexes, caching layer.  
4. **Infrastructure & Ops** – containers (K8s), autoscaling, CI/CD, observability.

**3️⃣ Step‑by‑step reasoning**

- *Identify core entities*: Property, User, Reservation, Review.  
- *Map out user journeys*: Browse → Search → View → Book → Pay → Confirm → Review.  
- *Derive critical services*: Search (elastic), Booking (transactional consistency), Payment (PCI compliance).  
- *Choose data stores*: RDBMS for ACID needs, Elasticsearch for full‑text search, Redis for session cache.  
- *Design APIs*: RESTful endpoints with pagination, filtering; use GraphQL if flexible querying is needed.  
- *Plan scaling*: Route requests via API gateway, autoscale microservices, use CDN for static assets.  
- *Ensure resilience*: Circuit breakers, retries, graceful degradation.

**4️⃣ Avoid common pitfalls**

- **Over‑engineering**: Don’t split into too many services before you need them.  
- **Ignoring data consistency**: Assume eventual consistency everywhere; verify it’s acceptable per business rule.  
- **Neglecting security**: Skip token auth or rate limiting early and risk breaches later.  
- **Underestimating search complexity**: Simple SQL LIKE won’t scale; plan for full‑text indexing.

**5️⃣ Sanity check & communicate**

- *Walk through a sample booking*: Verify every service hit, data flow, error path.  
- *Validate against constraints*: Check latency numbers, cost estimates, compliance points.  
- *Explain clearly*: Start with high‑level diagram, then drill into each component, ending with trade‑off discussion.

---

By following this structured thought process you can confidently design an Airbnb‑style system that balances functionality, performance, and maintainability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
