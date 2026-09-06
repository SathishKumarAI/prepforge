---
qid: ing_11b4603a76__think__local
question: 'Explain: Reservation APIs — Airbnb System Design - by Neo Kim and Hayk'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 570
total_tokens: 763
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T03:52:49-05:00'
sources: []
---

**1. Clarify the ask & set assumptions**  
- The question is about *Reservation APIs* in the context of a *system‑design interview* (specifically for Airbnb).  
- Assume we’re explaining the high‑level design, not writing code.  
- Assume the audience knows basic distributed‑systems concepts but may need concrete examples.

**2. Adopt a layered mental model**  
1. **User intent → API contract** (what the client wants to do)  
2. **Core services & responsibilities** (search, availability, booking, payment, cancellation)  
3. **Data consistency & conflict resolution** (optimistic vs pessimistic locking, eventual consistency)  
4. **Scalability patterns** (sharding by region/room, caching, CQRS)  
5. **Observability & resilience** (retry, idempotency, circuit breakers)

**3. Step‑by‑step reasoning**  
- Start with the *use cases* that drive the API surface: create reservation, cancel, modify, query status.  
- For each use case, list preconditions and invariants (e.g., “room must be available for the requested dates”).  
- Map those to micro‑services or bounded contexts: `Availability Service`, `Booking Service`, `Payment Service`.  
- Decide on data stores per service; consider *time‑series* for availability windows, *relational* for bookings.  
- Choose a consistency strategy: optimistic locking with version numbers vs distributed locks (e.g., RedLock).  
- Discuss how to expose the API endpoints (REST/GraphQL), contract evolution (semantic versioning).  
- Illustrate scaling: read‑heavy “search” can be cached; writes go through a queue (Kafka) for eventual consistency.  
- Finish with monitoring: metrics, logs, tracing across services.

**4. Common traps to avoid**  
- Mixing business logic into the API layer.  
- Assuming single‑node database fits scale.  
- Forgetting idempotency on booking/cancellation endpoints.  
- Ignoring partial failures (e.g., payment succeeds but availability check fails).

**5. Sanity‑check & communicate clearly**  
- Re‑state the main components in one sentence: “Reservation APIs orchestrate availability checks, booking persistence, and payment, ensuring consistency via optimistic locking and eventual consistency.”  
- Use analogies (e.g., a *ticketing system* vs *hotel room*) to ground abstract concepts.  
- Keep explanations concise; avoid jargon unless explained.  

Follow this structure each time you tackle a system‑design interview question—clarify, model, reason, guard against pitfalls, and validate your narrative.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
