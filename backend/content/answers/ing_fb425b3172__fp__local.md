---
qid: ing_fb425b3172__fp__local
question: 'Explain: BOOKMYSHOW System Design, FANDANGO System Design | Software architecture
  for online ticket booking'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 528
total_tokens: 708
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:54:11-05:00'
sources: []
---

### Why a Ticket‑Booking System Must Be *Event‑Driven & Idempotent*

At its core, a ticket system solves the **resource allocation problem under constraints**: seats are finite, prices vary by demand, and users must be guaranteed *exactly one* reservation per seat. The optimal solution emerges from two principles:

1. **Decoupled state transition (event‑driven)** – every change to inventory or order is an event (`SeatReserved`, `PaymentSucceeded`). This guarantees that the system can recover from partial failures, scale horizontally, and provide a single source of truth for audit logs.

2. **Idempotent operations** – because network calls are unreliable, repeating a reservation must not double‑book. We enforce this by attaching a unique `request_id` to each client action and storing it in a *deduplication table* before applying state changes.

### Architecture Sketch (BOOKMYSHOW / FANDANGO)

| Layer | Responsibility |
|-------|----------------|
| **API Gateway** | Rate‑limit, auth, request id injection. |
| **Order Service** | Receives `ReserveSeat` → publishes event to *Event Bus*. Uses a transactional outbox to ensure atomicity with the database. |
| **Inventory Service** | Subscribes to events, updates seat availability in a highly‑partitioned key‑value store (`seat_id -> status`). Implements optimistic locking via version numbers to avoid race conditions. |
| **Payment Service** | Listens for `SeatReserved` → initiates payment; on success publishes `PaymentSucceeded`, otherwise rolls back by publishing `ReservationCancelled`. |
| **Notification Service** | Generates email/SMS after `TicketIssued`. |
| **Analytics/Recommendation Engine** | Consumes events asynchronously to update user profiles and seat popularity heatmaps. |

### Non‑Obvious Insight

Most designs treat *seat allocation* as a single monolithic transaction. In reality, the **most expensive operation is contention on the same key (`seat_id`) across many concurrent requests**. By moving that contention into a dedicated microservice with a sharded key‑value store and using *eventual consistency* for other services (e.g., recommendation), we achieve near‑linear scalability while keeping user experience consistent.

---

> **Bottom line:** A robust ticket system is an event‑driven, idempotent pipeline where each domain concern owns its state, communicates via immutable events, and tolerates partial failures by design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
