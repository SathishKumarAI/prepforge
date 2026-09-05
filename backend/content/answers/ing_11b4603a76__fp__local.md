---
qid: ing_11b4603a76__fp__local
question: 'Explain: Reservation APIs — Airbnb System Design - by Neo Kim and Hayk'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 389
total_tokens: 563
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:43:29-05:00'
sources: []
---

**Reservation APIs – Airbnb System Design (Neo Kim & Hayk)**  

At its core the reservation system answers a simple decision problem: *Given a set of listings, a guest’s itinerary, and real‑time availability, can we allocate a unique slot that satisfies all constraints?* The API must therefore solve an *online bipartite matching* between guests (requests) and listing‑slot pairs while respecting capacity, pricing rules, and policy constraints.  

Why the chosen design?  
1. **Statelessness & idempotence** – each `POST /reservations` is a pure function of its input; retrying yields the same result, essential for distributed retries.  
2. **Optimistic concurrency** – a lightweight lock (e.g., a versioned “availability token”) lets multiple services concurrently check availability without serializing all bookings. If two requests contend on the same slot, one fails with a `409 Conflict`, prompting the client to retry with an updated snapshot—this mirrors *optimistic locking* in databases and keeps throughput high under low contention.  
3. **Event‑driven audit** – every state transition emits an event (`reservation_created`, `reservation_cancelled`). These events feed downstream services (pricing, revenue, analytics) and enforce eventual consistency without tight coupling.  

A subtle insight often missed: **the “time window” is the real resource, not just a boolean flag.** Representing availability as an interval tree (or segment‑tree‑like structure) lets us prune infeasible slots in logarithmic time, drastically reducing contention hotspots when many guests target the same dates. This geometric view turns a combinatorial booking problem into efficient range queries—exactly why Airbnb’s reservation API can scale to millions of concurrent users while guaranteeing atomicity and fairness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
