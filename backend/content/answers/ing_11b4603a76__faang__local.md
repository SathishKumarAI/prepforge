---
qid: ing_11b4603a76__faang__local
question: 'Explain: Reservation APIs — Airbnb System Design - by Neo Kim and Hayk'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 525
total_tokens: 762
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:24:54-05:00'
sources: []
---

**Clarify**

We’re asked to design a *Reservation API* for an Airbnb‑style platform.  
Key goals: high availability, low latency, strong consistency of bookings, and graceful handling of concurrent booking attempts on the same listing.  
Assumptions:  
1. Listings are pre‑created with unique IDs.  
2. Users can query availability, create reservations, cancel, and view history.  
3. We need to support millions of listings and users worldwide.

**Approach**

1. **API surface** – CRUD for reservations + availability check.  
2. **Data model** – `Reservation(id, listing_id, user_id, start_date, end_date, status)` with a composite key on `(listing_id, date)`.  
3. **Consistency layer** – use optimistic concurrency control (version field) or pessimistic locking via distributed lock manager (e.g., Redis).  
4. **Caching** – read‑heavy availability queries served from a cache; write‑through to DB and invalidate relevant keys.  
5. **Event sourcing** – emit `ReservationCreated`, `ReservationCancelled` events for downstream services (payments, notifications).

**Depth**

*Availability Check*: Scan the reservation table for overlapping dates; if none, return available. Complexity O(k) where k = number of reservations in range, but index on `(listing_id, start_date)` keeps it fast.  
*Create Reservation*: Acquire lock on `(listing_id, date_range)` → double‑check availability → insert with status=CONFIRMED → publish event. This guarantees no double booking even under high contention.  
*Cancel*: Update status to CANCELLED; release lock; emit event.  

**Edge Cases**

- **Race condition**: two users book the same night → lock prevents it.  
- **Time zone drift**: normalize dates to UTC.  
- **Cancellation during payment failure**: use compensating transaction.  
- **Partial overlaps**: ensure query logic correctly identifies conflicts.

**Optimize & Communicate**

To reduce lock contention, shard by `listing_id` and use fine‑grained locks per day instead of whole ranges. Introduce a retry with exponential backoff for transient failures. I’d explain this trade‑off to interviewers: locking guarantees correctness but can throttle throughput; sharding mitigates that while keeping consistency. This structured plan shows clear problem understanding, design depth, and awareness of real‑world challenges—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
