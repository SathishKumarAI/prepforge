---
qid: ing_c0fa4fee04__faang__local
question: 'Explain: Design Requirements — Airbnb System Design - by Neo Kim and Hayk'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 496
total_tokens: 733
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:10:23-05:00'
sources: []
---

**Clarify**  
The prompt asks for the *design requirements* of an “Airbnb‑style” system described by Neo Kim & Hayk. I’ll assume we’re building a highly available marketplace where hosts list properties and guests book stays, with real‑time search, reviews, payments, and scaling to millions of users. I’d confirm: Do we need instant booking, multi‑currency support? Are we focusing on latency or consistency?

**Approach**  
1. Identify core entities (User, Listing, Reservation, Review).  
2. List functional requirements: CRUD for listings, search with filters, calendar availability, booking flow, payment processing, review system.  
3. Outline non‑functional needs: high availability, low latency, strong consistency for bookings, eventual consistency for listings, data durability, compliance (PCI, GDPR).  
4. Define scalability targets and failure modes.

**Depth**  
- **Data model**: Relational DB (PostgreSQL) for ACID guarantees on reservations; NoSQL (Cassandra/Redis) for fast listing search.  
- **Search**: ElasticSearch with geo‑filters, price ranges, amenities.  
- **Availability calendar**: Distributed lock or optimistic concurrency via versioning to avoid double bookings.  
- **Payments**: Stripe integration, 3DS authentication, webhook handling.  
- **Reviews**: Separate microservice; eventual consistency via Kafka events.  
- **Scalability**: Auto‑scaling for API tier; read replicas for DB reads; CDN for static assets.  
- **Monitoring**: Prometheus + Grafana dashboards, SLOs on 99.9% booking success.

**Edge Cases**  
- Simultaneous bookings → conflict resolution logic.  
- Payment failures → rollback reservation.  
- Listing updates during active search → stale results.  
- Multi‑tenant data isolation for hosts in different regions.

**Optimize & Communicate**  
I’d iterate on the calendar lock mechanism, perhaps shifting to a “booking token” service to reduce contention. I’d explain trade‑offs: strict ACID vs latency; using eventual consistency for reviews reduces load but can show stale ratings. Finally, I’d present a concise diagram and discuss how each requirement drives architectural choices, emphasizing clear communication of assumptions and decisions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
