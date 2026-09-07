---
qid: ing_ddd9f7b539__faang__local
question: 'Explain: Functional Requirements — Airbnb System Design - by Neo Kim and
  Hayk'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 467
total_tokens: 704
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:14:37-05:00'
sources: []
---

**Clarify**  
We’re asked to explain the *Functional Requirements* section of Airbnb’s system‑design paper by Neo Kim & Hayk.  
Key assumptions:  
- The audience knows basic SaaS concepts (search, booking, payments).  
- We need only the high‑level functional story, not the implementation details.

**Approach**  
1. Restate the core problem: design a scalable marketplace that matches guests with hosts.  
2. Map out the main user flows: search → view listing → request reservation → payment → confirmation.  
3. Identify the required services (search index, availability engine, booking ledger, payment gateway).  

**Depth**  
- **Search & Discovery**: A distributed inverted‑index (e.g., Elasticsearch) that supports filters (price, location, amenities) and ranking by relevance/ratings.  
- **Availability Engine**: Calendar service that maintains lockable date ranges; uses optimistic concurrency to avoid double booking.  
- **Booking Ledger**: Immutable transaction log stored in a replicated KV store (Cassandra/Spanner), guaranteeing ACID for reservations while allowing horizontal scaling.  
- **Payment Service**: Stateless microservice handling tokenized card info, interfacing with Stripe/PayPal; ensures 2‑phase commit between booking and payment to avoid orphaned bookings.  
- **Notifications**: Event‑driven architecture (Kafka) pushes email/SMS confirmations and reminders.  

**Edge Cases**  
- Concurrent reservation attempts → need lock or optimistic retry.  
- Partial failures in payment → rollback or hold state.  
- Outdated availability due to network lag → eventual consistency window.  

**Optimize & Communicate**  
Explain trade‑offs: using a single search cluster simplifies dev but limits horizontal scaling; sharding by region can mitigate latency. Stress that the design focuses on *user experience* (fast search, zero double bookings) while keeping cost per booking low through caching and tiered storage. Wrap up with how each functional component maps to real‑world microservices, showing a clear end‑to‑end flow from search to payment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
